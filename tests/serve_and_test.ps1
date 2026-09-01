param (
    [int]$Port = 8899,
    [string]$Path = "D:\SIH26-TryHards",
    [string]$TestUrl = "http://127.0.0.1:8899/tests/challenger_loan_math_harness.html"
)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Start()
Write-Host "HTTP server listening on http://127.0.0.1:$Port/"

# Async handler for server requests
$serverThread = [System.Threading.Tasks.Task]::Run([Action]{
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $req = $context.Request
            $res = $context.Response

            $localPath = $req.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($localPath)) {
                $localPath = "index.html"
            }
            $filePath = Join-Path $Path $localPath.Replace('/', '\')

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mime = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".mjs"  { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    default { "application/octet-stream" }
                }
                $res.ContentType = $mime
                $res.AddHeader("Access-Control-Allow-Origin", "*")
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $res.ContentLength64 = $bytes.Length
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $res.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $res.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
            $res.OutputStream.Close()
        } catch {
            break
        }
    }
})

Start-Sleep -Milliseconds 300

$chromeExe = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$args = @(
    "--headless=new",
    "--disable-gpu",
    "--virtual-time-budget=8000",
    "--dump-dom",
    $TestUrl
)

$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = $chromeExe
$psi.Arguments = [string]::Join(" ", $args)
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true
$psi.UseShellExecute = $false
$psi.CreateNoWindow = $true

$proc = [System.Diagnostics.Process]::Start($psi)
$stdout = $proc.StandardOutput.ReadToEnd()
$stderr = $proc.StandardError.ReadToEnd()
$proc.WaitForExit(10000)

$listener.Stop()

Write-Host "=== CHROME OUTPUT ==="
Write-Host $stdout
if (![string]::IsNullOrWhiteSpace($stderr)) {
    Write-Host "=== STDERR ==="
    Write-Host $stderr
}
