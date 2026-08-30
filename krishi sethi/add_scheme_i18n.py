import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8') as f:
    code = f.read()

# These are UNIQUE anchors that appear at the end of each language block's last key
anchors = {
    'en': ('schemesTitle: "\\ud83c\\udffb Central & State Government Relief Schemes"', 'schemesTitle: "🏛️ Central & State Government Relief Schemes"'),
    'hi': 'schemesTitle: "🏛️ केंद्र एवं राज्य सरकार राहत योजनाएं"',
    'pa': 'schemesTitle: "🏛️ ਸਰਕਾਰੀ ਰਾਹਤ ਸਕੀਮਾਂ"',
    'mr': 'schemesTitle: "🏛️ केंद्र व राज्य शासकीय योजना"',
    'te': 'schemesTitle: "🏛️ కేంద్ర & రాష్ట్ర ప్రభుత్వ సహాయ పథకాలు"',
    'ta': 'schemesTitle: "🏛️ மத்திய மற்றும் மாநில அரசு நலத்திட்டங்கள்"',
    'bn': 'schemesTitle: "🏛️ সরকারি সহায়তা প্রকল্পসমূহ"',
    'kn': 'schemesTitle: "🏛️ ಸರ್ಕಾರಿ ಪರಿಹಾರ ಯೋಜನೆಗಳು"',
    'gu': 'schemesTitle: "🏛️ સરકારી સહાય યોજનાઓ"',
}

additions = {
    'en': ('Visit Official Portal', 'Helpline'),
    'hi': ('आधिकारिक पोर्टल पर जाएं', 'हेल्पलाइन'),
    'pa': ('ਅਧਿਕਾਰਤ ਪੋਰਟਲ ਖੋਲ੍ਹੋ', 'ਹੈਲਪਲਾਈਨ'),
    'mr': ('अधिकृत पोर्टलला भेट द्या', 'हेल्पलाइन'),
    'te': ('అధికారిక పోర్టల్‌ను సందర్శించండి', 'హెల్ప్‌లైన్'),
    'ta': ('அதிகாரப்பூர்வ போர்டலை திறக்கவும்', 'உதவி எண்'),
    'bn': ('অফিসিয়াল পোর্টালে যান', 'হেল্পলাইন'),
    'kn': ('ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ತೆರೆಯಿರಿ', 'ಸಹಾಯವಾಣಿ'),
    'gu': ('સત્તાવાર પોર્ટલ ખોલો', 'હેલ્પલાઇન'),
}

for lang, anchor in anchors.items():
    if isinstance(anchor, tuple):
        anchor = anchor[1]  # use the unicode-decoded version
    vv, hv = additions[lang]
    # check if already injected right after anchor
    after_anchor = f'visitPortalBtn: "{vv}"'
    if after_anchor in code:
        print(f'[{lang}] already has visitPortalBtn - skipping')
        continue
    replacement = f'{anchor},\n    visitPortalBtn: "{vv}",\n    helplineLabel: "{hv}"'
    new_code = code.replace(anchor, replacement, 1)
    if new_code == code:
        print(f'[{lang}] ANCHOR NOT FOUND: {anchor[:60]}')
    else:
        code = new_code
        print(f'[{lang}] Injected visitPortalBtn and helplineLabel')

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(code)
print("Done.")
