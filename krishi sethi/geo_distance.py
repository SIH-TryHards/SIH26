import math

# Approximate latitude and longitude coordinates for major Indian agricultural districts/cities
DISTRICT_COORDS = {
    # Punjab
    "bathinda": (30.2110, 74.9455),
    "ludhiana": (30.9010, 75.8573),
    "amritsar": (31.6340, 74.8723),
    "patiala": (30.3398, 76.3869),
    "jalandhar": (31.3260, 75.5762),
    "sangrur": (30.2458, 75.8421),
    "firozpur": (30.9256, 74.6064),
    "mansa": (29.9984, 75.3934),
    "nawanshahr": (31.1256, 76.1189),
    "abohar": (30.1453, 74.1994),
    "moga": (30.8165, 75.1717),
    "fazilka": (30.4034, 74.0254),
    "muktsar": (30.4762, 74.5164),
    "hoshiarpur": (31.5273, 75.9149),
    "gurdaspur": (32.0419, 75.4053),
    "kapurthala": (31.3802, 75.3815),
    "rupnagar": (30.9664, 76.5331),
    "mohali": (30.7046, 76.7179),
    "fatehgarh": (30.6473, 76.3980),
    "barnala": (30.3819, 75.5468),
    "tarn taran": (31.4520, 74.9255),
    "pathankot": (32.2689, 75.6529),
    
    # Maharashtra
    "pune": (18.5204, 73.8567),
    "nashik": (19.9975, 73.7898),
    "nagpur": (21.1458, 79.0882),
    "kolhapur": (16.7050, 74.2433),
    "solapur": (17.6599, 75.9064),
    "amravati": (20.9374, 77.7796),
    "aurangabad": (19.8762, 75.3433),
    "chhatrapati sambhajinagar": (19.8762, 75.3433),
    "yavatmal": (20.3888, 78.1204),
    "yavatmal (vidarbha)": (20.3888, 78.1204),
    "ahmednagar": (19.0952, 74.7496),
    "satara": (17.6805, 73.9997),
    "sangli": (16.8524, 74.5815),
    "jalgaon": (21.0077, 75.5626),
    "dhule": (20.9042, 74.7749),
    "nanded": (19.1383, 77.3210),
    "latur": (18.4088, 76.5604),
    "beed": (18.9891, 75.7601),
    "parbhani": (19.2612, 76.7760),
    "osmanabad": (18.1856, 76.0416),
    "dharashiv": (18.1856, 76.0416),
    "buldhana": (20.5312, 76.1843),
    "akola": (20.7002, 77.0082),
    "washim": (20.1112, 77.1352),
    "wardha": (20.7453, 78.6022),
    "chandrapur": (19.9615, 79.2961),
    "gadchiroli": (20.1809, 80.0000),
    "bhandara": (21.1687, 79.6542),
    "gondia": (21.4602, 80.1961),
    "ratnagiri": (16.9902, 73.3120),
    "sindhudurg": (16.1215, 73.6934),
    "thane": (19.2183, 72.9781),
    "palghar": (19.6967, 72.7699),
    "raigad": (18.5158, 73.1812),

    # Madhya Pradesh
    "indore": (22.7196, 75.8577),
    "bhopal": (23.2599, 77.4126),
    "ujjain": (23.1765, 75.7885),
    "jabalpur": (23.1815, 79.9864),
    "gwalior": (26.2183, 78.1828),
    "sagar": (23.8388, 78.7378),
    "hoshangabad": (22.7519, 77.7289),
    "narmadapuram": (22.7519, 77.7289),
    "dewas": (22.9676, 76.0534),
    "dhar": (22.5978, 75.3039),
    "ratlam": (23.3315, 75.0367),
    "mandsaur": (24.0722, 75.0689),
    "neemuch": (24.4533, 74.8690),
    "khargone": (21.8239, 75.6074),
    "khandwa": (21.8314, 76.3498),
    "sehore": (23.2032, 77.0844),
    "vidisha": (23.5251, 77.8081),
    "raisen": (23.3312, 77.7856),
    "satna": (24.5828, 80.8286),
    "rewa": (24.5373, 81.3042),
    "chhindwara": (22.0574, 78.9382),

    # Uttar Pradesh
    "lucknow": (26.8467, 80.9462),
    "kanpur": (26.4499, 80.3319),
    "varanasi": (25.3176, 82.9739),
    "prayagraj": (25.4358, 81.8463),
    "allahabad": (25.4358, 81.8463),
    "agra": (27.1767, 78.0081),
    "meerut": (28.9845, 77.7064),
    "gorakhpur": (26.7606, 83.3732),
    "bareilly": (28.3670, 79.4304),
    "aligarh": (27.8974, 78.0880),
    "moradabad": (28.8386, 78.7733),
    "jhansi": (25.4484, 78.5685),
    "bundelkhand (jhansi)": (25.4484, 78.5685),
    "mathura": (27.4924, 77.6737),
    "faizabad": (26.7730, 82.1460),
    "ayodhya": (26.7922, 82.1998),
    "muzaffarnagar": (29.4727, 77.7085),
    "saharanpur": (29.9671, 77.5451),
    "shahjahanpur": (27.8805, 79.9120),
    "etawah": (26.7769, 79.0238),
    "mainpuri": (27.2343, 79.0298),
    "hardoi": (27.3989, 80.1311),
    "sitapur": (27.5689, 80.6800),

    # Karnataka
    "bangalore": (12.9716, 77.5946),
    "bengaluru": (12.9716, 77.5946),
    "belagavi": (15.8497, 74.4977),
    "mysuru": (12.2958, 76.6394),
    "dharwad": (15.4589, 75.0078),
    "hubballi": (15.3647, 75.1240),
    "ballari": (15.1394, 76.9214),
    "shivamogga": (13.9299, 75.5681),
    "tumakuru": (13.3392, 77.1017),
    "mandya": (12.5218, 76.8951),
    "kalaburagi": (17.3297, 76.8343),
    "davangere": (14.4644, 75.9218),
    "vijayapura": (16.8302, 75.7100),
    "hassan": (13.0033, 76.1004),
    "raichur": (16.2120, 77.3439),
    "bagalkote": (16.1691, 75.6615),

    # Haryana
    "karnal": (29.6857, 76.9905),
    "hisar": (29.1492, 75.7217),
    "sirsa": (29.5349, 75.0289),
    "ambala": (30.3782, 76.7767),
    "kurukshetra": (29.9695, 76.8783),
    "sonipat": (28.9931, 77.0151),
    "rohtak": (28.8955, 76.6066),
    "panipat": (29.3909, 76.9635),
    "yamunanagar": (30.1290, 77.2674),
    "gurugram": (28.4595, 77.0266),
    "faridabad": (28.4089, 77.3178),
    "fatehabad": (29.5152, 75.4554),
    "jind": (29.3164, 76.3134),
    "kaithal": (29.7997, 76.3997),

    # Rajasthan
    "kota": (25.2138, 75.8648),
    "jaipur": (26.9124, 75.7873),
    "ganganagar": (29.9038, 73.8772),
    "sri ganganagar": (29.9038, 73.8772),
    "jodhpur": (26.2389, 73.0243),
    "bikaner": (28.0229, 73.3119),
    "alwar": (27.5530, 76.6346),
    "nagaur": (27.1983, 73.7497),
    "hanumangarh": (29.5815, 74.3294),
    "udaipur": (24.5854, 73.7125),
    "ajmer": (26.4499, 74.6399),
    "bhilwara": (25.3407, 74.6313),
    "chittorgarh": (24.8887, 74.6269),
    "baran": (25.1011, 76.5132),
    "tonk": (26.1627, 75.7885),
    "sikar": (27.6094, 75.1398),
    "jhunjhunu": (28.1289, 75.3995),

    # Gujarat
    "rajkot": (22.3039, 70.8022),
    "surat": (21.1702, 72.8311),
    "junagadh": (21.5222, 70.4579),
    "mehsana": (23.5880, 72.3693),
    "amreli": (21.6032, 71.2221),
    "bhavnagar": (21.7645, 72.1519),
    "vadodara": (22.3072, 73.1812),
    "ahmedabad": (23.0225, 72.5714),
    "gandhinagar": (23.2156, 72.6369),
    "jamnagar": (22.4707, 70.0577),
    "morbi": (22.8173, 70.8377),
    "anand": (22.5645, 72.9289),
    "kheda": (22.7547, 72.6833),
    "banaskantha": (24.1724, 72.4346),
    "sabarkantha": (23.6823, 73.0374),

    # Telangana
    "warangal": (17.9689, 79.5941),
    "karimnagar": (18.4386, 79.1288),
    "hyderabad": (17.3850, 78.4867),
    "nalgonda": (17.0577, 79.2684),
    "khammam": (17.2473, 80.1514),
    "nizamabad": (18.6725, 78.0941),
    "mahabubnagar": (16.7488, 77.9856),
    "medak": (18.0478, 78.2619),
    "adilabad": (19.6641, 78.5320),

    # Andhra Pradesh
    "guntur": (16.3067, 80.4365),
    "krishna": (16.1875, 81.1389),
    "vijayawada": (16.5062, 80.6480),
    "kurnool": (15.8281, 78.0373),
    "east godavari": (17.0005, 81.8040),
    "west godavari": (16.7107, 81.0952),
    "anantapur": (14.6819, 77.6006),
    "chittoor": (13.2172, 79.1003),
    "visakhapatnam": (17.6868, 83.2185),
    "kadapa": (14.4673, 78.8242),
    "nellore": (14.4426, 79.9865),
    "prakasam": (15.5057, 80.0499),

    # Tamil Nadu
    "thanjavur": (10.7870, 79.1378),
    "madurai": (9.9252, 78.1198),
    "coimbatore": (11.0168, 76.9558),
    "tiruchirappalli": (10.7905, 78.7047),
    "salem": (11.6643, 78.1460),
    "erode": (11.3410, 77.7172),
    "cuddalore": (11.7480, 79.7714),
    "chennai": (13.0827, 80.2707),
    "tirunelveli": (8.7139, 77.7567),
    "vellore": (12.9165, 79.1325),
    "dharmapuri": (12.1211, 78.1582),

    # West Bengal
    "bardhaman": (23.2324, 87.8615),
    "burdwan": (23.2324, 87.8615),
    "murshidabad": (24.1759, 88.2802),
    "hooghly": (22.8963, 88.2461),
    "nadia": (23.4710, 88.5565),
    "bankura": (23.2319, 87.0784),
    "birbhum": (23.8402, 87.6186),
    "malda": (25.0108, 88.1411),
    "kolkata": (22.5726, 88.3639),
    "medinipur": (22.4257, 87.3199),

    # Bihar
    "patna": (25.5941, 85.1376),
    "gaya": (24.7914, 85.0002),
    "muzaffarpur": (26.1209, 85.3647),
    "bhagalpur": (25.2425, 86.9842),
    "darbhanga": (26.1542, 85.8918),
    "purnia": (25.7771, 87.4753),
    "rohtas": (24.9529, 84.0149),
    "samastipur": (25.8629, 85.7811),
    "begusarai": (25.4182, 86.1272)
}

def haversine_km(lat1, lon1, lat2, lon2):
    """Calculate geodesic distance in kilometers between two lat/long points."""
    R = 6371.0 # Earth radius in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = (math.sin(dlat / 2) ** 2 +
         math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
         math.sin(dlon / 2) ** 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return round(R * c)

def clean_key(name):
    if not name: return ""
    name = name.lower()
    for rm in ["apmc", "mandi", "(mewa mandi)", "(grain)", "district", "city", "(", ")"]:
        name = name.replace(rm, "")
    return name.strip()

def calculate_distance_to_city(mandi_district, mandi_market, selected_city):
    """
    Computes distance in km from selected_city to a given mandi.
    Returns: (dist_km, is_exact_match)
    """
    sel_clean = clean_key(selected_city)
    mkt_clean = clean_key(mandi_market)
    dst_clean = clean_key(mandi_district)
    
    # 1. Exact match check
    if sel_clean == dst_clean or sel_clean in mkt_clean or mkt_clean in sel_clean or sel_clean in dst_clean:
        return (8, True) # 8 km local mandi distance
        
    # 2. Coordinate-based distance
    sel_coord = DISTRICT_COORDS.get(sel_clean)
    if not sel_coord:
        for k, v in DISTRICT_COORDS.items():
            if k in sel_clean or sel_clean in k:
                sel_coord = v
                break
                
    mandi_coord = DISTRICT_COORDS.get(dst_clean)
    if not mandi_coord:
        for k, v in DISTRICT_COORDS.items():
            if k in dst_clean or dst_clean in k or k in mkt_clean or mkt_clean in k:
                mandi_coord = v
                break
                
    if sel_coord and mandi_coord:
        km = haversine_km(sel_coord[0], sel_coord[1], mandi_coord[0], mandi_coord[1])
        return (max(12, km), False)
        
    # Fallback heuristic distance
    return (45, False)
