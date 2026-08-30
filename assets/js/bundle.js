(() => {
  // D:/SIH26-TryHards/assets/js/i18n.js
  var LANGUAGES = [
    { code: "en", nativeName: "English", label: "English", locale: "en-IN" },
    { code: "hi", nativeName: "\u0939\u093F\u0902\u0926\u0940", label: "Hindi", locale: "hi-IN" },
    { code: "mr", nativeName: "\u092E\u0930\u093E\u0920\u0940", label: "Marathi", locale: "mr-IN" },
    { code: "bn", nativeName: "\u09AC\u09BE\u0982\u09B2\u09BE", label: "Bengali", locale: "bn-IN" },
    { code: "ta", nativeName: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", label: "Tamil", locale: "ta-IN" },
    { code: "te", nativeName: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", label: "Telugu", locale: "te-IN" }
  ];
  var en = {
    "crop.cotton": "Cotton",
    "crop.onion": "Onion",
    "crop.soybean": "Soybean",
    "crop.chilli": "Chilli",
    "crop.tomato": "Tomato",
    "crop.wheat": "Wheat",
    "crop.rice": "Rice",
    "crop.groundnut": "Groundnut",
    "stage.sowing": "Sowing",
    "stage.vegetative": "Vegetative",
    "stage.flowering": "Flowering",
    "stage.grain-fill": "Grain Filling",
    "stage.maturity": "Maturity",
    "stage.harvest-ready": "Harvest Ready",
    "gate.choose": "Choose your language",
    "gate.prompt": "You can change this any time.",
    "gate.preview": "Listening to {language}.",
    "gate.unavailable": "Audio preview is not available on this device.",
    "brand.tagline": "Crop advisory & early warning",
    "welcome.stepLabel": "Step 1 of 5",
    "welcome.title": "Welcome to Kisan Saathi",
    "welcome.text": "Choose your language first. We will use it throughout your farm setup.",
    "welcome.next": "Next, we will ask where your farm is located.",
    "welcome.cta": "Set up my farm",
    "loc.stepLabel": "Step 2 of 5",
    "loc.title": "Where is your farm?",
    "loc.help": "This helps us give you local weather and nearby market prices.",
    "loc.state": "State",
    "loc.district": "District",
    "loc.village": "Village",
    "loc.ph.state": "Select state",
    "loc.ph.district": "Select district",
    "loc.ph.village": "Select village",
    "loc.search": "Search state or district...",
    "loc.other": "Other \u2014 type my village",
    "loc.villageFreePh": "Type village or area name",
    "loc.back": "Back",
    "loc.continue": "Continue",
    "land.stepLabel": "Step 3 of 5",
    "land.title": "Your land",
    "land.stub": "Land details arrive in the next increment. Your location is saved.",
    "err.required": "Please choose {field}.",
    "loc.noResults": "No matches found",
    "ph.select": "Select",
    "land.help": "This shapes every recommendation we give you.",
    "land.area": "Land area (acres)",
    "land.areaPh": "e.g. 3.5",
    "land.soil": "Soil type",
    "land.irrigation": "Water source",
    "soil.black": "Black soil",
    "soil.red": "Red soil",
    "soil.sandy": "Sandy soil",
    "soil.loamy": "Loamy soil",
    "soil.alluvial": "Alluvial soil",
    "soil.lateritic": "Laterite soil",
    "irrig.rainfed": "Rain-fed",
    "irrig.canal": "Canal",
    "irrig.borewell": "Borewell",
    "irrig.well": "Open well",
    "irrig.drip": "Drip",
    "irrig.sprinkler": "Sprinkler",
    "err.area": "Enter your land area in acres.",
    "crop.stepLabel": "Step 4 of 5",
    "crop.title": "Your crop",
    "crop.help": "We use this to time every advisory to your crop stage.",
    "crop.crop": "Crop",
    "crop.variety": "Variety",
    "crop.sown": "Sowing date",
    "crop.other": "Other \u2014 type the variety",
    "crop.varietyPh": "Type variety name",
    "crop.stageNow": "Your {crop} is at the {stage} stage.",
    "err.crop": "Please choose a crop.",
    "err.variety": "Please choose or type a variety.",
    "err.sown": "Choose the sowing date.",
    "s5.stepLabel": "Step 5 of 5",
    "s5.title": "Is this right?",
    "s5.stub": "The review screen arrives in the next increment. Your crop details are saved.",
    "s5.help": "Check everything before we save it.",
    "s5.locLabel": "Location",
    "s5.landLabel": "Land",
    "s5.cropLabel": "Crop",
    "s5.change": "Change",
    "s5.save": "Save my details",
    "s5.saved": "All details saved. The account screen arrives in the next increment.",
    "s6.stepLabel": "Final step",
    "s6.title": "Save your profile",
    "s6.help": "Create your account so your farm details stay safe.",
    "s6.tabFarmer": "Farmer",
    "s6.tabOfficer": "Officer",
    "s6.phone": "Mobile number",
    "s6.phonePh": "10-digit mobile number",
    "s6.sendCode": "Send code",
    "s6.resendIn": "Resend in {seconds}s",
    "s6.otp": "6-digit code",
    "s6.otpPh": "Enter the 6-digit code",
    "s6.demoOtp": "Demo code: {code}",
    "s6.verify": "Verify & start",
    "s6.staffId": "Staff ID",
    "s6.password": "Password",
    "s6.signIn": "Sign in to dashboard",
    "s6.forgot": "Forgot password? Contact your Assistant Director.",
    "s6.guest": "Explore without saving \u2192",
    "s6.signout": "Sign out",
    "s6.signedInAs": "Signed in as {who}",
    "s6.successFarmer": "Verified! Your profile is saved on {phone}.",
    "s6.successOfficer": "Welcome, {name}. Tap Continue to open the officer dashboard.",
    "s6.successGuest": "Exploring as guest. Nothing is saved on the server.",
    "s6.continue": "Continue",
    "err.auth.phone": "Enter a valid 10-digit Indian mobile number.",
    "err.auth.otpShape": "Enter the 6-digit code.",
    "err.auth.INVALID_OTP": "That code did not match. Try again.",
    "err.auth.OTP_EXPIRED": "Code expired. Send a new one.",
    "err.auth.TOO_MANY_ATTEMPTS": "Too many wrong attempts. Request a new code.",
    "err.auth.RATE_LIMITED": "Please wait before requesting another code.",
    "err.auth.INVALID_CREDENTIALS": "Wrong staff ID or password.",
    "err.auth.NETWORK": "Cannot reach the service. Is the API server running?",
    "intent.stepLabel": "Almost ready \u2014 Step 6 of 7",
    "intent.title": "Save your farm profile",
    "intent.why": "Verify your mobile number so this farm profile is saved safely and your agriculture officer can reach you.",
    "intent.summary": "Your reviewed details",
    "intent.benefitsTitle": "With an account you can",
    "intent.b1": "Get today\u2019s crop advice",
    "intent.b2": "Hear advice in your language",
    "intent.b3": "Contact your agriculture officer",
    "intent.privacy": "We use your mobile number only to verify your account and to reach you about your farm. It is never shown to other farmers.",
    "intent.terms": "I agree to the Terms of Use and the Privacy Notice.",
    "intent.continue": "Continue with mobile number",
    "intent.change": "Change my farm details",
    "err.auth.VALIDATION": "Please check your details and try again.",
    "err.auth.TOKEN_EXPIRED": "Your session ended. Please sign in again.",
    "err.auth.TOKEN_INVALID": "Your session ended. Please sign in again.",
    "err.auth.NO_TOKEN": "Your session ended. Please sign in again.",
    "err.auth.NO_ACCOUNT": "Please verify your phone first.",
    "p.stepLabel": "Almost done",
    "p.title": "What should we call you?",
    "p.help": "Your name appears on your home screen. Your number stays private.",
    "p.name": "Your name",
    "p.namePh": "e.g. Sunita Patil",
    "p.save": "Save & open my home",
    "err.auth.name": "Please enter your name.",
    "home.title": "Today's advisory",
    "home.hello": "Namaste, {name}",
    "home.listen": "Listen",
    "home.stop": "Stop",
    "home.ack": "I have read this",
    "home.acked": "Marked as read",
    "home.voiceUnavailable": "Audio is not available on this device.",
    "home.guestNote": "You are exploring as a guest \u2014 this is sample advice for demonstration.",
    "severity.urgent": "Act today",
    "severity.warning": "Watch",
    "severity.info": "Good to know",
    "severity.watch": "Heads up",
    "weather.next7": "Next 7 days",
    "weather.deficit": "Season rainfall in {district} is {pct}% below normal.",
    "weather.surplus": "Season rainfall in {district} is {pct}% above normal.",
    "weather.normal": "Season rainfall in {district} is close to normal.",
    "adv.harvestRain.title": "Harvest before the rain arrives",
    "adv.harvestRain.body": "About {mm} mm of rain is expected within two days and your {crop} is ready. Harvest and cover the produce now.",
    "adv.harvestRain.why": "Rain on a ready crop causes rot and a lower grade at the mandi.",
    "adv.holdSpray.title": "Do not spray \u2014 heavy rain on {day}",
    "adv.holdSpray.body": "About {mm} mm of rain is expected on {day}. Postpone spraying and clear the field drains today.",
    "adv.holdSpray.why": "Spray applied before heavy rain washes off \u2014 the money and the chemical are both wasted.",
    "adv.irrigate.title": "Give one protective irrigation",
    "adv.irrigate.body": "Rainfall in {district} is {pct}% below normal and your {crop} is at the {stage} stage. Give one light irrigation within two days.",
    "adv.irrigate.why": "Moisture stress at this stage cuts yield permanently \u2014 it cannot be recovered later.",
    "adv.heat.title": "Heat stress \u2014 irrigate early morning",
    "adv.heat.body": "Maximum temperature is around {tmax}\xB0C. Irrigate before 8 am and do not spray between 11 am and 4 pm.",
    "adv.heat.why": "Midday spraying evaporates before it works and can scorch the leaf.",
    "adv.allClear.title": "No action needed today",
    "adv.allClear.body": "Your {crop} at the {stage} stage looks on track. Continue your normal schedule.",
    "adv.allClear.why": "Weather signals are all within the normal range.",
    "adv.detail.why": "Why this matters",
    "land.acres": "{acres} acres",
    "mandi.title": "Where to sell",
    "mandi.help": "Compare nearby mandis by what you actually take home after transport and fees.",
    "mandi.cropLabel": "Crop",
    "mandi.qtyLabel": "Quantity (quintals)",
    "mandi.qtyPh": "e.g. 20",
    "mandi.recalc": "Recalculate",
    "mandi.bestNetTag": "Best take-home",
    "mandi.quotedPrice": "Mandi price: \u20B9{price}/qtl",
    "mandi.distance": "{dist} km away \xB7 Open {days}",
    "mandi.gross": "Gross value: \u20B9{val}",
    "mandi.transport": "Round-trip freight: \u2212\u20B9{val}",
    "mandi.fee": "Mandi cess: \u2212\u20B9{val}",
    "mandi.net": "\u20B9{val} net in-hand",
    "mandi.inversion": "Note: Even though {priceLeader} quotes a higher price, {netLeader} gives you \u20B9{gap} more in your pocket because transport costs are lower.",
    "mandi.trendUp": "Price up {pct}% in last 7 days",
    "mandi.trendDown": "Price down {pct}% in last 7 days",
    "mandi.trendFlat": "Price steady over last 7 days",
    "help.title": "Need help?",
    "help.help": "Contact your assigned agriculture officer or call an emergency helpline.",
    "help.officerTitle": "Your Assigned Officer",
    "help.officerRole": "Agriculture Development Officer",
    "help.callBtn": "Call Officer",
    "help.visitBtn": "Request a Farm Visit",
    "help.visitTitle": "Request an Officer Visit",
    "help.visitDateLabel": "Preferred visit date",
    "help.visitReasonLabel": "Reason for visit (optional)",
    "help.visitReasonPh": "e.g. Pest damage check, crop loss verification",
    "help.visitSubmit": "Submit Visit Request",
    "help.visitCancel": "Cancel",
    "help.visitSuccess": "Visit request submitted. Officer {name} has been notified.",
    "help.helplinesTitle": "Emergency Helplines",
    "help.kcc": "Kisan Call Centre (Toll Free)",
    "help.kccPhone": "1800-180-1551",
    "help.disasterLine": "State Crop Distress & Disaster Line",
    "help.disasterPhone": "1800-120-8040",
    "loan.title": "Plan Your Farm Loan",
    "loan.help": "Plan your EMI and interest safely. Your details help us tailor advisory and are kept private.",
    "loan.amount": "Loan Amount (\u20B9)",
    "loan.tenure": "Time Period (Months)",
    "loan.rate": "Interest Rate (%)",
    "loan.calculate": "Calculate & Save",
    "loan.resultTitle": "Your Payment Plan",
    "loan.emi": "Monthly Installment (EMI)",
    "loan.totalInterest": "Total Interest",
    "loan.totalPayment": "Total Payment",
    "loan.kccNote": "Kisan Credit Card (KCC) offers crop loans at 7%. Prompt repayment can get a 3% subvention, dropping the effective rate to 4%.",
    "nav.loan": "My Loan",
    "nav.home": "Advisory",
    "nav.mandi": "Where to sell",
    "nav.help": "Need help",
    "nav.profile": "My farm",
    "profile.title": "My Farm & Profile",
    "profile.phoneLabel": "Mobile number",
    "profile.locLabel": "Farm location",
    "profile.landLabel": "Land details",
    "profile.cropLabel": "Current crop",
    "profile.langLabel": "App language",
    "profile.change": "Change",
    "profile.signout": "Sign Out",
    "officer.logAction": "Log Action",
    "officer.actionTitle": "Log action for {name}",
    "officer.actionTypeLabel": "Action type",
    "officer.actionNotesLabel": "Notes (optional)",
    "officer.actionNotesPh": "What did you observe or do?",
    "officer.actionSubmit": "Save action",
    "officer.actionLabel": "Last action",
    "officer.noAction": "No action logged yet",
    "officer.action.call_made": "Call made",
    "officer.action.visit_done": "Farm visit",
    "officer.action.referral": "Referral",
    "officer.action.advisory_given": "Advisory given",
    "officer.action.follow_up": "Follow-up scheduled",
    "help.schemesTitle": "Government Schemes",
    "help.scheme1Title": "PM-KISAN",
    "help.scheme1Desc": "Income support of \u20B96000 per year for all landholding farmers.",
    "help.scheme2Title": "PMFBY (Crop Insurance)",
    "help.scheme2Desc": "Insurance cover against non-preventable natural risks and yield losses.",
    "adv.waterlog.title": "Clear drains \u2014 waterlogging risk",
    "adv.waterlog.body": "About {mm} mm of rain is expected in the next three days. Your {soil} soil drains slowly \u2014 clear field drains and channels now.",
    "adv.waterlog.why": "Waterlogged roots cannot absorb nutrients. Even two days of standing water can stunt the crop permanently.",
    "adv.rainfedStress.title": "Rainfed crop needs attention",
    "adv.rainfedStress.body": "Rainfall in {district} is {pct}% below normal. Your {crop} at the {stage} stage depends entirely on rain \u2014 consider one supplemental irrigation if possible.",
    "adv.rainfedStress.why": "Rainfed farms have no buffer when monsoon is weak. Even one watering during a dry spell can save the yield.",
    "adv.fungalWatch.title": "Watch for fungal spots",
    "adv.fungalWatch.body": "Humidity is {humidity}% and your {crop} is flowering on black soil. Inspect leaves daily for spots or discoloration.",
    "adv.fungalWatch.why": "Black soil holds moisture longer. High humidity at flowering is when fungi spread fastest \u2014 early detection saves the spray cost.",
    "officer.dashTitle": "Welcome, {name}",
    "officer.jurisdictionLine": "Agricultural Development Officer (ADO) \xB7 {district} District",
    "officer.bandCritical": "Critical Risk",
    "officer.bandHigh": "High Risk",
    "officer.bandMedium": "Moderate Risk",
    "officer.bandTotal": "Total Monitored",
    "officer.caseloadHeading": "Prioritized Farmer Caseload",
    "officer.searchPh": "Search farmer or village...",
    "officer.action.resolved": "Resolved",
    "officer.action.review_later": "Review later"
  };
  var hi = {
    "gate.choose": "\u0905\u092A\u0928\u0940 \u092D\u093E\u0937\u093E \u091A\u0941\u0928\u0947\u0902",
    "gate.prompt": "\u0906\u092A \u0907\u0938\u0947 \u0915\u092D\u0940 \u092D\u0940 \u092C\u0926\u0932 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964",
    "gate.preview": "{language} \u0938\u0941\u0928\u093E\u0908 \u091C\u093E \u0930\u0939\u0940 \u0939\u0948\u0964",
    "gate.unavailable": "\u0907\u0938 \u0921\u093F\u0935\u093E\u0907\u0938 \u092A\u0930 \u0911\u0921\u093F\u092F\u094B \u092A\u0942\u0930\u094D\u0935\u093E\u0935\u0932\u094B\u0915\u0928 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",
    "brand.tagline": "\u092B\u0938\u0932 \u0938\u0932\u093E\u0939 \u0914\u0930 \u092A\u0942\u0930\u094D\u0935 \u091A\u0947\u0924\u093E\u0935\u0928\u0940",
    "welcome.stepLabel": "5 \u092E\u0947\u0902 \u0938\u0947 \u091A\u0930\u0923 1",
    "welcome.title": "\u0915\u093F\u0938\u093E\u0928 \u0938\u093E\u0925\u0940 \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948",
    "welcome.text": "\u092A\u0939\u0932\u0947 \u0905\u092A\u0928\u0940 \u092D\u093E\u0937\u093E \u091A\u0941\u0928\u0947\u0902\u0964 \u0939\u092E \u0907\u0938\u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0906\u092A\u0915\u0940 \u0916\u0947\u0924\u0940 \u0915\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092E\u0947\u0902 \u0915\u0930\u0947\u0902\u0917\u0947\u0964",
    "welcome.next": "\u0905\u0917\u0932\u0947 \u091A\u0930\u0923 \u092E\u0947\u0902 \u0939\u092E \u0906\u092A\u0915\u0947 \u0916\u0947\u0924 \u0915\u093E \u0938\u094D\u0925\u093E\u0928 \u092A\u0942\u091B\u0947\u0902\u0917\u0947\u0964",
    "welcome.cta": "\u092E\u0947\u0930\u093E \u0916\u0947\u0924 \u0938\u0947\u091F\u0905\u092A \u0915\u0930\u0947\u0902",
    "loc.stepLabel": "5 \u092E\u0947\u0902 \u0938\u0947 \u091A\u0930\u0923 2",
    "loc.title": "\u0906\u092A\u0915\u093E \u0916\u0947\u0924 \u0915\u0939\u093E\u0901 \u0939\u0948?",
    "loc.help": "\u0907\u0938\u0938\u0947 \u0939\u092E \u0906\u092A\u0915\u094B \u0938\u094D\u0925\u093E\u0928\u0940\u092F \u092E\u094C\u0938\u092E \u0914\u0930 \u0928\u091C\u093C\u0926\u0940\u0915\u0940 \u092E\u0902\u0921\u0940 \u092D\u093E\u0935 \u092C\u0924\u093E \u0938\u0915\u0947\u0902\u0917\u0947\u0964",
    "loc.state": "\u0930\u093E\u091C\u094D\u092F",
    "loc.district": "\u091C\u093C\u093F\u0932\u093E",
    "loc.village": "\u0917\u093E\u0901\u0935",
    "loc.ph.state": "\u0930\u093E\u091C\u094D\u092F \u091A\u0941\u0928\u0947\u0902",
    "loc.ph.district": "\u091C\u093C\u093F\u0932\u093E \u091A\u0941\u0928\u0947\u0902",
    "loc.ph.village": "\u0917\u093E\u0901\u0935 \u091A\u0941\u0928\u0947\u0902",
    "loc.search": "\u0930\u093E\u091C\u094D\u092F \u092F\u093E \u091C\u093C\u093F\u0932\u093E \u0916\u094B\u091C\u0947\u0902...",
    "loc.other": "\u0905\u0928\u094D\u092F \u2014 \u0905\u092A\u0928\u093E \u0917\u093E\u0901\u0935 \u0932\u093F\u0916\u0947\u0902",
    "loc.villageFreePh": "\u0905\u092A\u0928\u093E \u0917\u093E\u0901\u0935 \u092F\u093E \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0932\u093F\u0916\u0947\u0902",
    "loc.back": "\u0935\u093E\u092A\u0938",
    "loc.continue": "\u0906\u0917\u0947 \u092C\u0922\u093C\u0947\u0902",
    "land.stepLabel": "5 \u092E\u0947\u0902 \u0938\u0947 \u091A\u0930\u0923 3",
    "land.title": "\u0906\u092A\u0915\u0940 \u091C\u093C\u092E\u0940\u0928",
    "land.stub": "\u0905\u0917\u0932\u0947 \u091A\u0930\u0923 \u092E\u0947\u0902 \u091C\u093C\u092E\u0940\u0928 \u0915\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0906\u090F\u0917\u0940\u0964 \u0906\u092A\u0915\u093E \u0938\u094D\u0925\u093E\u0928 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948\u0964",
    "err.required": "\u0915\u0943\u092A\u092F\u093E {field} \u091A\u0941\u0928\u0947\u0902\u0964",
    "loc.noResults": "\u0915\u094B\u0908 \u092E\u0947\u0932 \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
    "ph.select": "\u091A\u0941\u0928\u0947\u0902",
    "land.help": "\u0907\u0938\u0940 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0939\u092E \u0906\u092A\u0915\u094B \u0939\u0930 \u0938\u0932\u093E\u0939 \u0926\u0947\u0902\u0917\u0947\u0964",
    "land.area": "\u091C\u093C\u092E\u0940\u0928 (\u090F\u0915\u0921\u093C \u092E\u0947\u0902)",
    "land.areaPh": "\u091C\u0948\u0938\u0947 3.5",
    "land.soil": "\u092E\u093F\u091F\u094D\u091F\u0940 \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930",
    "land.irrigation": "\u092A\u093E\u0928\u0940 \u0915\u093E \u0938\u094D\u0930\u094B\u0924",
    "soil.black": "\u0915\u093E\u0932\u0940 \u092E\u093F\u091F\u094D\u091F\u0940",
    "soil.red": "\u0932\u093E\u0932 \u092E\u093F\u091F\u094D\u091F\u0940",
    "soil.sandy": "\u092C\u0932\u0941\u0908 \u092E\u093F\u091F\u094D\u091F\u0940",
    "soil.loamy": "\u0926\u094B\u092E\u091F \u092E\u093F\u091F\u094D\u091F\u0940",
    "soil.alluvial": "\u091C\u0932\u094B\u0922\u093C \u092E\u093F\u091F\u094D\u091F\u0940",
    "soil.lateritic": "\u0932\u0948\u091F\u0947\u0930\u093E\u0907\u091F \u092E\u093F\u091F\u094D\u091F\u0940",
    "irrig.rainfed": "\u0935\u0930\u094D\u0937\u093E \u0906\u0927\u093E\u0930\u093F\u0924",
    "irrig.canal": "\u0928\u0939\u0930",
    "irrig.borewell": "\u092C\u094B\u0930\u0935\u0947\u0932",
    "irrig.well": "\u0916\u0941\u0932\u093E \u0915\u0941\u0906\u0901",
    "irrig.drip": "\u0921\u094D\u0930\u093F\u092A \u0938\u093F\u0902\u091A\u093E\u0908",
    "irrig.sprinkler": "\u0938\u094D\u092A\u094D\u0930\u093F\u0902\u0915\u0932\u0930",
    "err.area": "\u0905\u092A\u0928\u0940 \u091C\u093C\u092E\u0940\u0928 \u0915\u093E \u0915\u094D\u0937\u0947\u0924\u094D\u0930\u092B\u0932 \u090F\u0915\u0921\u093C \u092E\u0947\u0902 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902\u0964",
    "crop.stepLabel": "5 \u092E\u0947\u0902 \u0938\u0947 \u091A\u0930\u0923 4",
    "crop.title": "\u0906\u092A\u0915\u0940 \u092B\u0938\u0932",
    "crop.help": "\u0907\u0938\u0938\u0947 \u0939\u092E \u0939\u0930 \u0938\u0932\u093E\u0939 \u0906\u092A\u0915\u0940 \u092B\u0938\u0932 \u0905\u0935\u0938\u094D\u0925\u093E \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0926\u0947\u0902\u0917\u0947\u0964",
    "crop.crop": "\u092B\u0938\u0932",
    "crop.variety": "\u0915\u093F\u0938\u094D\u092E",
    "crop.sown": "\u092C\u0941\u0935\u093E\u0908 \u0915\u0940 \u0924\u093E\u0930\u0940\u0916",
    "crop.other": "\u0905\u0928\u094D\u092F \u2014 \u0915\u093F\u0938\u094D\u092E \u0932\u093F\u0916\u0947\u0902",
    "crop.varietyPh": "\u0915\u093F\u0938\u094D\u092E \u0915\u093E \u0928\u093E\u092E \u0932\u093F\u0916\u0947\u0902",
    "crop.stageNow": "\u0906\u092A\u0915\u0940 {crop} {stage} \u0905\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0939\u0948\u0964",
    "err.crop": "\u0915\u0943\u092A\u092F\u093E \u092B\u0938\u0932 \u091A\u0941\u0928\u0947\u0902\u0964",
    "err.variety": "\u0915\u0943\u092A\u092F\u093E \u0915\u093F\u0938\u094D\u092E \u091A\u0941\u0928\u0947\u0902 \u092F\u093E \u0932\u093F\u0916\u0947\u0902\u0964",
    "err.sown": "\u092C\u0941\u0935\u093E\u0908 \u0915\u0940 \u0924\u093E\u0930\u0940\u0916 \u091A\u0941\u0928\u0947\u0902\u0964",
    "s5.stepLabel": "5 \u092E\u0947\u0902 \u0938\u0947 \u091A\u0930\u0923 5",
    "s5.title": "\u0915\u094D\u092F\u093E \u092F\u0939 \u0938\u0939\u0940 \u0939\u0948?",
    "s5.stub": "\u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u0905\u0917\u0932\u0947 \u091A\u0930\u0923 \u092E\u0947\u0902 \u0906\u090F\u0917\u0940\u0964 \u0906\u092A\u0915\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948\u0964",
    "s5.help": "\u0938\u0939\u0947\u091C\u0928\u0947 \u0938\u0947 \u092A\u0939\u0932\u0947 \u0938\u092C \u091C\u093E\u0901\u091A \u0932\u0947\u0902\u0964",
    "s5.locLabel": "\u0938\u094D\u0925\u093E\u0928",
    "s5.landLabel": "\u091C\u093C\u092E\u0940\u0928",
    "s5.cropLabel": "\u092B\u0938\u0932",
    "s5.change": "\u092C\u0926\u0932\u0947\u0902",
    "s5.save": "\u092E\u0947\u0930\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0938\u0939\u0947\u091C\u0947\u0902",
    "s5.saved": "\u0938\u093E\u0930\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0938\u0939\u0947\u091C \u0932\u0940 \u0917\u0908\u0964 \u0905\u0917\u0932\u0947 \u091A\u0930\u0923 \u092E\u0947\u0902 \u0916\u093E\u0924\u093E \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u0906\u090F\u0917\u0940\u0964",
    "s6.stepLabel": "\u0905\u0902\u0924\u093F\u092E \u091A\u0930\u0923",
    "s6.title": "\u0905\u092A\u0928\u0940 \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u0938\u0939\u0947\u091C\u0947\u0902",
    "s6.help": "\u0916\u093E\u0924\u093E \u092C\u0928\u093E\u090F\u0902 \u0924\u093E\u0915\u093F \u0906\u092A\u0915\u0940 \u0916\u0947\u0924\u0940 \u0915\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0939\u0947\u0964",
    "s6.tabFarmer": "\u0915\u093F\u0938\u093E\u0928",
    "s6.tabOfficer": "\u0905\u0927\u093F\u0915\u093E\u0930\u0940",
    "s6.phone": "\u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930",
    "s6.phonePh": "10 \u0905\u0902\u0915\u094B\u0902 \u0915\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930",
    "s6.sendCode": "\u0915\u094B\u0921 \u092D\u0947\u091C\u0947\u0902",
    "s6.resendIn": "{seconds} \u0938\u0947\u0915\u0902\u0921 \u092E\u0947\u0902 \u092B\u093F\u0930 \u092D\u0947\u091C\u0947\u0902",
    "s6.otp": "6 \u0905\u0902\u0915\u094B\u0902 \u0915\u093E \u0915\u094B\u0921",
    "s6.otpPh": "6 \u0905\u0902\u0915\u094B\u0902 \u0915\u093E \u0915\u094B\u0921 \u0932\u093F\u0916\u0947\u0902",
    "s6.demoOtp": "\u0921\u0947\u092E\u094B \u0915\u094B\u0921: {code}",
    "s6.verify": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902",
    "s6.staffId": "\u0938\u094D\u091F\u093E\u092B \u0906\u0908\u0921\u0940",
    "s6.password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921",
    "s6.signIn": "\u0921\u0948\u0936\u092C\u094B\u0930\u094D\u0921 \u092E\u0947\u0902 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902",
    "s6.forgot": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092D\u0942\u0932 \u0917\u090F? \u0905\u092A\u0928\u0947 \u0938\u0939\u093E\u092F\u0915 \u0928\u093F\u0926\u0947\u0936\u0915 \u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902\u0964",
    "s6.guest": "\u092C\u093F\u0928\u093E \u0938\u0939\u0947\u091C\u0947 \u0926\u0947\u0916\u0947\u0902 \u2192",
    "s6.signout": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F",
    "s6.signedInAs": "{who} \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0939\u0948\u0902",
    "s6.successFarmer": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924! \u0906\u092A\u0915\u0940 \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 {phone} \u092A\u0930 \u0938\u0939\u0947\u091C\u0940 \u0917\u0908\u0964",
    "s6.successOfficer": "\u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948, {name}\u0964 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0921\u0948\u0936\u092C\u094B\u0930\u094D\u0921 \u0905\u0917\u0932\u0947 \u091A\u0930\u0923 \u092E\u0947\u0902 \u0906\u090F\u0917\u093E\u0964",
    "s6.successGuest": "\u0905\u0924\u093F\u0925\u093F \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0926\u0947\u0916 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964 \u0938\u0930\u094D\u0935\u0930 \u092A\u0930 \u0915\u0941\u091B \u0938\u0939\u0947\u091C\u093E \u0928\u0939\u0940\u0902 \u091C\u093E\u090F\u0917\u093E\u0964",
    "s6.continue": "\u0906\u0917\u0947 \u092C\u0922\u093C\u0947\u0902",
    "err.auth.phone": "10 \u0905\u0902\u0915\u094B\u0902 \u0915\u093E \u0938\u0939\u0940 \u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930 \u0932\u093F\u0916\u0947\u0902\u0964",
    "err.auth.otpShape": "6 \u0905\u0902\u0915\u094B\u0902 \u0915\u093E \u0915\u094B\u0921 \u0932\u093F\u0916\u0947\u0902\u0964",
    "err.auth.INVALID_OTP": "\u0915\u094B\u0921 \u092E\u0947\u0932 \u0928\u0939\u0940\u0902 \u0916\u093E\u092F\u093E\u0964 \u092B\u093F\u0930 \u0915\u094B\u0936\u093F\u0936 \u0915\u0930\u0947\u0902\u0964",
    "err.auth.OTP_EXPIRED": "\u0915\u094B\u0921 \u0938\u092E\u093E\u092A\u094D\u0924\u0964 \u0928\u092F\u093E \u0915\u094B\u0921 \u092D\u0947\u091C\u0947\u0902\u0964",
    "err.auth.TOO_MANY_ATTEMPTS": "\u092C\u0939\u0941\u0924 \u0917\u0932\u0924 \u092A\u094D\u0930\u092F\u093E\u0938\u0964 \u0928\u092F\u093E \u0915\u094B\u0921 \u092E\u093E\u0902\u0917\u0947\u0902\u0964",
    "err.auth.RATE_LIMITED": "\u0915\u0943\u092A\u092F\u093E \u0925\u094B\u0921\u093C\u0940 \u0926\u0947\u0930 \u092C\u093E\u0926 \u0915\u094B\u0921 \u092E\u093E\u0902\u0917\u0947\u0902\u0964",
    "err.auth.INVALID_CREDENTIALS": "\u0938\u094D\u091F\u093E\u092B \u0906\u0908\u0921\u0940 \u092F\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0917\u0932\u0924 \u0939\u0948\u0964",
    "err.auth.NETWORK": "\u0938\u0947\u0935\u093E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932 \u0930\u0939\u0940\u0964 \u0915\u094D\u092F\u093E API \u0938\u0930\u094D\u0935\u0930 \u091A\u0932 \u0930\u0939\u093E \u0939\u0948?",
    "intent.stepLabel": "\u0932\u0917\u092D\u0917 \u0924\u0948\u092F\u093E\u0930 \u2014 7 \u092E\u0947\u0902 \u0938\u0947 \u091A\u0930\u0923 6",
    "intent.title": "\u0905\u092A\u0928\u0940 \u092B\u093E\u0930\u094D\u092E \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u0938\u0939\u0947\u091C\u0947\u0902",
    "intent.why": "\u0905\u092A\u0928\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u0947\u0902 \u0924\u093E\u0915\u093F \u092F\u0939 \u092B\u093E\u0930\u094D\u092E \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0939\u0947 \u0914\u0930 \u0906\u092A\u0915\u093E \u0915\u0943\u0937\u093F \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0906\u092A\u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930 \u0938\u0915\u0947\u0964",
    "intent.summary": "\u0906\u092A\u0915\u0940 \u091C\u093E\u0901\u091A\u0940 \u0939\u0941\u0908 \u091C\u093E\u0928\u0915\u093E\u0930\u0940",
    "intent.benefitsTitle": "\u0916\u093E\u0924\u0947 \u0915\u0947 \u0938\u093E\u0925 \u0906\u092A",
    "intent.b1": "\u0906\u091C \u0915\u0940 \u092B\u0938\u0932 \u0938\u0932\u093E\u0939 \u092A\u093E\u090F\u0901",
    "intent.b2": "\u0938\u0932\u093E\u0939 \u0905\u092A\u0928\u0940 \u092D\u093E\u0937\u093E \u092E\u0947\u0902 \u0938\u0941\u0928\u0947\u0902",
    "intent.b3": "\u0905\u092A\u0928\u0947 \u0915\u0943\u0937\u093F \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0938\u0947 \u092C\u093E\u0924 \u0915\u0930\u0947\u0902",
    "intent.privacy": "\u0939\u092E \u0906\u092A\u0915\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930 \u0915\u0947\u0935\u0932 \u0916\u093E\u0924\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0914\u0930 \u0916\u0947\u0924\u0940 \u0938\u0902\u092C\u0902\u0927\u0940 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0947 \u0932\u093F\u090F \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964 \u092F\u0939 \u0905\u0928\u094D\u092F \u0915\u093F\u0938\u093E\u0928\u094B\u0902 \u0915\u094B \u0928\u0939\u0940\u0902 \u0926\u093F\u0916\u0924\u093E\u0964",
    "intent.terms": "\u092E\u0948\u0902 \u0909\u092A\u092F\u094B\u0917 \u0915\u0940 \u0936\u0930\u094D\u0924\u0947\u0902 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E \u0938\u0942\u091A\u0928\u093E \u0938\u094D\u0935\u0940\u0915\u093E\u0930 \u0915\u0930\u0924\u093E/\u0915\u0930\u0924\u0940 \u0939\u0942\u0901\u0964",
    "intent.continue": "\u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930 \u0938\u0947 \u0906\u0917\u0947 \u092C\u0922\u093C\u0947\u0902",
    "intent.change": "\u092E\u0947\u0930\u0940 \u092B\u093E\u0930\u094D\u092E \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092C\u0926\u0932\u0947\u0902",
    "err.auth.VALIDATION": "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u091C\u093E\u0901\u091A\u0915\u0930 \u092B\u093F\u0930 \u0915\u094B\u0936\u093F\u0936 \u0915\u0930\u0947\u0902\u0964",
    "err.auth.TOKEN_EXPIRED": "\u0906\u092A\u0915\u093E \u0938\u0947\u0936\u0928 \u0938\u092E\u093E\u092A\u094D\u0924\u0964 \u0915\u0943\u092A\u092F\u093E \u0926\u094B\u092C\u093E\u0930\u093E \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
    "err.auth.TOKEN_INVALID": "\u0906\u092A\u0915\u093E \u0938\u0947\u0936\u0928 \u0938\u092E\u093E\u092A\u094D\u0924\u0964 \u0915\u0943\u092A\u092F\u093E \u0926\u094B\u092C\u093E\u0930\u093E \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
    "err.auth.NO_TOKEN": "\u0906\u092A\u0915\u093E \u0938\u0947\u0936\u0928 \u0938\u092E\u093E\u092A\u094D\u0924\u0964 \u0915\u0943\u092A\u092F\u093E \u0926\u094B\u092C\u093E\u0930\u093E \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
    "err.auth.NO_ACCOUNT": "\u0915\u0943\u092A\u092F\u093E \u092A\u0939\u0932\u0947 \u0905\u092A\u0928\u093E \u092B\u094B\u0928 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u0947\u0902\u0964",
    "p.stepLabel": "\u0932\u0917\u092D\u0917 \u092A\u0942\u0930\u093E",
    "p.title": "\u0939\u092E \u0906\u092A\u0915\u094B \u0915\u094D\u092F\u093E \u092C\u0941\u0932\u093E\u090F\u0901?",
    "p.help": "\u0906\u092A\u0915\u093E \u0928\u093E\u092E \u0939\u094B\u092E \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u092A\u0930 \u0926\u093F\u0916\u0947\u0917\u093E\u0964 \u0906\u092A\u0915\u093E \u0928\u0902\u092C\u0930 \u0917\u094B\u092A\u0928\u0940\u092F \u0930\u0939\u0924\u093E \u0939\u0948\u0964",
    "p.name": "\u0906\u092A\u0915\u093E \u0928\u093E\u092E",
    "p.namePh": "\u091C\u0948\u0938\u0947 \u0938\u0941\u0928\u0940\u0924\u093E \u092A\u093E\u091F\u093F\u0932",
    "p.save": "\u0938\u0939\u0947\u091C\u0947\u0902 \u0914\u0930 \u0939\u094B\u092E \u0916\u094B\u0932\u0947\u0902",
    "err.auth.name": "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0928\u093E\u092E \u0932\u093F\u0916\u0947\u0902\u0964",
    "home.title": "\u0906\u091C \u0915\u0940 \u0938\u0932\u093E\u0939",
    "home.hello": "\u0928\u092E\u0938\u094D\u0924\u0947, {name}",
    "home.listen": "\u0938\u0941\u0928\u0947\u0902",
    "home.stop": "\u0930\u094B\u0915\u0947\u0902",
    "home.ack": "\u092E\u0948\u0902\u0928\u0947 \u092A\u0922\u093C \u0932\u093F\u092F\u093E",
    "home.acked": "\u092A\u0922\u093C\u093E \u0939\u0941\u0906",
    "home.voiceUnavailable": "\u0907\u0938 \u0921\u093F\u0935\u093E\u0907\u0938 \u092A\u0930 \u0911\u0921\u093F\u092F\u094B \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",
    "home.guestNote": "\u0906\u092A \u0905\u0924\u093F\u0925\u093F \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0926\u0947\u0916 \u0930\u0939\u0947 \u0939\u0948\u0902 \u2014 \u092F\u0939 \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u0928 \u0915\u0947 \u0932\u093F\u090F \u0928\u092E\u0942\u0928\u093E \u0938\u0932\u093E\u0939 \u0939\u0948\u0964",
    "severity.urgent": "\u0906\u091C \u0939\u0940 \u0915\u0930\u0947\u0902",
    "severity.warning": "\u0927\u094D\u092F\u093E\u0928 \u0930\u0916\u0947\u0902",
    "severity.info": "\u091C\u093E\u0928\u0915\u093E\u0930\u0940",
    "severity.watch": "\u0927\u094D\u092F\u093E\u0928 \u0926\u0947\u0902",
    "weather.next7": "\u0906\u0917\u0947 \u0915\u0947 7 \u0926\u093F\u0928",
    "weather.deficit": "{district} \u092E\u0947\u0902 \u0907\u0938 \u092E\u094C\u0938\u092E \u0915\u0940 \u092C\u093E\u0930\u093F\u0936 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u0947 {pct}% \u0915\u092E \u0939\u0948\u0964",
    "weather.surplus": "{district} \u092E\u0947\u0902 \u0907\u0938 \u092E\u094C\u0938\u092E \u0915\u0940 \u092C\u093E\u0930\u093F\u0936 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u0947 {pct}% \u0905\u0927\u093F\u0915 \u0939\u0948\u0964",
    "weather.normal": "{district} \u092E\u0947\u0902 \u0907\u0938 \u092E\u094C\u0938\u092E \u0915\u0940 \u092C\u093E\u0930\u093F\u0936 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0915\u0947 \u0915\u0930\u0940\u092C \u0939\u0948\u0964",
    "adv.harvestRain.title": "\u092C\u093E\u0930\u093F\u0936 \u0938\u0947 \u092A\u0939\u0932\u0947 \u0915\u091F\u093E\u0908 \u0915\u0930 \u0932\u0947\u0902",
    "adv.harvestRain.body": "\u0905\u0917\u0932\u0947 \u0926\u094B \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902 \u0932\u0917\u092D\u0917 {mm} \u092E\u093F.\u092E\u0940. \u092C\u093E\u0930\u093F\u0936 \u0915\u0940 \u0938\u0902\u092D\u093E\u0935\u0928\u093E \u0939\u0948 \u0914\u0930 \u0906\u092A\u0915\u0940 {crop} \u0924\u0948\u092F\u093E\u0930 \u0939\u0948\u0964 \u0905\u092C \u0915\u091F\u093E\u0908 \u0915\u0930\u0915\u0947 \u0909\u092A\u091C \u0922\u0915 \u0926\u0947\u0902\u0964",
    "adv.harvestRain.why": "\u0924\u0948\u092F\u093E\u0930 \u092B\u0938\u0932 \u092A\u0930 \u092C\u093E\u0930\u093F\u0936 \u0938\u0947 \u0938\u0921\u093C\u0928 \u0939\u094B\u0924\u0940 \u0939\u0948 \u0914\u0930 \u092E\u0902\u0921\u0940 \u092E\u0947\u0902 \u092D\u093E\u0935 \u0918\u091F \u091C\u093E\u0924\u093E \u0939\u0948\u0964",
    "adv.holdSpray.title": "\u091B\u093F\u0921\u093C\u0915\u093E\u0935 \u0928 \u0915\u0930\u0947\u0902 \u2014 {day} \u0915\u094B \u0924\u0947\u091C\u093C \u092C\u093E\u0930\u093F\u0936",
    "adv.holdSpray.body": "{day} \u0915\u094B \u0932\u0917\u092D\u0917 {mm} \u092E\u093F.\u092E\u0940. \u092C\u093E\u0930\u093F\u0936 \u0915\u0940 \u0938\u0902\u092D\u093E\u0935\u0928\u093E \u0939\u0948\u0964 \u091B\u093F\u0921\u093C\u0915\u093E\u0935 \u091F\u093E\u0932\u0947\u0902 \u0914\u0930 \u0906\u091C \u0916\u0947\u0924 \u0915\u0940 \u0928\u093E\u0932\u093F\u092F\u093E\u0901 \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902\u0964",
    "adv.holdSpray.why": "\u0924\u0947\u091C\u093C \u092C\u093E\u0930\u093F\u0936 \u0938\u0947 \u092A\u0939\u0932\u0947 \u0915\u093F\u092F\u093E \u091B\u093F\u0921\u093C\u0915\u093E\u0935 \u0927\u0941\u0932 \u091C\u093E\u0924\u093E \u0939\u0948 \u2014 \u092A\u0948\u0938\u093E \u0914\u0930 \u0926\u0935\u093E \u0926\u094B\u0928\u094B\u0902 \u092C\u0947\u0915\u093E\u0930\u0964",
    "adv.irrigate.title": "\u090F\u0915 \u092C\u091A\u093E\u0935 \u0938\u093F\u0902\u091A\u093E\u0908 \u0926\u0947\u0902",
    "adv.irrigate.body": "{district} \u092E\u0947\u0902 \u092C\u093E\u0930\u093F\u0936 {pct}% \u0915\u092E \u0939\u0948 \u0914\u0930 \u0906\u092A\u0915\u0940 {crop} {stage} \u0905\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0939\u0948\u0964 \u0926\u094B \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902 \u090F\u0915 \u0939\u0932\u094D\u0915\u0940 \u0938\u093F\u0902\u091A\u093E\u0908 \u0915\u0930\u0947\u0902\u0964",
    "adv.irrigate.why": "\u0907\u0938 \u0905\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0928\u092E\u0940 \u0915\u0940 \u0915\u092E\u0940 \u0938\u0947 \u0909\u092A\u091C \u0915\u093E \u0928\u0941\u0915\u0938\u093E\u0928 \u092C\u093E\u0926 \u092E\u0947\u0902 \u092A\u0942\u0930\u093E \u0928\u0939\u0940\u0902 \u0939\u094B\u0924\u093E\u0964",
    "adv.heat.title": "\u0917\u0930\u094D\u092E\u0940 \u0915\u093E \u0924\u0928\u093E\u0935 \u2014 \u0938\u0941\u092C\u0939 \u091C\u0932\u094D\u0926\u0940 \u0938\u093F\u0902\u091A\u093E\u0908 \u0915\u0930\u0947\u0902",
    "adv.heat.body": "\u0905\u0927\u093F\u0915\u0924\u092E \u0924\u093E\u092A\u092E\u093E\u0928 \u0932\u0917\u092D\u0917 {tmax}\xB0C \u0939\u0948\u0964 \u0938\u0941\u092C\u0939 8 \u092C\u091C\u0947 \u0938\u0947 \u092A\u0939\u0932\u0947 \u0938\u093F\u0902\u091A\u093E\u0908 \u0915\u0930\u0947\u0902 \u0914\u0930 11 \u0938\u0947 4 \u092C\u091C\u0947 \u0915\u0947 \u092C\u0940\u091A \u091B\u093F\u0921\u093C\u0915\u093E\u0935 \u0928 \u0915\u0930\u0947\u0902\u0964",
    "adv.heat.why": "\u0926\u094B\u092A\u0939\u0930 \u0915\u093E \u091B\u093F\u0921\u093C\u0915\u093E\u0935 \u0905\u0938\u0930 \u0938\u0947 \u092A\u0939\u0932\u0947 \u0938\u0942\u0916 \u091C\u093E\u0924\u093E \u0939\u0948 \u0914\u0930 \u092A\u0924\u094D\u0924\u0940 \u091C\u0932 \u0938\u0915\u0924\u0940 \u0939\u0948\u0964",
    "adv.allClear.title": "\u0906\u091C \u0915\u094B\u0908 \u0915\u093E\u092E \u091C\u093C\u0930\u0942\u0930\u0940 \u0928\u0939\u0940\u0902",
    "adv.allClear.body": "\u0906\u092A\u0915\u0940 {crop} {stage} \u0905\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0920\u0940\u0915 \u091A\u0932 \u0930\u0939\u0940 \u0939\u0948\u0964 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902\u0964",
    "adv.allClear.why": "\u092E\u094C\u0938\u092E \u0915\u0947 \u0938\u092D\u0940 \u0938\u0902\u0915\u0947\u0924 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0926\u093E\u092F\u0930\u0947 \u092E\u0947\u0902 \u0939\u0948\u0902\u0964",
    "adv.detail.why": "\u092F\u0939 \u0915\u094D\u092F\u094B\u0902 \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0939\u0948",
    "land.acres": "{acres} \u090F\u0915\u0921\u093C",
    "stage.sowing": "\u092C\u0941\u0935\u093E\u0908",
    "stage.vegetative": "\u092C\u0922\u093C\u0935\u093E\u0930",
    "stage.flowering": "\u092B\u0942\u0932 \u0906\u0928\u093E",
    "stage.grain-fill": "\u0926\u093E\u0928\u093E \u092D\u0930\u0928\u093E",
    "stage.maturity": "\u092A\u0915\u093E\u0935",
    "stage.harvest-ready": "\u0915\u091F\u093E\u0908 \u0915\u0947 \u0932\u093F\u090F \u0924\u0948\u092F\u093E\u0930",
    "crop.cotton": "\u0915\u092A\u093E\u0938",
    "crop.onion": "\u092A\u094D\u092F\u093E\u091C\u093C",
    "crop.soybean": "\u0938\u094B\u092F\u093E\u092C\u0940\u0928",
    "crop.chilli": "\u092E\u093F\u0930\u094D\u091A",
    "crop.tomato": "\u091F\u092E\u093E\u091F\u0930",
    "crop.wheat": "\u0917\u0947\u0939\u0942\u0901",
    "crop.rice": "\u0927\u093E\u0928",
    "crop.groundnut": "\u092E\u0942\u0902\u0917\u092B\u0932\u0940",
    "mandi.title": "\u0915\u0939\u093E\u0901 \u092C\u0947\u091A\u0947\u0902 (\u092E\u0902\u0921\u0940 \u092D\u093E\u0935)",
    "mandi.help": "\u092A\u0930\u093F\u0935\u0939\u0928 \u0914\u0930 \u092E\u0902\u0921\u0940 \u0936\u0941\u0932\u094D\u0915 \u0918\u091F\u093E\u0915\u0930 \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0936\u0941\u0926\u094D\u0927 \u0915\u092E\u093E\u0908 \u0915\u0940 \u0924\u0941\u0932\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
    "mandi.cropLabel": "\u092B\u0938\u0932",
    "mandi.qtyLabel": "\u092E\u093E\u0924\u094D\u0930\u093E (\u0915\u094D\u0935\u093F\u0902\u091F\u0932 \u092E\u0947\u0902)",
    "mandi.qtyPh": "\u091C\u0948\u0938\u0947 20",
    "mandi.recalc": "\u092A\u0941\u0928\u0930\u094D\u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902",
    "mandi.bestNetTag": "\u0938\u0930\u094D\u0935\u093E\u0927\u093F\u0915 \u0936\u0941\u0926\u094D\u0927 \u0915\u092E\u093E\u0908",
    "mandi.quotedPrice": "\u092E\u0902\u0921\u0940 \u092D\u093E\u0935: \u20B9{price}/\u0915\u094D\u0935\u093F\u0902\u091F\u0932",
    "mandi.distance": "{dist} \u0915\u093F\u092E\u0940 \u0926\u0942\u0930 \xB7 {days}",
    "mandi.gross": "\u0915\u0941\u0932 \u092E\u0942\u0932\u094D\u092F: \u20B9{val}",
    "mandi.transport": "\u0906\u0928\u0947-\u091C\u093E\u0928\u0947 \u0915\u093E \u092D\u093E\u0921\u093C\u093E: \u2212\u20B9{val}",
    "mandi.fee": "\u092E\u0902\u0921\u0940 \u0936\u0941\u0932\u094D\u0915: \u2212\u20B9{val}",
    "mandi.net": "\u20B9{val} \u0936\u0941\u0926\u094D\u0927 \u0915\u092E\u093E\u0908",
    "mandi.inversion": "\u0938\u0942\u091A\u0928\u093E: \u092F\u0926\u094D\u092F\u092A\u093F {priceLeader} \u092E\u0947\u0902 \u092D\u093E\u0935 \u0905\u0927\u093F\u0915 \u0939\u0948, \u0932\u0947\u0915\u093F\u0928 {netLeader} \u092E\u0947\u0902 \u0915\u092E \u0926\u0942\u0930\u0940 \u0915\u0947 \u0915\u093E\u0930\u0923 \u0906\u092A\u0915\u094B \u20B9{gap} \u0905\u0927\u093F\u0915 \u0936\u0941\u0926\u094D\u0927 \u092C\u091A\u0924 \u0939\u094B\u0917\u0940\u0964",
    "mandi.trendUp": "\u092A\u093F\u091B\u0932\u0947 7 \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902 \u092D\u093E\u0935 {pct}% \u092C\u0922\u093C\u093E",
    "mandi.trendDown": "\u092A\u093F\u091B\u0932\u0947 7 \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902 \u092D\u093E\u0935 {pct}% \u0917\u093F\u0930\u093E",
    "mandi.trendFlat": "\u092A\u093F\u091B\u0932\u0947 7 \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902 \u092D\u093E\u0935 \u0938\u094D\u0925\u093F\u0930",
    "help.title": "\u092E\u0926\u0926 \u091A\u093E\u0939\u093F\u090F?",
    "help.help": "\u0905\u092A\u0928\u0947 \u0915\u0943\u0937\u093F \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902 \u092F\u093E \u0906\u092A\u093E\u0924\u0915\u093E\u0932\u0940\u0928 \u0939\u0947\u0932\u094D\u092A\u0932\u093E\u0907\u0928 \u092A\u0930 \u0915\u0949\u0932 \u0915\u0930\u0947\u0902\u0964",
    "help.officerTitle": "\u0906\u092A\u0915\u0947 \u0928\u093F\u092F\u0941\u0915\u094D\u0924 \u0915\u0943\u0937\u093F \u0905\u0927\u093F\u0915\u093E\u0930\u0940",
    "help.officerRole": "\u0915\u0943\u0937\u093F \u0935\u093F\u0915\u093E\u0938 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 (ADO)",
    "help.callBtn": "\u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0915\u094B \u0915\u0949\u0932 \u0915\u0930\u0947\u0902",
    "help.visitBtn": "\u0916\u0947\u0924 \u0926\u094C\u0930\u0947 \u0915\u093E \u0905\u0928\u0941\u0930\u094B\u0927 \u0915\u0930\u0947\u0902",
    "help.visitTitle": "\u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0915\u0947 \u0926\u094C\u0930\u0947 \u0915\u093E \u0905\u0928\u0941\u0930\u094B\u0927",
    "help.visitDateLabel": "\u0926\u094C\u0930\u0947 \u0915\u0940 \u092A\u0938\u0902\u0926\u0940\u0926\u093E \u0924\u093E\u0930\u0940\u0916",
    "help.visitReasonLabel": "\u0926\u094C\u0930\u0947 \u0915\u093E \u0915\u093E\u0930\u0923 (\u0935\u0948\u0915\u0932\u094D\u092A\u093F\u0915)",
    "help.visitReasonPh": "\u091C\u0948\u0938\u0947 \u0915\u0940\u091F \u092A\u094D\u0930\u0915\u094B\u092A, \u092B\u0938\u0932 \u0915\u094D\u0937\u0924\u093F \u0928\u093F\u0930\u0940\u0915\u094D\u0937\u0923",
    "help.visitSubmit": "\u0905\u0928\u0941\u0930\u094B\u0927 \u092D\u0947\u091C\u0947\u0902",
    "help.visitCancel": "\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",
    "help.visitSuccess": "\u0926\u094C\u0930\u0947 \u0915\u093E \u0905\u0928\u0941\u0930\u094B\u0927 \u0926\u0930\u094D\u091C \u0939\u0941\u0906\u0964 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 {name} \u0915\u094B \u0938\u0942\u091A\u093F\u0924 \u0915\u093F\u092F\u093E \u0917\u092F\u093E\u0964",
    "help.helplinesTitle": "\u0906\u092A\u093E\u0924\u0915\u093E\u0932\u0940\u0928 \u0939\u0947\u0932\u094D\u092A\u0932\u093E\u0907\u0928",
    "help.kcc": "\u0915\u093F\u0938\u093E\u0928 \u0915\u0949\u0932 \u0938\u0947\u0902\u091F\u0930 (\u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915)",
    "help.kccPhone": "1800-180-1551",
    "help.disasterLine": "\u0930\u093E\u091C\u094D\u092F \u092B\u0938\u0932 \u0938\u0902\u0915\u091F \u090F\u0935\u0902 \u0906\u092A\u0926\u093E \u0939\u0947\u0932\u094D\u092A\u0932\u093E\u0907\u0928",
    "help.disasterPhone": "1800-120-8040",
    "loan.title": "\u0905\u092A\u0928\u093E \u0915\u0943\u0937\u093F \u090B\u0923 \u092A\u094D\u0932\u093E\u0928 \u0915\u0930\u0947\u0902",
    "loan.help": "\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0942\u092A \u0938\u0947 \u0905\u092A\u0928\u0940 \u0908\u090F\u092E\u0906\u0908 (EMI) \u0914\u0930 \u092C\u094D\u092F\u093E\u091C \u0915\u0940 \u092F\u094B\u091C\u0928\u093E \u092C\u0928\u093E\u090F\u0902\u0964 \u092F\u0947 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0917\u0941\u092A\u094D\u0924 \u0930\u0916\u0940 \u091C\u093E\u090F\u0917\u0940\u0964",
    "loan.amount": "\u090B\u0923 \u0930\u093E\u0936\u093F (\u20B9)",
    "loan.tenure": "\u0938\u092E\u092F\u093E\u0935\u0927\u093F (\u092E\u0939\u0940\u0928\u0947)",
    "loan.rate": "\u092C\u094D\u092F\u093E\u091C \u0926\u0930 (%)",
    "loan.calculate": "\u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F \u0914\u0930 \u0938\u0947\u0935 \u0915\u0930\u0947\u0902",
    "loan.resultTitle": "\u0906\u092A\u0915\u093E \u092D\u0941\u0917\u0924\u093E\u0928 \u092A\u094D\u0932\u093E\u0928",
    "loan.emi": "\u092E\u093E\u0938\u093F\u0915 \u0915\u093F\u0936\u094D\u0924 (EMI)",
    "loan.totalInterest": "\u0915\u0941\u0932 \u092C\u094D\u092F\u093E\u091C",
    "loan.totalPayment": "\u0915\u0941\u0932 \u092D\u0941\u0917\u0924\u093E\u0928",
    "loan.kccNote": "\u0915\u093F\u0938\u093E\u0928 \u0915\u094D\u0930\u0947\u0921\u093F\u091F \u0915\u093E\u0930\u094D\u0921 (KCC) 7% \u092A\u0930 \u090B\u0923 \u0926\u0947\u0924\u093E \u0939\u0948\u0964 \u0938\u092E\u092F \u092A\u0930 \u092D\u0941\u0917\u0924\u093E\u0928 \u0938\u0947 3% \u091B\u0942\u091F \u092E\u093F\u0932\u0924\u0940 \u0939\u0948, \u091C\u093F\u0938\u0938\u0947 \u0926\u0930 4% \u0930\u0939 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964",
    "nav.loan": "\u092E\u0947\u0930\u093E \u090B\u0923",
    "nav.home": "\u0938\u0932\u093E\u0939",
    "nav.mandi": "\u0915\u0939\u093E\u0901 \u092C\u0947\u091A\u0947\u0902",
    "nav.help": "\u092E\u0926\u0926",
    "nav.profile": "\u092E\u0947\u0930\u093E \u0916\u0947\u0924",
    "profile.title": "\u092E\u0947\u0930\u093E \u0916\u0947\u0924 \u0914\u0930 \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932",
    "profile.phoneLabel": "\u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930",
    "profile.locLabel": "\u0916\u0947\u0924 \u0915\u093E \u0938\u094D\u0925\u093E\u0928",
    "profile.landLabel": "\u091C\u092E\u0940\u0928 \u0915\u093E \u0935\u093F\u0935\u0930\u0923",
    "profile.cropLabel": "\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u092B\u0938\u0932",
    "profile.langLabel": "\u0910\u092A \u0915\u0940 \u092D\u093E\u0937\u093E",
    "profile.change": "\u092C\u0926\u0932\u0947\u0902",
    "profile.signout": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F",
    "officer.logAction": "\u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
    "officer.actionTitle": "{name} \u0915\u0947 \u0932\u093F\u090F \u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
    "officer.actionTypeLabel": "\u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908 \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930",
    "officer.actionNotesLabel": "\u0928\u094B\u091F\u094D\u0938 (\u0935\u0948\u0915\u0932\u094D\u092A\u093F\u0915)",
    "officer.actionNotesPh": "\u0906\u092A\u0928\u0947 \u0915\u094D\u092F\u093E \u0926\u0947\u0916\u093E \u092F\u093E \u0915\u093F\u092F\u093E?",
    "officer.actionSubmit": "\u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908 \u0938\u0939\u0947\u091C\u0947\u0902",
    "officer.actionLabel": "\u0905\u0902\u0924\u093F\u092E \u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908",
    "officer.noAction": "\u0905\u092D\u0940 \u0924\u0915 \u0915\u094B\u0908 \u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908 \u0926\u0930\u094D\u091C \u0928\u0939\u0940\u0902",
    "officer.action.call_made": "\u0915\u0949\u0932 \u0915\u093F\u092F\u093E",
    "officer.action.visit_done": "\u0916\u0947\u0924 \u0926\u094C\u0930\u093E",
    "officer.action.referral": "\u0930\u0947\u092B\u0930\u0932",
    "officer.action.advisory_given": "\u0938\u0932\u093E\u0939 \u0926\u0940",
    "officer.action.follow_up": "\u092B\u0949\u0932\u094B-\u0905\u092A \u0928\u093F\u0930\u094D\u0927\u093E\u0930\u093F\u0924",
    "help.schemesTitle": "\u0938\u0930\u0915\u093E\u0930\u0940 \u092F\u094B\u091C\u0928\u093E\u090F\u0902",
    "help.scheme1Title": "\u092A\u0940\u090F\u092E-\u0915\u093F\u0938\u093E\u0928",
    "help.scheme1Desc": "\u0938\u092D\u0940 \u092D\u0942\u092E\u093F\u0927\u093E\u0930\u0915 \u0915\u093F\u0938\u093E\u0928\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u0924\u093F \u0935\u0930\u094D\u0937 \u20B96000 \u0915\u0940 \u0906\u092F \u0938\u0939\u093E\u092F\u0924\u093E\u0964",
    "help.scheme2Title": "\u092A\u0940\u090F\u092E\u090F\u092B\u092C\u0940\u0935\u093E\u0908 (\u092B\u0938\u0932 \u092C\u0940\u092E\u093E)",
    "help.scheme2Desc": "\u092A\u094D\u0930\u093E\u0915\u0943\u0924\u093F\u0915 \u091C\u094B\u0916\u093F\u092E\u094B\u0902 \u0914\u0930 \u0909\u092A\u091C \u0915\u0947 \u0928\u0941\u0915\u0938\u093E\u0928 \u0915\u0947 \u0916\u093F\u0932\u093E\u092B \u092C\u0940\u092E\u093E \u0915\u0935\u0930\u0964",
    "adv.waterlog.title": "\u0928\u093E\u0932\u093F\u092F\u093E\u0901 \u0938\u093E\u092B \u0915\u0930\u0947\u0902 \u2014 \u091C\u0932\u092D\u0930\u093E\u0935 \u0915\u093E \u0916\u0924\u0930\u093E",
    "adv.waterlog.body": "\u0905\u0917\u0932\u0947 \u0924\u0940\u0928 \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902 \u0932\u0917\u092D\u0917 {mm} \u092E\u093F\u092E\u0940 \u092C\u093E\u0930\u093F\u0936 \u0915\u0940 \u0938\u0902\u092D\u093E\u0935\u0928\u093E \u0939\u0948\u0964 \u0906\u092A\u0915\u0940 {soil} \u092E\u093F\u091F\u094D\u091F\u0940 \u0927\u0940\u0930\u0947 \u0938\u0942\u0916\u0924\u0940 \u0939\u0948 \u2014 \u0905\u092D\u0940 \u0928\u093E\u0932\u093F\u092F\u093E\u0901 \u0938\u093E\u092B \u0915\u0930\u0947\u0902\u0964",
    "adv.waterlog.why": "\u091C\u0932\u092D\u0930\u093E\u0935 \u0938\u0947 \u091C\u0921\u093C\u0947\u0902 \u092A\u094B\u0937\u0915 \u0924\u0924\u094D\u0935 \u0928\u0939\u0940\u0902 \u0932\u0947 \u092A\u093E\u0924\u0940\u0902\u0964 \u0926\u094B \u0926\u093F\u0928 \u0915\u093E \u0916\u0921\u093C\u093E \u092A\u093E\u0928\u0940 \u092D\u0940 \u092B\u0938\u0932 \u0915\u094B \u0938\u094D\u0925\u093E\u092F\u0940 \u0930\u0942\u092A \u0938\u0947 \u0928\u0941\u0915\u0938\u093E\u0928 \u092A\u0939\u0941\u0901\u091A\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964",
    "adv.rainfedStress.title": "\u092C\u093E\u0930\u093E\u0928\u0940 \u092B\u0938\u0932 \u0915\u094B \u0927\u094D\u092F\u093E\u0928 \u091A\u093E\u0939\u093F\u090F",
    "adv.rainfedStress.body": "{district} \u092E\u0947\u0902 \u092C\u093E\u0930\u093F\u0936 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u0947 {pct}% \u0915\u092E \u0939\u0948\u0964 \u0906\u092A\u0915\u0940 {crop} {stage} \u091A\u0930\u0923 \u092E\u0947\u0902 \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u092C\u093E\u0930\u093F\u0936 \u092A\u0930 \u0928\u093F\u0930\u094D\u092D\u0930 \u0939\u0948 \u2014 \u0938\u0902\u092D\u0935 \u0939\u094B \u0924\u094B \u090F\u0915 \u0938\u093F\u0902\u091A\u093E\u0908 \u0926\u0947\u0902\u0964",
    "adv.rainfedStress.why": "\u092C\u093E\u0930\u093E\u0928\u0940 \u0916\u0947\u0924\u094B\u0902 \u092E\u0947\u0902 \u092E\u093E\u0928\u0938\u0942\u0928 \u0915\u092E\u091C\u094B\u0930 \u0939\u094B\u0928\u0947 \u092A\u0930 \u0915\u094B\u0908 \u0938\u0939\u093E\u0930\u093E \u0928\u0939\u0940\u0902 \u0939\u094B\u0924\u093E\u0964 \u0938\u0942\u0916\u0947 \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u090F\u0915 \u0938\u093F\u0902\u091A\u093E\u0908 \u092D\u0940 \u092A\u0948\u0926\u093E\u0935\u093E\u0930 \u092C\u091A\u093E \u0938\u0915\u0924\u0940 \u0939\u0948\u0964",
    "adv.fungalWatch.title": "\u092B\u092B\u0942\u0902\u0926 \u0927\u092C\u094D\u092C\u094B\u0902 \u092A\u0930 \u0928\u091C\u0930 \u0930\u0916\u0947\u0902",
    "adv.fungalWatch.body": "\u0928\u092E\u0940 {humidity}% \u0939\u0948 \u0914\u0930 \u0906\u092A\u0915\u0940 {crop} \u0915\u093E\u0932\u0940 \u092E\u093F\u091F\u094D\u091F\u0940 \u092A\u0930 \u092B\u0942\u0932 \u0930\u0939\u0940 \u0939\u0948\u0964 \u092A\u0924\u094D\u0924\u093F\u092F\u094B\u0902 \u092A\u0930 \u0927\u092C\u094D\u092C\u0947 \u092F\u093E \u0930\u0902\u0917 \u092C\u0926\u0932\u093E\u0935 \u0915\u0940 \u091C\u093E\u0901\u091A \u0915\u0930\u0947\u0902\u0964",
    "adv.fungalWatch.why": "\u0915\u093E\u0932\u0940 \u092E\u093F\u091F\u094D\u091F\u0940 \u0928\u092E\u0940 \u0905\u0927\u093F\u0915 \u0930\u0916\u0924\u0940 \u0939\u0948\u0964 \u092B\u0942\u0932\u0928\u0947 \u0915\u0947 \u0938\u092E\u092F \u0905\u0927\u093F\u0915 \u0928\u092E\u0940 \u092B\u092B\u0942\u0902\u0926 \u092B\u0948\u0932\u093E\u0924\u0940 \u0939\u0948 \u2014 \u091C\u0932\u094D\u0926\u0940 \u092A\u0939\u091A\u093E\u0928 \u0938\u0947 \u0926\u0935\u093E\u0908 \u0915\u093E \u0916\u0930\u094D\u091A \u092C\u091A\u0924\u093E \u0939\u0948\u0964",
    "officer.dashTitle": "\u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948, {name}",
    "officer.jurisdictionLine": "\u0915\u0943\u0937\u093F \u0935\u093F\u0915\u093E\u0938 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 (ADO) \xB7 {district} \u091C\u093F\u0932\u093E",
    "officer.bandCritical": "\u0917\u0902\u092D\u0940\u0930 \u091C\u094B\u0916\u093F\u092E",
    "officer.bandHigh": "\u0909\u091A\u094D\u091A \u091C\u094B\u0916\u093F\u092E",
    "officer.bandMedium": "\u092E\u0927\u094D\u092F\u092E \u091C\u094B\u0916\u093F\u092E",
    "officer.bandTotal": "\u0915\u0941\u0932 \u0928\u093F\u0917\u0930\u093E\u0928\u0940",
    "officer.caseloadHeading": "\u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E \u0905\u0928\u0941\u0938\u093E\u0930 \u0915\u093F\u0938\u093E\u0928 \u0938\u0942\u091A\u0940",
    "officer.searchPh": "\u0915\u093F\u0938\u093E\u0928 \u092F\u093E \u0917\u093E\u0901\u0935 \u0916\u094B\u091C\u0947\u0902...",
    "officer.action.resolved": "\u0938\u092E\u093E\u0927\u093E\u0928 \u0939\u0941\u0906",
    "officer.action.review_later": "\u092C\u093E\u0926 \u092E\u0947\u0902 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902"
  };
  var mr = {
    "gate.choose": "\u0924\u0941\u092E\u091A\u0940 \u092D\u093E\u0937\u093E \u0928\u093F\u0935\u0921\u093E",
    "gate.prompt": "\u0924\u0941\u092E\u094D\u0939\u0940 \u0939\u0940 \u092D\u093E\u0937\u093E \u0915\u0927\u0940\u0939\u0940 \u092C\u0926\u0932\u0942 \u0936\u0915\u0924\u093E.",
    "gate.preview": "{language} \u0910\u0915\u0924 \u0906\u0939\u093E\u0924.",
    "gate.unavailable": "\u092F\u093E \u0909\u092A\u0915\u0930\u0923\u093E\u0935\u0930 \u0906\u0935\u093E\u091C\u093E\u091A\u0947 \u092A\u0942\u0930\u094D\u0935\u093E\u0935\u0932\u094B\u0915\u0928 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u093E\u0939\u0940.",
    "brand.tagline": "\u092A\u0940\u0915 \u0938\u0932\u094D\u0932\u093E \u0906\u0923\u093F \u092A\u0942\u0930\u094D\u0935\u0938\u0942\u091A\u0928\u093E",
    "welcome.stepLabel": "5 \u092A\u0948\u0915\u0940 \u092A\u093E\u092F\u0930\u0940 1",
    "welcome.title": "\u0915\u093F\u0938\u093E\u0928 \u0938\u093E\u0925\u0940\u092E\u0927\u094D\u092F\u0947 \u0906\u092A\u0932\u0947 \u0938\u094D\u0935\u093E\u0917\u0924 \u0906\u0939\u0947",
    "welcome.text": "\u0906\u0927\u0940 \u0924\u0941\u092E\u091A\u0940 \u092D\u093E\u0937\u093E \u0928\u093F\u0935\u0921\u093E. \u0936\u0947\u0924\u093E\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u0918\u0947\u0924\u093E\u0928\u093E \u0939\u0940\u091A \u092D\u093E\u0937\u093E \u0935\u093E\u092A\u0930\u0932\u0940 \u091C\u093E\u0908\u0932.",
    "welcome.next": "\u092A\u0941\u0922\u0940\u0932 \u091F\u092A\u094D\u092A\u094D\u092F\u093E\u0924 \u0906\u092E\u094D\u0939\u0940 \u0924\u0941\u092E\u091A\u094D\u092F\u093E \u0936\u0947\u0924\u093E\u091A\u0947 \u0920\u093F\u0915\u093E\u0923 \u0935\u093F\u091A\u093E\u0930\u0942.",
    "welcome.cta": "\u092E\u093E\u091D\u094D\u092F\u093E \u0936\u0947\u0924\u093E\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u092D\u0930\u093E",
    "loc.stepLabel": "5 \u092A\u0948\u0915\u0940 \u092A\u093E\u092F\u0930\u0940 2",
    "loc.title": "\u0924\u0941\u092E\u091A\u0947 \u0936\u0947\u0924 \u0915\u0941\u0920\u0947 \u0906\u0939\u0947?",
    "loc.help": "\u092F\u093E\u092E\u0941\u0933\u0947 \u0906\u092E\u094D\u0939\u0940 \u0924\u0941\u092E\u094D\u0939\u093E\u0932\u093E \u0938\u094D\u0925\u093E\u0928\u093F\u0915 \u0939\u0935\u093E\u092E\u093E\u0928 \u0935 \u091C\u0935\u0933\u091A\u0947 \u092C\u093E\u091C\u093E\u0930\u092D\u093E\u0935 \u0938\u093E\u0902\u0917\u0942 \u0936\u0915\u0942.",
    "loc.state": "\u0930\u093E\u091C\u094D\u092F",
    "loc.district": "\u091C\u093F\u0932\u094D\u0939\u093E",
    "loc.village": "\u0917\u093E\u0935",
    "loc.ph.state": "\u0930\u093E\u091C\u094D\u092F \u0928\u093F\u0935\u0921\u093E",
    "loc.ph.district": "\u091C\u093F\u0932\u094D\u0939\u093E \u0928\u093F\u0935\u0921\u093E",
    "loc.ph.village": "\u0917\u093E\u0935 \u0928\u093F\u0935\u0921\u093E",
    "loc.search": "\u0930\u093E\u091C\u094D\u092F \u0915\u093F\u0902\u0935\u093E \u091C\u093F\u0932\u094D\u0939\u093E \u0936\u094B\u0927\u093E...",
    "loc.other": "\u0907\u0924\u0930 \u2014 \u092E\u093E\u091D\u0947 \u0917\u093E\u0935 \u0932\u093F\u0939\u093E",
    "loc.villageFreePh": "\u0924\u0941\u092E\u091A\u0947 \u0917\u093E\u0935 \u0915\u093F\u0902\u0935\u093E \u092A\u0930\u093F\u0938\u0930 \u0932\u093F\u0939\u093E",
    "loc.back": "\u092E\u093E\u0917\u0947",
    "loc.continue": "\u092A\u0941\u0922\u0947",
    "land.stepLabel": "5 \u092A\u0948\u0915\u0940 \u092A\u093E\u092F\u0930\u0940 3",
    "land.title": "\u0924\u0941\u092E\u091A\u0940 \u091C\u092E\u0940\u0928",
    "land.stub": "\u092A\u0941\u0922\u0940\u0932 \u091F\u092A\u094D\u092A\u094D\u092F\u093E\u0924 \u091C\u092E\u093F\u0928\u0940\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u092F\u0947\u0908\u0932. \u0924\u0941\u092E\u091A\u0947 \u0938\u094D\u0925\u093E\u0928 \u091C\u0924\u0928 \u091D\u093E\u0932\u0947 \u0906\u0939\u0947.",
    "err.required": "\u0915\u0943\u092A\u092F\u093E {field} \u0928\u093F\u0935\u0921\u093E.",
    "loc.noResults": "\u0915\u094B\u0923\u0924\u093E\u0939\u0940 \u091C\u094B\u0921 \u0928\u093E\u0939\u0940",
    "ph.select": "\u0928\u093F\u0935\u0921\u093E",
    "land.help": "\u092F\u093E\u0935\u0930\u091A \u0906\u092E\u091A\u093E \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0938\u0932\u094D\u0932\u093E \u0905\u0935\u0932\u0902\u092C\u0942\u0928 \u0905\u0938\u0924\u094B.",
    "land.area": "\u091C\u092E\u0940\u0928 (\u090F\u0915\u0930\u092E\u0927\u094D\u092F\u0947)",
    "land.areaPh": "\u0909\u0926\u093E. 3.5",
    "land.soil": "\u092E\u093E\u0924\u0940\u091A\u093E \u092A\u094D\u0930\u0915\u093E\u0930",
    "land.irrigation": "\u092A\u093E\u0923\u094D\u092F\u093E\u091A\u093E \u0938\u094D\u0930\u094B\u0924",
    "soil.black": "\u0915\u093E\u0933\u0940 \u092E\u093E\u0924\u0940",
    "soil.red": "\u0932\u093E\u0932 \u092E\u093E\u0924\u0940",
    "soil.sandy": "\u0935\u093E\u0933\u0942\u0938\u093E\u0930 \u092E\u093E\u0924\u0940",
    "soil.loamy": "\u0926\u094B\u092E\u091F \u092E\u093E\u0924\u0940",
    "soil.alluvial": "\u0917\u093E\u0933\u0923 \u092E\u093E\u0924\u0940",
    "soil.lateritic": "\u0932\u0945\u091F\u0947\u0930\u093E\u0907\u091F \u092E\u093E\u0924\u0940",
    "irrig.rainfed": "\u092A\u093E\u0935\u0938\u093E\u0935\u0930 \u0905\u0935\u0932\u0902\u092C\u0942\u0928",
    "irrig.canal": "\u0915\u093E\u0932\u0935\u093E",
    "irrig.borewell": "\u092C\u094B\u0905\u0930\u0935\u0947\u0932",
    "irrig.well": "\u0909\u0918\u0921\u093E \u0935\u093F\u0939\u0940\u0930",
    "irrig.drip": "\u0920\u093F\u092C\u0915 \u0938\u093F\u0902\u091A\u0928",
    "irrig.sprinkler": "\u0924\u0941\u0937\u093E\u0930 \u0938\u093F\u0902\u091A\u0928",
    "err.area": "\u0924\u0941\u092E\u091A\u094D\u092F\u093E \u091C\u092E\u093F\u0928\u0940\u091A\u0947 \u0915\u094D\u0937\u0947\u0924\u094D\u0930\u092B\u0933 \u090F\u0915\u0930\u092E\u0927\u094D\u092F\u0947 \u091F\u093E\u0915\u093E.",
    "crop.stepLabel": "5 \u092A\u0948\u0915\u0940 \u092A\u093E\u092F\u0930\u0940 4",
    "crop.title": "\u0924\u0941\u092E\u091A\u0947 \u092A\u0940\u0915",
    "crop.help": "\u092F\u093E\u0935\u0930\u0942\u0928 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0938\u0932\u094D\u0932\u093E \u0924\u0941\u092E\u091A\u094D\u092F\u093E \u092A\u093F\u0915\u093E\u091A\u094D\u092F\u093E \u0905\u0935\u0938\u094D\u0925\u0947\u0928\u0941\u0938\u093E\u0930 \u0926\u093F\u0932\u093E \u091C\u093E\u0908\u0932.",
    "crop.crop": "\u092A\u0940\u0915",
    "crop.variety": "\u0935\u093E\u0923",
    "crop.sown": "\u092A\u0947\u0930\u0923\u0940 \u0924\u093E\u0930\u0940\u0916",
    "crop.other": "\u0907\u0924\u0930 \u2014 \u0935\u093E\u0923 \u0932\u093F\u0939\u093E",
    "crop.varietyPh": "\u0935\u093E\u0923\u093E\u091A\u0947 \u0928\u093E\u0935 \u0932\u093F\u0939\u093E",
    "crop.stageNow": "\u0924\u0941\u092E\u091A\u0947 {crop} {stage} \u0905\u0935\u0938\u094D\u0925\u0947\u0924 \u0906\u0939\u0947.",
    "err.crop": "\u0915\u0943\u092A\u092F\u093E \u092A\u0940\u0915 \u0928\u093F\u0935\u0921\u093E.",
    "err.variety": "\u0915\u0943\u092A\u092F\u093E \u0935\u093E\u0923 \u0928\u093F\u0935\u0921\u093E \u0915\u093F\u0902\u0935\u093E \u0932\u093F\u0939\u093E.",
    "err.sown": "\u092A\u0947\u0930\u0923\u0940 \u0924\u093E\u0930\u0940\u0916 \u0928\u093F\u0935\u0921\u093E.",
    "s5.stepLabel": "5 \u092A\u0948\u0915\u0940 \u092A\u093E\u092F\u0930\u0940 5",
    "s5.title": "\u0939\u0947 \u092C\u0930\u094B\u092C\u0930 \u0906\u0939\u0947 \u0915\u093E?",
    "s5.stub": "\u092A\u0941\u0922\u0940\u0932 \u091F\u092A\u094D\u092A\u094D\u092F\u093E\u0924 \u0924\u092A\u093E\u0938\u0923\u0940 \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u092F\u0947\u0908\u0932. \u0924\u0941\u092E\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u091C\u0924\u0928 \u091D\u093E\u0932\u0940 \u0906\u0939\u0947.",
    "s5.help": "\u091C\u0924\u0928 \u0915\u0930\u0923\u094D\u092F\u093E\u092A\u0942\u0930\u094D\u0935\u0940 \u0938\u0930\u094D\u0935 \u0924\u092A\u093E\u0938\u093E.",
    "s5.locLabel": "\u0920\u093F\u0915\u093E\u0923",
    "s5.landLabel": "\u091C\u092E\u0940\u0928",
    "s5.cropLabel": "\u092A\u0940\u0915",
    "s5.change": "\u092C\u0926\u0932\u093E",
    "s5.save": "\u092E\u093E\u091D\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u091C\u0924\u0928 \u0915\u0930\u093E",
    "s5.saved": "\u0938\u0930\u094D\u0935 \u092E\u093E\u0939\u093F\u0924\u0940 \u091C\u0924\u0928 \u091D\u093E\u0932\u0940. \u092A\u0941\u0922\u0940\u0932 \u091F\u092A\u094D\u092A\u094D\u092F\u093E\u0924 \u0916\u093E\u0924\u0947 \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u092F\u0947\u0908\u0932.",
    "s6.stepLabel": "\u0936\u0947\u0935\u091F\u091A\u0940 \u092A\u093E\u092F\u0930\u0940",
    "s6.title": "\u0924\u0941\u092E\u091A\u0940 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u091C\u0924\u0928 \u0915\u0930\u093E",
    "s6.help": "\u0916\u093E\u0924\u0947 \u0924\u092F\u093E\u0930 \u0915\u0930\u093E \u092E\u094D\u0939\u0923\u091C\u0947 \u0936\u0947\u0924\u0940\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u093E\u0939\u0940\u0932.",
    "s6.tabFarmer": "\u0936\u0947\u0924\u0915\u0930\u0940",
    "s6.tabOfficer": "\u0905\u0927\u093F\u0915\u093E\u0930\u0940",
    "s6.phone": "\u092E\u094B\u092C\u093E\u0907\u0932 \u0915\u094D\u0930\u092E\u093E\u0902\u0915",
    "s6.phonePh": "10 \u0905\u0902\u0915\u0940 \u092E\u094B\u092C\u093E\u0907\u0932 \u0915\u094D\u0930\u092E\u093E\u0902\u0915",
    "s6.sendCode": "\u0915\u094B\u0921 \u092A\u093E\u0920\u0935\u093E",
    "s6.resendIn": "{seconds} \u0938\u0947\u0915\u0902\u0926\u093E\u0902\u0924 \u092A\u0941\u0928\u094D\u0939\u093E \u092A\u093E\u0920\u0935\u093E",
    "s6.otp": "6 \u0905\u0902\u0915\u0940 \u0915\u094B\u0921",
    "s6.otpPh": "6 \u0905\u0902\u0915\u0940 \u0915\u094B\u0921 \u091F\u093E\u0915\u093E",
    "s6.demoOtp": "\u0921\u0947\u092E\u094B \u0915\u094B\u0921: {code}",
    "s6.verify": "\u092A\u0921\u0924\u093E\u0933\u093E \u0906\u0923\u093F \u0938\u0941\u0930\u0942 \u0915\u0930\u093E",
    "s6.staffId": "\u0938\u094D\u091F\u093E\u092B \u0906\u092F\u0921\u0940",
    "s6.password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921",
    "s6.signIn": "\u0921\u0945\u0936\u092C\u094B\u0930\u094D\u0921\u0935\u0930 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u093E",
    "s6.forgot": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0935\u093F\u0938\u0930\u0932\u093E\u0924? \u0905\u092A\u0928\u0947 \u0938\u0939\u093E\u092F\u094D\u092F\u0915 \u0938\u0902\u091A\u093E\u0932\u0915\u093E\u0902\u0936\u0940 \u0938\u0902\u092A\u0930\u094D\u0915 \u0938\u093E\u0927\u093E.",
    "s6.guest": "\u091C\u0924\u0928 \u0928 \u0915\u0930\u0924\u093E \u092A\u0939\u093E \u2192",
    "s6.signout": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F",
    "s6.signedInAs": "{who} \u092E\u094D\u0939\u0923\u0942\u0928 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0906\u0939\u093E\u0924",
    "s6.successFarmer": "\u092A\u0921\u0924\u093E\u0933\u0932\u0947! \u0924\u0941\u092E\u091A\u0940 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 {phone} \u0935\u0930 \u091C\u0924\u0928 \u091D\u093E\u0932\u0940.",
    "s6.successOfficer": "\u0938\u094D\u0935\u093E\u0917\u0924, {name}. \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0921\u0945\u0936\u092C\u094B\u0930\u094D\u0921 \u092A\u0941\u0922\u0940\u0932 \u091F\u092A\u094D\u092A\u094D\u092F\u093E\u0924 \u092F\u0947\u0908\u0932.",
    "s6.successGuest": "\u092A\u093E\u0939\u0941\u0923\u0947 \u092E\u094D\u0939\u0923\u0942\u0928 \u092A\u093E\u0939\u0924 \u0906\u0939\u093E\u0924. \u0938\u0930\u094D\u0935\u094D\u0939\u0930\u0935\u0930 \u0915\u093E\u0939\u0940\u0939\u0940 \u091C\u0924\u0928 \u0939\u094B\u0923\u093E\u0930 \u0928\u093E\u0939\u0940.",
    "s6.continue": "\u092A\u0941\u0922\u0947",
    "err.auth.phone": "10 \u0905\u0902\u0915\u0940 \u0935\u0948\u0927 \u092E\u094B\u092C\u093E\u0907\u0932 \u0915\u094D\u0930\u092E\u093E\u0902\u0915 \u091F\u093E\u0915\u093E.",
    "err.auth.otpShape": "6 \u0905\u0902\u0915\u0940 \u0915\u094B\u0921 \u091F\u093E\u0915\u093E.",
    "err.auth.INVALID_OTP": "\u0915\u094B\u0921 \u091C\u0941\u0933\u0932\u093E \u0928\u093E\u0939\u0940. \u092A\u0941\u0928\u094D\u0939\u093E \u092A\u094D\u0930\u092F\u0924\u094D\u0928 \u0915\u0930\u093E.",
    "err.auth.OTP_EXPIRED": "\u0915\u094B\u0921 \u0915\u093E\u0932\u092C\u093E\u0939\u094D\u092F. \u0928\u0935\u0940\u0928 \u0915\u094B\u0921 \u092A\u093E\u0920\u0935\u093E.",
    "err.auth.TOO_MANY_ATTEMPTS": "\u092C\u0930\u0947\u091A \u091A\u0941\u0915\u0940\u091A\u0947 \u092A\u094D\u0930\u092F\u0924\u094D\u0928. \u0928\u0935\u0940\u0928 \u0915\u094B\u0921 \u092E\u093E\u0917\u093E.",
    "err.auth.RATE_LIMITED": "\u0925\u094B\u0921\u094D\u092F\u093E \u0935\u0947\u0933\u093E\u0928\u0947 \u0915\u094B\u0921 \u092E\u093E\u0917\u093E.",
    "err.auth.INVALID_CREDENTIALS": "\u0938\u094D\u091F\u093E\u092B \u0906\u092F\u0921\u0940 \u0915\u093F\u0902\u0935\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u091A\u0941\u0915\u0940\u091A\u093E \u0906\u0939\u0947.",
    "err.auth.NETWORK": "\u0938\u0947\u0935\u093E \u092E\u093F\u0933\u0924 \u0928\u093E\u0939\u0940. API \u0938\u0930\u094D\u0935\u094D\u0939\u0930 \u0938\u0941\u0930\u0942 \u0906\u0939\u0947 \u0915\u093E?",
    "intent.stepLabel": "\u091C\u0935\u0933\u091C\u0935\u0933 \u0924\u092F\u093E\u0930 \u2014 7 \u092A\u0948\u0915\u0940 \u092A\u093E\u092F\u0930\u0940 6",
    "intent.title": "\u0924\u0941\u092E\u091A\u0940 \u0936\u0947\u0924 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u091C\u0924\u0928 \u0915\u0930\u093E",
    "intent.why": "\u0939\u0947 \u0936\u0947\u0924 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u093E\u0939\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0906\u0923\u093F \u0915\u0943\u0937\u0940 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0924\u0941\u092E\u091A\u094D\u092F\u093E\u0936\u0940 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0924\u0941\u092E\u091A\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0915\u094D\u0930\u092E\u093E\u0902\u0915 \u092A\u0921\u0924\u093E\u0933\u093E.",
    "intent.summary": "\u0924\u092A\u093E\u0938\u0932\u0947\u0932\u0940 \u0924\u0941\u092E\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940",
    "intent.benefitsTitle": "\u0916\u093E\u0924\u094D\u092F\u093E\u0938\u0939 \u0924\u0941\u092E\u094D\u0939\u0940",
    "intent.b1": "\u0906\u091C\u091A\u093E \u092A\u0940\u0915 \u0938\u0932\u094D\u0932\u093E \u092E\u093F\u0933\u0935\u093E",
    "intent.b2": "\u0938\u0932\u094D\u0932\u093E \u0924\u0941\u092E\u091A\u094D\u092F\u093E \u092D\u093E\u0937\u0947\u0924 \u0910\u0915\u093E",
    "intent.b3": "\u0924\u0941\u092E\u091A\u094D\u092F\u093E \u0915\u0943\u0937\u0940 \u0905\u0927\u093F\u0915\u093E\u0931\u094D\u092F\u093E\u0936\u0940 \u092C\u094B\u0932\u093E",
    "intent.privacy": "\u0924\u0941\u092E\u091A\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0915\u094D\u0930\u092E\u093E\u0902\u0915 \u092B\u0915\u094D\u0924 \u0916\u093E\u0924\u0947 \u092A\u0921\u0924\u093E\u0933\u0923\u0940 \u0935 \u0936\u0947\u0924\u0940\u0938\u0902\u092C\u0902\u0927\u0940 \u0938\u0902\u092A\u0930\u094D\u0915\u093E\u0938\u093E\u0920\u0940 \u0935\u093E\u092A\u0930\u0932\u093E \u091C\u093E\u0924\u094B. \u0907\u0924\u0930 \u0936\u0947\u0924\u0915\u0931\u094D\u092F\u093E\u0902\u0928\u093E \u0926\u093F\u0938\u0924 \u0928\u093E\u0939\u0940.",
    "intent.terms": "\u092E\u0940 \u0935\u093E\u092A\u0930\u0923\u094D\u092F\u093E\u091A\u094D\u092F\u093E \u0905\u091F\u0940 \u0906\u0923\u093F \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E \u0938\u0942\u091A\u0928\u093E \u092E\u093E\u0928\u094D\u092F \u0915\u0930\u0924\u094B/\u0915\u0930\u0924\u0947.",
    "intent.continue": "\u092E\u094B\u092C\u093E\u0907\u0932 \u0915\u094D\u0930\u092E\u093E\u0902\u0915\u093E\u0938\u0939 \u092A\u0941\u0922\u0947 \u091C\u093E",
    "intent.change": "\u092E\u093E\u091D\u0940 \u0936\u0947\u0924 \u092E\u093E\u0939\u093F\u0924\u0940 \u092C\u0926\u0932\u093E",
    "err.auth.VALIDATION": "\u0915\u0943\u092A\u092F\u093E \u0924\u0941\u092E\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u0924\u092A\u093E\u0938\u0942\u0928 \u092A\u0941\u0928\u094D\u0939\u093E \u092A\u094D\u0930\u092F\u0924\u094D\u0928 \u0915\u0930\u093E.",
    "err.auth.TOKEN_EXPIRED": "\u0924\u0941\u092E\u091A\u0947 \u0938\u0947\u0936\u0928 \u0938\u0902\u092A\u0932\u0947. \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u094D\u0939\u093E \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u093E.",
    "err.auth.TOKEN_INVALID": "\u0924\u0941\u092E\u091A\u0947 \u0938\u0947\u0936\u0928 \u0938\u0902\u092A\u0932\u0947. \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u094D\u0939\u093E \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u093E.",
    "err.auth.NO_TOKEN": "\u0924\u0941\u092E\u091A\u0947 \u0938\u0947\u0936\u0928 \u0938\u0902\u092A\u0932\u0947. \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u094D\u0939\u093E \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u093E.",
    "err.auth.NO_ACCOUNT": "\u0915\u0943\u092A\u092F\u093E \u0906\u0927\u0940 \u0924\u0941\u092E\u091A\u093E \u092B\u094B\u0928 \u092A\u0921\u0924\u093E\u0933\u093E.",
    "p.stepLabel": "\u091C\u0935\u0933\u091C\u0935\u0933 \u092A\u0942\u0930\u094D\u0923",
    "p.title": "\u0906\u092A\u0932\u094D\u092F\u093E\u0932\u093E \u0915\u093E\u092F \u092E\u094D\u0939\u0923\u093E\u0935\u0947?",
    "p.help": "\u0924\u0941\u092E\u091A\u0947 \u0928\u093E\u0935 \u0939\u094B\u092E \u0938\u094D\u0915\u094D\u0930\u0940\u0928\u0935\u0930 \u0926\u093F\u0938\u0947\u0932. \u0924\u0941\u092E\u091A\u093E \u0928\u0902\u092C\u0930 \u0917\u094B\u092A\u0928\u0940\u092F \u0930\u093E\u0939\u0940\u0932.",
    "p.name": "\u0924\u0941\u092E\u091A\u0947 \u0928\u093E\u0935",
    "p.namePh": "\u0909\u0926\u093E. \u0938\u0941\u0928\u0940\u0924\u093E \u092A\u093E\u091F\u0940\u0932",
    "p.save": "\u091C\u0924\u0928 \u0915\u0930\u093E \u0906\u0923\u093F \u0939\u094B\u092E \u0909\u0918\u0921\u093E",
    "err.auth.name": "\u0915\u0943\u092A\u092F\u093E \u0924\u0941\u092E\u091A\u0947 \u0928\u093E\u0935 \u091F\u093E\u0915\u093E.",
    "home.title": "\u0906\u091C\u091A\u093E \u0938\u0932\u094D\u0932\u093E",
    "home.hello": "\u0928\u092E\u0938\u094D\u0915\u093E\u0930, {name}",
    "home.listen": "\u0910\u0915\u093E",
    "home.stop": "\u0925\u093E\u0902\u092C\u0935\u093E",
    "home.ack": "\u092E\u0940 \u0935\u093E\u091A\u0932\u0947",
    "home.acked": "\u0935\u093E\u091A\u0932\u0947 \u0906\u0939\u0947",
    "home.voiceUnavailable": "\u092F\u093E \u0909\u092A\u0915\u0930\u0923\u093E\u0935\u0930 \u0906\u0935\u093E\u091C \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u093E\u0939\u0940.",
    "home.guestNote": "\u0924\u0941\u092E\u094D\u0939\u0940 \u092A\u093E\u0939\u0941\u0923\u094D\u092F\u093E\u091A\u094D\u092F\u093E \u0928\u093E\u0924\u094D\u092F\u093E\u0928\u0947 \u092A\u093E\u0939\u0924 \u0906\u0939\u093E\u0924 \u2014 \u0939\u093E \u092A\u094D\u0930\u093E\u0924\u094D\u092F\u0915\u094D\u0937\u093F\u0915\u093E\u0938\u093E\u0920\u0940 \u0928\u092E\u0941\u0928\u093E \u0938\u0932\u094D\u0932\u093E \u0906\u0939\u0947.",
    "severity.urgent": "\u0906\u091C\u091A \u0915\u0930\u093E",
    "severity.warning": "\u0932\u0915\u094D\u0937 \u0920\u0947\u0935\u093E",
    "severity.info": "\u092E\u093E\u0939\u093F\u0924\u0940",
    "severity.watch": "\u0932\u0915\u094D\u0937 \u0926\u094D\u092F\u093E",
    "weather.next7": "\u092A\u0941\u0922\u0940\u0932 7 \u0926\u093F\u0935\u0938",
    "weather.deficit": "{district} \u092E\u0927\u094D\u092F\u0947 \u092F\u093E \u0939\u0902\u0917\u093E\u092E\u093E\u0924\u0940\u0932 \u092A\u093E\u090A\u0938 \u0938\u0930\u093E\u0938\u0930\u0940\u092A\u0947\u0915\u094D\u0937\u093E {pct}% \u0915\u092E\u0940 \u0906\u0939\u0947.",
    "weather.surplus": "{district} \u092E\u0927\u094D\u092F\u0947 \u092F\u093E \u0939\u0902\u0917\u093E\u092E\u093E\u0924\u0940\u0932 \u092A\u093E\u090A\u0938 \u0938\u0930\u093E\u0938\u0930\u0940\u092A\u0947\u0915\u094D\u0937\u093E {pct}% \u091C\u093E\u0938\u094D\u0924 \u0906\u0939\u0947.",
    "weather.normal": "{district} \u092E\u0927\u094D\u092F\u0947 \u092F\u093E \u0939\u0902\u0917\u093E\u092E\u093E\u0924\u0940\u0932 \u092A\u093E\u090A\u0938 \u0938\u0930\u093E\u0938\u0930\u0940\u091A\u094D\u092F\u093E \u091C\u0935\u0933 \u0906\u0939\u0947.",
    "adv.harvestRain.title": "\u092A\u093E\u0935\u0938\u093E\u091A\u094D\u092F\u093E \u0906\u0927\u0940 \u0915\u093E\u0922\u0923\u0940 \u0915\u0930\u093E",
    "adv.harvestRain.body": "\u092A\u0941\u0922\u0940\u0932 \u0926\u094B\u0928 \u0926\u093F\u0935\u0938\u093E\u0902\u0924 \u0938\u0941\u092E\u093E\u0930\u0947 {mm} \u092E\u093F.\u092E\u0940. \u092A\u093E\u090A\u0938 \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0906\u0939\u0947 \u0906\u0923\u093F \u0924\u0941\u092E\u091A\u0947 {crop} \u0924\u092F\u093E\u0930 \u0906\u0939\u0947. \u0906\u0924\u093E \u0915\u093E\u0922\u0923\u0940 \u0915\u0930\u0942\u0928 \u092E\u093E\u0932 \u091D\u093E\u0915\u0942\u0928 \u0920\u0947\u0935\u093E.",
    "adv.harvestRain.why": "\u0924\u092F\u093E\u0930 \u092A\u093F\u0915\u093E\u0935\u0930 \u092A\u093E\u090A\u0938 \u092A\u0921\u0932\u094D\u092F\u093E\u0938 \u0915\u0942\u091C \u0939\u094B\u0924\u0947 \u0906\u0923\u093F \u092C\u093E\u091C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0924 \u0918\u0938\u0930\u0924\u0947.",
    "adv.holdSpray.title": "\u092B\u0935\u093E\u0930\u0923\u0940 \u0915\u0930\u0942 \u0928\u0915\u093E \u2014 {day} \u0930\u094B\u091C\u0940 \u091C\u094B\u0930\u0926\u093E\u0930 \u092A\u093E\u090A\u0938",
    "adv.holdSpray.body": "{day} \u0930\u094B\u091C\u0940 \u0938\u0941\u092E\u093E\u0930\u0947 {mm} \u092E\u093F.\u092E\u0940. \u092A\u093E\u090A\u0938 \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0906\u0939\u0947. \u092B\u0935\u093E\u0930\u0923\u0940 \u092A\u0941\u0922\u0947 \u0922\u0915\u0932\u093E \u0906\u0923\u093F \u0906\u091C \u0936\u0947\u0924\u093E\u0924\u0940\u0932 \u092A\u093E\u091F \u092E\u094B\u0915\u0933\u0947 \u0915\u0930\u093E.",
    "adv.holdSpray.why": "\u091C\u094B\u0930\u0926\u093E\u0930 \u092A\u093E\u0935\u0938\u093E\u0906\u0927\u0940 \u0915\u0947\u0932\u0947\u0932\u0940 \u092B\u0935\u093E\u0930\u0923\u0940 \u0927\u0941\u090A\u0928 \u091C\u093E\u0924\u0947 \u2014 \u092A\u0948\u0938\u093E \u0906\u0923\u093F \u0914\u0937\u0927 \u0926\u094B\u0928\u094D\u0939\u0940 \u0935\u093E\u092F\u093E.",
    "adv.irrigate.title": "\u090F\u0915 \u0938\u0902\u0930\u0915\u094D\u0937\u0915 \u092A\u093E\u0923\u0940 \u0926\u094D\u092F\u093E",
    "adv.irrigate.body": "{district} \u092E\u0927\u094D\u092F\u0947 \u092A\u093E\u090A\u0938 {pct}% \u0915\u092E\u0940 \u0906\u0939\u0947 \u0906\u0923\u093F \u0924\u0941\u092E\u091A\u0947 {crop} {stage} \u0905\u0935\u0938\u094D\u0925\u0947\u0924 \u0906\u0939\u0947. \u0926\u094B\u0928 \u0926\u093F\u0935\u0938\u093E\u0902\u0924 \u090F\u0915 \u0939\u0932\u0915\u0947 \u092A\u093E\u0923\u0940 \u0926\u094D\u092F\u093E.",
    "adv.irrigate.why": "\u092F\u093E \u0905\u0935\u0938\u094D\u0925\u0947\u0924\u0940\u0932 \u0913\u0932\u093E\u0935\u094D\u092F\u093E\u091A\u0940 \u0915\u092E\u0924\u0930\u0924\u093E \u0909\u0924\u094D\u092A\u093E\u0926\u0928\u093E\u0924 \u0915\u093E\u092F\u092E\u091A\u0940 \u0918\u091F \u0915\u0930\u0924\u0947.",
    "adv.heat.title": "\u0909\u0937\u094D\u0923\u0924\u0947\u091A\u093E \u0924\u093E\u0923 \u2014 \u0938\u0915\u093E\u0933\u0940 \u0932\u0935\u0915\u0930 \u092A\u093E\u0923\u0940 \u0926\u094D\u092F\u093E",
    "adv.heat.body": "\u0915\u092E\u093E\u0932 \u0924\u093E\u092A\u092E\u093E\u0928 \u0938\u0941\u092E\u093E\u0930\u0947 {tmax}\xB0C \u0906\u0939\u0947. \u0938\u0915\u093E\u0933\u0940 \u096E \u092A\u0942\u0930\u094D\u0935\u0940 \u092A\u093E\u0923\u0940 \u0926\u094D\u092F\u093E \u0906\u0923\u093F \u0967\u0967 \u0924\u0947 \u096A \u0926\u0930\u092E\u094D\u092F\u093E\u0928 \u092B\u0935\u093E\u0930\u0923\u0940 \u091F\u093E\u0933\u093E.",
    "adv.heat.why": "\u0926\u0941\u092A\u093E\u0930\u091A\u0940 \u092B\u0935\u093E\u0930\u0923\u0940 \u092A\u0930\u093F\u0923\u093E\u092E \u0939\u094B\u0923\u094D\u092F\u093E\u092A\u0942\u0930\u094D\u0935\u0940\u091A \u0909\u0921\u0942\u0928 \u091C\u093E\u0924\u0947 \u0906\u0923\u093F \u092A\u093E\u0928 \u0915\u0930\u092A\u0942 \u0936\u0915\u0924\u0947.",
    "adv.allClear.title": "\u0906\u091C \u0935\u093F\u0936\u0947\u0937 \u0915\u093E\u0939\u0940 \u0915\u0930\u093E\u092F\u091A\u0940 \u0917\u0930\u091C \u0928\u093E\u0939\u0940",
    "adv.allClear.body": "\u0924\u0941\u092E\u091A\u0947 {crop} {stage} \u0905\u0935\u0938\u094D\u0925\u0947\u0924 \u0935\u094D\u092F\u0935\u0938\u094D\u0925\u093F\u0924 \u0906\u0939\u0947. \u0928\u0947\u0939\u092E\u0940\u091A\u0947 \u0928\u093F\u092F\u094B\u091C\u0928 \u0938\u0941\u0930\u0942 \u0920\u0947\u0935\u093E.",
    "adv.allClear.why": "\u0939\u0935\u093E\u092E\u093E\u0928\u093E\u091A\u0947 \u0938\u0930\u094D\u0935 \u0938\u0902\u0915\u0947\u0924 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092E\u0930\u094D\u092F\u093E\u0926\u0947\u0924 \u0906\u0939\u0947\u0924.",
    "adv.detail.why": "\u0939\u0947 \u0915\u093E \u092E\u0939\u0924\u094D\u0924\u094D\u0935\u093E\u091A\u0947 \u0906\u0939\u0947",
    "land.acres": "{acres} \u090F\u0915\u0930",
    "stage.sowing": "\u092A\u0947\u0930\u0923\u0940",
    "stage.vegetative": "\u0935\u093E\u0922",
    "stage.flowering": "\u092B\u0941\u0932\u094B\u0930\u093E",
    "stage.grain-fill": "\u0926\u093E\u0923\u0947 \u092D\u0930\u0923\u0947",
    "stage.maturity": "\u092A\u0915\u094D\u0935\u0924\u093E",
    "stage.harvest-ready": "\u0915\u093E\u0922\u0923\u0940\u0938 \u0924\u092F\u093E\u0930",
    "crop.cotton": "\u0915\u093E\u092A\u0942\u0938",
    "crop.onion": "\u0915\u093E\u0902\u0926\u093E",
    "crop.soybean": "\u0938\u094B\u092F\u093E\u092C\u0940\u0928",
    "crop.chilli": "\u092E\u093F\u0930\u091A\u0940",
    "crop.tomato": "\u091F\u094B\u092E\u0945\u091F\u094B",
    "crop.wheat": "\u0917\u0939\u0942",
    "crop.rice": "\u092D\u093E\u0924",
    "crop.groundnut": "\u092D\u0941\u0908\u092E\u0942\u0917",
    "mandi.title": "\u0915\u0941\u0920\u0947 \u0935\u093F\u0915\u093E\u0935\u0947 (\u092C\u093E\u091C\u093E\u0930\u092D\u093E\u0935)",
    "mandi.help": "\u0935\u093E\u0939\u0924\u0942\u0915 \u0916\u0930\u094D\u091A \u0935 \u092C\u093E\u091C\u093E\u0930 \u0909\u092A\u0915\u0930 \u0935\u091C\u093E \u0915\u0930\u0942\u0928 \u0939\u093E\u0924\u093E\u0924 \u092E\u093F\u0933\u0923\u093E\u0931\u094D\u092F\u093E \u0916\u0931\u094D\u092F\u093E \u0928\u093F\u0935\u094D\u0935\u0933 \u0928\u092B\u094D\u092F\u093E\u091A\u0940 \u0924\u0941\u0932\u0928\u093E \u0915\u0930\u093E.",
    "mandi.cropLabel": "\u092A\u0940\u0915",
    "mandi.qtyLabel": "\u092A\u094D\u0930\u092E\u093E\u0923 (\u0915\u094D\u0935\u093F\u0902\u091F\u0932)",
    "mandi.qtyPh": "\u0909\u0926\u093E. \u0968\u0966",
    "mandi.recalc": "\u092A\u0941\u0928\u094D\u0939\u093E \u0917\u0923\u0928\u093E \u0915\u0930\u093E",
    "mandi.bestNetTag": "\u0938\u0930\u094D\u0935\u093E\u0927\u093F\u0915 \u0928\u093F\u0935\u094D\u0935\u0933 \u0928\u092B\u093E",
    "mandi.quotedPrice": "\u092C\u093E\u091C\u093E\u0930\u092D\u093E\u0935: \u20B9{price}/\u0915\u094D\u0935\u093F\u0902\u091F\u0932",
    "mandi.distance": "{dist} \u0915\u093F\u092E\u0940 \u0905\u0902\u0924\u0930\u093E\u0935\u0930 \xB7 {days}",
    "mandi.gross": "\u090F\u0915\u0942\u0923 \u092E\u0942\u0932\u094D\u092F: \u20B9{val}",
    "mandi.transport": "\u092F\u0947\u0923\u094D\u092F\u093E-\u091C\u093E\u0923\u094D\u092F\u093E\u091A\u093E \u0935\u093E\u0939\u0924\u0942\u0915 \u0916\u0930\u094D\u091A: \u2212\u20B9{val}",
    "mandi.fee": "\u092E\u0902\u0921\u0940 \u0936\u0941\u0932\u094D\u0915: \u2212\u20B9{val}",
    "mandi.net": "\u20B9{val} \u0928\u093F\u0935\u094D\u0935\u0933 \u0939\u093E\u0924\u093E\u0924",
    "mandi.inversion": "\u0928\u094B\u0902\u0926: \u091C\u0930\u0940 {priceLeader} \u092E\u0927\u094D\u092F\u0947 \u092D\u093E\u0935 \u091C\u093E\u0938\u094D\u0924 \u0905\u0938\u0932\u093E, \u0924\u0930\u0940 \u0915\u092E\u0940 \u0935\u093E\u0939\u0924\u0942\u0915 \u0916\u0930\u094D\u091A\u093E\u092E\u0941\u0933\u0947 {netLeader} \u092E\u0927\u094D\u092F\u0947 \u0924\u0941\u092E\u094D\u0939\u093E\u0932\u093E \u20B9{gap} \u091C\u093E\u0938\u094D\u0924 \u0928\u093F\u0935\u094D\u0935\u0933 \u0928\u092B\u093E \u092E\u093F\u0933\u0924\u094B.",
    "mandi.trendUp": "\u0917\u0947\u0932\u094D\u092F\u093E \u096D \u0926\u093F\u0935\u0938\u093E\u0902\u0924 \u092D\u093E\u0935 {pct}% \u0935\u093E\u0922\u0932\u093E",
    "mandi.trendDown": "\u0917\u0947\u0932\u094D\u092F\u093E \u096D \u0926\u093F\u0935\u0938\u093E\u0902\u0924 \u092D\u093E\u0935 {pct}% \u0918\u0938\u0930\u0932\u093E",
    "mandi.trendFlat": "\u0917\u0947\u0932\u094D\u092F\u093E \u096D \u0926\u093F\u0935\u0938\u093E\u0902\u0924 \u092D\u093E\u0935 \u0938\u094D\u0925\u093F\u0930",
    "help.title": "\u092E\u0926\u0924 \u0939\u0935\u0940 \u0906\u0939\u0947?",
    "help.help": "\u0906\u092A\u0932\u094D\u092F\u093E \u0928\u093F\u092F\u0941\u0915\u094D\u0924 \u0915\u0943\u0937\u0940 \u0905\u0927\u093F\u0915\u093E\u0931\u094D\u092F\u093E\u0902\u0936\u0940 \u0938\u0902\u092A\u0930\u094D\u0915 \u0938\u093E\u0927\u093E \u0915\u093F\u0902\u0935\u093E \u0939\u0947\u0932\u094D\u092A\u0932\u093E\u0907\u0928\u0935\u0930 \u0915\u0949\u0932 \u0915\u0930\u093E.",
    "help.officerTitle": "\u0906\u092A\u0932\u0947 \u0928\u093F\u092F\u0941\u0915\u094D\u0924 \u0915\u0943\u0937\u0940 \u0905\u0927\u093F\u0915\u093E\u0930\u0940",
    "help.officerRole": "\u0915\u0943\u0937\u0940 \u0935\u093F\u0915\u093E\u0938 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 (ADO)",
    "help.callBtn": "\u0905\u0927\u093F\u0915\u093E\u0931\u094D\u092F\u093E\u0902\u0928\u093E \u0915\u0949\u0932 \u0915\u0930\u093E",
    "help.visitBtn": "\u0936\u0947\u0924\u092D\u0947\u091F\u0940\u091A\u0940 \u0935\u093F\u0928\u0902\u0924\u0940 \u0915\u0930\u093E",
    "help.visitTitle": "\u0915\u0943\u0937\u0940 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u0936\u0947\u0924\u092D\u0947\u091F \u0935\u093F\u0928\u0902\u0924\u0940",
    "help.visitDateLabel": "\u092D\u0947\u091F\u0940\u091A\u0940 \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0924\u093E\u0930\u0940\u0916",
    "help.visitReasonLabel": "\u092D\u0947\u091F\u0940\u091A\u0947 \u0915\u093E\u0930\u0923 (\u0910\u091A\u094D\u091B\u093F\u0915)",
    "help.visitReasonPh": "\u0909\u0926\u093E. \u0915\u0940\u0921 \u092A\u094D\u0930\u093E\u0926\u0941\u0930\u094D\u092D\u093E\u0935 \u092A\u093E\u0939\u0923\u0940, \u092A\u0940\u0915 \u0928\u0941\u0915\u0938\u093E\u0928 \u092A\u0902\u091A\u0928\u093E\u092E\u093E",
    "help.visitSubmit": "\u0935\u093F\u0928\u0902\u0924\u0940 \u092A\u093E\u0920\u0935\u093E",
    "help.visitCancel": "\u0930\u0926\u094D\u0926 \u0915\u0930\u093E",
    "help.visitSuccess": "\u0936\u0947\u0924\u092D\u0947\u091F\u0940\u091A\u0940 \u0928\u094B\u0902\u0926 \u091D\u093E\u0932\u0940. \u0905\u0927\u093F\u0915\u093E\u0930\u0940 {name} \u092F\u093E\u0902\u0928\u093E \u0938\u0902\u0926\u0947\u0936 \u092A\u094B\u0939\u094B\u091A\u0935\u0932\u093E \u0906\u0939\u0947.",
    "help.helplinesTitle": "\u0906\u092A\u0924\u094D\u0915\u093E\u0932\u0940\u0928 \u0939\u0947\u0932\u094D\u092A\u0932\u093E\u0908\u0928",
    "help.kcc": "\u0915\u093F\u0938\u093E\u0928 \u0915\u0949\u0932 \u0938\u0947\u0902\u091F\u0930 (\u091F\u094B\u0932 \u092B\u094D\u0930\u0940)",
    "help.kccPhone": "1800-180-1551",
    "help.disasterLine": "\u0930\u093E\u091C\u094D\u092F \u0936\u0947\u0924\u0915\u0930\u0940 \u0938\u0902\u0915\u091F \u0928\u093F\u0935\u093E\u0930\u0923 \u0915\u0915\u094D\u0937",
    "help.disasterPhone": "1800-120-8040",
    "loan.title": "\u0906\u092A\u0932\u094D\u092F\u093E \u092A\u0940\u0915 \u0915\u0930\u094D\u091C\u093E\u091A\u0947 \u0928\u093F\u092F\u094B\u091C\u0928 \u0915\u0930\u093E",
    "loan.help": "\u0924\u0941\u092E\u091A\u094D\u092F\u093E EMI \u0906\u0923\u093F \u0935\u094D\u092F\u093E\u091C\u093E\u091A\u0947 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0928\u093F\u092F\u094B\u091C\u0928 \u0915\u0930\u093E. \u0924\u0941\u092E\u091A\u0940 \u092E\u093E\u0939\u093F\u0924\u0940 \u0917\u0941\u092A\u094D\u0924 \u0920\u0947\u0935\u0932\u0940 \u091C\u093E\u0908\u0932.",
    "loan.amount": "\u0915\u0930\u094D\u091C\u093E\u091A\u0940 \u0930\u0915\u094D\u0915\u092E (\u20B9)",
    "loan.tenure": "\u0915\u093E\u0932\u093E\u0935\u0927\u0940 (\u092E\u0939\u093F\u0928\u0947)",
    "loan.rate": "\u0935\u094D\u092F\u093E\u091C\u0926\u0930 (%)",
    "loan.calculate": "\u0915\u0945\u0932\u094D\u0915\u094D\u092F\u0941\u0932\u0947\u091F \u0906\u0923\u093F \u0938\u0947\u0935\u094D\u0939 \u0915\u0930\u093E",
    "loan.resultTitle": "\u0924\u0941\u092E\u091A\u093E \u092A\u0930\u0924\u093E\u0935\u093E \u092A\u094D\u0932\u0945\u0928",
    "loan.emi": "\u092E\u093E\u0938\u093F\u0915 \u0939\u092A\u094D\u0924\u093E (EMI)",
    "loan.totalInterest": "\u090F\u0915\u0942\u0923 \u0935\u094D\u092F\u093E\u091C",
    "loan.totalPayment": "\u090F\u0915\u0942\u0923 \u0930\u0915\u094D\u0915\u092E",
    "loan.kccNote": "\u0915\u093F\u0938\u093E\u0928 \u0915\u094D\u0930\u0947\u0921\u093F\u091F \u0915\u093E\u0930\u094D\u0921 (KCC) 7% \u0926\u0930\u093E\u0928\u0947 \u092A\u0940\u0915 \u0915\u0930\u094D\u091C \u0926\u0947\u0924\u0947. \u0935\u0947\u0933\u0947\u0935\u0930 \u092A\u0930\u0924\u092B\u0947\u0921 \u0915\u0947\u0932\u094D\u092F\u093E\u0938 3% \u0938\u0935\u0932\u0924 \u092E\u093F\u0933\u0924\u0947, \u091C\u094D\u092F\u093E\u092E\u0941\u0933\u0947 \u0926\u0930 4% \u0939\u094B\u0924\u094B.",
    "nav.loan": "\u092E\u093E\u091D\u0947 \u0915\u0930\u094D\u091C",
    "nav.home": "\u0938\u0932\u094D\u0932\u093E",
    "nav.mandi": "\u0915\u0941\u0920\u0947 \u0935\u093F\u0915\u093E\u0935\u0947",
    "nav.help": "\u092E\u0926\u0924",
    "nav.profile": "\u092E\u093E\u091D\u0947 \u0936\u0947\u0924",
    "profile.title": "\u092E\u093E\u091D\u0947 \u0936\u0947\u0924 \u0935 \u092A\u094D\u0930\u094B\u092B\u093E\u0908\u0932",
    "profile.phoneLabel": "\u092E\u094B\u092C\u093E\u0907\u0932 \u0915\u094D\u0930\u092E\u093E\u0902\u0915",
    "profile.locLabel": "\u0936\u0947\u0924\u093E\u091A\u0947 \u0920\u093F\u0915\u093E\u0923",
    "profile.landLabel": "\u091C\u092E\u093F\u0928\u0940\u091A\u093E \u0924\u092A\u0936\u0940\u0932",
    "profile.cropLabel": "\u0938\u0927\u094D\u092F\u093E\u091A\u0947 \u092A\u0940\u0915",
    "profile.langLabel": "\u0972\u092A\u091A\u0940 \u092D\u093E\u0937\u093E",
    "profile.change": "\u092C\u0926\u0932\u093E",
    "profile.signout": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F",
    "officer.logAction": "\u0915\u093E\u0930\u0935\u093E\u0908 \u0928\u094B\u0902\u0926\u0935\u093E",
    "officer.actionTitle": "{name} \u0938\u093E\u0920\u0940 \u0915\u093E\u0930\u0935\u093E\u0908 \u0928\u094B\u0902\u0926\u0935\u093E",
    "officer.actionTypeLabel": "\u0915\u093E\u0930\u0935\u093E\u0908\u091A\u093E \u092A\u094D\u0930\u0915\u093E\u0930",
    "officer.actionNotesLabel": "\u091F\u093F\u092A\u093E (\u0910\u091A\u094D\u091B\u093F\u0915)",
    "officer.actionNotesPh": "\u0924\u0941\u092E\u094D\u0939\u0940 \u0915\u093E\u092F \u092A\u093E\u0939\u093F\u0932\u0947 \u0915\u093F\u0902\u0935\u093E \u0915\u0947\u0932\u0947?",
    "officer.actionSubmit": "\u0915\u093E\u0930\u0935\u093E\u0908 \u091C\u0924\u0928 \u0915\u0930\u093E",
    "officer.actionLabel": "\u0936\u0947\u0935\u091F\u091A\u0940 \u0915\u093E\u0930\u0935\u093E\u0908",
    "officer.noAction": "\u0905\u091C\u0942\u0928 \u0915\u094B\u0923\u0924\u0940\u0939\u0940 \u0915\u093E\u0930\u0935\u093E\u0908 \u0928\u094B\u0902\u0926\u0935\u0932\u0947\u0932\u0940 \u0928\u093E\u0939\u0940",
    "officer.action.call_made": "\u0915\u0949\u0932 \u0915\u0947\u0932\u093E",
    "officer.action.visit_done": "\u0936\u0947\u0924\u092D\u0947\u091F",
    "officer.action.referral": "\u0930\u0947\u092B\u0930\u0932",
    "officer.action.advisory_given": "\u0938\u0932\u094D\u0932\u093E \u0926\u093F\u0932\u093E",
    "officer.action.follow_up": "\u092B\u0949\u0932\u094B-\u0905\u092A \u0928\u093F\u0936\u094D\u091A\u093F\u0924",
    "help.schemesTitle": "\u0938\u0930\u0915\u093E\u0930\u0940 \u092F\u094B\u091C\u0928\u093E",
    "help.scheme1Title": "\u092A\u0940\u090F\u092E-\u0915\u093F\u0938\u093E\u0928",
    "help.scheme1Desc": "\u0938\u0930\u094D\u0935 \u092D\u0942\u0927\u093E\u0930\u0915 \u0936\u0947\u0924\u0915\u0931\u094D\u092F\u093E\u0902\u0938\u093E\u0920\u0940 \u0926\u0930\u0935\u0930\u094D\u0937\u0940 \u20B96000 \u091A\u0940 \u092E\u0926\u0924.",
    "help.scheme2Title": "\u092A\u0940\u090F\u092E\u090F\u092B\u092C\u0940\u0935\u093E\u092F (\u092A\u0940\u0915 \u0935\u093F\u092E\u093E)",
    "help.scheme2Desc": "\u0928\u0948\u0938\u0930\u094D\u0917\u093F\u0915 \u0927\u094B\u0915\u0947 \u0906\u0923\u093F \u092A\u0940\u0915 \u0928\u0941\u0915\u0938\u093E\u0928\u0940\u0938\u093E\u0920\u0940 \u0935\u093F\u092E\u093E.",
    "adv.waterlog.title": "\u0928\u093E\u0932\u0947 \u092E\u094B\u0915\u0933\u0947 \u0915\u0930\u093E \u2014 \u092A\u093E\u0923\u0940 \u0938\u093E\u091A\u0923\u094D\u092F\u093E\u091A\u093E \u0927\u094B\u0915\u093E",
    "adv.waterlog.body": "\u092A\u0941\u0922\u0940\u0932 \u0924\u0940\u0928 \u0926\u093F\u0935\u0938\u093E\u0902\u0924 \u0938\u0941\u092E\u093E\u0930\u0947 {mm} \u092E\u093F\u092E\u0940 \u092A\u093E\u090A\u0938 \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u0906\u0939\u0947. \u0924\u0941\u092E\u091A\u0940 {soil} \u092E\u093E\u0924\u0940 \u092E\u0902\u0926 \u092A\u093E\u0923\u0940 \u0936\u094B\u0937\u0924\u0947 \u2014 \u0906\u0924\u094D\u0924\u093E \u0928\u093E\u0932\u0947 \u0938\u093E\u092B \u0915\u0930\u093E.",
    "adv.waterlog.why": "\u092A\u093E\u0923\u0940 \u0938\u093E\u091A\u0932\u094D\u092F\u093E\u0938 \u092E\u0941\u0933\u0947 \u092A\u094B\u0937\u0915 \u0924\u0924\u094D\u0924\u094D\u0935\u0947 \u0936\u094B\u0937\u0942 \u0936\u0915\u0924 \u0928\u093E\u0939\u0940\u0924. \u0926\u094B\u0928 \u0926\u093F\u0935\u0938\u093E\u0902\u091A\u0947 \u0938\u093E\u091A\u0932\u0947\u0932\u0947 \u092A\u093E\u0923\u0940\u0939\u0940 \u092A\u093F\u0915\u093E\u0932\u093E \u0915\u093E\u092F\u092E\u091A\u0947 \u0928\u0941\u0915\u0938\u093E\u0928 \u0915\u0930\u0942 \u0936\u0915\u0924\u0947.",
    "adv.rainfedStress.title": "\u0915\u094B\u0930\u0921\u0935\u093E\u0939\u0942 \u092A\u093F\u0915\u093E\u0932\u093E \u0932\u0915\u094D\u0937 \u0939\u0935\u0947",
    "adv.rainfedStress.body": "{district} \u092E\u0927\u094D\u092F\u0947 \u092A\u093E\u090A\u0938 \u0938\u0930\u093E\u0938\u0930\u0940\u092A\u0947\u0915\u094D\u0937\u093E {pct}% \u0915\u092E\u0940 \u0906\u0939\u0947. \u0924\u0941\u092E\u091A\u0947 {crop} {stage} \u091F\u092A\u094D\u092A\u094D\u092F\u093E\u0924 \u092A\u0942\u0930\u094D\u0923\u092A\u0923\u0947 \u092A\u093E\u0935\u0938\u093E\u0935\u0930 \u0905\u0935\u0932\u0902\u092C\u0942\u0928 \u0906\u0939\u0947 \u2014 \u0936\u0915\u094D\u092F \u0905\u0938\u0932\u094D\u092F\u093E\u0938 \u090F\u0915 \u092A\u093E\u0923\u0940 \u0926\u094D\u092F\u093E.",
    "adv.rainfedStress.why": "\u0915\u094B\u0930\u0921\u0935\u093E\u0939\u0942 \u0936\u0947\u0924\u093E\u0924 \u092E\u093E\u0928\u094D\u0938\u0942\u0928 \u0915\u092E\u0915\u0941\u0935\u0924 \u0905\u0938\u0924\u093E \u0915\u094B\u0923\u0924\u093E\u0939\u0940 \u0906\u0927\u093E\u0930 \u0928\u0938\u0924\u094B. \u0915\u094B\u0930\u0921\u092F\u093C\u093E \u0915\u093E\u0933\u093E\u0924 \u090F\u0915 \u092A\u093E\u0923\u0940\u0939\u0940 \u0909\u0924\u094D\u092A\u093E\u0926\u0928 \u0935\u093E\u091A\u0935\u0942 \u0936\u0915\u0924\u0947.",
    "adv.fungalWatch.title": "\u092C\u0941\u0930\u0936\u0940\u091C\u0928\u094D\u092F \u0921\u093E\u0917\u093E\u0902\u0935\u0930 \u0932\u0915\u094D\u0937 \u0920\u0947\u0935\u093E",
    "adv.fungalWatch.body": "\u0906\u0930\u094D\u0926\u094D\u0930\u0924\u093E {humidity}% \u0906\u0939\u0947 \u0906\u0923\u093F \u0924\u0941\u092E\u091A\u0947 {crop} \u0915\u093E\u0933\u094D\u092F\u093E \u092E\u093E\u0924\u0940\u0935\u0930 \u092B\u0941\u0932\u0924 \u0906\u0939\u0947. \u092A\u093E\u0928\u093E\u0902\u0935\u0930 \u0921\u093E\u0917 \u0915\u093F\u0902\u0935\u093E \u0930\u0902\u0917\u092C\u0926\u0932 \u0924\u092A\u093E\u0938\u093E.",
    "adv.fungalWatch.why": "\u0915\u093E\u0933\u0940 \u092E\u093E\u0924\u0940 \u091C\u093E\u0938\u094D\u0924 \u0915\u093E\u0933 \u0913\u0932\u093E\u0935\u093E \u0927\u0930\u0942\u0928 \u0920\u0947\u0935\u0924\u0947. \u092B\u0941\u0932\u094B\u0931\u094D\u092F\u093E\u091A\u094D\u092F\u093E \u0935\u0947\u0933\u0940 \u091C\u093E\u0938\u094D\u0924 \u0906\u0930\u094D\u0926\u094D\u0930\u0924\u093E \u092C\u0941\u0930\u0936\u0940 \u092A\u0938\u0930\u0935\u0924\u0947 \u2014 \u0932\u0935\u0915\u0930 \u0913\u0933\u0916\u0932\u094D\u092F\u093E\u0938 \u092B\u0935\u093E\u0930\u0923\u0940 \u0916\u0930\u094D\u091A \u0935\u093E\u091A\u0924\u094B.",
    "officer.dashTitle": "\u0938\u094D\u0935\u093E\u0917\u0924, {name}",
    "officer.jurisdictionLine": "\u0915\u0943\u0937\u0940 \u0935\u093F\u0915\u093E\u0938 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 (ADO) \xB7 {district} \u091C\u093F\u0932\u094D\u0939\u093E",
    "officer.bandCritical": "\u0917\u0902\u092D\u0940\u0930 \u0927\u094B\u0915\u093E",
    "officer.bandHigh": "\u0909\u091A\u094D\u091A \u0927\u094B\u0915\u093E",
    "officer.bandMedium": "\u092E\u0927\u094D\u092F\u092E \u0927\u094B\u0915\u093E",
    "officer.bandTotal": "\u090F\u0915\u0942\u0923 \u0928\u093F\u0930\u0940\u0915\u094D\u0937\u0923",
    "officer.caseloadHeading": "\u092A\u094D\u0930\u093E\u0927\u093E\u0928\u094D\u092F\u093E\u0928\u0941\u0938\u093E\u0930 \u0936\u0947\u0924\u0915\u0930\u0940 \u092F\u093E\u0926\u0940",
    "officer.searchPh": "\u0936\u0947\u0924\u0915\u0930\u0940 \u0915\u093F\u0902\u0935\u093E \u0917\u093E\u0935 \u0936\u094B\u0927\u093E...",
    "officer.action.resolved": "\u0928\u093F\u0930\u093E\u0915\u0930\u0923 \u091D\u093E\u0932\u0947",
    "officer.action.review_later": "\u0928\u0902\u0924\u0930 \u092A\u0941\u0928\u0930\u093E\u0935\u0932\u094B\u0915\u0928 \u0915\u0930\u093E"
  };
  var bn = {
    "gate.choose": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AD\u09BE\u09B7\u09BE \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8",
    "gate.prompt": "\u0986\u09AA\u09A8\u09BF \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u09B8\u09AE\u09AF\u09BC \u098F\u099F\u09BF \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8\u0964",
    "gate.preview": "{language} \u09B6\u09CB\u09A8\u09BE \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u0964",
    "gate.unavailable": "\u098F\u0987 \u09A1\u09BF\u09AD\u09BE\u0987\u09B8\u09C7 \u0985\u09A1\u09BF\u0993 \u09AA\u09CD\u09B0\u09BF\u09AD\u09BF\u0989 \u0989\u09AA\u09B2\u09AC\u09CD\u09A7 \u09A8\u09AF\u09BC\u0964",
    "brand.tagline": "\u09AB\u09B8\u09B2 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u0993 \u0986\u0997\u09BE\u09AE \u09B8\u09A4\u09B0\u09CD\u0995\u09A4\u09BE",
    "welcome.stepLabel": "\u09EB-\u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A7\u09BE\u09AA \u09E7",
    "welcome.title": "\u0995\u09BF\u09B7\u09BE\u09A3 \u09B8\u09BE\u09A5\u09C0\u09A4\u09C7 \u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE",
    "welcome.text": "\u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AD\u09BE\u09B7\u09BE \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u0987 \u09AD\u09BE\u09B7\u09BE\u0987 \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u09B9\u09AC\u09C7\u0964",
    "welcome.next": "\u09AA\u09B0\u09C7\u09B0 \u09A7\u09BE\u09AA\u09C7 \u0986\u09AE\u09B0\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7\u09B0 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8 \u099C\u09BF\u099C\u09CD\u099E\u09BE\u09B8\u09BE \u0995\u09B0\u09AC\u0964",
    "welcome.cta": "\u0986\u09AE\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0 \u09B8\u09C7\u099F \u0986\u09AA \u0995\u09B0\u09C1\u09A8",
    "loc.stepLabel": "\u09EB-\u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A7\u09BE\u09AA \u09E8",
    "loc.title": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0 \u0995\u09CB\u09A5\u09BE\u09AF\u09BC?",
    "loc.help": "\u098F\u09A4\u09C7 \u0986\u09AE\u09B0\u09BE \u09B8\u09CD\u09A5\u09BE\u09A8\u09C0\u09AF\u09BC \u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u0993 \u0995\u09BE\u099B\u09BE\u0995\u09BE\u099B\u09BF \u09AC\u09BE\u099C\u09BE\u09B0\u09A6\u09B0 \u099C\u09BE\u09A8\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u0964",
    "loc.state": "\u09B0\u09BE\u099C\u09CD\u09AF",
    "loc.district": "\u099C\u09C7\u09B2\u09BE",
    "loc.village": "\u0997\u09CD\u09B0\u09BE\u09AE",
    "loc.ph.state": "\u09B0\u09BE\u099C\u09CD\u09AF \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8",
    "loc.ph.district": "\u099C\u09C7\u09B2\u09BE \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8",
    "loc.ph.village": "\u0997\u09CD\u09B0\u09BE\u09AE \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8",
    "loc.search": "\u09B0\u09BE\u099C\u09CD\u09AF \u09AC\u09BE \u099C\u09C7\u09B2\u09BE \u0996\u09C1\u0981\u099C\u09C1\u09A8...",
    "loc.other": "\u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF \u2014 \u0986\u09AE\u09BE\u09B0 \u0997\u09CD\u09B0\u09BE\u09AE \u09B2\u09BF\u0996\u09C1\u09A8",
    "loc.villageFreePh": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0997\u09CD\u09B0\u09BE\u09AE \u09AC\u09BE \u098F\u09B2\u09BE\u0995\u09BE\u09B0 \u09A8\u09BE\u09AE \u09B2\u09BF\u0996\u09C1\u09A8",
    "loc.back": "\u09AA\u09BF\u099B\u09A8\u09C7",
    "loc.continue": "\u098F\u0997\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8",
    "land.stepLabel": "\u09EB-\u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A7\u09BE\u09AA \u09E9",
    "land.title": "\u0986\u09AA\u09A8\u09BE\u09B0 \u099C\u09AE\u09BF",
    "land.stub": "\u09AA\u09B0\u09C7\u09B0 \u09A7\u09BE\u09AA\u09C7 \u099C\u09AE\u09BF\u09B0 \u09A4\u09A5\u09CD\u09AF \u0986\u09B8\u09AC\u09C7\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4\u0964",
    "err.required": "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 {field} \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8\u0964",
    "loc.noResults": "\u0995\u09CB\u09A8\u09CB \u09AE\u09BF\u09B2 \u09A8\u09C7\u0987",
    "ph.select": "\u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8",
    "land.help": "\u098F\u09B0 \u0989\u09AA\u09B0\u0987 \u0986\u09AE\u09B0\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u09A6\u09C7\u09AC\u0964",
    "land.area": "\u099C\u09AE\u09BF\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3 (\u098F\u0995\u09B0\u09C7)",
    "land.areaPh": "\u09AF\u09C7\u09AE\u09A8 3.5",
    "land.soil": "\u09AE\u09BE\u099F\u09BF\u09B0 \u09A7\u09B0\u09A8",
    "land.irrigation": "\u09AA\u09BE\u09A8\u09BF\u09B0 \u0989\u09CE\u09B8",
    "soil.black": "\u0995\u09BE\u09B2\u09CB \u09AE\u09BE\u099F\u09BF",
    "soil.red": "\u09B2\u09BE\u09B2 \u09AE\u09BE\u099F\u09BF",
    "soil.sandy": "\u09AC\u09C7\u09B2\u09C7 \u09AE\u09BE\u099F\u09BF",
    "soil.loamy": "\u09A6\u09CB\u0986\u0981\u09B6 \u09AE\u09BE\u099F\u09BF",
    "soil.alluvial": "\u09AA\u09B2\u09BF \u09AE\u09BE\u099F\u09BF",
    "soil.lateritic": "\u09B2\u09CD\u09AF\u09BE\u099F\u09C7\u09B0\u09BE\u0987\u099F \u09AE\u09BE\u099F\u09BF",
    "irrig.rainfed": "\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09A8\u09BF\u09B0\u09CD\u09AD\u09B0",
    "irrig.canal": "\u0996\u09BE\u09B2",
    "irrig.borewell": "\u09AC\u09CB\u09B0\u0993\u09AF\u09BC\u09C7\u09B2",
    "irrig.well": "\u0996\u09CB\u09B2\u09BE \u0995\u09C2\u09AA",
    "irrig.drip": "\u09A1\u09CD\u09B0\u09BF\u09AA \u09B8\u09C7\u099A",
    "irrig.sprinkler": "\u09B8\u09CD\u09AA\u09CD\u09B0\u09BF\u0982\u0995\u09B2\u09BE\u09B0",
    "err.area": "\u0986\u09AA\u09A8\u09BE\u09B0 \u099C\u09AE\u09BF\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3 \u098F\u0995\u09B0\u09C7 \u09B2\u09BF\u0996\u09C1\u09A8\u0964",
    "crop.stepLabel": "\u09EB-\u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A7\u09BE\u09AA \u09EA",
    "crop.title": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AB\u09B8\u09B2",
    "crop.help": "\u098F\u09A4\u09C7 \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AB\u09B8\u09B2\u09C7\u09B0 \u09A6\u09B6\u09BE \u0985\u09A8\u09C1\u09AF\u09BE\u09AF\u09BC\u09C0 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE \u09B9\u09AC\u09C7\u0964",
    "crop.crop": "\u09AB\u09B8\u09B2",
    "crop.variety": "\u099C\u09BE\u09A4",
    "crop.sown": "\u09AC\u09AA\u09A8\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996",
    "crop.other": "\u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF \u2014 \u099C\u09BE\u09A4 \u09B2\u09BF\u0996\u09C1\u09A8",
    "crop.varietyPh": "\u099C\u09BE\u09A4\u09C7\u09B0 \u09A8\u09BE\u09AE \u09B2\u09BF\u0996\u09C1\u09A8",
    "crop.stageNow": "\u0986\u09AA\u09A8\u09BE\u09B0 {crop} {stage} \u09A6\u09B6\u09BE\u09AF\u09BC \u0986\u099B\u09C7\u0964",
    "err.crop": "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u09AB\u09B8\u09B2 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8\u0964",
    "err.variety": "\u099C\u09BE\u09A4 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8 \u09AC\u09BE \u09B2\u09BF\u0996\u09C1\u09A8\u0964",
    "err.sown": "\u09AC\u09AA\u09A8\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8\u0964",
    "s5.stepLabel": "\u09EB-\u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A7\u09BE\u09AA \u09EB",
    "s5.title": "\u098F\u099F\u09BF \u0995\u09BF \u09B8\u09A0\u09BF\u0995?",
    "s5.stub": "\u09AA\u09B0\u09C7\u09B0 \u09A7\u09BE\u09AA\u09C7 \u09AA\u09B0\u09CD\u09AF\u09BE\u09B2\u09CB\u099A\u09A8\u09BE\u09B0 \u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09A8 \u0986\u09B8\u09AC\u09C7\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4\u0964",
    "s5.help": "\u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3\u09C7\u09B0 \u0986\u0997\u09C7 \u09B8\u09AC \u09A6\u09C7\u0996\u09C7 \u09A8\u09BF\u09A8\u0964",
    "s5.locLabel": "\u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8",
    "s5.landLabel": "\u099C\u09AE\u09BF",
    "s5.cropLabel": "\u09AB\u09B8\u09B2",
    "s5.change": "\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8",
    "s5.save": "\u0986\u09AE\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
    "s5.saved": "\u09B8\u09AC \u09A4\u09A5\u09CD\u09AF \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4\u0964 \u09AA\u09B0\u09C7\u09B0 \u09A7\u09BE\u09AA\u09C7 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09A8 \u0986\u09B8\u09AC\u09C7\u0964",
    "s6.stepLabel": "\u09B6\u09C7\u09B7 \u09A7\u09BE\u09AA",
    "s6.title": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
    "s6.help": "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8 \u09AF\u09BE\u09A4\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09A5\u09BE\u0995\u09C7\u0964",
    "s6.tabFarmer": "\u0995\u09C3\u09B7\u0995",
    "s6.tabOfficer": "\u0985\u09AB\u09BF\u09B8\u09BE\u09B0",
    "s6.phone": "\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0",
    "s6.phonePh": "\u09E7\u09E6 \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09B0 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0",
    "s6.sendCode": "\u0995\u09CB\u09A1 \u09AA\u09BE\u09A0\u09BE\u09A8",
    "s6.resendIn": "{seconds} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1\u09C7 \u0986\u09AC\u09BE\u09B0 \u09AA\u09BE\u09A0\u09BE\u09A8",
    "s6.otp": "\u09EC \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09B0 \u0995\u09CB\u09A1",
    "s6.otpPh": "\u09EC \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09B0 \u0995\u09CB\u09A1 \u09B2\u09BF\u0996\u09C1\u09A8",
    "s6.demoOtp": "\u09A1\u09C7\u09AE\u09CB \u0995\u09CB\u09A1: {code}",
    "s6.verify": "\u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
    "s6.staffId": "\u09B8\u09CD\u099F\u09BE\u09AB \u0986\u0987\u09A1\u09BF",
    "s6.password": "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1",
    "s6.signIn": "\u09A1\u09CD\u09AF\u09BE\u09B6\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09B8\u09BE\u0987\u09A8 \u0987\u09A8 \u0995\u09B0\u09C1\u09A8",
    "s6.forgot": "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09AD\u09C1\u09B2\u09C7 \u0997\u09C7\u099B\u09C7\u09A8? \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09B9\u0995\u09BE\u09B0\u09C0 \u09AA\u09B0\u09BF\u099A\u09BE\u09B2\u0995\u09C7\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
    "s6.guest": "\u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u09A8\u09BE \u0995\u09B0\u09C7 \u09A6\u09C7\u0996\u09C1\u09A8 \u2192",
    "s6.signout": "\u09B8\u09BE\u0987\u09A8 \u0986\u0989\u099F",
    "s6.signedInAs": "{who} \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09B8\u09BE\u0987\u09A8 \u0987\u09A8 \u0986\u099B\u09C7\u09A8",
    "s6.successFarmer": "\u09AF\u09BE\u099A\u09BE\u0987 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7! \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 {phone}-\u098F \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4\u0964",
    "s6.successOfficer": "\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE, {name}\u0964 \u0985\u09AB\u09BF\u09B8\u09BE\u09B0 \u09A1\u09CD\u09AF\u09BE\u09B6\u09AC\u09CB\u09B0\u09CD\u09A1 \u09AA\u09B0\u09C7\u09B0 \u09A7\u09BE\u09AA\u09C7 \u0986\u09B8\u09AC\u09C7\u0964",
    "s6.successGuest": "\u0985\u09A4\u09BF\u09A5\u09BF \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09A6\u09C7\u0996\u099B\u09C7\u09A8\u0964 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7 \u0995\u09BF\u099B\u09C1 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09AC\u09C7 \u09A8\u09BE\u0964",
    "s6.continue": "\u098F\u0997\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8",
    "err.auth.phone": "\u09E7\u09E6 \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09B0 \u09B8\u09A0\u09BF\u0995 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09B2\u09BF\u0996\u09C1\u09A8\u0964",
    "err.auth.otpShape": "\u09EC \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09B0 \u0995\u09CB\u09A1 \u09B2\u09BF\u0996\u09C1\u09A8\u0964",
    "err.auth.INVALID_OTP": "\u0995\u09CB\u09A1 \u09AE\u09C7\u09B2\u09C7\u09A8\u09BF\u0964 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
    "err.auth.OTP_EXPIRED": "\u0995\u09CB\u09A1\u09C7\u09B0 \u09AE\u09C7\u09AF\u09BC\u09BE\u09A6 \u09B6\u09C7\u09B7\u0964 \u09A8\u09A4\u09C1\u09A8 \u0995\u09CB\u09A1 \u09AA\u09BE\u09A0\u09BE\u09A8\u0964",
    "err.auth.TOO_MANY_ATTEMPTS": "\u0985\u09A8\u09C7\u0995 \u09AD\u09C1\u09B2 \u099A\u09C7\u09B7\u09CD\u099F\u09BE\u0964 \u09A8\u09A4\u09C1\u09A8 \u0995\u09CB\u09A1 \u09A8\u09BF\u09A8\u0964",
    "err.auth.RATE_LIMITED": "\u0995\u09BF\u099B\u09C1\u0995\u09CD\u09B7\u09A3 \u09AA\u09B0\u09C7 \u0995\u09CB\u09A1 \u09A8\u09BF\u09A8\u0964",
    "err.auth.INVALID_CREDENTIALS": "\u09B8\u09CD\u099F\u09BE\u09AB \u0986\u0987\u09A1\u09BF \u09AC\u09BE \u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09AD\u09C1\u09B2\u0964",
    "err.auth.NETWORK": "\u09B8\u09C7\u09AC\u09BE \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u099A\u09CD\u099B\u09C7 \u09A8\u09BE\u0964 API \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0 \u099A\u09BE\u09B2\u09C1 \u0986\u099B\u09C7 \u0995\u09BF?",
    "intent.stepLabel": "\u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 \u2014 \u09ED-\u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A7\u09BE\u09AA \u09EC",
    "intent.title": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
    "intent.why": "\u098F\u0987 \u0996\u09BE\u09AE\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09A4\u09C7 \u098F\u09AC\u0982 \u0995\u09C3\u09B7\u09BF \u0985\u09AB\u09BF\u09B8\u09BE\u09B0 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09A4\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C1\u09A8\u0964",
    "intent.summary": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09BE \u09A4\u09A5\u09CD\u09AF",
    "intent.benefitsTitle": "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A5\u09BE\u0995\u09B2\u09C7 \u0986\u09AA\u09A8\u09BF",
    "intent.b1": "\u0986\u099C\u0995\u09C7\u09B0 \u09AB\u09B8\u09B2\u09C7\u09B0 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u09AA\u09BE\u09A8",
    "intent.b2": "\u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AD\u09BE\u09B7\u09BE\u09AF\u09BC \u09B6\u09C1\u09A8\u09C1\u09A8",
    "intent.b3": "\u0995\u09C3\u09B7\u09BF \u0985\u09AB\u09BF\u09B8\u09BE\u09B0\u09C7\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8",
    "intent.privacy": "\u0986\u09AE\u09B0\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09B6\u09C1\u09A7\u09C1 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09AF\u09BE\u099A\u09BE\u0987 \u0993 \u0996\u09BE\u09AE\u09BE\u09B0-\u09B8\u0982\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997\u09C7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BF\u0964 \u098F\u099F\u09BF \u0985\u09A8\u09CD\u09AF \u0995\u09C3\u09B7\u0995\u09A6\u09C7\u09B0 \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09AF\u09BC \u09A8\u09BE\u0964",
    "intent.terms": "\u0986\u09AE\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u09C7\u09B0 \u09B6\u09B0\u09CD\u09A4\u09BE\u09AC\u09B2\u09BF \u0993 \u0997\u09CB\u09AA\u09A8\u09C0\u09AF\u09BC\u09A4\u09BE \u09A8\u09CB\u099F\u09BF\u09B6\u09C7 \u09B8\u09AE\u09CD\u09AE\u09A4 \u09B9\u099A\u09CD\u099B\u09BF\u0964",
    "intent.continue": "\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09A6\u09BF\u09AF\u09BC\u09C7 \u098F\u0997\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8",
    "intent.change": "\u0986\u09AE\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF \u09AC\u09A6\u09B2\u09BE\u09A8",
    "err.auth.VALIDATION": "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A6\u09C7\u0996\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
    "err.auth.TOKEN_EXPIRED": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09C7\u09B6\u09A8 \u09B6\u09C7\u09B7\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u09B8\u09BE\u0987\u09A8 \u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
    "err.auth.TOKEN_INVALID": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09C7\u09B6\u09A8 \u09B6\u09C7\u09B7\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u09B8\u09BE\u0987\u09A8 \u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
    "err.auth.NO_TOKEN": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09C7\u09B6\u09A8 \u09B6\u09C7\u09B7\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u09B8\u09BE\u0987\u09A8 \u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
    "err.auth.NO_ACCOUNT": "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0986\u0997\u09C7 \u09AB\u09CB\u09A8 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C1\u09A8\u0964",
    "p.stepLabel": "\u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09B6\u09C7\u09B7",
    "p.title": "\u0986\u09AE\u09B0\u09BE \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u0995\u09C0 \u09AC\u09B2\u09C7 \u09A1\u09BE\u0995\u09AC?",
    "p.help": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BE\u09AE \u09B9\u09CB\u09AE \u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09A8\u09C7 \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09AE\u09CD\u09AC\u09B0 \u0997\u09CB\u09AA\u09A8 \u09A5\u09BE\u0995\u09AC\u09C7\u0964",
    "p.name": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BE\u09AE",
    "p.namePh": "\u09AF\u09C7\u09AE\u09A8 \u09B8\u09C1\u09A8\u09C0\u09A4\u09BE \u09AA\u09BE\u099F\u09BF\u09B2",
    "p.save": "\u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C7 \u09B9\u09CB\u09AE \u0996\u09C1\u09B2\u09C1\u09A8",
    "err.auth.name": "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BE\u09AE \u09B2\u09BF\u0996\u09C1\u09A8\u0964",
    "home.title": "\u0986\u099C\u0995\u09C7\u09B0 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6",
    "home.hello": "\u09A8\u09AE\u09B8\u09CD\u0995\u09BE\u09B0, {name}",
    "home.listen": "\u09B6\u09C1\u09A8\u09C1\u09A8",
    "home.stop": "\u09A5\u09BE\u09AE\u09BE\u09A8",
    "home.ack": "\u0986\u09AE\u09BF \u09AA\u09A1\u09BC\u09C7\u099B\u09BF",
    "home.acked": "\u09AA\u09A1\u09BC\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
    "home.voiceUnavailable": "\u098F\u0987 \u09A1\u09BF\u09AD\u09BE\u0987\u09B8\u09C7 \u0985\u09A1\u09BF\u0993 \u0989\u09AA\u09B2\u09AC\u09CD\u09A7 \u09A8\u09AF\u09BC\u0964",
    "home.guestNote": "\u0986\u09AA\u09A8\u09BF \u0985\u09A4\u09BF\u09A5\u09BF \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09A6\u09C7\u0996\u099B\u09C7\u09A8 \u2014 \u098F\u099F\u09BF \u09AA\u09CD\u09B0\u09A6\u09B0\u09CD\u09B6\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A8\u09AE\u09C1\u09A8\u09BE \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6\u0964",
    "severity.urgent": "\u0986\u099C\u0987 \u0995\u09B0\u09C1\u09A8",
    "severity.warning": "\u09A8\u099C\u09B0 \u09B0\u09BE\u0996\u09C1\u09A8",
    "severity.info": "\u09A4\u09A5\u09CD\u09AF",
    "severity.watch": "\u09B8\u09A4\u09B0\u09CD\u0995",
    "weather.next7": "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0 \u09ED \u09A6\u09BF\u09A8",
    "weather.deficit": "{district}-\u098F \u098F\u0987 \u09AE\u09CC\u09B8\u09C1\u09AE\u09C7\u09B0 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09AA\u09BE\u09A4 \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995\u09C7\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 {pct}% \u0995\u09AE\u0964",
    "weather.surplus": "{district}-\u098F \u098F\u0987 \u09AE\u09CC\u09B8\u09C1\u09AE\u09C7\u09B0 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09AA\u09BE\u09A4 \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995\u09C7\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 {pct}% \u09AC\u09C7\u09B6\u09BF\u0964",
    "weather.normal": "{district}-\u098F \u098F\u0987 \u09AE\u09CC\u09B8\u09C1\u09AE\u09C7\u09B0 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09AA\u09BE\u09A4 \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995\u09C7\u09B0 \u0995\u09BE\u099B\u09BE\u0995\u09BE\u099B\u09BF\u0964",
    "adv.harvestRain.title": "\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u0986\u0997\u09C7 \u09AB\u09B8\u09B2 \u0995\u09C7\u099F\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8",
    "adv.harvestRain.body": "\u0986\u0997\u09BE\u09AE\u09C0 \u09A6\u09C1\u0987 \u09A6\u09BF\u09A8\u09C7 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC {mm} \u09AE\u09BF.\u09AE\u09BF. \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09A8\u09BE \u098F\u09AC\u0982 \u0986\u09AA\u09A8\u09BE\u09B0 {crop} \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4\u0964 \u098F\u0996\u09A8\u0987 \u0995\u09C7\u099F\u09C7 \u09AB\u09B8\u09B2 \u09A2\u09C7\u0995\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8\u0964",
    "adv.harvestRain.why": "\u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 \u09AB\u09B8\u09B2\u09C7 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09B9\u09B2\u09C7 \u09AA\u099A\u09A8 \u09A7\u09B0\u09C7 \u098F\u09AC\u0982 \u09AC\u09BE\u099C\u09BE\u09B0\u09C7 \u09A6\u09BE\u09AE \u0995\u09AE\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964",
    "adv.holdSpray.title": "\u09B8\u09CD\u09AA\u09CD\u09B0\u09C7 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE \u2014 {day} \u09AD\u09BE\u09B0\u09C0 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF",
    "adv.holdSpray.body": "{day} \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC {mm} \u09AE\u09BF.\u09AE\u09BF. \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09A8\u09BE\u0964 \u09B8\u09CD\u09AA\u09CD\u09B0\u09C7 \u09AA\u09C7\u099B\u09A8\u09C7 \u09A0\u09C7\u09B2\u09C7 \u09A6\u09BF\u09A8 \u098F\u09AC\u0982 \u0986\u099C \u09AE\u09BE\u09A0\u09C7\u09B0 \u09A8\u09BE\u09B2\u09BE \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964",
    "adv.holdSpray.why": "\u09AD\u09BE\u09B0\u09C0 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u0986\u0997\u09C7 \u0995\u09B0\u09BE \u09B8\u09CD\u09AA\u09CD\u09B0\u09C7 \u09A7\u09C1\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AF\u09BC \u2014 \u099F\u09BE\u0995\u09BE \u0993 \u0993\u09B7\u09C1\u09A7 \u09A6\u09C1\u099F\u09CB\u0987 \u09A8\u09B7\u09CD\u099F\u0964",
    "adv.irrigate.title": "\u098F\u0995\u099F\u09BF \u09B8\u09C1\u09B0\u0995\u09CD\u09B7\u09BE \u09B8\u09C7\u099A \u09A6\u09BF\u09A8",
    "adv.irrigate.body": "{district}-\u098F \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09AA\u09BE\u09A4 {pct}% \u0995\u09AE \u098F\u09AC\u0982 \u0986\u09AA\u09A8\u09BE\u09B0 {crop} {stage} \u09A6\u09B6\u09BE\u09AF\u09BC \u0986\u099B\u09C7\u0964 \u09A6\u09C1\u0987 \u09A6\u09BF\u09A8\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u098F\u0995\u099F\u09BF \u09B9\u09BE\u09B2\u0995\u09BE \u09B8\u09C7\u099A \u09A6\u09BF\u09A8\u0964",
    "adv.irrigate.why": "\u098F\u0987 \u09A6\u09B6\u09BE\u09AF\u09BC \u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE\u09B0 \u0985\u09AD\u09BE\u09AC\u09C7 \u09AB\u09B2\u09A8 \u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0\u09AD\u09BE\u09AC\u09C7 \u0995\u09AE\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964",
    "adv.heat.title": "\u09A4\u09BE\u09AA\u09C7\u09B0 \u099A\u09BE\u09AA \u2014 \u09AD\u09CB\u09B0\u09C7 \u09B8\u09C7\u099A \u09A6\u09BF\u09A8",
    "adv.heat.body": "\u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A \u09A4\u09BE\u09AA\u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC {tmax}\xB0C\u0964 \u09B8\u0995\u09BE\u09B2 \u09EE\u099F\u09BE\u09B0 \u0986\u0997\u09C7 \u09B8\u09C7\u099A \u09A6\u09BF\u09A8 \u098F\u09AC\u0982 \u09E7\u09E7\u099F\u09BE \u09A5\u09C7\u0995\u09C7 \u09EA\u099F\u09BE\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09B8\u09CD\u09AA\u09CD\u09B0\u09C7 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964",
    "adv.heat.why": "\u09A6\u09C1\u09AA\u09C1\u09B0\u09C7\u09B0 \u09B8\u09CD\u09AA\u09CD\u09B0\u09C7 \u0995\u09BE\u099C \u09B9\u0993\u09AF\u09BC\u09BE\u09B0 \u0986\u0997\u09C7\u0987 \u09B6\u09C1\u0995\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AF\u09BC \u098F\u09AC\u0982 \u09AA\u09BE\u09A4\u09BE \u09AA\u09CB\u09A1\u09BC\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
    "adv.allClear.title": "\u0986\u099C \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09BF\u099B\u09C1 \u0995\u09B0\u09BE\u09B0 \u09A6\u09B0\u0995\u09BE\u09B0 \u09A8\u09C7\u0987",
    "adv.allClear.body": "\u0986\u09AA\u09A8\u09BE\u09B0 {crop} {stage} \u09A6\u09B6\u09BE\u09AF\u09BC \u09AD\u09BE\u09B2\u09CB \u099A\u09B2\u099B\u09C7\u0964 \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995 \u09B0\u09C1\u099F\u09BF\u09A8 \u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8\u0964",
    "adv.allClear.why": "\u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09B8\u09AC \u09B8\u0982\u0995\u09C7\u09A4 \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995 \u09B8\u09C0\u09AE\u09BE\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u0986\u099B\u09C7\u0964",
    "adv.detail.why": "\u098F\u099F\u09BF \u0995\u09C7\u09A8 \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC\u09AA\u09C2\u09B0\u09CD\u09A3",
    "land.acres": "{acres} \u098F\u0995\u09B0",
    "stage.sowing": "\u09AC\u09AA\u09A8",
    "stage.vegetative": "\u09AC\u09C3\u09A6\u09CD\u09A7\u09BF",
    "stage.flowering": "\u09AB\u09C1\u09B2 \u0986\u09B8\u09BE",
    "stage.grain-fill": "\u09A6\u09BE\u09A8\u09BE \u09AD\u09B0\u09BE",
    "stage.maturity": "\u09AA\u09B0\u09BF\u09AA\u0995\u09CD\u09AC\u09A4\u09BE",
    "stage.harvest-ready": "\u09AB\u09B8\u09B2 \u0995\u09BE\u099F\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4",
    "crop.cotton": "\u09A4\u09C1\u09B2\u09BE",
    "crop.onion": "\u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C",
    "crop.soybean": "\u09B8\u09AF\u09BC\u09BE\u09AC\u09BF\u09A8",
    "crop.chilli": "\u09B2\u0999\u09CD\u0995\u09BE",
    "crop.tomato": "\u099F\u09AE\u09C7\u099F\u09CB",
    "crop.wheat": "\u0997\u09AE",
    "crop.rice": "\u09A7\u09BE\u09A8",
    "crop.groundnut": "\u099A\u09BF\u09A8\u09BE\u09AC\u09BE\u09A6\u09BE\u09AE",
    "mandi.title": "\u0995\u09CB\u09A5\u09BE\u09AF\u09BC \u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09AC\u09C7\u09A8 (\u09AC\u09BE\u099C\u09BE\u09B0\u09A6\u09B0)",
    "mandi.help": "\u09AA\u09B0\u09BF\u09AC\u09B9\u09A8 \u0993 \u09AE\u09BE\u09A8\u09CD\u09A1\u09BF \u09AB\u09BF \u09AC\u09BE\u09A6 \u09A6\u09BF\u09AF\u09BC\u09C7 \u09AA\u09CD\u09B0\u0995\u09C3\u09A4 \u09AE\u09CB\u099F \u0986\u09AF\u09BC\u09C7\u09B0 \u09A4\u09C1\u09B2\u09A8\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
    "mandi.cropLabel": "\u09AB\u09B8\u09B2",
    "mandi.qtyLabel": "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3 (\u0995\u09C1\u0987\u09A8\u09CD\u099F\u09BE\u09B2)",
    "mandi.qtyPh": "\u09AF\u09C7\u09AE\u09A8 \u09E8\u09E6",
    "mandi.recalc": "\u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u0997\u09A3\u09A8\u09BE \u0995\u09B0\u09C1\u09A8",
    "mandi.bestNetTag": "\u09B8\u09B0\u09CD\u09AC\u09BE\u09A7\u09BF\u0995 \u09A8\u09BF\u099F \u0986\u09AF\u09BC",
    "mandi.quotedPrice": "\u09AE\u09BE\u09A8\u09CD\u09A1\u09BF \u09A6\u09B0: \u20B9{price}/\u0995\u09C1\u0987\u09A8\u09CD\u099F\u09BE\u09B2",
    "mandi.distance": "{dist} \u0995\u09BF\u09AE\u09BF \u09A6\u09C2\u09B0\u09C7 \xB7 {days}",
    "mandi.gross": "\u09AE\u09CB\u099F \u09AE\u09C2\u09B2\u09CD\u09AF: \u20B9{val}",
    "mandi.transport": "\u09AF\u09BE\u09A4\u09BE\u09AF\u09BC\u09BE\u09A4 \u0996\u09B0\u099A: \u2212\u20B9{val}",
    "mandi.fee": "\u09AE\u09BE\u09A8\u09CD\u09A1\u09BF \u09AB\u09BF: \u2212\u20B9{val}",
    "mandi.net": "\u20B9{val} \u09A8\u09BF\u099F \u09B9\u09BE\u09A4\u09C7 \u09AA\u09BE\u09AC\u09C7\u09A8",
    "mandi.inversion": "\u09AC\u09BF\u099C\u09CD\u099E\u09AA\u09CD\u09A4\u09BF: \u09AF\u09A6\u09BF\u0993 {priceLeader}-\u098F \u09A6\u09B0 \u09AC\u09C7\u09B6\u09BF, \u09AA\u09B0\u09BF\u09AC\u09B9\u09A8 \u0996\u09B0\u099A \u0995\u09AE \u09B9\u0993\u09AF\u09BC\u09BE\u09AF\u09BC {netLeader}-\u098F \u0986\u09AA\u09A8\u09BF \u20B9{gap} \u09AC\u09C7\u09B6\u09BF \u09A8\u09BF\u099F \u0986\u09AF\u09BC \u09AA\u09BE\u09AC\u09C7\u09A8\u0964",
    "mandi.trendUp": "\u0997\u09A4 \u09ED \u09A6\u09BF\u09A8\u09C7 \u09A6\u09B0 {pct}% \u09AC\u09C7\u09A1\u09BC\u09C7\u099B\u09C7",
    "mandi.trendDown": "\u0997\u09A4 \u09ED \u09A6\u09BF\u09A8\u09C7 \u09A6\u09B0 {pct}% \u0995\u09AE\u09C7\u099B\u09C7",
    "mandi.trendFlat": "\u0997\u09A4 \u09ED \u09A6\u09BF\u09A8\u09C7 \u09A6\u09B0 \u09B8\u09CD\u09A5\u09BF\u09B0",
    "help.title": "\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8?",
    "help.help": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0995\u09C3\u09B7\u09BF \u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8 \u09AC\u09BE \u09B9\u09C7\u09B2\u09CD\u09AA\u09B2\u09BE\u0987\u09A8\u09C7 \u0995\u09B2 \u0995\u09B0\u09C1\u09A8\u0964",
    "help.officerTitle": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BF\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09C3\u09B7\u09BF \u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE",
    "help.officerRole": "\u0995\u09C3\u09B7\u09BF \u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8 \u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE (ADO)",
    "help.callBtn": "\u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE\u0995\u09C7 \u0995\u09B2 \u0995\u09B0\u09C1\u09A8",
    "help.visitBtn": "\u0996\u09BE\u09AE\u09BE\u09B0 \u09AA\u09B0\u09BF\u09A6\u09B0\u09CD\u09B6\u09A8\u09C7\u09B0 \u0985\u09A8\u09C1\u09B0\u09CB\u09A7",
    "help.visitTitle": "\u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE\u09B0 \u09AA\u09B0\u09BF\u09A6\u09B0\u09CD\u09B6\u09A8\u09C7\u09B0 \u0985\u09A8\u09C1\u09B0\u09CB\u09A7",
    "help.visitDateLabel": "\u09AA\u099B\u09A8\u09CD\u09A6\u09C7\u09B0 \u09AA\u09B0\u09BF\u09A6\u09B0\u09CD\u09B6\u09A8\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996",
    "help.visitReasonLabel": "\u09AA\u09B0\u09BF\u09A6\u09B0\u09CD\u09B6\u09A8\u09C7\u09B0 \u0995\u09BE\u09B0\u09A3 (\u0990\u099A\u09CD\u099B\u09BF\u0995)",
    "help.visitReasonPh": "\u09AF\u09C7\u09AE\u09A8 \u09AA\u09CB\u0995\u09BE\u09B0 \u0986\u0995\u09CD\u09B0\u09AE\u09A3, \u0995\u09CD\u09B7\u09A4\u09BF\u09B0 \u09AE\u09C2\u09B2\u09CD\u09AF\u09BE\u09AF\u09BC\u09A8",
    "help.visitSubmit": "\u0985\u09A8\u09C1\u09B0\u09CB\u09A7 \u099C\u09AE\u09BE \u09A6\u09BF\u09A8",
    "help.visitCancel": "\u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09C1\u09A8",
    "help.visitSuccess": "\u09AA\u09B0\u09BF\u09A6\u09B0\u09CD\u09B6\u09A8\u09C7\u09B0 \u0985\u09A8\u09C1\u09B0\u09CB\u09A7 \u099C\u09AE\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE {name}-\u0995\u09C7 \u099C\u09BE\u09A8\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964",
    "help.helplinesTitle": "\u099C\u09B0\u09C1\u09B0\u09C0 \u09B9\u09C7\u09B2\u09CD\u09AA\u09B2\u09BE\u0987\u09A8",
    "help.kcc": "\u0995\u09BF\u09B7\u09BE\u09A3 \u0995\u09B2 \u09B8\u09C7\u09A8\u09CD\u099F\u09BE\u09B0 (\u099F\u09CB\u09B2 \u09AB\u09CD\u09B0\u09BF)",
    "help.kccPhone": "1800-180-1551",
    "help.disasterLine": "\u09B0\u09BE\u099C\u09CD\u09AF \u0995\u09C3\u09B7\u09BF \u09AC\u09BF\u09AA\u09B0\u09CD\u09AF\u09AF\u09BC \u0993 \u09B8\u0982\u0995\u099F \u09B9\u09C7\u09B2\u09CD\u09AA\u09B2\u09BE\u0987\u09A8",
    "help.disasterPhone": "1800-120-8040",
    "loan.title": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0 \u098B\u09A3\u09C7\u09B0 \u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE \u0995\u09B0\u09C1\u09A8",
    "loan.help": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0987\u098F\u09AE\u0986\u0987 \u098F\u09AC\u0982 \u09B8\u09C1\u09A6\u09C7\u09B0 \u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE \u0995\u09B0\u09C1\u09A8\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u0997\u09CB\u09AA\u09A8 \u09B0\u09BE\u0996\u09BE \u09B9\u09AC\u09C7\u0964",
    "loan.amount": "\u098B\u09A3\u09C7\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3 (\u20B9)",
    "loan.tenure": "\u09B8\u09AE\u09AF\u09BC\u0995\u09BE\u09B2 (\u09AE\u09BE\u09B8)",
    "loan.rate": "\u09B8\u09C1\u09A6\u09C7\u09B0 \u09B9\u09BE\u09B0 (%)",
    "loan.calculate": "\u09B9\u09BF\u09B8\u09BE\u09AC \u0995\u09B0\u09C1\u09A8 \u098F\u09AC\u0982 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
    "loan.resultTitle": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u09A8",
    "loan.emi": "\u09AE\u09BE\u09B8\u09BF\u0995 \u0995\u09BF\u09B8\u09CD\u09A4\u09BF (EMI)",
    "loan.totalInterest": "\u09AE\u09CB\u099F \u09B8\u09C1\u09A6",
    "loan.totalPayment": "\u09AE\u09CB\u099F \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F",
    "loan.kccNote": "\u0995\u09BF\u09B8\u09BE\u09A8 \u0995\u09CD\u09B0\u09C7\u09A1\u09BF\u099F \u0995\u09BE\u09B0\u09CD\u09A1 (KCC) 7% \u09B9\u09BE\u09B0\u09C7 \u09AB\u09B8\u09B2 \u098B\u09A3 \u09A6\u09C7\u09AF\u09BC\u0964 \u09B8\u09AE\u09AF\u09BC\u09AE\u09A4\u09CB \u09AA\u09B0\u09BF\u09B6\u09CB\u09A7 \u0995\u09B0\u09B2\u09C7 3% \u099B\u09BE\u09A1\u09BC \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC, \u09AB\u09B2\u09C7 \u09B9\u09BE\u09B0 4% \u09B9\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964",
    "nav.loan": "\u0986\u09AE\u09BE\u09B0 \u098B\u09A3",
    "nav.home": "\u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6",
    "nav.mandi": "\u0995\u09CB\u09A5\u09BE\u09AF\u09BC \u09AC\u09BF\u0995\u09CD\u09B0\u09BF",
    "nav.help": "\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF",
    "nav.profile": "\u0986\u09AE\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0",
    "profile.title": "\u0986\u09AE\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0 \u0993 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2",
    "profile.phoneLabel": "\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0",
    "profile.locLabel": "\u0996\u09BE\u09AE\u09BE\u09B0\u09C7\u09B0 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8",
    "profile.landLabel": "\u099C\u09AE\u09BF\u09B0 \u09AC\u09BF\u09AC\u09B0\u09A3",
    "profile.cropLabel": "\u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09AB\u09B8\u09B2",
    "profile.langLabel": "\u0985\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0 \u09AD\u09BE\u09B7\u09BE",
    "profile.change": "\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09C1\u09A8",
    "profile.signout": "\u09B8\u09BE\u0987\u09A8 \u0986\u0989\u099F",
    "officer.logAction": "\u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B2\u09BF\u0996\u09C1\u09A8",
    "officer.actionTitle": "{name} -\u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B2\u09BF\u0996\u09C1\u09A8",
    "officer.actionTypeLabel": "\u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE\u09C7\u09B0 \u09A7\u09B0\u09A8",
    "officer.actionNotesLabel": "\u09A8\u09CB\u099F (\u0990\u099A\u09CD\u099B\u09BF\u0995)",
    "officer.actionNotesPh": "\u0986\u09AA\u09A8\u09BF \u0995\u09C0 \u09A6\u09C7\u0996\u09C7\u099B\u09C7\u09A8 \u09AC\u09BE \u0995\u09C0 \u0995\u09B0\u09C7\u099B\u09C7\u09A8?",
    "officer.actionSubmit": "\u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
    "officer.actionLabel": "\u09B6\u09C7\u09B7 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE",
    "officer.noAction": "\u098F\u0996\u09A8\u09CB \u0995\u09CB\u09A8\u09CB \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B2\u09C7\u0996\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF",
    "officer.action.call_made": "\u0995\u09B2 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
    "officer.action.visit_done": "\u0996\u09BE\u09AE\u09BE\u09B0 \u09AA\u09B0\u09BF\u09A6\u09B0\u09CD\u09B6\u09A8",
    "officer.action.referral": "\u09B0\u09C7\u09AB\u09BE\u09B0\u09BE\u09B2",
    "officer.action.advisory_given": "\u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
    "officer.action.follow_up": "\u09AB\u09B2\u09CB-\u0986\u09AA \u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09BF\u09A4",
    "help.schemesTitle": "\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09B8\u09CD\u0995\u09BF\u09AE",
    "help.scheme1Title": "\u09AA\u09BF\u098F\u09AE-\u0995\u09BF\u09B8\u09BE\u09A8",
    "help.scheme1Desc": "\u09B8\u0995\u09B2 \u0995\u09C3\u09B7\u0995\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BE\u09B0\u09CD\u09B7\u09BF\u0995 \u20B9\u09EC\u09E6\u09E6\u09E6 \u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE\u0964",
    "help.scheme2Title": "\u09AA\u09BF\u098F\u09AE\u098F\u09AB\u09AC\u09BF\u0993\u09AF\u09BC\u09BE\u0987 (\u09AB\u09B8\u09B2 \u09AC\u09BF\u09AE\u09BE)",
    "help.scheme2Desc": "\u09AA\u09CD\u09B0\u09BE\u0995\u09C3\u09A4\u09BF\u0995 \u09A6\u09C1\u09B0\u09CD\u09AF\u09CB\u0997\u09C7 \u09AB\u09B8\u09B2\u09C7\u09B0 \u0995\u09CD\u09B7\u09A4\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BF\u09AE\u09BE \u0995\u09AD\u09BE\u09B0\u09C7\u099C\u0964",
    "adv.waterlog.title": "\u09A8\u09BE\u09B2\u09BE \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8 \u2014 \u099C\u09B2\u09BE\u09AC\u09A6\u09CD\u09A7\u09A4\u09BE\u09B0 \u099D\u09C1\u0981\u0995\u09BF",
    "adv.waterlog.body": "\u0986\u0997\u09BE\u09AE\u09C0 \u09A4\u09BF\u09A8 \u09A6\u09BF\u09A8\u09C7 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC {mm} \u09AE\u09BF\u09AE\u09BF \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 {soil} \u09AE\u09BE\u099F\u09BF \u09A7\u09C0\u09B0\u09C7 \u09B6\u09C1\u0995\u09BE\u09AF\u09BC \u2014 \u098F\u0996\u09A8\u0987 \u09A8\u09BE\u09B2\u09BE \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964",
    "adv.waterlog.why": "\u099C\u09B2\u09BE\u09AC\u09A6\u09CD\u09A7 \u09B6\u09BF\u0995\u09A1\u09BC \u09AA\u09C1\u09B7\u09CD\u099F\u09BF \u09B6\u09CB\u09B7\u09A3 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964 \u09A6\u09C1\u0987 \u09A6\u09BF\u09A8\u09C7\u09B0 \u099C\u09AE\u09BE \u099C\u09B2\u0993 \u09AB\u09B8\u09B2\u09C7\u09B0 \u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u0995\u09CD\u09B7\u09A4\u09BF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
    "adv.rainfedStress.title": "\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09A8\u09BF\u09B0\u09CD\u09AD\u09B0 \u09AB\u09B8\u09B2\u09C7 \u09AE\u09A8\u09CB\u09AF\u09CB\u0997 \u09A6\u09BF\u09A8",
    "adv.rainfedStress.body": "{district}-\u098F \u09AC\u09C3\u09B7\u09CD\u099F\u09BF \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995\u09C7\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 {pct}% \u0995\u09AE\u0964 \u0986\u09AA\u09A8\u09BE\u09B0 {crop} {stage} \u09AA\u09B0\u09CD\u09AF\u09BE\u09AF\u09BC\u09C7 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09B0 \u0989\u09AA\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AD\u09B0\u09B6\u09C0\u09B2\u0964",
    "adv.rainfedStress.why": "\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09A8\u09BF\u09B0\u09CD\u09AD\u09B0 \u099C\u09AE\u09BF\u09A4\u09C7 \u09AC\u09B0\u09CD\u09B7\u09BE \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2 \u09B9\u09B2\u09C7 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09B0\u0995\u09CD\u09B7\u09BE \u09A5\u09BE\u0995\u09C7 \u09A8\u09BE\u0964 \u09B6\u09C1\u09B7\u09CD\u0995 \u09B8\u09AE\u09AF\u09BC\u09C7 \u098F\u0995\u099F\u09BF \u09B8\u09C7\u099A\u0993 \u09AB\u09B2\u09A8 \u09AC\u09BE\u0981\u099A\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",
    "adv.fungalWatch.title": "\u099B\u09A4\u09CD\u09B0\u09BE\u0995\u09C7\u09B0 \u09A6\u09BE\u0997 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8",
    "adv.fungalWatch.body": "\u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE {humidity}% \u098F\u09AC\u0982 \u0986\u09AA\u09A8\u09BE\u09B0 {crop} \u0995\u09BE\u09B2\u09CB \u09AE\u09BE\u099F\u09BF\u09A4\u09C7 \u09AB\u09C1\u09B2\u099B\u09C7\u0964 \u09AA\u09BE\u09A4\u09BE\u09AF\u09BC \u09A6\u09BE\u0997 \u09AC\u09BE \u09AC\u09BF\u09AC\u09B0\u09CD\u09A3\u09A4\u09BE \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
    "adv.fungalWatch.why": "\u0995\u09BE\u09B2\u09CB \u09AE\u09BE\u099F\u09BF \u09AC\u09C7\u09B6\u09BF\u0995\u09CD\u09B7\u09A3 \u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE \u09A7\u09B0\u09C7 \u09B0\u09BE\u0996\u09C7\u0964 \u09AB\u09C1\u09B2\u09C7\u09B0 \u09B8\u09AE\u09AF\u09BC \u0989\u099A\u09CD\u099A \u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE\u09AF\u09BC \u099B\u09A4\u09CD\u09B0\u09BE\u0995 \u09A6\u09CD\u09B0\u09C1\u09A4 \u099B\u09A1\u09BC\u09BE\u09AF\u09BC\u0964",
    "officer.dashTitle": "\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE, {name}",
    "officer.jurisdictionLine": "\u0995\u09C3\u09B7\u09BF \u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8 \u0995\u09B0\u09CD\u09AE\u0995\u09B0\u09CD\u09A4\u09BE (ADO) \xB7 {district} \u099C\u09C7\u09B2\u09BE",
    "officer.bandCritical": "\u0997\u09C1\u09B0\u09C1\u09A4\u09B0 \u099D\u09C1\u0981\u0995\u09BF",
    "officer.bandHigh": "\u0989\u099A\u09CD\u099A \u099D\u09C1\u0981\u0995\u09BF",
    "officer.bandMedium": "\u09AE\u09BE\u099D\u09BE\u09B0\u09BF \u099D\u09C1\u0981\u0995\u09BF",
    "officer.bandTotal": "\u09AE\u09CB\u099F \u09AA\u09B0\u09CD\u09AF\u09AC\u09C7\u0995\u09CD\u09B7\u09A3",
    "officer.caseloadHeading": "\u0985\u0997\u09CD\u09B0\u09BE\u09A7\u09BF\u0995\u09BE\u09B0 \u0985\u09A8\u09C1\u09AF\u09BE\u09AF\u09BC\u09C0 \u0995\u09C3\u09B7\u0995 \u09A4\u09BE\u09B2\u09BF\u0995\u09BE",
    "officer.searchPh": "\u0995\u09C3\u09B7\u0995 \u09AC\u09BE \u0997\u09CD\u09B0\u09BE\u09AE \u0996\u09C1\u0981\u099C\u09C1\u09A8...",
    "officer.action.resolved": "\u09B8\u09AE\u09BE\u09A7\u09BE\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
    "officer.action.review_later": "\u09AA\u09B0\u09C7 \u09AA\u09B0\u09CD\u09AF\u09BE\u09B2\u09CB\u099A\u09A8\u09BE \u0995\u09B0\u09C1\u09A8"
  };
  var ta = {
    "gate.choose": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BCA\u0BB4\u0BBF\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "gate.prompt": "\u0B87\u0BA4\u0BA9\u0BC8 \u0B8E\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BBE\u0BA9\u0BBE\u0BB2\u0BC1\u0BAE\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BB2\u0BBE\u0BAE\u0BCD.",
    "gate.preview": "{language} \u0B92\u0BB2\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BC1.",
    "gate.unavailable": "\u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BBE\u0BA4\u0BA9\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B92\u0BB2\u0BBF \u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BCB\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.",
    "brand.tagline": "\u0BAA\u0BAF\u0BBF\u0BB0\u0BCD \u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD \u0B8E\u0B9A\u0BCD\u0B9A\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD",
    "welcome.stepLabel": "5 \u0B87\u0BB2\u0BCD \u0BAA\u0B9F\u0BBF 1",
    "welcome.title": "\u0B95\u0BBF\u0B9A\u0BBE\u0BA9\u0BCD \u0B9A\u0BBE\u0BA4\u0BCD\u0BA4\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD",
    "welcome.text": "\u0BAE\u0BC1\u0BA4\u0BB2\u0BBF\u0BB2\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BCA\u0BB4\u0BBF\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD. \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1\u0BB5\u0BA4\u0BC1\u0BAE\u0BCD \u0B85\u0BA4\u0BC7 \u0BAE\u0BCA\u0BB4\u0BBF \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.",
    "welcome.next": "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8\u0BAF\u0BBF\u0BA9\u0BCD \u0B87\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8\u0B95\u0BCD \u0B95\u0BC7\u0B9F\u0BCD\u0BAA\u0BCB\u0BAE\u0BCD.",
    "welcome.cta": "\u0B8E\u0BA9\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8\u0BAF\u0BC8 \u0B85\u0BAE\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "loc.stepLabel": "5 \u0B87\u0BB2\u0BCD \u0BAA\u0B9F\u0BBF 2",
    "loc.title": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0B8E\u0B99\u0BCD\u0B95\u0BC7?",
    "loc.help": "\u0B87\u0BA4\u0BA9\u0BBE\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BC2\u0BB0\u0BCD \u0BB5\u0BBE\u0BA9\u0BBF\u0BB2\u0BC8 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B85\u0BB0\u0BC1\u0B95\u0BBF\u0BB2\u0BC1\u0BB3\u0BCD\u0BB3 \u0B9A\u0BA8\u0BCD\u0BA4\u0BC8 \u0BB5\u0BBF\u0BB2\u0BC8\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BC2\u0BB1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BAF\u0BC1\u0BAE\u0BCD.",
    "loc.state": "\u0BAE\u0BBE\u0BA8\u0BBF\u0BB2\u0BAE\u0BCD",
    "loc.district": "\u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    "loc.village": "\u0B95\u0BBF\u0BB0\u0BBE\u0BAE\u0BAE\u0BCD",
    "loc.ph.state": "\u0BAE\u0BBE\u0BA8\u0BBF\u0BB2\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "loc.ph.district": "\u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "loc.ph.village": "\u0B95\u0BBF\u0BB0\u0BBE\u0BAE\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "loc.search": "\u0BAE\u0BBE\u0BA8\u0BBF\u0BB2\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD...",
    "loc.other": "\u0BAE\u0BB1\u0BCD\u0BB1\u0BB5\u0BC8 \u2014 \u0B8E\u0BA9\u0BCD \u0B95\u0BBF\u0BB0\u0BBE\u0BAE\u0BA4\u0BCD\u0BA4\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "loc.villageFreePh": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BBF\u0BB0\u0BBE\u0BAE\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "loc.back": "\u0BAA\u0BBF\u0BA9\u0BCD\u0B9A\u0BC6\u0BB2\u0BCD",
    "loc.continue": "\u0BA4\u0BCA\u0B9F\u0BB0\u0BB5\u0BC1\u0BAE\u0BCD",
    "land.stepLabel": "5 \u0B87\u0BB2\u0BCD \u0BAA\u0B9F\u0BBF 3",
    "land.title": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA8\u0BBF\u0BB2\u0BAE\u0BCD",
    "land.stub": "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAA\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BA8\u0BBF\u0BB2 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB0\u0BC1\u0BAE\u0BCD. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B87\u0B9F\u0BAE\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.",
    "err.required": "\u0BA4\u0BAF\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1 {field} \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "loc.noResults": "\u0BAA\u0BCA\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BAE\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
    "ph.select": "\u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "land.help": "\u0B87\u0BA4\u0BA9\u0BCD \u0B85\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC8\u0BAF\u0BBF\u0BB2\u0BC7\u0BAF\u0BC7 \u0B92\u0BB5\u0BCD\u0BB5\u0BCA\u0BB0\u0BC1 \u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0B85\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.",
    "land.area": "\u0BA8\u0BBF\u0BB2 \u0BAA\u0BB0\u0BAA\u0BCD\u0BAA\u0BC1 (\u0B8F\u0B95\u0BCD\u0B95\u0BB0\u0BCD)",
    "land.areaPh": "\u0B8E.\u0B95\u0BBE. 3.5",
    "land.soil": "\u0BAE\u0BA3\u0BCD \u0BB5\u0B95\u0BC8",
    "land.irrigation": "\u0BA8\u0BC0\u0BB0\u0BCD \u0B86\u0BA4\u0BBE\u0BB0\u0BAE\u0BCD",
    "soil.black": "\u0B95\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAE\u0BA3\u0BCD",
    "soil.red": "\u0B9A\u0BBF\u0BB5\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAE\u0BA3\u0BCD",
    "soil.sandy": "\u0BAE\u0BA3\u0BB2\u0BCD \u0BAE\u0BA3\u0BCD",
    "soil.loamy": "\u0BB2\u0BCB\u0BAE\u0BBF \u0BAE\u0BA3\u0BCD",
    "soil.alluvial": "\u0BB5\u0BA3\u0BCD\u0B9F\u0BB2\u0BCD \u0BAE\u0BA3\u0BCD",
    "soil.lateritic": "\u0BB2\u0BC7\u0B9F\u0BCD\u0B9F\u0BC6\u0BB0\u0BC8\u0B9F\u0BCD \u0BAE\u0BA3\u0BCD",
    "irrig.rainfed": "\u0BAE\u0BB4\u0BC8\u0BAF\u0BC8\u0B9A\u0BCD \u0B9A\u0BBE\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1",
    "irrig.canal": "\u0B95\u0BBE\u0BB2\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD",
    "irrig.borewell": "\u0BAA\u0BCB\u0BB0\u0BCD\u0BB5\u0BC6\u0BB2\u0BCD",
    "irrig.well": "\u0BA4\u0BBF\u0BB1\u0BA8\u0BCD\u0BA4 \u0B95\u0BBF\u0BA3\u0BB1\u0BC1",
    "irrig.drip": "\u0B9A\u0BCA\u0B9F\u0BCD\u0B9F\u0BC1 \u0BA8\u0BC0\u0BB0\u0BCD \u0BAA\u0BBE\u0B9A\u0BA9\u0BAE\u0BCD",
    "irrig.sprinkler": "\u0BA4\u0BC6\u0BB3\u0BBF\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9\u0BCD \u0BAA\u0BBE\u0B9A\u0BA9\u0BAE\u0BCD",
    "err.area": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA8\u0BBF\u0BB2 \u0BAA\u0BB0\u0BAA\u0BCD\u0BAA\u0BC8 \u0B8F\u0B95\u0BCD\u0B95\u0BB0\u0BBF\u0BB2\u0BCD \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "crop.stepLabel": "5 \u0B87\u0BB2\u0BCD \u0BAA\u0B9F\u0BBF 4",
    "crop.title": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BAF\u0BBF\u0BB0\u0BCD",
    "crop.help": "\u0B87\u0BA4\u0BA9\u0BCD \u0BAE\u0BC2\u0BB2\u0BAE\u0BCD \u0B92\u0BB5\u0BCD\u0BB5\u0BCA\u0BB0\u0BC1 \u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BAF\u0BBF\u0BB0\u0BCD \u0BA8\u0BBF\u0BB2\u0BC8\u0B95\u0BCD\u0B95\u0BC7\u0BB1\u0BCD\u0BAA \u0BA4\u0BB0\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.",
    "crop.crop": "\u0BAA\u0BAF\u0BBF\u0BB0\u0BCD",
    "crop.variety": "\u0BB0\u0B95\u0BAE\u0BCD",
    "crop.sown": "\u0BB5\u0BBF\u0BA4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 \u0BA4\u0BC7\u0BA4\u0BBF",
    "crop.other": "\u0BAE\u0BB1\u0BCD\u0BB1\u0BB5\u0BC8 \u2014 \u0BB0\u0B95\u0BA4\u0BCD\u0BA4\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "crop.varietyPh": "\u0BB0\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "crop.stageNow": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {crop} {stage} \u0BA8\u0BBF\u0BB2\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1.",
    "err.crop": "\u0BAA\u0BAF\u0BBF\u0BB0\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "err.variety": "\u0BB0\u0B95\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B8E\u0BB4\u0BC1\u0BA4\u0BB5\u0BC1\u0BAE\u0BCD.",
    "err.sown": "\u0BB5\u0BBF\u0BA4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 \u0BA4\u0BC7\u0BA4\u0BBF\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "s5.stepLabel": "5 \u0B87\u0BB2\u0BCD \u0BAA\u0B9F\u0BBF 5",
    "s5.title": "\u0B87\u0BA4\u0BC1 \u0B9A\u0BB0\u0BBF\u0BAF\u0BBE\u0B95 \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BBE?",
    "s5.stub": "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAA\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BCD \u0BA4\u0BBF\u0BB0\u0BC8 \u0BB5\u0BB0\u0BC1\u0BAE\u0BCD. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1\u0BB3\u0BCD\u0BB3\u0BA9.",
    "s5.help": "\u0B9A\u0BC7\u0BAE\u0BBF\u0BAA\u0BCD\u0BAA\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD \u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "s5.locLabel": "\u0B87\u0B9F\u0BAE\u0BCD",
    "s5.landLabel": "\u0BA8\u0BBF\u0BB2\u0BAE\u0BCD",
    "s5.cropLabel": "\u0BAA\u0BAF\u0BBF\u0BB0\u0BCD",
    "s5.change": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
    "s5.save": "\u0B8E\u0BA9\u0BCD \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF",
    "s5.saved": "\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0BAE\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA9. \u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAA\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC1\u0BA4\u0BCD \u0BA4\u0BBF\u0BB0\u0BC8 \u0BB5\u0BB0\u0BC1\u0BAE\u0BCD.",
    "s6.stepLabel": "\u0B87\u0BB1\u0BC1\u0BA4\u0BBF \u0BAA\u0B9F\u0BBF",
    "s6.title": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0BA4\u0BCD\u0BA4\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "s6.help": "\u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC8 \u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u2014 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD.",
    "s6.tabFarmer": "\u0BB5\u0BBF\u0BB5\u0B9A\u0BBE\u0BAF\u0BBF",
    "s6.tabOfficer": "\u0B85\u0BA4\u0BBF\u0B95\u0BBE\u0BB0\u0BBF",
    "s6.phone": "\u0B95\u0BC8\u0BAA\u0BC7\u0B9A\u0BBF \u0B8E\u0BA3\u0BCD",
    "s6.phonePh": "10 \u0B87\u0BB2\u0B95\u0BCD\u0B95 \u0B95\u0BC8\u0BAA\u0BC7\u0B9A\u0BBF \u0B8E\u0BA3\u0BCD",
    "s6.sendCode": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC8 \u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1",
    "s6.resendIn": "{seconds} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1",
    "s6.otp": "6 \u0B87\u0BB2\u0B95\u0BCD\u0B95 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1",
    "s6.otpPh": "6 \u0B87\u0BB2\u0B95\u0BCD\u0B95 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "s6.demoOtp": "\u0B9F\u0BC6\u0BAE\u0BCB \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1: {code}",
    "s6.verify": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1 \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "s6.staffId": "\u0B8A\u0BB4\u0BBF\u0BAF\u0BB0\u0BCD \u0B90\u0B9F\u0BBF",
    "s6.password": "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD",
    "s6.signIn": "\u0B9F\u0BBE\u0BB7\u0BCD\u0BAA\u0BCB\u0BB0\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "s6.forgot": "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD \u0BAE\u0BB1\u0BA8\u0BCD\u0BA4\u0BA4\u0BBE? \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B89\u0BA4\u0BB5\u0BBF \u0B87\u0BAF\u0B95\u0BCD\u0B95\u0BC1\u0BA8\u0BB0\u0BC8\u0BA4\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "s6.guest": "\u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BBE\u0BAE\u0BB2\u0BCD \u0BAA\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u2192",
    "s6.signout": "\u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC7\u0BB1\u0BC1",
    "s6.signedInAs": "{who} \u0B86\u0B95 \u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0BA8\u0BCD\u0BA4\u0BC1\u0BB3\u0BCD\u0BB3\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD",
    "s6.successFarmer": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1! \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD {phone}-\u0B87\u0BB2\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.",
    "s6.successOfficer": "\u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD, {name}. \u0B85\u0BA4\u0BBF\u0B95\u0BBE\u0BB0\u0BBF \u0B9F\u0BBE\u0BB7\u0BCD\u0BAA\u0BCB\u0BB0\u0BCD\u0B9F\u0BC1 \u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAA\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BB5\u0BB0\u0BC1\u0BAE\u0BCD.",
    "s6.successGuest": "\u0BB5\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BBF\u0BA9\u0BB0\u0BBE\u0B95\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD. \u0B9A\u0BC7\u0BB5\u0BC8\u0BAF\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B8E\u0BA4\u0BC1\u0BB5\u0BC1\u0BAE\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BBE\u0BA4\u0BC1.",
    "s6.continue": "\u0BA4\u0BCA\u0B9F\u0BB0\u0BB5\u0BC1\u0BAE\u0BCD",
    "err.auth.phone": "\u0B9A\u0BB0\u0BBF\u0BAF\u0BBE\u0BA9 10 \u0B87\u0BB2\u0B95\u0BCD\u0B95 \u0B95\u0BC8\u0BAA\u0BC7\u0B9A\u0BBF \u0B8E\u0BA3\u0BCD\u0BA3\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.otpShape": "6 \u0B87\u0BB2\u0B95\u0BCD\u0B95 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.INVALID_OTP": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8. \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "err.auth.OTP_EXPIRED": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0B95\u0BBE\u0BB2\u0BBE\u0BB5\u0BA4\u0BBF\u0BAF\u0BBE\u0BA9\u0BA4\u0BC1. \u0BAA\u0BC1\u0BA4\u0BBF\u0BAF\u0BA4\u0BC8 \u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.TOO_MANY_ATTEMPTS": "\u0B85\u0BA4\u0BBF\u0B95 \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BB3\u0BCD. \u0BAA\u0BC1\u0BA4\u0BBF\u0BAF \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0B95\u0BCB\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.RATE_LIMITED": "\u0B95\u0BCA\u0B9E\u0BCD\u0B9A\u0BAE\u0BCD \u0B95\u0BB4\u0BBF\u0BA4\u0BCD\u0BA4\u0BC1 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1 \u0B95\u0BCB\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.INVALID_CREDENTIALS": "\u0B8A\u0BB4\u0BBF\u0BAF\u0BB0\u0BCD \u0B90\u0B9F\u0BBF \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BC1.",
    "err.auth.NETWORK": "\u0B9A\u0BC7\u0BB5\u0BC8 \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8. API \u0B9A\u0BC7\u0BB5\u0BC8\u0BAF\u0B95\u0BAE\u0BCD \u0B87\u0BAF\u0B99\u0BCD\u0B95\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BBE?",
    "intent.stepLabel": "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F \u0BA4\u0BAF\u0BBE\u0BB0\u0BCD \u2014 7 \u0B87\u0BB2\u0BCD \u0BAA\u0B9F\u0BBF 6",
    "intent.title": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0BA4\u0BCD\u0BA4\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "intent.why": "\u0B87\u0BA8\u0BCD\u0BA4 \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BBE\u0B95\u0B9A\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD, \u0BB5\u0BC7\u0BB3\u0BBE\u0BA3\u0BCD \u0B85\u0BA4\u0BBF\u0B95\u0BBE\u0BB0\u0BBF \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BB5\u0BC1\u0BAE\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BC8\u0BAA\u0BC7\u0B9A\u0BBF \u0B8E\u0BA3\u0BCD\u0BA3\u0BC8\u0B9A\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "intent.summary": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "intent.benefitsTitle": "\u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC1\u0B9F\u0BA9\u0BCD \u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "intent.b1": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC8\u0BAF \u0BAA\u0BAF\u0BBF\u0BB0\u0BCD \u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8 \u0BAA\u0BC6\u0BB1\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "intent.b2": "\u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8\u0BAF\u0BC8 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BCA\u0BB4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "intent.b3": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BC7\u0BB3\u0BBE\u0BA3\u0BCD \u0B85\u0BA4\u0BBF\u0B95\u0BBE\u0BB0\u0BBF\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "intent.privacy": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BC8\u0BAA\u0BC7\u0B9A\u0BBF \u0B8E\u0BA3\u0BCD \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC1 \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BC7 \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. \u0BAE\u0BB1\u0BCD\u0BB1 \u0BB5\u0BBF\u0BB5\u0B9A\u0BBE\u0BAF\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BA4\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4\u0BC1.",
    "intent.terms": "\u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1 \u0BB5\u0BBF\u0BA4\u0BBF\u0BAE\u0BC1\u0BB1\u0BC8\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BA9\u0BBF\u0BAF\u0BC1\u0BB0\u0BBF\u0BAE\u0BC8 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC8 \u0B92\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BCD\u0B95\u0BCA\u0BB3\u0BCD\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD.",
    "intent.continue": "\u0B95\u0BC8\u0BAA\u0BC7\u0B9A\u0BBF \u0B8E\u0BA3\u0BCD\u0BA3\u0BC1\u0B9F\u0BA9\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BB5\u0BC1\u0BAE\u0BCD",
    "intent.change": "\u0B8E\u0BA9\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
    "err.auth.VALIDATION": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0B9A\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "err.auth.TOKEN_EXPIRED": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B85\u0BAE\u0BB0\u0BCD\u0BB5\u0BC1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1. \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.TOKEN_INVALID": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B85\u0BAE\u0BB0\u0BCD\u0BB5\u0BC1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1. \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.NO_TOKEN": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B85\u0BAE\u0BB0\u0BCD\u0BB5\u0BC1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1. \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "err.auth.NO_ACCOUNT": "\u0BAE\u0BC1\u0BA4\u0BB2\u0BBF\u0BB2\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B8E\u0BA3\u0BCD\u0BA3\u0BC8 \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "p.stepLabel": "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F \u0BAE\u0BC1\u0B9F\u0BBF\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1",
    "p.title": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0B8E\u0BAA\u0BCD\u0BAA\u0B9F\u0BBF \u0B85\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BB2\u0BBE\u0BAE\u0BCD?",
    "p.help": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BCD \u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BCD \u0BA4\u0BBF\u0BB0\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0BA4\u0BCB\u0BA9\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B8E\u0BA3\u0BCD \u0BB0\u0B95\u0B9A\u0BBF\u0BAF\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD.",
    "p.name": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BCD",
    "p.namePh": "\u0B8E.\u0B95\u0BBE. \u0B9A\u0BC1\u0BA9\u0BBF\u0BA4\u0BBE \u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC0\u0BB2\u0BCD",
    "p.save": "\u0B9A\u0BC7\u0BAE\u0BBF\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC8\u0BA4\u0BCD \u0BA4\u0BBF\u0BB1",
    "err.auth.name": "\u0BA4\u0BAF\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "home.title": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC8\u0BAF \u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8",
    "home.hello": "\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD, {name}",
    "home.listen": "\u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "home.stop": "\u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "home.ack": "\u0BA8\u0BBE\u0BA9\u0BCD \u0BAA\u0B9F\u0BBF\u0BA4\u0BCD\u0BA4\u0BC7\u0BA9\u0BCD",
    "home.acked": "\u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    "home.voiceUnavailable": "\u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BBE\u0BA4\u0BA9\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B92\u0BB2\u0BBF \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.",
    "home.guestNote": "\u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BBF\u0BA9\u0BB0\u0BBE\u0B95\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD \u2014 \u0B87\u0BA4\u0BC1 \u0B95\u0BBE\u0B9F\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BBE\u0BA4\u0BBF\u0BB0\u0BBF \u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8.",
    "severity.urgent": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC7 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "severity.warning": "\u0B95\u0BB5\u0BA9\u0BBF\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "severity.info": "\u0BA4\u0B95\u0BB5\u0BB2\u0BCD",
    "severity.watch": "\u0B8E\u0B9A\u0BCD\u0B9A\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8",
    "weather.next7": "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
    "weather.deficit": "{district}-\u0B87\u0BB2\u0BCD \u0B87\u0BA8\u0BCD\u0BA4 \u0BAA\u0BB0\u0BC1\u0BB5\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BCD \u0BAE\u0BB4\u0BC8 \u0B9A\u0BBE\u0BA4\u0BBE\u0BB0\u0BA3\u0BA4\u0BCD\u0BA4\u0BC8 \u0BB5\u0BBF\u0B9F {pct}% \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BC1.",
    "weather.surplus": "{district}-\u0B87\u0BB2\u0BCD \u0B87\u0BA8\u0BCD\u0BA4 \u0BAA\u0BB0\u0BC1\u0BB5\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BCD \u0BAE\u0BB4\u0BC8 \u0B9A\u0BBE\u0BA4\u0BBE\u0BB0\u0BA3\u0BA4\u0BCD\u0BA4\u0BC8 \u0BB5\u0BBF\u0B9F {pct}% \u0B85\u0BA4\u0BBF\u0B95\u0BAE\u0BCD.",
    "weather.normal": "{district}-\u0B87\u0BB2\u0BCD \u0B87\u0BA8\u0BCD\u0BA4 \u0BAA\u0BB0\u0BC1\u0BB5\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BCD \u0BAE\u0BB4\u0BC8 \u0B9A\u0BBE\u0BA4\u0BBE\u0BB0\u0BA3\u0BA4\u0BCD\u0BA4\u0BCB\u0B9F\u0BC1 \u0B92\u0BA4\u0BCD\u0BA4\u0BC1\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1.",
    "adv.harvestRain.title": "\u0BAE\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD \u0B85\u0BB1\u0BC1\u0BB5\u0B9F\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "adv.harvestRain.body": "\u0B87\u0BB0\u0BC1 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {mm} \u0BAE\u0BBF.\u0BAE\u0BC0. \u0BAE\u0BB4\u0BC8 \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1, \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {crop} \u0BA4\u0BAF\u0BBE\u0BB0\u0BBE\u0B95 \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1. \u0B87\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC7 \u0B85\u0BB1\u0BC1\u0BB5\u0B9F\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1 \u0BAE\u0BC2\u0B9F\u0BBF \u0BB5\u0BC8\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "adv.harvestRain.why": "\u0BA4\u0BAF\u0BBE\u0BB0\u0BBE\u0BA9 \u0BAA\u0BAF\u0BBF\u0BB0\u0BBF\u0BB2\u0BCD \u0BAE\u0BB4\u0BC8 \u0BAA\u0BC6\u0BAF\u0BCD\u0BA4\u0BBE\u0BB2\u0BCD \u0B85\u0BB4\u0BC1\u0B95\u0BB2\u0BCD \u0B8F\u0BB1\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1 \u0BB5\u0BBF\u0BB2\u0BC8 \u0B95\u0BC1\u0BB1\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD.",
    "adv.holdSpray.title": "\u0BA4\u0BC6\u0BB3\u0BBF\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BBE\u0BAE\u0BCD \u2014 {day} \u0B95\u0BA9\u0BAE\u0BB4\u0BC8",
    "adv.holdSpray.body": "{day} \u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {mm} \u0BAE\u0BBF.\u0BAE\u0BC0. \u0BAE\u0BB4\u0BC8 \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. \u0BA4\u0BC6\u0BB3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC8 \u0B92\u0BA4\u0BCD\u0BA4\u0BBF \u0BB5\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1, \u0B87\u0BA9\u0BCD\u0BB1\u0BC1 \u0BB5\u0BAF\u0BB2\u0BCD \u0BB5\u0B9F\u0BBF\u0B95\u0BBE\u0BB2\u0BCD\u0B95\u0BB3\u0BC8\u0B9A\u0BCD \u0B9A\u0BC1\u0BA4\u0BCD\u0BA4\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "adv.holdSpray.why": "\u0B95\u0BA9\u0BAE\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD \u0BA4\u0BC6\u0BB3\u0BBF\u0BA4\u0BCD\u0BA4\u0BBE\u0BB2\u0BCD \u0B85\u0BA4\u0BC1 \u0B95\u0BB0\u0BC8\u0BA8\u0BCD\u0BA4\u0BC1 \u0BAA\u0BCB\u0B95\u0BC1\u0BAE\u0BCD \u2014 \u0BAA\u0BA3\u0BAE\u0BC1\u0BAE\u0BCD \u0BAE\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0BB5\u0BC0\u0BA3\u0BCD.",
    "adv.irrigate.title": "\u0B92\u0BB0\u0BC1 \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAA\u0BBE\u0B9A\u0BA9\u0BAE\u0BCD \u0BA4\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "adv.irrigate.body": "{district}-\u0B87\u0BB2\u0BCD \u0BAE\u0BB4\u0BC8 {pct}% \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BC1, \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {crop} {stage} \u0BA8\u0BBF\u0BB2\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1. \u0B87\u0BB0\u0BC1 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0B92\u0BB0\u0BC1 \u0BB2\u0BC7\u0B9A\u0BBE\u0BA9 \u0BAA\u0BBE\u0B9A\u0BA9\u0BAE\u0BCD \u0BA4\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "adv.irrigate.why": "\u0B87\u0BA8\u0BCD\u0BA4 \u0BA8\u0BBF\u0BB2\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B88\u0BB0\u0BAA\u0BCD\u0BAA\u0BA4\u0B95\u0BCD \u0B95\u0BC1\u0BB1\u0BC8 \u0BB5\u0BBF\u0BB3\u0BC8\u0B9A\u0BCD\u0B9A\u0BB2\u0BC8 \u0BA8\u0BBF\u0BB0\u0BA8\u0BCD\u0BA4\u0BB0\u0BAE\u0BBE\u0B95\u0B95\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD.",
    "adv.heat.title": "\u0BB5\u0BC6\u0BAA\u0BCD\u0BAA \u0B85\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BAE\u0BCD \u2014 \u0B85\u0BA4\u0BBF\u0BB0\u0BCD\u0B95\u0BBE\u0BB2\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0BAA\u0BBE\u0B9A\u0BA9\u0BAE\u0BCD",
    "adv.heat.body": "\u0B85\u0BA4\u0BBF\u0B95\u0BAA\u0B9F\u0BCD\u0B9A \u0BB5\u0BC6\u0BAA\u0BCD\u0BAA\u0BA8\u0BBF\u0BB2\u0BC8 \u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {tmax}\xB0C. \u0B95\u0BBE\u0BB2\u0BC8 8 \u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD \u0BAA\u0BBE\u0B9A\u0BA9\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD; 11 \u0BAE\u0BC1\u0BA4\u0BB2\u0BCD 4 \u0BB5\u0BB0\u0BC8 \u0BA4\u0BC6\u0BB3\u0BBF\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BBE\u0BAE\u0BCD.",
    "adv.heat.why": "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD \u0BA4\u0BC6\u0BB3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAA\u0BAF\u0BA9\u0BBF\u0BB2\u0BCD\u0BB2\u0BBE\u0BAE\u0BB2\u0BCD \u0B86\u0BB5\u0BBF\u0BAF\u0BBE\u0B95\u0BBF, \u0B87\u0BB2\u0BC8\u0BAF\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD.",
    "adv.allClear.title": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1 \u0B9A\u0BBF\u0BB1\u0BAA\u0BCD\u0BAA\u0BBE\u0B95 \u0B8E\u0BA4\u0BC1\u0BB5\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BBF\u0BAF\u0BA4\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
    "adv.allClear.body": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {crop} {stage} \u0BA8\u0BBF\u0BB2\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0BA8\u0BA9\u0BCD\u0BB1\u0BBE\u0B95 \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1. \u0BB5\u0BB4\u0B95\u0BCD\u0B95\u0BAE\u0BBE\u0BA9 \u0B85\u0B9F\u0BCD\u0B9F\u0BB5\u0BA3\u0BC8\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "adv.allClear.why": "\u0BB5\u0BBE\u0BA9\u0BBF\u0BB2\u0BC8 \u0B85\u0BB1\u0BBF\u0B95\u0BC1\u0BB1\u0BBF\u0B95\u0BB3\u0BCD \u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0B9A\u0BBE\u0BA4\u0BBE\u0BB0\u0BA3 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BA9.",
    "adv.detail.why": "\u0B87\u0BA4\u0BC1 \u0B8F\u0BA9\u0BCD \u0BAE\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BAF\u0BAE\u0BCD",
    "land.acres": "{acres} \u0B8F\u0B95\u0BCD\u0B95\u0BB0\u0BCD",
    "stage.sowing": "\u0BB5\u0BBF\u0BA4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1",
    "stage.vegetative": "\u0BB5\u0BB3\u0BB0\u0BCD\u0B9A\u0BCD\u0B9A\u0BBF",
    "stage.flowering": "\u0BAA\u0BC2\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BA8\u0BBF\u0BB2\u0BC8",
    "stage.grain-fill": "\u0BA4\u0BBE\u0BA9\u0BBF\u0BAF \u0BA8\u0BBF\u0BB0\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD",
    "crop.cotton": "\u0BAA\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BBF",
    "crop.onion": "\u0BB5\u0BC6\u0B99\u0BCD\u0B95\u0BBE\u0BAF\u0BAE\u0BCD",
    "crop.soybean": "\u0B9A\u0BCB\u0BAF\u0BBE",
    "crop.chilli": "\u0BAE\u0BBF\u0BB3\u0B95\u0BBE\u0BAF\u0BCD",
    "crop.tomato": "\u0BA4\u0B95\u0BCD\u0B95\u0BBE\u0BB3\u0BBF",
    "crop.wheat": "\u0B95\u0BCB\u0BA4\u0BC1\u0BAE\u0BC8",
    "crop.rice": "\u0BA8\u0BC6\u0BB2\u0BCD",
    "crop.groundnut": "\u0BA8\u0BBF\u0BB2\u0B95\u0BCD\u0B95\u0B9F\u0BB2\u0BC8",
    "mandi.title": "\u0B8E\u0B99\u0BCD\u0B95\u0BC1 \u0BB5\u0BBF\u0BB1\u0BCD\u0BAA\u0BA9\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BB5\u0BA4\u0BC1 (\u0B9A\u0BA8\u0BCD\u0BA4\u0BC8 \u0BB5\u0BBF\u0BB2\u0BC8)",
    "mandi.help": "\u0BAA\u0BCB\u0B95\u0BCD\u0B95\u0BC1\u0BB5\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B9A\u0BA8\u0BCD\u0BA4\u0BC8\u0B95\u0BCD \u0B95\u0B9F\u0BCD\u0B9F\u0BA3\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BB4\u0BBF\u0BA4\u0BCD\u0BA4\u0BC1 \u0B95\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BA8\u0BBF\u0B95\u0BB0 \u0BB2\u0BBE\u0BAA\u0BA4\u0BCD\u0BA4\u0BC8 \u0B92\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "mandi.cropLabel": "\u0BAA\u0BAF\u0BBF\u0BB0\u0BCD",
    "mandi.qtyLabel": "\u0B85\u0BB3\u0BB5\u0BC1 (\u0B95\u0BC1\u0BB5\u0BBF\u0BA3\u0BCD\u0B9F\u0BBE\u0BB2\u0BCD)",
    "mandi.qtyPh": "\u0B8E.\u0B95\u0BBE. 20",
    "mandi.recalc": "\u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BBF\u0B9F\u0BC1",
    "mandi.bestNetTag": "\u0B85\u0BA4\u0BBF\u0B95 \u0BA8\u0BBF\u0B95\u0BB0 \u0BB5\u0BB0\u0BC1\u0BAE\u0BBE\u0BA9\u0BAE\u0BCD",
    "mandi.quotedPrice": "\u0B9A\u0BA8\u0BCD\u0BA4\u0BC8 \u0BB5\u0BBF\u0BB2\u0BC8: \u20B9{price}/\u0B95\u0BC1\u0BB5\u0BBF\u0BA3\u0BCD\u0B9F\u0BBE\u0BB2\u0BCD",
    "mandi.distance": "{dist} \u0B95\u0BBF.\u0BAE\u0BC0 \u0BA4\u0BCA\u0BB2\u0BC8\u0BB5\u0BC1 \xB7 {days}",
    "mandi.gross": "\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1: \u20B9{val}",
    "mandi.transport": "\u0BAA\u0BCB\u0B95\u0BCD\u0B95\u0BC1\u0BB5\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1\u0B9A\u0BCD \u0B9A\u0BC6\u0BB2\u0BB5\u0BC1: \u2212\u20B9{val}",
    "mandi.fee": "\u0B9A\u0BA8\u0BCD\u0BA4\u0BC8\u0B95\u0BCD \u0B95\u0B9F\u0BCD\u0B9F\u0BA3\u0BAE\u0BCD: \u2212\u20B9{val}",
    "mandi.net": "\u20B9{val} \u0B95\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BA8\u0BBF\u0B95\u0BB0 \u0BA4\u0BCA\u0B95\u0BC8",
    "mandi.inversion": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1: {priceLeader} \u0B9A\u0BA8\u0BCD\u0BA4\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0BB5\u0BBF\u0BB2\u0BC8 \u0B85\u0BA4\u0BBF\u0B95\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BBE\u0BB2\u0BC1\u0BAE\u0BCD, \u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4 \u0BA4\u0BC2\u0BB0\u0BAE\u0BCD \u0B95\u0BBE\u0BB0\u0BA3\u0BAE\u0BBE\u0B95 {netLeader} \u0B9A\u0BA8\u0BCD\u0BA4\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u20B9{gap} \u0B95\u0BC2\u0B9F\u0BC1\u0BA4\u0BB2\u0BCD \u0BA8\u0BBF\u0B95\u0BB0 \u0BB2\u0BBE\u0BAA\u0BAE\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD.",
    "mandi.trendUp": "\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BB5\u0BBF\u0BB2\u0BC8 {pct}% \u0B89\u0BAF\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1",
    "mandi.trendDown": "\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BB5\u0BBF\u0BB2\u0BC8 {pct}% \u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1",
    "mandi.trendFlat": "\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BB5\u0BBF\u0BB2\u0BC8 \u0BA8\u0BBF\u0BB2\u0BC8\u0BAF\u0BBE\u0BA9\u0BA4\u0BC1",
    "help.title": "\u0B89\u0BA4\u0BB5\u0BBF \u0BA4\u0BC7\u0BB5\u0BC8\u0BAF\u0BBE?",
    "help.help": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBF\u0BB5\u0B9A\u0BBE\u0BAF \u0B85\u0BB2\u0BC1\u0BB5\u0BB2\u0BB0\u0BC8\u0BA4\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BB5\u0BC1\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B85\u0BB5\u0B9A\u0BB0 \u0B89\u0BA4\u0BB5\u0BBF \u0B8E\u0BA3\u0BCD\u0BA3\u0BC8 \u0B85\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "help.officerTitle": "\u0BA8\u0BBF\u0BAF\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BB5\u0BC7\u0BB3\u0BBE\u0BA3\u0BCD \u0B85\u0BB2\u0BC1\u0BB5\u0BB2\u0BB0\u0BCD",
    "help.officerRole": "\u0BB5\u0BC7\u0BB3\u0BBE\u0BA3\u0BCD \u0BB5\u0BB3\u0BB0\u0BCD\u0B9A\u0BCD\u0B9A\u0BBF \u0B85\u0BB2\u0BC1\u0BB5\u0BB2\u0BB0\u0BCD (ADO)",
    "help.callBtn": "\u0B85\u0BB2\u0BC1\u0BB5\u0BB2\u0BB0\u0BC8 \u0B85\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "help.visitBtn": "\u0BAA\u0BA3\u0BCD\u0BA3\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BCD \u0B95\u0BCB\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8",
    "help.visitTitle": "\u0B85\u0BB2\u0BC1\u0BB5\u0BB2\u0BB0\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8 \u0B95\u0BCB\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8",
    "help.visitDateLabel": "\u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BBF\u0BAF \u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BA4\u0BBF",
    "help.visitReasonLabel": "\u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0B95\u0BBE\u0BB0\u0BA3\u0BAE\u0BCD (\u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BA4\u0BCD\u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1)",
    "help.visitReasonPh": "\u0B8E.\u0B95\u0BBE. \u0BAA\u0BC2\u0B9A\u0BCD\u0B9A\u0BBF\u0BA4\u0BCD \u0BA4\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0BA4\u0BB2\u0BCD, \u0BAA\u0BAF\u0BBF\u0BB0\u0BCD \u0B9A\u0BC7\u0BA4 \u0B86\u0BAF\u0BCD\u0BB5\u0BC1",
    "help.visitSubmit": "\u0B95\u0BCB\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0BAF\u0BC8\u0B9A\u0BCD \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
    "help.visitCancel": "\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD",
    "help.visitSuccess": "\u0BAA\u0BA3\u0BCD\u0BA3\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8\u0B95\u0BCD \u0B95\u0BCB\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8 \u0BAA\u0BA4\u0BBF\u0BB5\u0BBE\u0BA9\u0BA4\u0BC1. \u0B85\u0BB2\u0BC1\u0BB5\u0BB2\u0BB0\u0BCD {name} \u0B85\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BA4\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BB5\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.",
    "help.helplinesTitle": "\u0B85\u0BB5\u0B9A\u0BB0 \u0B89\u0BA4\u0BB5\u0BBF \u0B8E\u0BA3\u0BCD\u0B95\u0BB3\u0BCD",
    "help.kcc": "\u0B95\u0BBF\u0B9A\u0BBE\u0BA9\u0BCD \u0B95\u0BBE\u0BB2\u0BCD \u0B9A\u0BC6\u0BA9\u0BCD\u0B9F\u0BB0\u0BCD (\u0B87\u0BB2\u0BB5\u0B9A\u0BAE\u0BCD)",
    "help.kccPhone": "1800-180-1551",
    "help.disasterLine": "\u0BAE\u0BBE\u0BA8\u0BBF\u0BB2 \u0BAA\u0BAF\u0BBF\u0BB0\u0BCD \u0B87\u0B9F\u0BB0\u0BCD & \u0BAA\u0BC7\u0BB0\u0BBF\u0B9F\u0BB0\u0BCD \u0B89\u0BA4\u0BB5\u0BBF \u0B8E\u0BA3\u0BCD",
    "help.disasterPhone": "1800-120-8040",
    "loan.title": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0B95\u0B9F\u0BA9\u0BC8 \u0BA4\u0BBF\u0B9F\u0BCD\u0B9F\u0BAE\u0BBF\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "loan.help": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD EMI \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BB5\u0B9F\u0BCD\u0B9F\u0BBF \u0B86\u0B95\u0BBF\u0BAF\u0BB5\u0BB1\u0BCD\u0BB1\u0BC8 \u0BA4\u0BBF\u0B9F\u0BCD\u0B9F\u0BAE\u0BBF\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB0\u0B95\u0B9A\u0BBF\u0BAF\u0BAE\u0BBE\u0B95 \u0BB5\u0BC8\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.",
    "loan.amount": "\u0B95\u0B9F\u0BA9\u0BCD \u0BA4\u0BCA\u0B95\u0BC8 (\u20B9)",
    "loan.tenure": "\u0B95\u0BBE\u0BB2\u0BAE\u0BCD (\u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD)",
    "loan.rate": "\u0BB5\u0B9F\u0BCD\u0B9F\u0BBF \u0BB5\u0BBF\u0B95\u0BBF\u0BA4\u0BAE\u0BCD (%)",
    "loan.calculate": "\u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BBF\u0B9F\u0BC1 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF",
    "loan.resultTitle": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0B9F\u0BCD\u0B9F\u0BA3\u0BA4\u0BCD \u0BA4\u0BBF\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    "loan.emi": "\u0BAE\u0BBE\u0BA4\u0BBE\u0BA8\u0BCD\u0BA4\u0BBF\u0BB0 \u0BA4\u0BB5\u0BA3\u0BC8 (EMI)",
    "loan.totalInterest": "\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0BB5\u0B9F\u0BCD\u0B9F\u0BBF",
    "loan.totalPayment": "\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4\u0BA4\u0BCD \u0BA4\u0BCA\u0B95\u0BC8",
    "loan.kccNote": "\u0B95\u0BBF\u0B9A\u0BBE\u0BA9\u0BCD \u0B95\u0BBF\u0BB0\u0BC6\u0B9F\u0BBF\u0B9F\u0BCD \u0B95\u0BBE\u0BB0\u0BCD\u0B9F\u0BC1 (KCC) 7% \u0BB5\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0B95\u0B9F\u0BA9\u0BCD \u0BB5\u0BB4\u0B99\u0BCD\u0B95\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. \u0B89\u0BB0\u0BBF\u0BAF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BB2\u0BC1\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BBE\u0BB2\u0BCD 3% \u0B9A\u0BB2\u0BC1\u0B95\u0BC8 \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD, \u0B85\u0BA4\u0BA9\u0BBE\u0BB2\u0BCD \u0BB5\u0B9F\u0BCD\u0B9F\u0BBF 4% \u0B86\u0B95 \u0B95\u0BC1\u0BB1\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD.",
    "nav.loan": "\u0B8E\u0BA9\u0BCD \u0B95\u0B9F\u0BA9\u0BCD",
    "nav.home": "\u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8",
    "nav.mandi": "\u0B9A\u0BA8\u0BCD\u0BA4\u0BC8",
    "nav.help": "\u0B89\u0BA4\u0BB5\u0BBF",
    "nav.profile": "\u0B8E\u0BA9\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8",
    "profile.title": "\u0B8E\u0BA9\u0BCD \u0BAA\u0BA3\u0BCD\u0BA3\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BC1\u0BAE\u0BCD",
    "profile.phoneLabel": "\u0BAE\u0BCA\u0BAA\u0BC8\u0BB2\u0BCD \u0B8E\u0BA3\u0BCD",
    "profile.locLabel": "\u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0B85\u0BAE\u0BC8\u0BB5\u0BBF\u0B9F\u0BAE\u0BCD",
    "profile.landLabel": "\u0BA8\u0BBF\u0BB2 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "profile.cropLabel": "\u0BA4\u0BB1\u0BCD\u0BAA\u0BCB\u0BA4\u0BC8\u0BAF \u0BAA\u0BAF\u0BBF\u0BB0\u0BCD",
    "profile.langLabel": "\u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1 \u0BAE\u0BCA\u0BB4\u0BBF",
    "profile.change": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
    "profile.signout": "\u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC7\u0BB1\u0BC1",
    "officer.logAction": "\u0B9A\u0BC6\u0BAF\u0BB2\u0BC8\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD",
    "officer.actionTitle": "{name} \u0B95\u0BCD\u0B95\u0BC1 \u0B9A\u0BC6\u0BAF\u0BB2\u0BC8\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD",
    "officer.actionTypeLabel": "\u0B9A\u0BC6\u0BAF\u0BB2\u0BCD \u0BB5\u0B95\u0BC8",
    "officer.actionNotesLabel": "\u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD (\u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BA4\u0BCD\u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1)",
    "officer.actionNotesPh": "\u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B8E\u0BA9\u0BCD\u0BA9 \u0B95\u0BA3\u0BCD\u0B9F\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B8E\u0BA9\u0BCD\u0BA9 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD?",
    "officer.actionSubmit": "\u0B9A\u0BC6\u0BAF\u0BB2\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF",
    "officer.actionLabel": "\u0B95\u0B9F\u0BC8\u0B9A\u0BBF \u0B9A\u0BC6\u0BAF\u0BB2\u0BCD",
    "officer.noAction": "\u0B87\u0BA9\u0BCD\u0BA9\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BB2\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
    "officer.action.call_made": "\u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    "officer.action.visit_done": "\u0BAA\u0BA3\u0BCD\u0BA3\u0BC8 \u0BB5\u0BB0\u0BC1\u0B95\u0BC8",
    "officer.action.referral": "\u0BAA\u0BB0\u0BBF\u0BA8\u0BCD\u0BA4\u0BC1\u0BB0\u0BC8",
    "officer.action.advisory_given": "\u0B86\u0BB2\u0BCB\u0B9A\u0BA9\u0BC8 \u0BB5\u0BB4\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    "officer.action.follow_up": "\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD \u0BA8\u0B9F\u0BB5\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC8 \u0BA8\u0BBF\u0BB0\u0BCD\u0BA3\u0BAF\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    "help.schemesTitle": "\u0B85\u0BB0\u0B9A\u0BC1 \u0BA4\u0BBF\u0B9F\u0BCD\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "help.scheme1Title": "\u0BAA\u0BBF\u0B8E\u0BAE\u0BCD-\u0B95\u0BBF\u0B9A\u0BBE\u0BA9\u0BCD",
    "help.scheme1Desc": "\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0BB5\u0BBF\u0BB5\u0B9A\u0BBE\u0BAF\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u20B96000 \u0BB5\u0BB0\u0BC1\u0BAE\u0BBE\u0BA9 \u0B86\u0BA4\u0BB0\u0BB5\u0BC1.",
    "help.scheme2Title": "\u0BAA\u0BBF\u0B8E\u0BAE\u0BCD\u0B8E\u0B83\u0BAA\u0BCD\u0BAA\u0BBF\u0B92\u0BAF\u0BCD (\u0BAA\u0BAF\u0BBF\u0BB0\u0BCD \u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC0\u0B9F\u0BC1)",
    "help.scheme2Desc": "\u0B87\u0BAF\u0BB1\u0BCD\u0B95\u0BC8 \u0BAA\u0BC7\u0BB0\u0BB4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAE\u0B95\u0B9A\u0BC2\u0BB2\u0BCD \u0B87\u0BB4\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC0\u0B9F\u0BC1.",
    "adv.waterlog.title": "\u0BB5\u0B9F\u0BBF\u0B95\u0BBE\u0BB2\u0BCD\u0B95\u0BB3\u0BC8 \u0B9A\u0BC1\u0BA4\u0BCD\u0BA4\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u2014 \u0BA8\u0BC0\u0BB0\u0BCD \u0BA4\u0BC7\u0B95\u0BCD\u0B95 \u0B86\u0BAA\u0BA4\u0BCD\u0BA4\u0BC1",
    "adv.waterlog.body": "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAE\u0BC2\u0BA9\u0BCD\u0BB1\u0BC1 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {mm} \u0BAE\u0BBF\u0BAE\u0BC0 \u0BAE\u0BB4\u0BC8 \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {soil} \u0BAE\u0BA3\u0BCD \u0BAE\u0BC6\u0BA4\u0BC1\u0BB5\u0BBE\u0B95 \u0BB5\u0B9F\u0BBF\u0B95\u0BBF\u0BB1\u0BA4\u0BC1 \u2014 \u0B87\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC7 \u0BB5\u0B9F\u0BBF\u0B95\u0BBE\u0BB2\u0BCD\u0B95\u0BB3\u0BC8 \u0B9A\u0BC1\u0BA4\u0BCD\u0BA4\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.",
    "adv.waterlog.why": "\u0BA8\u0BC0\u0BB0\u0BCD \u0BA4\u0BC7\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BB5\u0BC7\u0BB0\u0BCD\u0B95\u0BB3\u0BCD \u0B8A\u0B9F\u0BCD\u0B9F\u0B9A\u0BCD\u0B9A\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BC8 \u0B89\u0BB1\u0BBF\u0B9E\u0BCD\u0B9A \u0BAE\u0BC1\u0B9F\u0BBF\u0BAF\u0BBE\u0BA4\u0BC1. \u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BC1 \u0BA8\u0BBE\u0BB3\u0BCD \u0BA8\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BA8\u0BC0\u0BB0\u0BCD \u0B95\u0BC2\u0B9F \u0BAA\u0BAF\u0BBF\u0BB0\u0BC8 \u0BA8\u0BBF\u0BB0\u0BA8\u0BCD\u0BA4\u0BB0\u0BAE\u0BBE\u0B95 \u0BAA\u0BBE\u0BA4\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD.",
    "adv.rainfedStress.title": "\u0BAE\u0BB4\u0BC8 \u0B9A\u0BBE\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4 \u0BAA\u0BAF\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0B95\u0BB5\u0BA9\u0BAE\u0BCD \u0BA4\u0BC7\u0BB5\u0BC8",
    "adv.rainfedStress.body": "{district} \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BAE\u0BB4\u0BC8 \u0B87\u0BAF\u0BB2\u0BCD\u0BAA\u0BC8 \u0BB5\u0BBF\u0B9F {pct}% \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BC1. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {crop} {stage} \u0BA8\u0BBF\u0BB2\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1\u0BB5\u0BA4\u0BC1\u0BAE\u0BCD \u0BAE\u0BB4\u0BC8\u0BAF\u0BC8 \u0BA8\u0BAE\u0BCD\u0BAA\u0BBF\u0BAF\u0BC1\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1.",
    "adv.rainfedStress.why": "\u0BAE\u0BB4\u0BC8 \u0B9A\u0BBE\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4 \u0BA8\u0BBF\u0BB2\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BAA\u0BB0\u0BC1\u0BB5\u0BAE\u0BB4\u0BC8 \u0BAA\u0BB2\u0BB5\u0BC0\u0BA9\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAA\u0BCB\u0BA4\u0BC1 \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC1 \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.",
    "adv.fungalWatch.title": "\u0BAA\u0BC2\u0B9E\u0BCD\u0B9A\u0BC8 \u0BAA\u0BC1\u0BB3\u0BCD\u0BB3\u0BBF\u0B95\u0BB3\u0BC8 \u0B95\u0BB5\u0BA9\u0BBF\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
    "adv.fungalWatch.body": "\u0B88\u0BB0\u0BAA\u0BCD\u0BAA\u0BA4\u0BAE\u0BCD {humidity}% \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {crop} \u0B95\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAE\u0BA3\u0BCD\u0BA3\u0BBF\u0BB2\u0BCD \u0BAA\u0BC2\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. \u0B87\u0BB2\u0BC8\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BAA\u0BC1\u0BB3\u0BCD\u0BB3\u0BBF\u0B95\u0BB3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0BA8\u0BBF\u0BB1\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BA4\u0BCD\u0BA4\u0BC8 \u0B9A\u0BCB\u0BA4\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    "adv.fungalWatch.why": "\u0B95\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAE\u0BA3\u0BCD \u0B88\u0BB0\u0BAA\u0BCD\u0BAA\u0BA4\u0BA4\u0BCD\u0BA4\u0BC8 \u0B85\u0BA4\u0BBF\u0B95 \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD \u0BB5\u0BC8\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD. \u0BAA\u0BC2\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B85\u0BA4\u0BBF\u0B95 \u0B88\u0BB0\u0BAA\u0BCD\u0BAA\u0BA4\u0BAE\u0BCD \u0BAA\u0BC2\u0B9E\u0BCD\u0B9A\u0BC8\u0BAF\u0BC8 \u0BB5\u0BBF\u0BB0\u0BC8\u0BB5\u0BBE\u0B95 \u0BAA\u0BB0\u0BAA\u0BCD\u0BAA\u0BC1\u0BAE\u0BCD.",
    "officer.dashTitle": "\u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD, {name}",
    "officer.jurisdictionLine": "\u0BB5\u0BC7\u0BB3\u0BBE\u0BA3\u0BCD \u0BB5\u0BB3\u0BB0\u0BCD\u0B9A\u0BCD\u0B9A\u0BBF \u0B85\u0BB2\u0BC1\u0BB5\u0BB2\u0BB0\u0BCD (ADO) \xB7 {district} \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    "officer.bandCritical": "\u0BA4\u0BC0\u0BB5\u0BBF\u0BB0 \u0B86\u0BAA\u0BA4\u0BCD\u0BA4\u0BC1",
    "officer.bandHigh": "\u0B85\u0BA4\u0BBF\u0B95 \u0B86\u0BAA\u0BA4\u0BCD\u0BA4\u0BC1",
    "officer.bandMedium": "\u0BAE\u0BBF\u0BA4\u0BAE\u0BBE\u0BA9 \u0B86\u0BAA\u0BA4\u0BCD\u0BA4\u0BC1",
    "officer.bandTotal": "\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0B95\u0BA3\u0BCD\u0B95\u0BBE\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1",
    "officer.caseloadHeading": "\u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BC1\u0BB0\u0BBF\u0BAE\u0BC8 \u0BB5\u0BBF\u0BB5\u0B9A\u0BBE\u0BAF\u0BBF\u0B95\u0BB3\u0BCD \u0BAA\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF\u0BB2\u0BCD",
    "officer.searchPh": "\u0BB5\u0BBF\u0BB5\u0B9A\u0BBE\u0BAF\u0BBF \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B95\u0BBF\u0BB0\u0BBE\u0BAE\u0BA4\u0BCD\u0BA4\u0BC8 \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD...",
    "officer.action.resolved": "\u0BA4\u0BC0\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    "officer.action.review_later": "\u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BB0\u0BCD \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BBE\u0BAF\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD"
  };
  var te = {
    "gate.choose": "\u0C2E\u0C40 \u0C2D\u0C3E\u0C37\u0C28\u0C41 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F",
    "gate.prompt": "\u0C2E\u0C40\u0C30\u0C41 \u0C26\u0C40\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C48\u0C28\u0C3E \u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C35\u0C1A\u0C4D\u0C1A\u0C41.",
    "gate.preview": "{language} \u0C35\u0C3F\u0C28\u0C3F\u0C2A\u0C3F\u0C38\u0C4D\u0C24\u0C4B\u0C02\u0C26\u0C3F.",
    "gate.unavailable": "\u0C08 \u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C02\u0C32\u0C4B \u0C06\u0C21\u0C3F\u0C2F\u0C4B \u0C2A\u0C4D\u0C30\u0C3F\u0C35\u0C4D\u0C2F\u0C42 \u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41\u0C32\u0C4B \u0C32\u0C47\u0C26\u0C41.",
    "brand.tagline": "\u0C2A\u0C02\u0C1F \u0C38\u0C32\u0C39\u0C3E \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2E\u0C41\u0C02\u0C26\u0C38\u0C4D\u0C24\u0C41 \u0C39\u0C46\u0C1A\u0C4D\u0C1A\u0C30\u0C3F\u0C15",
    "welcome.stepLabel": "5\u0C32\u0C4B \u0C26\u0C36 1",
    "welcome.title": "\u0C15\u0C3F\u0C38\u0C3E\u0C28\u0C4D \u0C38\u0C3E\u0C25\u0C40\u0C15\u0C3F \u0C38\u0C4D\u0C35\u0C3E\u0C17\u0C24\u0C02",
    "welcome.text": "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C17\u0C3E \u0C2E\u0C40 \u0C2D\u0C3E\u0C37\u0C28\u0C41 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F. \u0C2E\u0C40 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C28\u0C4D\u0C28\u0C3F\u0C02\u0C1F\u0C3F\u0C15\u0C40 \u0C07\u0C26\u0C47 \u0C2D\u0C3E\u0C37 \u0C35\u0C3E\u0C21\u0C41\u0C24\u0C3E\u0C2E\u0C41.",
    "welcome.next": "\u0C24\u0C30\u0C41\u0C35\u0C3E\u0C24 \u0C2E\u0C40 \u0C2A\u0C4A\u0C32\u0C02 \u0C0E\u0C15\u0C4D\u0C15\u0C21 \u0C09\u0C02\u0C26\u0C4B \u0C05\u0C21\u0C41\u0C17\u0C41\u0C24\u0C3E\u0C2E\u0C41.",
    "welcome.cta": "\u0C28\u0C3E \u0C2A\u0C4A\u0C32\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C38\u0C3F\u0C26\u0C4D\u0C27\u0C02 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "loc.stepLabel": "5\u0C32\u0C4B \u0C26\u0C36 2",
    "loc.title": "\u0C2E\u0C40 \u0C2A\u0C4A\u0C32\u0C02 \u0C0E\u0C15\u0C4D\u0C15\u0C21?",
    "loc.help": "\u0C26\u0C40\u0C28\u0C4D\u0C28\u0C3F \u0C2C\u0C1F\u0C4D\u0C1F\u0C3F \u0C38\u0C4D\u0C25\u0C3E\u0C28\u0C3F\u0C15 \u0C35\u0C3E\u0C24\u0C3E\u0C35\u0C30\u0C23\u0C02, \u0C38\u0C2E\u0C40\u0C2A \u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C46\u0C1F\u0C4D \u0C27\u0C30\u0C32\u0C41 \u0C1A\u0C46\u0C2C\u0C41\u0C24\u0C3E\u0C2E\u0C41.",
    "loc.state": "\u0C30\u0C3E\u0C37\u0C4D\u0C1F\u0C4D\u0C30\u0C02",
    "loc.district": "\u0C1C\u0C3F\u0C32\u0C4D\u0C32\u0C3E",
    "loc.village": "\u0C17\u0C4D\u0C30\u0C3E\u0C2E\u0C02",
    "loc.ph.state": "\u0C30\u0C3E\u0C37\u0C4D\u0C1F\u0C4D\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F",
    "loc.ph.district": "\u0C1C\u0C3F\u0C32\u0C4D\u0C32\u0C3E\u0C28\u0C41 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F",
    "loc.ph.village": "\u0C17\u0C4D\u0C30\u0C3E\u0C2E\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F",
    "loc.search": "\u0C30\u0C3E\u0C37\u0C4D\u0C1F\u0C4D\u0C30\u0C02 \u0C32\u0C47\u0C26\u0C3E \u0C1C\u0C3F\u0C32\u0C4D\u0C32\u0C3E \u0C35\u0C46\u0C24\u0C15\u0C02\u0C21\u0C3F...",
    "loc.other": "\u0C07\u0C24\u0C30 \u2014 \u0C28\u0C3E \u0C17\u0C4D\u0C30\u0C3E\u0C2E\u0C02 \u0C1F\u0C48\u0C2A\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "loc.villageFreePh": "\u0C2E\u0C40 \u0C17\u0C4D\u0C30\u0C3E\u0C2E\u0C02 \u0C32\u0C47\u0C26\u0C3E \u0C2A\u0C4D\u0C30\u0C3E\u0C02\u0C24\u0C02 \u0C2A\u0C47\u0C30\u0C41 \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F",
    "loc.back": "\u0C35\u0C46\u0C28\u0C41\u0C15\u0C15\u0C41",
    "loc.continue": "\u0C15\u0C4A\u0C28\u0C38\u0C3E\u0C17\u0C3F\u0C02\u0C1A\u0C41",
    "land.stepLabel": "5\u0C32\u0C4B \u0C26\u0C36 3",
    "land.title": "\u0C2E\u0C40 \u0C2D\u0C42\u0C2E\u0C3F",
    "land.stub": "\u0C24\u0C30\u0C4D\u0C35\u0C3E\u0C24\u0C3F \u0C26\u0C36\u0C32\u0C4B \u0C2D\u0C42\u0C2E\u0C3F \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C35\u0C38\u0C4D\u0C24\u0C3E\u0C2F\u0C3F. \u0C2E\u0C40 \u0C38\u0C4D\u0C25\u0C3E\u0C28\u0C02 \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F.",
    "err.required": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F {field} \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F.",
    "loc.noResults": "\u0C38\u0C30\u0C3F\u0C2A\u0C4B\u0C32\u0C3F\u0C15 \u0C32\u0C47\u0C26\u0C41",
    "ph.select": "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F",
    "land.help": "\u0C26\u0C40\u0C28\u0C3F\u0C2A\u0C48\u0C28\u0C47 \u0C2E\u0C47\u0C2E\u0C41 \u0C2A\u0C4D\u0C30\u0C24\u0C3F \u0C38\u0C32\u0C39\u0C3E \u0C07\u0C38\u0C4D\u0C24\u0C3E\u0C2E\u0C41.",
    "land.area": "\u0C2D\u0C42\u0C2E\u0C3F \u0C35\u0C3F\u0C38\u0C4D\u0C24\u0C40\u0C30\u0C4D\u0C23\u0C02 (\u0C0E\u0C15\u0C30\u0C3E\u0C32\u0C41)",
    "land.areaPh": "\u0C09\u0C26\u0C3E. 3.5",
    "land.soil": "\u0C28\u0C47\u0C32 \u0C30\u0C15\u0C02",
    "land.irrigation": "\u0C28\u0C40\u0C1F\u0C3F \u0C35\u0C28\u0C30\u0C41",
    "soil.black": "\u0C28\u0C32\u0C4D\u0C32 \u0C28\u0C47\u0C32",
    "soil.red": "\u0C0E\u0C30\u0C4D\u0C30 \u0C28\u0C47\u0C32",
    "soil.sandy": "\u0C07\u0C38\u0C41\u0C15 \u0C28\u0C47\u0C32",
    "soil.loamy": "\u0C38\u0C3E\u0C30\u0C35\u0C02\u0C24\u0C2E\u0C48\u0C28 \u0C28\u0C47\u0C32",
    "soil.alluvial": "\u0C12\u0C02\u0C21\u0C4D\u0C30\u0C41 \u0C28\u0C47\u0C32",
    "soil.lateritic": "\u0C32\u0C3E\u0C1F\u0C46\u0C30\u0C48\u0C1F\u0C4D \u0C28\u0C47\u0C32",
    "irrig.rainfed": "\u0C35\u0C30\u0C4D\u0C37\u0C3E\u0C27\u0C3E\u0C30\u0C02",
    "irrig.canal": "\u0C15\u0C3E\u0C32\u0C41\u0C35",
    "irrig.borewell": "\u0C2C\u0C4B\u0C30\u0C41\u0C2C\u0C3E\u0C35\u0C3F",
    "irrig.well": "\u0C2C\u0C3E\u0C35\u0C3F",
    "irrig.drip": "\u0C21\u0C4D\u0C30\u0C3F\u0C2A\u0C4D \u0C38\u0C3E\u0C17\u0C41\u0C28\u0C40\u0C30\u0C41",
    "irrig.sprinkler": "\u0C38\u0C4D\u0C2A\u0C4D\u0C30\u0C3F\u0C02\u0C15\u0C4D\u0C32\u0C30\u0C4D",
    "err.area": "\u0C2E\u0C40 \u0C2D\u0C42\u0C2E\u0C3F \u0C35\u0C3F\u0C38\u0C4D\u0C24\u0C40\u0C30\u0C4D\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C15\u0C30\u0C3E\u0C32\u0C4D\u0C32\u0C4B \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F.",
    "crop.stepLabel": "5\u0C32\u0C4B \u0C26\u0C36 4",
    "crop.title": "\u0C2E\u0C40 \u0C2A\u0C02\u0C1F",
    "crop.help": "\u0C26\u0C40\u0C28\u0C3F \u0C26\u0C4D\u0C35\u0C3E\u0C30\u0C3E \u0C2A\u0C4D\u0C30\u0C24\u0C3F \u0C38\u0C32\u0C39\u0C3E \u0C2E\u0C40 \u0C2A\u0C02\u0C1F \u0C26\u0C36\u0C15\u0C41 \u0C24\u0C17\u0C3F\u0C28\u0C1F\u0C4D\u0C32\u0C41\u0C17\u0C3E \u0C07\u0C38\u0C4D\u0C24\u0C3E\u0C2E\u0C41.",
    "crop.crop": "\u0C2A\u0C02\u0C1F",
    "crop.variety": "\u0C30\u0C15\u0C02",
    "crop.sown": "\u0C35\u0C3F\u0C24\u0C4D\u0C24\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28 \u0C24\u0C47\u0C26\u0C40",
    "crop.other": "\u0C07\u0C24\u0C30 \u2014 \u0C30\u0C15\u0C02 \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F",
    "crop.varietyPh": "\u0C30\u0C15\u0C02 \u0C2A\u0C47\u0C30\u0C41 \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F",
    "crop.stageNow": "\u0C2E\u0C40 {crop} {stage} \u0C26\u0C36\u0C32\u0C4B \u0C09\u0C02\u0C26\u0C3F.",
    "err.crop": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2A\u0C02\u0C1F\u0C28\u0C41 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F.",
    "err.variety": "\u0C30\u0C15\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F \u0C32\u0C47\u0C26\u0C3E \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F.",
    "err.sown": "\u0C35\u0C3F\u0C24\u0C4D\u0C24\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28 \u0C24\u0C47\u0C26\u0C40\u0C28\u0C3F \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F.",
    "s5.stepLabel": "5\u0C32\u0C4B \u0C26\u0C36 5",
    "s5.title": "\u0C07\u0C26\u0C3F \u0C38\u0C30\u0C48\u0C28\u0C26\u0C47\u0C28\u0C3E?",
    "s5.stub": "\u0C24\u0C30\u0C4D\u0C35\u0C3E\u0C24\u0C3F \u0C26\u0C36\u0C32\u0C4B \u0C38\u0C2E\u0C40\u0C15\u0C4D\u0C37 \u0C24\u0C46\u0C30 \u0C35\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F. \u0C2E\u0C40 \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C2C\u0C21\u0C4D\u0C21\u0C3E\u0C2F\u0C3F.",
    "s5.help": "\u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C38\u0C47 \u0C2E\u0C41\u0C02\u0C26\u0C41 \u0C05\u0C02\u0C24\u0C3E \u0C38\u0C30\u0C3F\u0C17\u0C4D\u0C17\u0C3E \u0C09\u0C28\u0C4D\u0C28\u0C3E\u0C2F\u0C4B \u0C32\u0C47\u0C26\u0C4B \u0C1A\u0C42\u0C38\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F.",
    "s5.locLabel": "\u0C38\u0C4D\u0C25\u0C32\u0C02",
    "s5.landLabel": "\u0C2D\u0C42\u0C2E\u0C3F",
    "s5.cropLabel": "\u0C2A\u0C02\u0C1F",
    "s5.change": "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
    "s5.save": "\u0C28\u0C3E \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C41",
    "s5.saved": "\u0C05\u0C28\u0C4D\u0C28\u0C3F \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C2C\u0C21\u0C4D\u0C21\u0C3E\u0C2F\u0C3F. \u0C24\u0C30\u0C4D\u0C35\u0C3E\u0C24\u0C3F \u0C26\u0C36\u0C32\u0C4B \u0C16\u0C3E\u0C24\u0C3E \u0C24\u0C46\u0C30 \u0C35\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "s6.stepLabel": "\u0C1A\u0C3F\u0C35\u0C30\u0C3F \u0C26\u0C36",
    "s6.title": "\u0C2E\u0C40 \u0C2A\u0C4D\u0C30\u0C4A\u0C2B\u0C48\u0C32\u0C4D \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "s6.help": "\u0C16\u0C3E\u0C24\u0C3E \u0C38\u0C43\u0C37\u0C4D\u0C1F\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F \u2014 \u0C2E\u0C40 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C09\u0C02\u0C1F\u0C3E\u0C2F\u0C3F.",
    "s6.tabFarmer": "\u0C30\u0C48\u0C24\u0C41",
    "s6.tabOfficer": "\u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F",
    "s6.phone": "\u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D",
    "s6.phonePh": "10 \u0C05\u0C02\u0C15\u0C46\u0C32 \u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D",
    "s6.sendCode": "\u0C15\u0C4B\u0C21\u0C4D \u0C2A\u0C02\u0C2A\u0C02\u0C21\u0C3F",
    "s6.resendIn": "{seconds} \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32\u0C32\u0C4B \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C2A\u0C02\u0C2A\u0C02\u0C21\u0C3F",
    "s6.otp": "6 \u0C05\u0C02\u0C15\u0C46\u0C32 \u0C15\u0C4B\u0C21\u0C4D",
    "s6.otpPh": "6 \u0C05\u0C02\u0C15\u0C46\u0C32 \u0C15\u0C4B\u0C21\u0C4D \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F",
    "s6.demoOtp": "\u0C21\u0C46\u0C2E\u0C4B \u0C15\u0C4B\u0C21\u0C4D: {code}",
    "s6.verify": "\u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C3F \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    "s6.staffId": "\u0C38\u0C4D\u0C1F\u0C3E\u0C2B\u0C4D \u0C10\u0C21\u0C40",
    "s6.password": "\u0C2A\u0C3E\u0C38\u0C4D\u200C\u0C35\u0C30\u0C4D\u0C21\u0C4D",
    "s6.signIn": "\u0C21\u0C3E\u0C37\u0C4D\u200C\u0C2C\u0C4B\u0C30\u0C4D\u0C21\u0C4D\u200C\u0C32\u0C4B \u0C38\u0C48\u0C28\u0C4D \u0C07\u0C28\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "s6.forgot": "\u0C2A\u0C3E\u0C38\u0C4D\u200C\u0C35\u0C30\u0C4D\u0C21\u0C4D \u0C2E\u0C30\u0C4D\u0C1A\u0C3F\u0C2A\u0C4B\u0C2F\u0C3F\u0C02\u0C26\u0C3E? \u0C2E\u0C40 \u0C05\u0C38\u0C3F\u0C38\u0C4D\u0C1F\u0C46\u0C02\u0C1F\u0C4D \u0C21\u0C48\u0C30\u0C46\u0C15\u0C4D\u0C1F\u0C30\u0C4D\u200C\u0C28\u0C41 \u0C38\u0C02\u0C2A\u0C4D\u0C30\u0C26\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
    "s6.guest": "\u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C15\u0C41\u0C02\u0C21\u0C3E \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F \u2192",
    "s6.signout": "\u0C38\u0C48\u0C28\u0C4D \u0C05\u0C35\u0C41\u0C1F\u0C4D",
    "s6.signedInAs": "{who} \u0C17\u0C3E \u0C38\u0C48\u0C28\u0C4D \u0C07\u0C28\u0C4D \u0C06\u0C2B\u0C40\u0C38\u0C4D\u200C\u0C32\u0C4B \u0C09\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C41",
    "s6.successFarmer": "\u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F! \u0C2E\u0C40 \u0C2A\u0C4D\u0C30\u0C4A\u0C2B\u0C48\u0C32\u0C4D {phone} \u0C32\u0C4B \u0C38\u0C47\u0C35\u0C4D \u0C05\u0C2F\u0C3F\u0C02\u0C26\u0C3F.",
    "s6.successOfficer": "\u0C38\u0C4D\u0C35\u0C3E\u0C17\u0C24\u0C02, {name}. \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F \u0C21\u0C3E\u0C37\u0C4D\u200C\u0C2C\u0C4B\u0C30\u0C4D\u0C21\u0C4D \u0C24\u0C30\u0C4D\u0C35\u0C3E\u0C24\u0C3F \u0C26\u0C36\u0C32\u0C4B \u0C35\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "s6.successGuest": "\u0C05\u0C24\u0C3F\u0C25\u0C3F\u0C17\u0C3E \u0C1A\u0C42\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C41. \u0C38\u0C30\u0C4D\u0C35\u0C30\u0C4D\u200C\u0C32\u0C4B \u0C0F\u0C2E\u0C40 \u0C38\u0C47\u0C35\u0C4D \u0C15\u0C3E\u0C26\u0C41.",
    "s6.continue": "\u0C15\u0C4A\u0C28\u0C38\u0C3E\u0C17\u0C3F\u0C02\u0C1A\u0C41",
    "err.auth.phone": "\u0C38\u0C30\u0C48\u0C28 10 \u0C05\u0C02\u0C15\u0C46\u0C32 \u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F.",
    "err.auth.otpShape": "6 \u0C05\u0C02\u0C15\u0C46\u0C32 \u0C15\u0C4B\u0C21\u0C4D \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F.",
    "err.auth.INVALID_OTP": "\u0C15\u0C4B\u0C21\u0C4D \u0C38\u0C30\u0C3F\u0C2A\u0C4B\u0C32\u0C32\u0C47\u0C26\u0C41. \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C2A\u0C4D\u0C30\u0C2F\u0C24\u0C4D\u0C28\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
    "err.auth.OTP_EXPIRED": "\u0C15\u0C4B\u0C21\u0C4D \u0C17\u0C21\u0C41\u0C35\u0C41 \u0C2E\u0C41\u0C17\u0C3F\u0C38\u0C3F\u0C02\u0C26\u0C3F. \u0C15\u0C4A\u0C24\u0C4D\u0C24\u0C26\u0C3F \u0C2A\u0C02\u0C2A\u0C02\u0C21\u0C3F.",
    "err.auth.TOO_MANY_ATTEMPTS": "\u0C1A\u0C3E\u0C32\u0C3E \u0C24\u0C2A\u0C4D\u0C2A\u0C41 \u0C2A\u0C4D\u0C30\u0C2F\u0C24\u0C4D\u0C28\u0C3E\u0C32\u0C41. \u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C15\u0C4B\u0C21\u0C4D \u0C05\u0C21\u0C17\u0C02\u0C21\u0C3F.",
    "err.auth.RATE_LIMITED": "\u0C15\u0C4A\u0C02\u0C1A\u0C46\u0C02 \u0C06\u0C17\u0C3F \u0C15\u0C4B\u0C21\u0C4D \u0C05\u0C21\u0C17\u0C02\u0C21\u0C3F.",
    "err.auth.INVALID_CREDENTIALS": "\u0C38\u0C4D\u0C1F\u0C3E\u0C2B\u0C4D \u0C10\u0C21\u0C40 \u0C32\u0C47\u0C26\u0C3E \u0C2A\u0C3E\u0C38\u0C4D\u200C\u0C35\u0C30\u0C4D\u0C21\u0C4D \u0C24\u0C2A\u0C4D\u0C2A\u0C41.",
    "err.auth.NETWORK": "\u0C38\u0C47\u0C35 \u0C05\u0C02\u0C26\u0C21\u0C02 \u0C32\u0C47\u0C26\u0C41. API \u0C38\u0C30\u0C4D\u0C35\u0C30\u0C4D \u0C28\u0C21\u0C41\u0C38\u0C4D\u0C24\u0C4B\u0C02\u0C26\u0C3E?",
    "intent.stepLabel": "\u0C26\u0C3E\u0C26\u0C3E\u0C2A\u0C41 \u0C38\u0C3F\u0C26\u0C4D\u0C27\u0C02 \u2014 7\u0C32\u0C4B \u0C26\u0C36 6",
    "intent.title": "\u0C2E\u0C40 \u0C2A\u0C4A\u0C32 \u0C2A\u0C4D\u0C30\u0C4A\u0C2B\u0C48\u0C32\u0C4D\u200C\u0C28\u0C41 \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "intent.why": "\u0C08 \u0C2A\u0C4A\u0C32 \u0C2A\u0C4D\u0C30\u0C4A\u0C2B\u0C48\u0C32\u0C4D \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C38\u0C47\u0C35\u0C4D \u0C15\u0C3E\u0C35\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F, \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F \u0C2E\u0C3F\u0C2E\u0C4D\u0C2E\u0C32\u0C4D\u0C28\u0C3F \u0C38\u0C02\u0C2A\u0C4D\u0C30\u0C26\u0C3F\u0C02\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C2E\u0C40 \u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D\u200C\u0C28\u0C41 \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
    "intent.summary": "\u0C38\u0C30\u0C3F\u0C1A\u0C42\u0C38\u0C3F\u0C28 \u0C2E\u0C40 \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41",
    "intent.benefitsTitle": "\u0C16\u0C3E\u0C24\u0C3E\u0C24\u0C4B \u0C2E\u0C40\u0C30\u0C41",
    "intent.b1": "\u0C28\u0C47\u0C1F\u0C3F \u0C2A\u0C02\u0C1F \u0C38\u0C32\u0C39\u0C3E \u0C2A\u0C4A\u0C02\u0C26\u0C02\u0C21\u0C3F",
    "intent.b2": "\u0C38\u0C32\u0C39\u0C3E\u0C28\u0C41 \u0C2E\u0C40 \u0C2D\u0C3E\u0C37\u0C32\u0C4B \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F",
    "intent.b3": "\u0C2E\u0C40 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F\u0C28\u0C3F \u0C38\u0C02\u0C2A\u0C4D\u0C30\u0C26\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    "intent.privacy": "\u0C2E\u0C40 \u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D \u0C16\u0C3E\u0C24\u0C3E \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C38\u0C02\u0C2A\u0C4D\u0C30\u0C26\u0C3F\u0C02\u0C2A\u0C41\u0C32 \u0C15\u0C4B\u0C38\u0C02 \u0C2E\u0C3E\u0C24\u0C4D\u0C30\u0C2E\u0C47 \u0C35\u0C3E\u0C21\u0C24\u0C3E\u0C2E\u0C41. \u0C07\u0C24\u0C30 \u0C30\u0C48\u0C24\u0C41\u0C32\u0C15\u0C41 \u0C15\u0C28\u0C3F\u0C2A\u0C3F\u0C02\u0C1A\u0C26\u0C41.",
    "intent.terms": "\u0C28\u0C47\u0C28\u0C41 \u0C35\u0C3E\u0C21\u0C15\u0C02 \u0C28\u0C3F\u0C2C\u0C02\u0C27\u0C28\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C17\u0C4B\u0C2A\u0C4D\u0C2F\u0C24\u0C3E \u0C2A\u0C4D\u0C30\u0C15\u0C1F\u0C28\u0C15\u0C41 \u0C05\u0C02\u0C17\u0C40\u0C15\u0C30\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C28\u0C41.",
    "intent.continue": "\u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D\u200C\u0C24\u0C4B \u0C15\u0C4A\u0C28\u0C38\u0C3E\u0C17\u0C3F\u0C02\u0C1A\u0C41",
    "intent.change": "\u0C28\u0C3E \u0C2A\u0C4A\u0C32 \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
    "err.auth.VALIDATION": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C40 \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C38\u0C30\u0C3F\u0C1A\u0C42\u0C38\u0C3F \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C2A\u0C4D\u0C30\u0C2F\u0C24\u0C4D\u0C28\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
    "err.auth.TOKEN_EXPIRED": "\u0C2E\u0C40 \u0C38\u0C46\u0C37\u0C28\u0C4D \u0C2E\u0C41\u0C17\u0C3F\u0C38\u0C3F\u0C02\u0C26\u0C3F. \u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C38\u0C48\u0C28\u0C4D \u0C07\u0C28\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    "err.auth.TOKEN_INVALID": "\u0C2E\u0C40 \u0C38\u0C46\u0C37\u0C28\u0C4D \u0C2E\u0C41\u0C17\u0C3F\u0C38\u0C3F\u0C02\u0C26\u0C3F. \u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C38\u0C48\u0C28\u0C4D \u0C07\u0C28\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    "err.auth.NO_TOKEN": "\u0C2E\u0C40 \u0C38\u0C46\u0C37\u0C28\u0C4D \u0C2E\u0C41\u0C17\u0C3F\u0C38\u0C3F\u0C02\u0C26\u0C3F. \u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C38\u0C48\u0C28\u0C4D \u0C07\u0C28\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    "err.auth.NO_ACCOUNT": "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C17\u0C3E \u0C2E\u0C40 \u0C2B\u0C4B\u0C28\u0C4D\u200C\u0C28\u0C41 \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
    "p.stepLabel": "\u0C26\u0C3E\u0C26\u0C3E\u0C2A\u0C41\u0C17\u0C3E \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C2F\u0C3F\u0C02\u0C26\u0C3F",
    "p.title": "\u0C2E\u0C3F\u0C2E\u0C4D\u0C2E\u0C32\u0C4D\u0C28\u0C3F \u0C0F\u0C2E\u0C28\u0C3F \u0C2A\u0C3F\u0C32\u0C35\u0C3E\u0C32\u0C3F?",
    "p.help": "\u0C2E\u0C40 \u0C2A\u0C47\u0C30\u0C41 \u0C39\u0C4B\u0C2E\u0C4D \u0C38\u0C4D\u0C15\u0C4D\u0C30\u0C40\u0C28\u0C4D\u200C\u0C2A\u0C48 \u0C15\u0C28\u0C3F\u0C2A\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F. \u0C2E\u0C40 \u0C28\u0C02\u0C2C\u0C30\u0C4D \u0C17\u0C4B\u0C2A\u0C28\u0C40\u0C2F\u0C02\u0C17\u0C3E \u0C09\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F.",
    "p.name": "\u0C2E\u0C40 \u0C2A\u0C47\u0C30\u0C41",
    "p.namePh": "\u0C09\u0C26\u0C3E. \u0C38\u0C41\u0C28\u0C40\u0C24\u0C3E \u0C2A\u0C3E\u0C1F\u0C40\u0C32\u0C4D",
    "p.save": "\u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C38\u0C3F \u0C39\u0C4B\u0C2E\u0C4D \u0C24\u0C46\u0C30\u0C35\u0C02\u0C21\u0C3F",
    "err.auth.name": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C40 \u0C2A\u0C47\u0C30\u0C41 \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F.",
    "home.title": "\u0C28\u0C47\u0C1F\u0C3F \u0C38\u0C32\u0C39\u0C3E",
    "home.hello": "\u0C28\u0C2E\u0C38\u0C4D\u0C24\u0C47, {name}",
    "home.listen": "\u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F",
    "home.stop": "\u0C06\u0C2A\u0C02\u0C21\u0C3F",
    "home.ack": "\u0C28\u0C47\u0C28\u0C41 \u0C1A\u0C26\u0C3F\u0C35\u0C3E\u0C28\u0C41",
    "home.acked": "\u0C1A\u0C26\u0C3F\u0C35\u0C3E\u0C30\u0C41",
    "home.voiceUnavailable": "\u0C08 \u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C02\u0C32\u0C4B \u0C06\u0C21\u0C3F\u0C2F\u0C4B \u0C32\u0C47\u0C26\u0C41.",
    "home.guestNote": "\u0C2E\u0C40\u0C30\u0C41 \u0C05\u0C24\u0C3F\u0C25\u0C3F\u0C17\u0C3E \u0C1A\u0C42\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C41 \u2014 \u0C07\u0C26\u0C3F \u0C2A\u0C4D\u0C30\u0C26\u0C30\u0C4D\u0C36\u0C28 \u0C15\u0C4B\u0C38\u0C02 \u0C28\u0C2E\u0C42\u0C28\u0C3E \u0C38\u0C32\u0C39\u0C3E.",
    "severity.urgent": "\u0C08\u0C30\u0C4B\u0C1C\u0C47 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "severity.warning": "\u0C17\u0C2E\u0C28\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    "severity.info": "\u0C38\u0C2E\u0C3E\u0C1A\u0C3E\u0C30\u0C02",
    "severity.watch": "\u0C39\u0C46\u0C1A\u0C4D\u0C1A\u0C30\u0C3F\u0C15",
    "weather.next7": "\u0C30\u0C3E\u0C2C\u0C4B\u0C2F\u0C47 7 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C41",
    "weather.deficit": "{district}\u0C32\u0C4B \u0C08 \u0C38\u0C40\u0C1C\u0C28\u0C4D \u0C35\u0C30\u0C4D\u0C37\u0C2A\u0C3E\u0C24\u0C02 \u0C38\u0C3E\u0C27\u0C3E\u0C30\u0C23\u0C02 \u0C15\u0C02\u0C1F\u0C47 {pct}% \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35.",
    "weather.surplus": "{district}\u0C32\u0C4B \u0C08 \u0C38\u0C40\u0C1C\u0C28\u0C4D \u0C35\u0C30\u0C4D\u0C37\u0C2A\u0C3E\u0C24\u0C02 \u0C38\u0C3E\u0C27\u0C3E\u0C30\u0C23\u0C02 \u0C15\u0C02\u0C1F\u0C47 {pct}% \u0C0E\u0C15\u0C4D\u0C15\u0C41\u0C35.",
    "weather.normal": "{district}\u0C32\u0C4B \u0C08 \u0C38\u0C40\u0C1C\u0C28\u0C4D \u0C35\u0C30\u0C4D\u0C37\u0C2A\u0C3E\u0C24\u0C02 \u0C38\u0C3E\u0C27\u0C3E\u0C30\u0C23 \u0C38\u0C4D\u0C25\u0C3E\u0C2F\u0C3F\u0C32\u0C4B \u0C09\u0C02\u0C26\u0C3F.",
    "adv.harvestRain.title": "\u0C35\u0C30\u0C4D\u0C37\u0C02 \u0C30\u0C3E\u0C15\u0C2E\u0C41\u0C02\u0C26\u0C47 \u0C15\u0C4B\u0C24 \u0C35\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "adv.harvestRain.body": "\u0C30\u0C46\u0C02\u0C21\u0C41 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C4D\u0C32\u0C4B \u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {mm} \u0C2E\u0C3F.\u0C2E\u0C40. \u0C35\u0C30\u0C4D\u0C37\u0C02 \u0C35\u0C41\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F, \u0C2E\u0C40 {crop} \u0C38\u0C3F\u0C26\u0C4D\u0C27\u0C02\u0C17\u0C3E \u0C09\u0C02\u0C26\u0C3F. \u0C07\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C47 \u0C15\u0C4B\u0C24 \u0C35\u0C47\u0C38\u0C3F \u0C15\u0C2A\u0C4D\u0C2A\u0C3F \u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C02\u0C21\u0C3F.",
    "adv.harvestRain.why": "\u0C38\u0C3F\u0C26\u0C4D\u0C27\u0C2E\u0C48\u0C28 \u0C2A\u0C02\u0C1F\u0C2A\u0C48 \u0C35\u0C30\u0C4D\u0C37\u0C02 \u0C2A\u0C21\u0C3F\u0C24\u0C47 \u0C24\u0C3E\u0C2A\u0C21\u0C02 \u0C35\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F, \u0C27\u0C30 \u0C24\u0C17\u0C4D\u0C17\u0C41\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "adv.holdSpray.title": "\u0C2A\u0C3F\u0C1A\u0C3F\u0C15\u0C3E\u0C30\u0C40 \u0C1A\u0C47\u0C2F\u0C35\u0C26\u0C4D\u0C26\u0C41 \u2014 {day} \u0C2D\u0C3E\u0C30\u0C40 \u0C35\u0C30\u0C4D\u0C37\u0C02",
    "adv.holdSpray.body": "{day} \u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {mm} \u0C2E\u0C3F.\u0C2E\u0C40. \u0C35\u0C30\u0C4D\u0C37\u0C02 \u0C35\u0C41\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F. \u0C2A\u0C3F\u0C1A\u0C3F\u0C15\u0C3E\u0C30\u0C40 \u0C35\u0C3E\u0C2F\u0C3F\u0C26\u0C3E \u0C35\u0C47\u0C38\u0C3F, \u0C08\u0C30\u0C4B\u0C1C\u0C41 \u0C2A\u0C4A\u0C32\u0C02 \u0C15\u0C3E\u0C32\u0C41\u0C35\u0C32\u0C41 \u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    "adv.holdSpray.why": "\u0C2D\u0C3E\u0C30\u0C40 \u0C35\u0C30\u0C4D\u0C37\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C2E\u0C41\u0C02\u0C26\u0C41 \u0C1A\u0C32\u0C4D\u0C32\u0C3F\u0C28\u0C26\u0C3F \u0C15\u0C4A\u0C1F\u0C4D\u0C1F\u0C41\u0C15\u0C41\u0C2A\u0C4B\u0C24\u0C41\u0C02\u0C26\u0C3F \u2014 \u0C21\u0C2C\u0C4D\u0C2C\u0C41, \u0C2E\u0C02\u0C26\u0C41 \u0C30\u0C46\u0C02\u0C21\u0C42 \u0C35\u0C43\u0C25\u0C3E.",
    "adv.irrigate.title": "\u0C12\u0C15 \u0C30\u0C15\u0C4D\u0C37\u0C23 \u0C28\u0C40\u0C1F\u0C3F \u0C24\u0C21\u0C3F \u0C07\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F",
    "adv.irrigate.body": "{district}\u0C32\u0C4B \u0C35\u0C30\u0C4D\u0C37\u0C2A\u0C3E\u0C24\u0C02 {pct}% \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35, \u0C2E\u0C40 {crop} {stage} \u0C26\u0C36\u0C32\u0C4B \u0C09\u0C02\u0C26\u0C3F. \u0C30\u0C46\u0C02\u0C21\u0C41 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C4D\u0C32\u0C4B \u0C12\u0C15 \u0C24\u0C47\u0C32\u0C3F\u0C15\u0C2A\u0C3E\u0C1F\u0C3F \u0C24\u0C21\u0C3F \u0C07\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F.",
    "adv.irrigate.why": "\u0C08 \u0C26\u0C36\u0C32\u0C4B \u0C24\u0C47\u0C2E \u0C32\u0C4B\u0C2A\u0C02 \u0C26\u0C3F\u0C17\u0C41\u0C2C\u0C21\u0C3F\u0C28\u0C3F \u0C36\u0C3E\u0C36\u0C4D\u0C35\u0C24\u0C02\u0C17\u0C3E \u0C24\u0C17\u0C4D\u0C17\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "adv.heat.title": "\u0C35\u0C47\u0C21\u0C3F \u0C12\u0C24\u0C4D\u0C24\u0C3F\u0C21\u0C3F \u2014 \u0C24\u0C46\u0C32\u0C4D\u0C32\u0C35\u0C3E\u0C30\u0C41\u0C1C\u0C3E\u0C2E\u0C41\u0C28 \u0C28\u0C40\u0C30\u0C41 \u0C07\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F",
    "adv.heat.body": "\u0C17\u0C30\u0C3F\u0C37\u0C4D\u0C20 \u0C09\u0C37\u0C4D\u0C23\u0C4B\u0C17\u0C4D\u0C30\u0C24 \u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {tmax}\xB0C. \u0C09\u0C26\u0C2F\u0C02 8 \u0C32\u0C4B\u0C2A\u0C41 \u0C28\u0C40\u0C30\u0C41 \u0C07\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F; 11 \u0C28\u0C41\u0C02\u0C21\u0C3F 4 \u0C2E\u0C27\u0C4D\u0C2F \u0C2A\u0C3F\u0C1A\u0C3F\u0C15\u0C3E\u0C30\u0C40 \u0C1A\u0C47\u0C2F\u0C35\u0C26\u0C4D\u0C26\u0C41.",
    "adv.heat.why": "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02 \u0C2A\u0C3F\u0C1A\u0C3F\u0C15\u0C3E\u0C30\u0C40 \u0C2A\u0C28\u0C3F\u0C1A\u0C47\u0C2F\u0C15\u0C2E\u0C41\u0C02\u0C26\u0C47 \u0C06\u0C30\u0C3F\u0C2A\u0C4B\u0C24\u0C41\u0C02\u0C26\u0C3F, \u0C06\u0C15\u0C41 \u0C15\u0C3E\u0C32\u0C3F\u0C2A\u0C4B\u0C35\u0C1A\u0C4D\u0C1A\u0C41.",
    "adv.allClear.title": "\u0C08\u0C30\u0C4B\u0C1C\u0C41 \u0C2A\u0C4D\u0C30\u0C24\u0C4D\u0C2F\u0C47\u0C15\u0C02\u0C17\u0C3E \u0C1A\u0C47\u0C2F\u0C3E\u0C32\u0C4D\u0C38\u0C3F\u0C28\u0C26\u0C3F \u0C32\u0C47\u0C26\u0C41",
    "adv.allClear.body": "\u0C2E\u0C40 {crop} {stage} \u0C26\u0C36\u0C32\u0C4B \u0C2C\u0C3E\u0C17\u0C41\u0C02\u0C26\u0C3F. \u0C38\u0C3E\u0C27\u0C3E\u0C30\u0C23 \u0C2A\u0C4D\u0C30\u0C23\u0C3E\u0C33\u0C3F\u0C15 \u0C15\u0C4A\u0C28\u0C38\u0C3E\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
    "adv.allClear.why": "\u0C35\u0C3E\u0C24\u0C3E\u0C35\u0C30\u0C23 \u0C38\u0C42\u0C1A\u0C28\u0C32\u0C28\u0C4D\u0C28\u0C40 \u0C38\u0C3E\u0C27\u0C3E\u0C30\u0C23 \u0C2A\u0C30\u0C3F\u0C27\u0C3F\u0C32\u0C4B \u0C09\u0C28\u0C4D\u0C28\u0C3E\u0C2F\u0C3F.",
    "adv.detail.why": "\u0C07\u0C26\u0C3F \u0C0E\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C2E\u0C41\u0C16\u0C4D\u0C2F\u0C02",
    "land.acres": "{acres} \u0C0E\u0C15\u0C30\u0C3E\u0C32\u0C41",
    "stage.sowing": "\u0C35\u0C3F\u0C24\u0C4D\u0C24\u0C41\u0C1F",
    "stage.vegetative": "\u0C2A\u0C46\u0C30\u0C41\u0C17\u0C41\u0C26\u0C32",
    "stage.flowering": "\u0C2A\u0C42\u0C24 \u0C26\u0C36",
    "stage.grain-fill": "\u0C27\u0C3E\u0C28\u0C4D\u0C2F\u0C02 \u0C28\u0C3F\u0C02\u0C21\u0C41\u0C1F",
    "crop.cotton": "\u0C2A\u0C24\u0C4D\u0C24\u0C3F",
    "crop.onion": "\u0C09\u0C32\u0C4D\u0C32\u0C3F",
    "crop.soybean": "\u0C38\u0C4B\u0C2F\u0C3E\u0C2C\u0C40\u0C28\u0C4D",
    "crop.chilli": "\u0C2E\u0C3F\u0C30\u0C4D\u0C1A\u0C3F",
    "crop.tomato": "\u0C1F\u0C2E\u0C3E\u0C1F\u0C3E",
    "crop.wheat": "\u0C17\u0C4B\u0C27\u0C41\u0C2E",
    "crop.rice": "\u0C35\u0C30\u0C3F",
    "crop.groundnut": "\u0C35\u0C47\u0C30\u0C41\u0C36\u0C28\u0C17",
    "mandi.title": "\u0C0E\u0C15\u0C4D\u0C15\u0C21 \u0C05\u0C2E\u0C4D\u0C2E\u0C3E\u0C32\u0C3F (\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C46\u0C1F\u0C4D \u0C27\u0C30\u0C32\u0C41)",
    "mandi.help": "\u0C30\u0C35\u0C3E\u0C23\u0C3E \u0C16\u0C30\u0C4D\u0C1A\u0C41\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C46\u0C1F\u0C4D \u0C30\u0C41\u0C38\u0C41\u0C2E\u0C41\u0C32\u0C28\u0C41 \u0C24\u0C40\u0C38\u0C3F\u0C35\u0C47\u0C38\u0C3F \u0C28\u0C3F\u0C15\u0C30 \u0C30\u0C3E\u0C2C\u0C21\u0C3F\u0C28\u0C3F \u0C38\u0C30\u0C3F\u0C2A\u0C4B\u0C32\u0C4D\u0C1A\u0C02\u0C21\u0C3F.",
    "mandi.cropLabel": "\u0C2A\u0C02\u0C1F",
    "mandi.qtyLabel": "\u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C02 (\u0C15\u0C4D\u0C35\u0C3F\u0C02\u0C1F\u0C3E\u0C33\u0C4D\u0C32\u0C32\u0C4B)",
    "mandi.qtyPh": "\u0C09\u0C26\u0C3E. 20",
    "mandi.recalc": "\u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C32\u0C46\u0C15\u0C4D\u0C15\u0C3F\u0C02\u0C1A\u0C41",
    "mandi.bestNetTag": "\u0C05\u0C24\u0C4D\u0C2F\u0C27\u0C3F\u0C15 \u0C28\u0C3F\u0C15\u0C30 \u0C30\u0C3E\u0C2C\u0C21\u0C3F",
    "mandi.quotedPrice": "\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C46\u0C1F\u0C4D \u0C27\u0C30: \u20B9{price}/\u0C15\u0C4D\u0C35\u0C3F\u0C02\u0C1F\u0C3E\u0C32\u0C4D",
    "mandi.distance": "{dist} \u0C15\u0C3F.\u0C2E\u0C40 \u0C26\u0C42\u0C30\u0C02 \xB7 {days}",
    "mandi.gross": "\u0C2E\u0C4A\u0C24\u0C4D\u0C24\u0C02 \u0C35\u0C3F\u0C32\u0C41\u0C35: \u20B9{val}",
    "mandi.transport": "\u0C30\u0C35\u0C3E\u0C23\u0C3E \u0C16\u0C30\u0C4D\u0C1A\u0C41: \u2212\u20B9{val}",
    "mandi.fee": "\u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C46\u0C1F\u0C4D \u0C2B\u0C40\u0C1C\u0C41: \u2212\u20B9{val}",
    "mandi.net": "\u20B9{val} \u0C1A\u0C47\u0C24\u0C3F\u0C15\u0C3F \u0C05\u0C02\u0C26\u0C47 \u0C28\u0C3F\u0C15\u0C30 \u0C06\u0C26\u0C3E\u0C2F\u0C02",
    "mandi.inversion": "\u0C17\u0C2E\u0C28\u0C3F\u0C15: {priceLeader} \u0C2E\u0C3E\u0C30\u0C4D\u0C15\u0C46\u0C1F\u0C4D\u200C\u0C32\u0C4B \u0C27\u0C30 \u0C0E\u0C15\u0C4D\u0C15\u0C41\u0C35\u0C17\u0C3E \u0C09\u0C28\u0C4D\u0C28\u0C2A\u0C4D\u0C2A\u0C1F\u0C3F\u0C15\u0C40, \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C30\u0C35\u0C3E\u0C23\u0C3E \u0C16\u0C30\u0C4D\u0C1A\u0C41 \u0C35\u0C32\u0C4D\u0C32 {netLeader} \u0C32\u0C4B \u0C2E\u0C40\u0C15\u0C41 \u20B9{gap} \u0C05\u0C26\u0C28\u0C2A\u0C41 \u0C28\u0C3F\u0C15\u0C30 \u0C06\u0C26\u0C3E\u0C2F\u0C02 \u0C35\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "mandi.trendUp": "\u0C17\u0C24 7 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C4D\u0C32\u0C4B \u0C27\u0C30 {pct}% \u0C2A\u0C46\u0C30\u0C3F\u0C17\u0C3F\u0C02\u0C26\u0C3F",
    "mandi.trendDown": "\u0C17\u0C24 7 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C4D\u0C32\u0C4B \u0C27\u0C30 {pct}% \u0C24\u0C17\u0C4D\u0C17\u0C3F\u0C02\u0C26\u0C3F",
    "mandi.trendFlat": "\u0C17\u0C24 7 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C4D\u0C32\u0C4B \u0C27\u0C30 \u0C38\u0C4D\u0C25\u0C3F\u0C30\u0C02\u0C17\u0C3E \u0C09\u0C02\u0C26\u0C3F",
    "help.title": "\u0C38\u0C39\u0C3E\u0C2F\u0C02 \u0C15\u0C3E\u0C35\u0C3E\u0C32\u0C3E?",
    "help.help": "\u0C2E\u0C40 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F\u0C28\u0C3F \u0C38\u0C02\u0C2A\u0C4D\u0C30\u0C26\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F \u0C32\u0C47\u0C26\u0C3E \u0C05\u0C24\u0C4D\u0C2F\u0C35\u0C38\u0C30 \u0C39\u0C46\u0C32\u0C4D\u0C2A\u0C4D\u200C\u0C32\u0C48\u0C28\u0C4D\u200C\u0C15\u0C41 \u0C15\u0C3E\u0C32\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    "help.officerTitle": "\u0C2E\u0C40\u0C15\u0C41 \u0C15\u0C47\u0C1F\u0C3E\u0C2F\u0C3F\u0C02\u0C1A\u0C3F\u0C28 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F",
    "help.officerRole": "\u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C35\u0C3F\u0C38\u0C4D\u0C24\u0C30\u0C23 \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F (ADO)",
    "help.callBtn": "\u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F\u0C15\u0C3F \u0C15\u0C3E\u0C32\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "help.visitBtn": "\u0C2A\u0C4A\u0C32\u0C02 \u0C38\u0C02\u0C26\u0C30\u0C4D\u0C36\u0C28 \u0C15\u0C4B\u0C30\u0C02\u0C21\u0C3F",
    "help.visitTitle": "\u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F \u0C2A\u0C4A\u0C32\u0C02 \u0C38\u0C02\u0C26\u0C30\u0C4D\u0C36\u0C28 \u0C05\u0C2D\u0C4D\u0C2F\u0C30\u0C4D\u0C25\u0C28",
    "help.visitDateLabel": "\u0C38\u0C02\u0C26\u0C30\u0C4D\u0C36\u0C28 \u0C06\u0C36\u0C3F\u0C02\u0C1A\u0C47 \u0C24\u0C47\u0C26\u0C40",
    "help.visitReasonLabel": "\u0C38\u0C02\u0C26\u0C30\u0C4D\u0C36\u0C28 \u0C15\u0C3E\u0C30\u0C23\u0C02 (\u0C10\u0C1A\u0C4D\u0C1B\u0C3F\u0C15\u0C02)",
    "help.visitReasonPh": "\u0C09\u0C26\u0C3E. \u0C24\u0C46\u0C17\u0C41\u0C33\u0C4D\u0C32 \u0C28\u0C37\u0C4D\u0C1F\u0C02 \u0C2A\u0C30\u0C3F\u0C36\u0C40\u0C32\u0C28, \u0C2A\u0C02\u0C1F \u0C28\u0C37\u0C4D\u0C1F \u0C28\u0C2E\u0C4B\u0C26\u0C41",
    "help.visitSubmit": "\u0C05\u0C2D\u0C4D\u0C2F\u0C30\u0C4D\u0C25\u0C28 \u0C2A\u0C02\u0C2A\u0C02\u0C21\u0C3F",
    "help.visitCancel": "\u0C30\u0C26\u0C4D\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C3F",
    "help.visitSuccess": "\u0C38\u0C02\u0C26\u0C30\u0C4D\u0C36\u0C28 \u0C05\u0C2D\u0C4D\u0C2F\u0C30\u0C4D\u0C25\u0C28 \u0C28\u0C2E\u0C4B\u0C26\u0C48\u0C02\u0C26\u0C3F. \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F {name} \u0C17\u0C3E\u0C30\u0C3F\u0C15\u0C3F \u0C38\u0C2E\u0C3E\u0C1A\u0C3E\u0C30\u0C02 \u0C05\u0C02\u0C26\u0C3F\u0C02\u0C26\u0C3F.",
    "help.helplinesTitle": "\u0C05\u0C24\u0C4D\u0C2F\u0C35\u0C38\u0C30 \u0C39\u0C46\u0C32\u0C4D\u0C2A\u0C4D\u200C\u0C32\u0C48\u0C28\u0C4D\u0C32\u0C41",
    "help.kcc": "\u0C15\u0C3F\u0C38\u0C3E\u0C28\u0C4D \u0C15\u0C3E\u0C32\u0C4D \u0C38\u0C46\u0C02\u0C1F\u0C30\u0C4D (\u0C1F\u0C4B\u0C32\u0C4D \u0C2B\u0C4D\u0C30\u0C40)",
    "help.kccPhone": "1800-180-1551",
    "help.disasterLine": "\u0C30\u0C3E\u0C37\u0C4D\u0C1F\u0C4D\u0C30 \u0C2A\u0C02\u0C1F \u0C38\u0C02\u0C15\u0C4D\u0C37\u0C4B\u0C2D \u0C39\u0C46\u0C32\u0C4D\u0C2A\u0C4D\u200C\u0C32\u0C48\u0C28\u0C4D",
    "help.disasterPhone": "1800-120-8040",
    "loan.title": "\u0C2E\u0C40 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C30\u0C41\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C4D\u0C32\u0C3E\u0C28\u0C4D \u0C1A\u0C47\u0C38\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F",
    "loan.help": "\u0C2E\u0C40 EMI \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C35\u0C21\u0C4D\u0C21\u0C40\u0C28\u0C3F \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C2A\u0C4D\u0C32\u0C3E\u0C28\u0C4D \u0C1A\u0C47\u0C38\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F. \u0C2E\u0C40 \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C17\u0C4B\u0C2A\u0C4D\u0C2F\u0C02\u0C17\u0C3E \u0C09\u0C02\u0C1A\u0C2C\u0C21\u0C24\u0C3E\u0C2F\u0C3F.",
    "loan.amount": "\u0C30\u0C41\u0C23 \u0C2E\u0C4A\u0C24\u0C4D\u0C24\u0C02 (\u20B9)",
    "loan.tenure": "\u0C38\u0C2E\u0C2F\u0C02 (\u0C28\u0C46\u0C32\u0C32\u0C41)",
    "loan.rate": "\u0C35\u0C21\u0C4D\u0C21\u0C40 \u0C30\u0C47\u0C1F\u0C41 (%)",
    "loan.calculate": "\u0C32\u0C46\u0C15\u0C4D\u0C15\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F & \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "loan.resultTitle": "\u0C2E\u0C40 \u0C1A\u0C46\u0C32\u0C4D\u0C32\u0C3F\u0C02\u0C2A\u0C41 \u0C2A\u0C4D\u0C30\u0C23\u0C3E\u0C33\u0C3F\u0C15",
    "loan.emi": "\u0C28\u0C46\u0C32\u0C35\u0C3E\u0C30\u0C40 \u0C35\u0C3E\u0C2F\u0C3F\u0C26\u0C3E (EMI)",
    "loan.totalInterest": "\u0C2E\u0C4A\u0C24\u0C4D\u0C24\u0C02 \u0C35\u0C21\u0C4D\u0C21\u0C40",
    "loan.totalPayment": "\u0C2E\u0C4A\u0C24\u0C4D\u0C24\u0C02 \u0C1A\u0C46\u0C32\u0C4D\u0C32\u0C3F\u0C02\u0C2A\u0C41",
    "loan.kccNote": "\u0C15\u0C3F\u0C38\u0C3E\u0C28\u0C4D \u0C15\u0C4D\u0C30\u0C46\u0C21\u0C3F\u0C1F\u0C4D \u0C15\u0C3E\u0C30\u0C4D\u0C21\u0C4D (KCC) 7% \u0C35\u0C21\u0C4D\u0C21\u0C40\u0C24\u0C4B \u0C2A\u0C02\u0C1F \u0C30\u0C41\u0C23\u0C3E\u0C32\u0C28\u0C41 \u0C05\u0C02\u0C26\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F. \u0C38\u0C2E\u0C2F\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C1A\u0C46\u0C32\u0C4D\u0C32\u0C3F\u0C38\u0C4D\u0C24\u0C47 3% \u0C30\u0C3E\u0C2F\u0C3F\u0C24\u0C40 \u0C32\u0C2D\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F, \u0C26\u0C40\u0C28\u0C3F\u0C35\u0C32\u0C4D\u0C32 \u0C35\u0C21\u0C4D\u0C21\u0C40 4%\u0C15\u0C3F \u0C24\u0C17\u0C4D\u0C17\u0C41\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "nav.loan": "\u0C28\u0C3E \u0C30\u0C41\u0C23\u0C02",
    "nav.home": "\u0C38\u0C32\u0C39\u0C3E",
    "nav.mandi": "\u0C0E\u0C15\u0C4D\u0C15\u0C21 \u0C05\u0C2E\u0C4D\u0C2E\u0C3E\u0C32\u0C3F",
    "nav.help": "\u0C38\u0C39\u0C3E\u0C2F\u0C02",
    "nav.profile": "\u0C28\u0C3E \u0C2A\u0C4A\u0C32\u0C02",
    "profile.title": "\u0C28\u0C3E \u0C2A\u0C4A\u0C32\u0C02 & \u0C2A\u0C4D\u0C30\u0C4A\u0C2B\u0C48\u0C32\u0C4D",
    "profile.phoneLabel": "\u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D",
    "profile.locLabel": "\u0C2A\u0C4A\u0C32\u0C02 \u0C09\u0C28\u0C4D\u0C28 \u0C2A\u0C4D\u0C30\u0C26\u0C47\u0C36\u0C02",
    "profile.landLabel": "\u0C2D\u0C42\u0C2E\u0C3F \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41",
    "profile.cropLabel": "\u0C2A\u0C4D\u0C30\u0C38\u0C4D\u0C24\u0C41\u0C24 \u0C2A\u0C02\u0C1F",
    "profile.langLabel": "\u0C2F\u0C3E\u0C2A\u0C4D \u0C2D\u0C3E\u0C37",
    "profile.change": "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
    "profile.signout": "\u0C38\u0C48\u0C28\u0C4D \u0C05\u0C35\u0C41\u0C1F\u0C4D",
    "officer.logAction": "\u0C1A\u0C30\u0C4D\u0C2F \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "officer.actionTitle": "{name} \u0C15\u0C4B\u0C38\u0C02 \u0C1A\u0C30\u0C4D\u0C2F \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "officer.actionTypeLabel": "\u0C1A\u0C30\u0C4D\u0C2F \u0C30\u0C15\u0C02",
    "officer.actionNotesLabel": "\u0C17\u0C2E\u0C28\u0C3F\u0C15\u0C32\u0C41 (\u0C10\u0C1A\u0C4D\u0C1B\u0C3F\u0C15\u0C02)",
    "officer.actionNotesPh": "\u0C2E\u0C40\u0C30\u0C41 \u0C0F\u0C2E\u0C3F \u0C1A\u0C42\u0C36\u0C3E\u0C30\u0C41 \u0C32\u0C47\u0C26\u0C3E \u0C0F\u0C2E\u0C3F \u0C1A\u0C47\u0C36\u0C3E\u0C30\u0C41?",
    "officer.actionSubmit": "\u0C1A\u0C30\u0C4D\u0C2F \u0C38\u0C47\u0C35\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    "officer.actionLabel": "\u0C1A\u0C3F\u0C35\u0C30\u0C3F \u0C1A\u0C30\u0C4D\u0C2F",
    "officer.noAction": "\u0C07\u0C02\u0C15\u0C3E \u0C1A\u0C30\u0C4D\u0C2F \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C15\u0C3E\u0C32\u0C47\u0C26\u0C41",
    "officer.action.call_made": "\u0C15\u0C3E\u0C32\u0C4D \u0C1A\u0C47\u0C36\u0C3E\u0C30\u0C41",
    "officer.action.visit_done": "\u0C2A\u0C4A\u0C32\u0C02 \u0C38\u0C02\u0C26\u0C30\u0C4D\u0C36\u0C28",
    "officer.action.referral": "\u0C30\u0C46\u0C2B\u0C30\u0C32\u0C4D",
    "officer.action.advisory_given": "\u0C38\u0C32\u0C39\u0C3E \u0C07\u0C1A\u0C4D\u0C1A\u0C3E\u0C30\u0C41",
    "officer.action.follow_up": "\u0C2B\u0C32\u0C4B-\u0C05\u0C2A\u0C4D \u0C28\u0C3F\u0C30\u0C4D\u0C23\u0C2F\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F",
    "help.schemesTitle": "\u0C2A\u0C4D\u0C30\u0C2D\u0C41\u0C24\u0C4D\u0C35 \u0C2A\u0C25\u0C15\u0C3E\u0C32\u0C41",
    "help.scheme1Title": "\u0C2A\u0C40\u0C0E\u0C02-\u0C15\u0C3F\u0C38\u0C3E\u0C28\u0C4D",
    "help.scheme1Desc": "\u0C30\u0C48\u0C24\u0C41\u0C32\u0C02\u0C26\u0C30\u0C3F\u0C15\u0C40 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u20B96000 \u0C06\u0C26\u0C3E\u0C2F \u0C2E\u0C26\u0C4D\u0C26\u0C24\u0C41.",
    "help.scheme2Title": "\u0C2A\u0C40\u0C0E\u0C02\u0C0E\u0C2B\u0C4D\u200C\u0C2C\u0C3F\u0C35\u0C48 (\u0C2A\u0C02\u0C1F \u0C2C\u0C40\u0C2E\u0C3E)",
    "help.scheme2Desc": "\u0C38\u0C39\u0C1C \u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C3E\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C26\u0C3F\u0C17\u0C41\u0C2C\u0C21\u0C3F \u0C28\u0C37\u0C4D\u0C1F\u0C3E\u0C32\u0C15\u0C41 \u0C2C\u0C40\u0C2E\u0C3E.",
    "adv.waterlog.title": "\u0C15\u0C3E\u0C32\u0C41\u0C35\u0C32\u0C41 \u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F \u2014 \u0C28\u0C40\u0C30\u0C41 \u0C28\u0C3F\u0C32\u0C4D\u0C35 \u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C02",
    "adv.waterlog.body": "\u0C30\u0C3E\u0C2C\u0C4B\u0C2F\u0C47 \u0C2E\u0C42\u0C21\u0C41 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C4D\u0C32\u0C4B \u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {mm} \u0C2E\u0C3F\u0C2E\u0C40 \u0C35\u0C30\u0C4D\u0C37\u0C02 \u0C06\u0C36\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C41\u0C24\u0C4B\u0C02\u0C26\u0C3F. \u0C2E\u0C40 {soil} \u0C28\u0C47\u0C32 \u0C28\u0C46\u0C2E\u0C4D\u0C2E\u0C26\u0C3F\u0C17\u0C3E \u0C0E\u0C02\u0C21\u0C3F\u0C2A\u0C4B\u0C24\u0C41\u0C02\u0C26\u0C3F \u2014 \u0C07\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C47 \u0C15\u0C3E\u0C32\u0C41\u0C35\u0C32\u0C41 \u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    "adv.waterlog.why": "\u0C28\u0C40\u0C1F\u0C3F\u0C32\u0C4B \u0C2E\u0C41\u0C28\u0C3F\u0C17\u0C3F\u0C28 \u0C35\u0C47\u0C30\u0C4D\u0C32\u0C41 \u0C2A\u0C4B\u0C37\u0C15\u0C3E\u0C32\u0C28\u0C41 \u0C17\u0C4D\u0C30\u0C39\u0C3F\u0C02\u0C1A\u0C32\u0C47\u0C35\u0C41. \u0C30\u0C46\u0C02\u0C21\u0C41 \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C41 \u0C28\u0C3F\u0C32\u0C3F\u0C1A\u0C3F\u0C28 \u0C28\u0C40\u0C30\u0C41 \u0C15\u0C42\u0C21\u0C3E \u0C2A\u0C02\u0C1F\u0C15\u0C41 \u0C36\u0C3E\u0C36\u0C4D\u0C35\u0C24 \u0C28\u0C37\u0C4D\u0C1F\u0C02 \u0C15\u0C32\u0C3F\u0C17\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "adv.rainfedStress.title": "\u0C35\u0C30\u0C4D\u0C37\u0C3E\u0C27\u0C3E\u0C30 \u0C2A\u0C02\u0C1F\u0C15\u0C41 \u0C36\u0C4D\u0C30\u0C26\u0C4D\u0C27 \u0C05\u0C35\u0C38\u0C30\u0C02",
    "adv.rainfedStress.body": "{district}\u0C32\u0C4B \u0C35\u0C30\u0C4D\u0C37\u0C2A\u0C3E\u0C24\u0C02 \u0C38\u0C3E\u0C27\u0C3E\u0C30\u0C23\u0C02 \u0C15\u0C02\u0C1F\u0C47 {pct}% \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35. \u0C2E\u0C40 {crop} {stage} \u0C26\u0C36\u0C32\u0C4B \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F\u0C17\u0C3E \u0C35\u0C30\u0C4D\u0C37\u0C02\u0C2A\u0C48 \u0C06\u0C27\u0C3E\u0C30\u0C2A\u0C21\u0C3F \u0C09\u0C02\u0C26\u0C3F.",
    "adv.rainfedStress.why": "\u0C35\u0C30\u0C4D\u0C37\u0C3E\u0C27\u0C3E\u0C30 \u0C2A\u0C4A\u0C32\u0C3E\u0C32\u0C4D\u0C32\u0C4B \u0C30\u0C41\u0C24\u0C41\u0C2A\u0C35\u0C28\u0C3E\u0C32\u0C41 \u0C2C\u0C32\u0C39\u0C40\u0C28\u0C02\u0C17\u0C3E \u0C09\u0C28\u0C4D\u0C28\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C41 \u0C30\u0C15\u0C4D\u0C37\u0C23 \u0C09\u0C02\u0C21\u0C26\u0C41.",
    "adv.fungalWatch.title": "\u0C36\u0C3F\u0C32\u0C40\u0C02\u0C27\u0C4D\u0C30 \u0C2E\u0C1A\u0C4D\u0C1A\u0C32\u0C2A\u0C48 \u0C28\u0C3F\u0C18\u0C3E \u0C09\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    "adv.fungalWatch.body": "\u0C24\u0C47\u0C2E {humidity}% \u0C09\u0C02\u0C26\u0C3F \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2E\u0C40 {crop} \u0C28\u0C32\u0C4D\u0C32 \u0C28\u0C47\u0C32\u0C32\u0C4B \u0C2A\u0C41\u0C35\u0C4D\u0C35\u0C41\u0C32\u0C41 \u0C2A\u0C42\u0C38\u0C4D\u0C24\u0C4B\u0C02\u0C26\u0C3F. \u0C06\u0C15\u0C41\u0C32\u0C2A\u0C48 \u0C2E\u0C1A\u0C4D\u0C1A\u0C32\u0C41 \u0C32\u0C47\u0C26\u0C3E \u0C30\u0C02\u0C17\u0C41 \u0C2E\u0C3E\u0C30\u0C21\u0C02 \u0C24\u0C28\u0C3F\u0C16\u0C40 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    "adv.fungalWatch.why": "\u0C28\u0C32\u0C4D\u0C32 \u0C28\u0C47\u0C32 \u0C0E\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C38\u0C47\u0C2A\u0C41 \u0C24\u0C47\u0C2E\u0C28\u0C41 \u0C28\u0C3F\u0C32\u0C41\u0C2A\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F. \u0C2A\u0C41\u0C35\u0C4D\u0C35\u0C41 \u0C26\u0C36\u0C32\u0C4B \u0C05\u0C27\u0C3F\u0C15 \u0C24\u0C47\u0C2E \u0C36\u0C3F\u0C32\u0C40\u0C02\u0C27\u0C4D\u0C30\u0C3E\u0C32\u0C28\u0C41 \u0C35\u0C47\u0C17\u0C02\u0C17\u0C3E \u0C35\u0C4D\u0C2F\u0C3E\u0C2A\u0C3F\u0C02\u0C2A\u0C1C\u0C47\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    "officer.dashTitle": "\u0C38\u0C4D\u0C35\u0C3E\u0C17\u0C24\u0C02, {name}",
    "officer.jurisdictionLine": "\u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F \u0C35\u0C3F\u0C38\u0C4D\u0C24\u0C30\u0C23 \u0C05\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F (ADO) \xB7 {district} \u0C1C\u0C3F\u0C32\u0C4D\u0C32\u0C3E",
    "officer.bandCritical": "\u0C24\u0C40\u0C35\u0C4D\u0C30 \u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C02",
    "officer.bandHigh": "\u0C05\u0C27\u0C3F\u0C15 \u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C02",
    "officer.bandMedium": "\u0C2E\u0C27\u0C4D\u0C2F\u0C38\u0C4D\u0C25 \u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C02",
    "officer.bandTotal": "\u0C2E\u0C4A\u0C24\u0C4D\u0C24\u0C02 \u0C2A\u0C30\u0C4D\u0C2F\u0C35\u0C47\u0C15\u0C4D\u0C37\u0C23",
    "officer.caseloadHeading": "\u0C2A\u0C4D\u0C30\u0C3E\u0C27\u0C3E\u0C28\u0C4D\u0C2F\u0C24 \u0C30\u0C48\u0C24\u0C41\u0C32 \u0C1C\u0C3E\u0C2C\u0C3F\u0C24\u0C3E",
    "officer.searchPh": "\u0C30\u0C48\u0C24\u0C41 \u0C32\u0C47\u0C26\u0C3E \u0C17\u0C4D\u0C30\u0C3E\u0C2E\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C35\u0C46\u0C24\u0C15\u0C02\u0C21\u0C3F...",
    "officer.action.resolved": "\u0C2A\u0C30\u0C3F\u0C37\u0C4D\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F",
    "officer.action.review_later": "\u0C24\u0C30\u0C4D\u0C35\u0C3E\u0C24 \u0C38\u0C2E\u0C40\u0C15\u0C4D\u0C37\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F"
  };
  var PACKS = { en, hi, mr, bn, ta, te };
  var current = "en";
  function setLang(code) {
    if (PACKS[code])
      current = code;
    return current;
  }
  function getLang() {
    return current;
  }
  function t(key, params = {}) {
    const template = PACKS[current]?.[key] ?? PACKS.en[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (_, name) => params[name] === void 0 || params[name] === null ? "" : String(params[name]));
  }

  // D:/SIH26-TryHards/assets/js/storage.js
  var PREFIX = "kisan-saathi";
  var KEYS = {
    language: `${PREFIX}.language`,
    draftProfile: `${PREFIX}.draft-profile`,
    session: `${PREFIX}.session`,
    translations: `${PREFIX}.translations.v1`,
    visitRequests: `${PREFIX}.visit-requests`,
    loan: `${PREFIX}.loan`
  };
  function rawGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  function rawSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }
  function rawRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
    }
  }
  function getLanguage() {
    return rawGet(KEYS.language);
  }
  function setLanguage(code) {
    return rawSet(KEYS.language, code);
  }
  function getDraftProfile() {
    const raw = rawGet(KEYS.draftProfile);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  function saveDraftProfile(patch) {
    const next = { ...getDraftProfile() ?? {}, ...patch };
    rawSet(KEYS.draftProfile, JSON.stringify(next));
    return next;
  }
  function getTranslationCache() {
    const raw = rawGet(KEYS.translations);
    if (!raw)
      return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  function saveTranslationCache(cache) {
    try {
      rawSet(KEYS.translations, JSON.stringify(cache));
    } catch {
    }
  }
  function getSession() {
    const raw = rawGet(KEYS.session);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  function saveSession(session) {
    return rawSet(KEYS.session, JSON.stringify(session));
  }
  function clearSession() {
    rawRemove(KEYS.session);
  }
  function getVisitRequests() {
    const raw = rawGet(KEYS.visitRequests);
    if (!raw)
      return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }
  function saveVisitRequest(req) {
    const list = getVisitRequests();
    list.push({ ...req, requestedAt: (/* @__PURE__ */ new Date()).toISOString() });
    rawSet(KEYS.visitRequests, JSON.stringify(list));
    return list;
  }
  var ACKED_KEY = `${PREFIX}.acked-advisories`;
  function getAckedAdvisories() {
    const raw = rawGet(ACKED_KEY);
    if (!raw)
      return /* @__PURE__ */ new Set();
    try {
      return new Set(JSON.parse(raw));
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }
  function ackAdvisory(titleKey) {
    const set = getAckedAdvisories();
    set.add(titleKey);
    rawSet(ACKED_KEY, JSON.stringify([...set]));
  }
  var ACTIONS_KEY = `${PREFIX}.officer-actions`;
  function getOfficerActions() {
    const raw = rawGet(ACTIONS_KEY);
    if (!raw)
      return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  function logOfficerAction(farmerId, type, notes) {
    const all = getOfficerActions();
    if (!all[farmerId])
      all[farmerId] = [];
    all[farmerId].push({ type, notes: notes || null, at: (/* @__PURE__ */ new Date()).toISOString() });
    rawSet(ACTIONS_KEY, JSON.stringify(all));
    return all[farmerId];
  }
  function getLoanData() {
    const raw = rawGet(KEYS.loan);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  function saveLoanData(data) {
    rawSet(KEYS.loan, JSON.stringify(data));
    return data;
  }

  // D:/SIH26-TryHards/assets/js/data/locations.js
  var LOCATION_TREE = [
    { code: "AP", name: "Andhra Pradesh", districts: [
      { code: "AS", name: "Alluri Sitharama Raju", villages: [] },
      { code: "AK", name: "Anakapalli", villages: [] },
      { code: "AN", name: "Ananthapuramu", villages: [] },
      { code: "AM", name: "Annamayya", villages: [] },
      { code: "BP", name: "Bapatla", villages: [] },
      { code: "CH", name: "Chittoor", villages: [] },
      { code: "KN", name: "Dr. B.R. Ambedkar Konaseema", villages: [] },
      { code: "EG", name: "East Godavari", villages: [] },
      { code: "EL", name: "Eluru", villages: [] },
      { code: "GU", name: "Guntur", villages: [] },
      { code: "KK", name: "Kakinada", villages: [] },
      { code: "KR", name: "Krishna", villages: [] },
      { code: "KU", name: "Kurnool", villages: [] },
      { code: "NN", name: "Nandyal", villages: [] },
      { code: "NT", name: "NTR", villages: [] },
      { code: "PL", name: "Palnadu", villages: [] },
      { code: "PM", name: "Parvathipuram Manyam", villages: [] },
      { code: "PR", name: "Prakasam", villages: [] },
      { code: "SR", name: "Srikakulam", villages: [] },
      { code: "NE", name: "Sri Potti Sriramulu Nellore", villages: [] },
      { code: "SS", name: "Sri Sathya Sai", villages: [] },
      { code: "TR", name: "Tirupati", villages: [] },
      { code: "VS", name: "Visakhapatnam", villages: [] },
      { code: "VZ", name: "Vizianagaram", villages: [] },
      { code: "WG", name: "West Godavari", villages: [] },
      { code: "CU", name: "YSR", villages: [] }
    ] },
    { code: "AR", name: "Arunachal Pradesh", districts: [
      { code: "AJ", name: "Anjaw", villages: [] },
      { code: "CH", name: "Changlang", villages: [] },
      { code: "EK", name: "East Kameng", villages: [] },
      { code: "ES", name: "East Siang", villages: [] },
      { code: "", name: "Itanagar capital complex", villages: [] },
      { code: "\u2013", name: "Kamle", villages: [] },
      { code: "\u2013", name: "Kra Daadi", villages: [] },
      { code: "KK", name: "Kurung Kumey", villages: [] },
      { code: "\u2013", name: "Lepa Rada", villages: [] },
      { code: "EL", name: "Lohit", villages: [] },
      { code: "LD", name: "Longding", villages: [] },
      { code: "DV", name: "Lower Dibang Valley", villages: [] },
      { code: "\u2013", name: "Lower Siang", villages: [] },
      { code: "LB", name: "Lower Subansiri", villages: [] },
      { code: "\u2013", name: "Namsai", villages: [] },
      { code: "\u2013", name: "Pakke-Kessang", villages: [] },
      { code: "PA", name: "Papum Pare", villages: [] },
      { code: "\u2013", name: "Shi Yomi", villages: [] },
      { code: "\u2013", name: "Siang", villages: [] },
      { code: "TA", name: "Tawang", villages: [] },
      { code: "TI", name: "Tirap", villages: [] },
      { code: "UD", name: "Upper Dibang Valley", villages: [] },
      { code: "US", name: "Upper Siang", villages: [] },
      { code: "UB", name: "Upper Subansiri", villages: [] },
      { code: "WK", name: "West Kameng", villages: [] },
      { code: "WS", name: "West Siang", villages: [] }
    ] },
    { code: "AS", name: "Assam", districts: [
      { code: "BK", name: "Baksa", villages: [] },
      { code: "BP", name: "Barpeta", villages: [] },
      { code: "BO", name: "Bongaigaon", villages: [] },
      { code: "CA", name: "Cachar", villages: [] },
      { code: "CD", name: "Charaideo", villages: [] },
      { code: "CH", name: "Chirang", villages: [] },
      { code: "DR", name: "Darrang", villages: [] },
      { code: "DM", name: "Dhemaji", villages: [] },
      { code: "DU", name: "Dhubri", villages: [] },
      { code: "DI", name: "Dibrugarh", villages: [] },
      { code: "NC", name: "Dima Hasao", villages: [] },
      { code: "GP", name: "Goalpara", villages: [] },
      { code: "GG", name: "Golaghat", villages: [] },
      { code: "HA", name: "Hailakandi", villages: [] },
      { code: "JO", name: "Jorhat", villages: [] },
      { code: "KU", name: "Kamrup", villages: [] },
      { code: "KM", name: "Kamrup Metropolitan", villages: [] },
      { code: "KG", name: "Karbi Anglong", villages: [] },
      { code: "KR", name: "Karimganj", villages: [] },
      { code: "KJ", name: "Kokrajhar", villages: [] },
      { code: "LA", name: "Lakhimpur", villages: [] },
      { code: "MJ", name: "Majuli", villages: [] },
      { code: "MA", name: "Morigaon", villages: [] },
      { code: "NN", name: "Nagaon", villages: [] },
      { code: "NB", name: "Nalbari", villages: [] },
      { code: "ST", name: "Sivasagar", villages: [] },
      { code: "SO", name: "Sonitpur", villages: [] },
      { code: "SM", name: "South Salmara Mankachar", villages: [] },
      { code: "TI", name: "Tinsukia", villages: [] },
      { code: "UD", name: "Udalguri", villages: [] },
      { code: "WK", name: "West Karbi Anglong", villages: [] }
    ] },
    { code: "BR", name: "Bihar", districts: [
      { code: "AR", name: "Araria", villages: [] },
      { code: "AW", name: "Arwal", villages: [] },
      { code: "AU", name: "Aurangabad", villages: [] },
      { code: "BA", name: "Banka", villages: [] },
      { code: "BE", name: "Begusarai", villages: [] },
      { code: "BG", name: "Bhagalpur", villages: [] },
      { code: "BJ", name: "Bhojpur", villages: [] },
      { code: "BU", name: "Buxar", villages: [] },
      { code: "DA", name: "Darbhanga", villages: [] },
      { code: "EC", name: "East Champaran", villages: [] },
      { code: "GA", name: "Gaya", villages: [] },
      { code: "GO", name: "Gopalganj", villages: [] },
      { code: "JA", name: "Jamui", villages: [] },
      { code: "JE", name: "Jehanabad", villages: [] },
      { code: "KM", name: "Kaimur", villages: [] },
      { code: "KT", name: "Katihar", villages: [] },
      { code: "KH", name: "Khagaria", villages: [] },
      { code: "KI", name: "Kishanganj", villages: [] },
      { code: "LA", name: "Lakhisarai", villages: [] },
      { code: "MP", name: "Madhepura", villages: [] },
      { code: "MB", name: "Madhubani", villages: [] },
      { code: "MG", name: "Munger", villages: [] },
      { code: "MZ", name: "Muzaffarpur", villages: [] },
      { code: "NL", name: "Nalanda", villages: [] },
      { code: "NW", name: "Nawada", villages: [] },
      { code: "PA", name: "Patna", villages: [] },
      { code: "PU", name: "Purnia", villages: [] },
      { code: "RO", name: "Rohtas", villages: [] },
      { code: "SH", name: "Saharsa", villages: [] },
      { code: "SM", name: "Samastipur", villages: [] },
      { code: "SR", name: "Saran", villages: [] },
      { code: "SP", name: "Sheikhpura", villages: [] },
      { code: "SO", name: "Sheohar", villages: [] },
      { code: "ST", name: "Sitamarhi", villages: [] },
      { code: "SW", name: "Siwan", villages: [] },
      { code: "SU", name: "Supaul", villages: [] },
      { code: "VA", name: "Vaishali", villages: [] },
      { code: "WC", name: "West Champaran", villages: [] }
    ] },
    { code: "CG", name: "Chhattisgarh", districts: [
      { code: "\u2013", name: "Balod", villages: [] },
      { code: "\u2013", name: "Baloda Bazar", villages: [] },
      { code: "\u2013", name: "Balrampur-Ramanujganj", villages: [] },
      { code: "BA", name: "Bastar", villages: [] },
      { code: "\u2013", name: "Bemetara", villages: [] },
      { code: "BJ", name: "Bijapur", villages: [] },
      { code: "BI", name: "Bilaspur", villages: [] },
      { code: "DA", name: "Dantewada", villages: [] },
      { code: "DH", name: "Dhamtari", villages: [] },
      { code: "DU", name: "Durg", villages: [] },
      { code: "\u2013", name: "Gariaband", villages: [] },
      { code: "\u2013", name: "Gaurela-Pendra-Marwahi", villages: [] },
      { code: "JC", name: "Janjgir-Champa", villages: [] },
      { code: "JA", name: "Jashpur", villages: [] },
      { code: "KW", name: "Kabirdham", villages: [] },
      { code: "KK", name: "Kanker", villages: [] },
      { code: "\u2013", name: "Khairagarh-Chhuikhadan-Gandai", villages: [] },
      { code: "\u2013", name: "Kondagaon", villages: [] },
      { code: "KB", name: "Korba", villages: [] },
      { code: "KJ", name: "Korea", villages: [] },
      { code: "MA", name: "Mahasamund", villages: [] },
      { code: "MG", name: "Manendragarh-Chirmiri-Bharatpur", villages: [] },
      { code: "MM", name: "Mohla-Manpur-Ambagarh Chowki", villages: [] },
      { code: "\u2013", name: "Mungeli", villages: [] },
      { code: "NR", name: "Narayanpur", villages: [] },
      { code: "RG", name: "Raigarh", villages: [] },
      { code: "RP", name: "Raipur", villages: [] },
      { code: "RN", name: "Rajnandgaon", villages: [] },
      { code: "SB", name: "Sarangarh-Bilaigarh", villages: [] },
      { code: "ST", name: "Shakti", villages: [] },
      { code: "SK", name: "Sukma", villages: [] },
      { code: "\u2013", name: "Surajpur", villages: [] },
      { code: "SJ", name: "Surguja", villages: [] }
    ] },
    { code: "GA", name: "Goa", districts: [
      { code: "NG", name: "North Goa", villages: [] },
      { code: "SG", name: "South Goa", villages: [] }
    ] },
    { code: "GJ", name: "Gujarat", districts: [
      { code: "AH", name: "Ahmedabad", villages: [] },
      { code: "AM", name: "Amreli", villages: [] },
      { code: "AN", name: "Anand", villages: [] },
      { code: "AR", name: "Aravalli", villages: [] },
      { code: "BK", name: "Banaskantha", villages: [] },
      { code: "BR", name: "Bharuch", villages: [] },
      { code: "BV", name: "Bhavnagar", villages: [] },
      { code: "BT", name: "Botad", villages: [] },
      { code: "CU", name: "Chhota Udaipur", villages: [] },
      { code: "DA", name: "Dahod", villages: [] },
      { code: "DG", name: "Dang", villages: [] },
      { code: "DD", name: "Devbhumi Dwarka", villages: [] },
      { code: "GA", name: "Gandhinagar", villages: [] },
      { code: "GS", name: "Gir Somnath", villages: [] },
      { code: "JA", name: "Jamnagar", villages: [] },
      { code: "JU", name: "Junagadh", villages: [] },
      { code: "KH", name: "Kheda", villages: [] },
      { code: "KA", name: "Kutch", villages: [] },
      { code: "MH", name: "Mahisagar", villages: [] },
      { code: "MA", name: "Mehsana", villages: [] },
      { code: "MB", name: "Morbi", villages: [] },
      { code: "NR", name: "Narmada", villages: [] },
      { code: "NV", name: "Navsari", villages: [] },
      { code: "PM", name: "Panchmahal", villages: [] },
      { code: "PA", name: "Patan", villages: [] },
      { code: "PO", name: "Porbandar", villages: [] },
      { code: "RA", name: "Rajkot", villages: [] },
      { code: "SK", name: "Sabarkantha", villages: [] },
      { code: "ST", name: "Surat", villages: [] },
      { code: "SN", name: "Surendranagar", villages: [] },
      { code: "TA", name: "Tapi", villages: [] },
      { code: "VD", name: "Vadodara", villages: [] },
      { code: "VL", name: "Valsad", villages: [] }
    ] },
    { code: "HR", name: "Haryana", districts: [
      { code: "AM", name: "Ambala", villages: [] },
      { code: "BH", name: "Bhiwani", villages: [] },
      { code: "CD", name: "Charkhi Dadri", villages: [] },
      { code: "HR", name: "Faridabad", villages: [] },
      { code: "FT", name: "Fatehabad", villages: [] },
      { code: "GU", name: "Gurugram", villages: [] },
      { code: "HI", name: "Hisar", villages: [] },
      { code: "JH", name: "Jhajjar", villages: [] },
      { code: "JI", name: "Jind", villages: [] },
      { code: "KT", name: "Kaithal", villages: [] },
      { code: "KR", name: "Karnal", villages: [] },
      { code: "KU", name: "Kurukshetra", villages: [] },
      { code: "MA", name: "Mahendragarh", villages: [] },
      { code: "MW", name: "Nuh", villages: [] },
      { code: "PW", name: "Palwal", villages: [] },
      { code: "PK", name: "Panchkula", villages: [] },
      { code: "PP", name: "Panipat", villages: [] },
      { code: "RE", name: "Rewari", villages: [] },
      { code: "RO", name: "Rohtak", villages: [] },
      { code: "SI", name: "Sirsa", villages: [] },
      { code: "SNP", name: "Sonipat", villages: [] },
      { code: "YN", name: "Yamunanagar", villages: [] }
    ] },
    { code: "HP", name: "Himachal Pradesh", districts: [
      { code: "BI", name: "Bilaspur", villages: [] },
      { code: "CH", name: "Chamba", villages: [] },
      { code: "HA", name: "Hamirpur", villages: [] },
      { code: "KA", name: "Kangra", villages: [] },
      { code: "KI", name: "Kinnaur", villages: [] },
      { code: "KU", name: "Kullu", villages: [] },
      { code: "LS", name: "Lahaul and Spiti", villages: [] },
      { code: "MA", name: "Mandi", villages: [] },
      { code: "SH", name: "Shimla", villages: [] },
      { code: "SI", name: "Sirmaur", villages: [] },
      { code: "SO", name: "Solan", villages: [] },
      { code: "UN", name: "Una", villages: [] }
    ] },
    { code: "JH", name: "Jharkhand", districts: [
      { code: "BO", name: "Bokaro", villages: [] },
      { code: "CH", name: "Chatra", villages: [] },
      { code: "DE", name: "Deoghar", villages: [] },
      { code: "DH", name: "Dhanbad", villages: [] },
      { code: "DU", name: "Dumka", villages: [] },
      { code: "ES", name: "East Singhbhum", villages: [] },
      { code: "GA", name: "Garhwa", villages: [] },
      { code: "GI", name: "Giridih", villages: [] },
      { code: "GO", name: "Godda", villages: [] },
      { code: "GU", name: "Gumla", villages: [] },
      { code: "HA", name: "Hazaribag", villages: [] },
      { code: "JA", name: "Jamtara", villages: [] },
      { code: "KH", name: "Khunti", villages: [] },
      { code: "KO", name: "Koderma", villages: [] },
      { code: "LA", name: "Latehar", villages: [] },
      { code: "LO", name: "Lohardaga", villages: [] },
      { code: "PK", name: "Pakur", villages: [] },
      { code: "PL", name: "Palamu", villages: [] },
      { code: "RM", name: "Ramgarh", villages: [] },
      { code: "RA", name: "Ranchi", villages: [] },
      { code: "SA", name: "Sahibganj", villages: [] },
      { code: "SK", name: "Seraikela-Kharsawan", villages: [] },
      { code: "SI", name: "Simdega", villages: [] },
      { code: "WS", name: "West Singhbhum", villages: [] }
    ] },
    { code: "KA", name: "Karnataka", districts: [
      { code: "BK", name: "Bagalakote", villages: [] },
      { code: "BL", name: "Ballari", villages: [] },
      { code: "BG", name: "Belagavi", villages: [] },
      { code: "BR", name: "Bengaluru Rural", villages: [] },
      { code: "BN", name: "Bengaluru Urban", villages: [] },
      { code: "BD", name: "Bidar", villages: [] },
      { code: "CJ", name: "Chamarajanagara", villages: [] },
      { code: "CK", name: "Chikkaballapura", villages: [] },
      { code: "CK", name: "Chikkamagaluru", villages: [] },
      { code: "CT", name: "Chitradurga", villages: [] },
      { code: "DK", name: "Dakshina Kannada", villages: [] },
      { code: "DA", name: "Davanagere", villages: [] },
      { code: "DH", name: "Dharwada", villages: [] },
      { code: "GA", name: "Gadaga", villages: [] },
      { code: "GU", name: "Kalaburagi", villages: [] },
      { code: "HS", name: "Hassan", villages: [] },
      { code: "HV", name: "Haveri", villages: [] },
      { code: "KD", name: "Kodagu", villages: [] },
      { code: "KL", name: "Kolar", villages: [] },
      { code: "KP", name: "Koppala", villages: [] },
      { code: "MA", name: "Mandya", villages: [] },
      { code: "MY", name: "Mysuru", villages: [] },
      { code: "RA", name: "Raichuru", villages: [] },
      { code: "RM", name: "Ramanagara", villages: [] },
      { code: "SH", name: "Shivamogga", villages: [] },
      { code: "TU", name: "Tumakuru", villages: [] },
      { code: "UD", name: "Udupi", villages: [] },
      { code: "UK", name: "Uttara Kannada", villages: [] },
      { code: "", name: "Vijayanagara", villages: [] },
      { code: "BJ", name: "Vijayapura", villages: [] },
      { code: "YG", name: "Yadgiri", villages: [] }
    ] },
    { code: "KL", name: "Kerala", districts: [
      { code: "AL", name: "Alappuzha", villages: [] },
      { code: "ER", name: "Ernakulam", villages: [] },
      { code: "ID", name: "Idukki", villages: [] },
      { code: "KN", name: "Kannur", villages: [] },
      { code: "KS", name: "Kasaragod", villages: [] },
      { code: "KL", name: "Kollam", villages: [] },
      { code: "KT", name: "Kottayam", villages: [] },
      { code: "KZ", name: "Kozhikode", villages: [] },
      { code: "MA", name: "Malappuram", villages: [] },
      { code: "PL", name: "Palakkad", villages: [] },
      { code: "PT", name: "Pathanamthitta", villages: [] },
      { code: "TV", name: "Thiruvananthapuram", villages: [] },
      { code: "TS", name: "Thrissur", villages: [] },
      { code: "WA", name: "Wayanad", villages: [] }
    ] },
    { code: "MP", name: "Madhya Pradesh", districts: [
      { code: "AG", name: "Agar Malwa", villages: [] },
      { code: "AL", name: "Alirajpur", villages: [] },
      { code: "AP", name: "Anuppur", villages: [] },
      { code: "AS", name: "Ashoknagar", villages: [] },
      { code: "BL", name: "Balaghat", villages: [] },
      { code: "BR", name: "Barwani", villages: [] },
      { code: "BE", name: "Betul", villages: [] },
      { code: "BD", name: "Bhind", villages: [] },
      { code: "BP", name: "Bhopal", villages: [] },
      { code: "BU", name: "Burhanpur", villages: [] },
      { code: "CT", name: "Chhatarpur", villages: [] },
      { code: "CN", name: "Chhindwara", villages: [] },
      { code: "DM", name: "Damoh", villages: [] },
      { code: "DT", name: "Datia", villages: [] },
      { code: "DE", name: "Dewas", villages: [] },
      { code: "DH", name: "Dhar", villages: [] },
      { code: "DI", name: "Dindori", villages: [] },
      { code: "GU", name: "Guna", villages: [] },
      { code: "GW", name: "Gwalior", villages: [] },
      { code: "HA", name: "Harda", villages: [] },
      { code: "NA", name: "Hoshangabad", villages: [] },
      { code: "IN", name: "Indore", villages: [] },
      { code: "JA", name: "Jabalpur", villages: [] },
      { code: "JH", name: "Jhabua", villages: [] },
      { code: "KA", name: "Katni", villages: [] },
      { code: "EN", name: "Khandwa", villages: [] },
      { code: "WN", name: "Khargone", villages: [] },
      { code: "ML", name: "Mandla", villages: [] },
      { code: "MS", name: "Mandsaur", villages: [] },
      { code: "MO", name: "Morena", villages: [] },
      { code: "NA", name: "Narsinghpur", villages: [] },
      { code: "NE", name: "Neemuch", villages: [] },
      { code: "\u2013", name: "Niwari", villages: [] },
      { code: "PA", name: "Panna", villages: [] },
      { code: "RS", name: "Raisen", villages: [] },
      { code: "RG", name: "Rajgarh", villages: [] },
      { code: "RL", name: "Ratlam", villages: [] },
      { code: "RE", name: "Rewa", villages: [] },
      { code: "SG", name: "Sagar", villages: [] },
      { code: "ST", name: "Satna", villages: [] },
      { code: "SR", name: "Sehore", villages: [] },
      { code: "SO", name: "Seoni", villages: [] },
      { code: "SH", name: "Shahdol", villages: [] },
      { code: "SJ", name: "Shajapur", villages: [] },
      { code: "SP", name: "Sheopur", villages: [] },
      { code: "SV", name: "Shivpuri", villages: [] },
      { code: "SI", name: "Sidhi", villages: [] },
      { code: "SN", name: "Singrauli", villages: [] },
      { code: "TI", name: "Tikamgarh", villages: [] },
      { code: "UJ", name: "Ujjain", villages: [] },
      { code: "UM", name: "Umaria", villages: [] },
      { code: "VI", name: "Vidisha", villages: [] }
    ] },
    { code: "MH", name: "Maharashtra", districts: [
      { code: "AH", name: "Ahmednagar", villages: [] },
      { code: "AK", name: "Akola", villages: [] },
      { code: "AM", name: "Amravati", villages: [] },
      { code: "BI", name: "Beed", villages: ["Georai", "Patoda", "Wadwani"] },
      { code: "BH", name: "Bhandara", villages: [] },
      { code: "BU", name: "Buldhana", villages: [] },
      { code: "CH", name: "Chandrapur", villages: [] },
      { code: "OS", name: "Osmanabad", villages: [] },
      { code: "DH", name: "Dhule", villages: [] },
      { code: "GA", name: "Gadchiroli", villages: [] },
      { code: "GO", name: "Gondia", villages: [] },
      { code: "HI", name: "Hingoli", villages: [] },
      { code: "JG", name: "Jalgaon", villages: [] },
      { code: "JN", name: "Jalna", villages: [] },
      { code: "KO", name: "Kolhapur", villages: [] },
      { code: "LA", name: "Latur", villages: [] },
      { code: "MC", name: "Mumbai City", villages: [] },
      { code: "MU", name: "Mumbai Suburban", villages: [] },
      { code: "ND", name: "Nanded", villages: [] },
      { code: "NB", name: "Nandurbar", villages: [] },
      { code: "NG", name: "Nagpur", villages: [] },
      { code: "NS", name: "Nashik", villages: ["Ozar", "Saikheda", "Pimpalgaon Baswant"] },
      { code: "PL", name: "Palghar", villages: [] },
      { code: "PA", name: "Parbhani", villages: [] },
      { code: "PU", name: "Pune", villages: [] },
      { code: "RG", name: "Raigad", villages: [] },
      { code: "RT", name: "Ratnagiri", villages: [] },
      { code: "AU", name: "Aurangabad", villages: [] },
      { code: "SN", name: "Sangli", villages: [] },
      { code: "ST", name: "Satara", villages: [] },
      { code: "SI", name: "Sindhudurg", villages: [] },
      { code: "SO", name: "Solapur", villages: [] },
      { code: "TH", name: "Thane", villages: [] },
      { code: "WR", name: "Wardha", villages: [] },
      { code: "WS", name: "Washim", villages: [] },
      { code: "YA", name: "Yavatmal", villages: ["Pandharkawada", "Wani", "Umri"] }
    ] },
    { code: "MN", name: "Manipur", districts: [
      { code: "BPR", name: "Bishnupur", villages: [] },
      { code: "CDL", name: "Chandel", villages: [] },
      { code: "CCpr", name: "Churachandpur", villages: [] },
      { code: "IE", name: "Imphal East", villages: [] },
      { code: "IW", name: "Imphal West", villages: [] },
      { code: "JBM", name: "Jiribam", villages: [] },
      { code: "KAK", name: "Kakching", villages: [] },
      { code: "KJ", name: "Kamjong", villages: [] },
      { code: "KPI", name: "Kangpokpi", villages: [] },
      { code: "NL", name: "Noney", villages: [] },
      { code: "PZ", name: "Pherzawl", villages: [] },
      { code: "SE", name: "Senapati", villages: [] },
      { code: "TML", name: "Tamenglong", villages: [] },
      { code: "TNL", name: "Tengnoupal", villages: [] },
      { code: "TBL", name: "Thoubal", villages: [] },
      { code: "UKR", name: "Ukhrul", villages: [] }
    ] },
    { code: "ML", name: "Meghalaya", districts: [
      { code: "EG", name: "East Garo Hills", villages: [] },
      { code: "EK", name: "East Khasi Hills", villages: [] },
      { code: "\u2013", name: "East Jaintia Hills", villages: [] },
      { code: "\u2013", name: "Eastern West Khasi Hills", villages: [] },
      { code: "\u2013", name: "North Garo Hills", villages: [] },
      { code: "RB", name: "Ri Bhoi", villages: [] },
      { code: "SG", name: "South Garo Hills", villages: [] },
      { code: "\u2013", name: "South West Garo Hills", villages: [] },
      { code: "\u2013", name: "South West Khasi Hills", villages: [] },
      { code: "WG", name: "West Garo Hills", villages: [] },
      { code: "WJ", name: "West Jaintia Hills", villages: [] },
      { code: "WK", name: "West Khasi Hills", villages: [] }
    ] },
    { code: "MZ", name: "Mizoram", districts: [
      { code: "AI", name: "Aizawl", villages: [] },
      { code: "CH", name: "Champhai", villages: [] },
      { code: "-", name: "Hnahthial", villages: [] },
      { code: "-", name: "Khawzawl", villages: [] },
      { code: "KO", name: "Kolasib", villages: [] },
      { code: "LA", name: "Lawngtlai", villages: [] },
      { code: "LU", name: "Lunglei", villages: [] },
      { code: "MA", name: "Mamit", villages: [] },
      { code: "SA", name: "Saiha", villages: [] },
      { code: "-", name: "Saitual", villages: [] },
      { code: "SE", name: "Serchhip", villages: [] }
    ] },
    { code: "NL", name: "Nagaland", districts: [
      { code: "\u2013", name: "Ch\xFCmoukedima", villages: [] },
      { code: "DI", name: "Dimapur", villages: [] },
      { code: "KI", name: "Kiphire", villages: [] },
      { code: "KO", name: "Kohima", villages: [] },
      { code: "LO", name: "Longleng", villages: [] },
      { code: "MK", name: "Mokokchung", villages: [] },
      { code: "MN", name: "Mon", villages: [] },
      { code: "\u2013", name: "Niuland", villages: [] },
      { code: "\u2013", name: "Noklak", villages: [] },
      { code: "PE", name: "Peren", villages: [] },
      { code: "PH", name: "Phek", villages: [] },
      { code: "\u2013", name: "Shamator", villages: [] },
      { code: "\u2013", name: "Tseminy\xFC", villages: [] },
      { code: "TU", name: "Tuensang", villages: [] },
      { code: "WO", name: "Wokha", villages: [] },
      { code: "ZU", name: "Zunheboto", villages: [] }
    ] },
    { code: "OD", name: "Odisha", districts: [
      { code: "AN", name: "Angul", villages: [] },
      { code: "BD", name: "Boudh", villages: [] },
      { code: "BH", name: "Bhadrak", villages: [] },
      { code: "BL", name: "Balangir", villages: [] },
      { code: "BR", name: "Bargarh", villages: [] },
      { code: "BW", name: "Balasore", villages: [] },
      { code: "CU", name: "Cuttack", villages: [] },
      { code: "DE", name: "Debagarh", villages: [] },
      { code: "DH", name: "Dhenkanal", villages: [] },
      { code: "GN", name: "Ganjam", villages: [] },
      { code: "GP", name: "Gajapati", villages: [] },
      { code: "JH", name: "Jharsuguda", villages: [] },
      { code: "JP", name: "Jajpur", villages: [] },
      { code: "JS", name: "Jagatsinghpur", villages: [] },
      { code: "KH", name: "Khordha", villages: [] },
      { code: "KJ", name: "Kendujhar", villages: [] },
      { code: "KL", name: "Kalahandi", villages: [] },
      { code: "KN", name: "Kandhamal", villages: [] },
      { code: "KO", name: "Koraput", villages: [] },
      { code: "KP", name: "Kendrapara", villages: [] },
      { code: "ML", name: "Malkangiri", villages: [] },
      { code: "MY", name: "Mayurbhanj", villages: [] },
      { code: "NB", name: "Nabarangpur", villages: [] },
      { code: "NU", name: "Nuapada", villages: [] },
      { code: "NY", name: "Nayagarh", villages: [] },
      { code: "PU", name: "Puri", villages: [] },
      { code: "RA", name: "Rayagada", villages: [] },
      { code: "SA", name: "Sambalpur", villages: [] },
      { code: "SO", name: "Subarnapur", villages: [] },
      { code: "SU", name: "Sundargarh", villages: [] }
    ] },
    { code: "PB", name: "Punjab", districts: [
      { code: "AM", name: "Amritsar", villages: [] },
      { code: "BNL", name: "Barnala", villages: [] },
      { code: "BA", name: "Bathinda", villages: [] },
      { code: "FI", name: "Firozpur", villages: [] },
      { code: "FR", name: "Faridkot", villages: [] },
      { code: "FT", name: "Fatehgarh Sahib", villages: [] },
      { code: "FA", name: "Fazilka", villages: [] },
      { code: "GU", name: "Gurdaspur", villages: [] },
      { code: "HO", name: "Hoshiarpur", villages: [] },
      { code: "JA", name: "Jalandhar", villages: [] },
      { code: "KA", name: "Kapurthala", villages: [] },
      { code: "LU", name: "Ludhiana", villages: [] },
      { code: "ML", name: "Malerkotla", villages: [] },
      { code: "MA", name: "Mansa", villages: [] },
      { code: "MO", name: "Moga", villages: [] },
      { code: "MU", name: "Sri Muktsar Sahib", villages: [] },
      { code: "PA", name: "Pathankot", villages: [] },
      { code: "PA", name: "Patiala", villages: [] },
      { code: "RU", name: "Rupnagar", villages: [] },
      { code: "SAS", name: "Sahibzada Ajit Singh Nagar", villages: [] },
      { code: "SA", name: "Sangrur", villages: [] },
      { code: "PB", name: "Shahid Bhagat Singh Nagar", villages: [] },
      { code: "TT", name: "Tarn Taran", villages: [] }
    ] },
    { code: "RJ", name: "Rajasthan", districts: [
      { code: "AJ", name: "Ajmer", villages: [] },
      { code: "AL", name: "Alwar", villages: [] },
      { code: "BI", name: "Bikaner", villages: [] },
      { code: "BM", name: "Barmer", villages: [] },
      { code: "BN", name: "Banswara", villages: [] },
      { code: "BP", name: "Bharatpur", villages: [] },
      { code: "BR", name: "Baran", villages: [] },
      { code: "BU", name: "Bundi", villages: [] },
      { code: "BW", name: "Bhilwara", villages: [] },
      { code: "CR", name: "Churu", villages: [] },
      { code: "CT", name: "Chittorgarh", villages: [] },
      { code: "DA", name: "Dausa", villages: [] },
      { code: "DH", name: "Dholpur", villages: [] },
      { code: "DU", name: "Dungarpur", villages: [] },
      { code: "GA", name: "Sri Ganganagar", villages: [] },
      { code: "HA", name: "Hanumangarh", villages: [] },
      { code: "JJ", name: "Jhunjhunu", villages: [] },
      { code: "JL", name: "Jalore", villages: [] },
      { code: "JO", name: "Jodhpur", villages: [] },
      { code: "JP", name: "Jaipur", villages: [] },
      { code: "JS", name: "Jaisalmer", villages: [] },
      { code: "JW", name: "Jhalawar", villages: [] },
      { code: "KA", name: "Karauli", villages: [] },
      { code: "KO", name: "Kota", villages: [] },
      { code: "NA", name: "Nagaur", villages: [] },
      { code: "PA", name: "Pali", villages: [] },
      { code: "PG", name: "Pratapgarh", villages: [] },
      { code: "RA", name: "Rajsamand", villages: [] },
      { code: "SK", name: "Sikar", villages: [] },
      { code: "SM", name: "Sawai Madhopur", villages: [] },
      { code: "SR", name: "Sirohi", villages: [] },
      { code: "TO", name: "Tonk", villages: [] },
      { code: "UD", name: "Udaipur", villages: [] }
    ] },
    { code: "SK", name: "Sikkim", districts: [
      { code: "ES", name: "East Sikkim", villages: [] },
      { code: "NS", name: "North Sikkim", villages: [] },
      { code: "PS", name: "Pakyong", villages: [] },
      { code: "", name: "Soreng", villages: [] },
      { code: "SS", name: "South Sikkim", villages: [] },
      { code: "WS", name: "West Sikkim", villages: [] }
    ] },
    { code: "TN", name: "Tamil Nadu", districts: [
      { code: "AY", name: "Ariyalur", villages: [] },
      { code: "CGL", name: "Chengalpattu", villages: [] },
      { code: "CH", name: "Chennai", villages: [] },
      { code: "CO", name: "Coimbatore", villages: [] },
      { code: "CU", name: "Cuddalore", villages: [] },
      { code: "DH", name: "Dharmapuri", villages: [] },
      { code: "DGL", name: "Dindigul", villages: [] },
      { code: "ER", name: "Erode", villages: [] },
      { code: "KL", name: "Kallakurichi", villages: [] },
      { code: "KC", name: "Kanchipuram", villages: [] },
      { code: "KK", name: "Kanyakumari", villages: [] },
      { code: "KA", name: "Karur", villages: [] },
      { code: "KR", name: "Krishnagiri", villages: [] },
      { code: "MDU", name: "Madurai", villages: [] },
      { code: "MLD", name: "Mayiladuthurai", villages: [] },
      { code: "NG", name: "Nagapattinam", villages: [] },
      { code: "NI", name: "Nilgiris", villages: [] },
      { code: "NM", name: "Namakkal", villages: [] },
      { code: "PE", name: "Perambalur", villages: [] },
      { code: "PU", name: "Pudukkottai", villages: [] },
      { code: "RA", name: "Ramanathapuram", villages: [] },
      { code: "RN", name: "Ranipet", villages: [] },
      { code: "SA", name: "Salem", villages: [] },
      { code: "SVG", name: "Sivaganga", villages: [] },
      { code: "TS", name: "Tenkasi", villages: [] },
      { code: "TP", name: "Tiruppur", villages: [] },
      { code: "TC", name: "Tiruchirappalli", villages: [] },
      { code: "TH", name: "Theni", villages: [] },
      { code: "TI", name: "Tirunelveli", villages: [] },
      { code: "TJ", name: "Thanjavur", villages: [] },
      { code: "TK", name: "Thoothukudi", villages: [] },
      { code: "TP", name: "Tirupattur", villages: [] },
      { code: "TL", name: "Tiruvallur", villages: [] },
      { code: "TR", name: "Tiruvarur", villages: [] },
      { code: "TV", name: "Tiruvannamalai", villages: [] },
      { code: "VE", name: "Vellore", villages: [] },
      { code: "VL", name: "Viluppuram", villages: [] },
      { code: "VNR", name: "Virudhunagar", villages: [] }
    ] },
    { code: "TS", name: "Telangana", districts: [
      { code: "AD", name: "Adilabad", villages: [] },
      { code: "\u2013", name: "Bhadradri Kothagudem", villages: [] },
      { code: "\u2013", name: "Hanamkonda", villages: [] },
      { code: "HY", name: "Hyderabad", villages: [] },
      { code: "\u2013", name: "Jagtial", villages: [] },
      { code: "\u2013", name: "Jangaon", villages: [] },
      { code: "\u2013", name: "Jayashankar Bhupalpally", villages: [] },
      { code: "\u2013", name: "Jogulamba Gadwal", villages: [] },
      { code: "\u2013", name: "Kamareddy", villages: [] },
      { code: "KA", name: "Karimnagar", villages: [] },
      { code: "KH", name: "Khammam", villages: [] },
      { code: "\u2013", name: "Kumuram Bheem Asifabad", villages: [] },
      { code: "\u2013", name: "Mahabubabad", villages: [] },
      { code: "MA", name: "Mahbubnagar", villages: [] },
      { code: "\u2013", name: "Mancherial", villages: [] },
      { code: "ME", name: "Medak", villages: [] },
      { code: "\u2013", name: "Medchal\u2013Malkajgiri", villages: [] },
      { code: "\u2013", name: "Mulugu", villages: [] },
      { code: "NA", name: "Nalgonda", villages: [] },
      { code: "\u2013", name: "Narayanpet", villages: [] },
      { code: "\u2013", name: "Nagarkurnool", villages: [] },
      { code: "\u2013", name: "Nirmal", villages: [] },
      { code: "NI", name: "Nizamabad", villages: [] },
      { code: "\u2013", name: "Peddapalli", villages: [] },
      { code: "\u2013", name: "Rajanna Sircilla", villages: [] },
      { code: "RA", name: "Ranga Reddy", villages: [] },
      { code: "\u2013", name: "Sangareddy", villages: [] },
      { code: "\u2013", name: "Siddipet", villages: [] },
      { code: "\u2013", name: "Suryapet", villages: [] },
      { code: "\u2013", name: "Vikarabad", villages: [] },
      { code: "\u2013", name: "Wanaparthy", villages: [] },
      { code: "WL", name: "Warangal", villages: ["Atmakur", "Wardhannapet", "Dharmasagar"] },
      { code: "\u2013", name: "Yadadri Bhuvanagiri", villages: [] }
    ] },
    { code: "TR", name: "Tripura", districts: [
      { code: "DH", name: "Dhalai", villages: [] },
      { code: "GM", name: "Gomati", villages: [] },
      { code: "KH", name: "Khowai", villages: [] },
      { code: "NT", name: "North Tripura", villages: [] },
      { code: "SP", name: "Sepahijala", villages: [] },
      { code: "ST", name: "South Tripura", villages: [] },
      { code: "UK", name: "Unakoti", villages: [] },
      { code: "WT", name: "West Tripura", villages: [] }
    ] },
    { code: "UP", name: "Uttar Pradesh", districts: [
      { code: "AG", name: "Agra", villages: [] },
      { code: "AL", name: "Aligarh", villages: [] },
      { code: "AN", name: "Ambedkar Nagar", villages: [] },
      { code: "AM", name: "Amethi", villages: [] },
      { code: "JP", name: "Amroha", villages: [] },
      { code: "AU", name: "Auraiya", villages: [] },
      { code: "FZ", name: "Ayodhya", villages: [] },
      { code: "AZ", name: "Azamgarh", villages: [] },
      { code: "BG", name: "Bagpat", villages: [] },
      { code: "BH", name: "Bahraich", villages: [] },
      { code: "BL", name: "Ballia", villages: [] },
      { code: "BP", name: "Balrampur", villages: [] },
      { code: "BN", name: "Banda", villages: [] },
      { code: "BB", name: "Barabanki", villages: [] },
      { code: "BR", name: "Bareilly", villages: [] },
      { code: "BS", name: "Basti", villages: [] },
      { code: "BH", name: "Bhadohi", villages: [] },
      { code: "BI", name: "Bijnor", villages: [] },
      { code: "BD", name: "Budaun", villages: [] },
      { code: "BU", name: "Bulandshahr", villages: [] },
      { code: "CD", name: "Chandauli", villages: [] },
      { code: "CT", name: "Chitrakoot", villages: [] },
      { code: "DE", name: "Deoria", villages: [] },
      { code: "ET", name: "Etah", villages: [] },
      { code: "EW", name: "Etawah", villages: [] },
      { code: "FR", name: "Farrukhabad", villages: [] },
      { code: "FT", name: "Fatehpur", villages: [] },
      { code: "FI", name: "Firozabad", villages: [] },
      { code: "GB", name: "Gautam Buddha Nagar", villages: [] },
      { code: "GZ", name: "Ghaziabad", villages: [] },
      { code: "GP", name: "Ghazipur", villages: [] },
      { code: "GN", name: "Gonda", villages: [] },
      { code: "GR", name: "Gorakhpur", villages: [] },
      { code: "HM", name: "Hamirpur", villages: [] },
      { code: "PN", name: "Hapur", villages: [] },
      { code: "HR", name: "Hardoi", villages: [] },
      { code: "HT", name: "Hathras", villages: [] },
      { code: "JL", name: "Jalaun", villages: [] },
      { code: "JU", name: "Jaunpur", villages: [] },
      { code: "JH", name: "Jhansi", villages: [] },
      { code: "KJ", name: "Kannauj", villages: [] },
      { code: "KD", name: "Kanpur Dehat", villages: [] },
      { code: "KN", name: "Kanpur Nagar", villages: [] },
      { code: "KR", name: "Kasganj", villages: [] },
      { code: "KS", name: "Kaushambi", villages: [] },
      { code: "KU", name: "Kushinagar", villages: [] },
      { code: "LK", name: "Lakhimpur Kheri", villages: [] },
      { code: "LA", name: "Lalitpur", villages: [] },
      { code: "LU", name: "Lucknow", villages: [] },
      { code: "MG", name: "Maharajganj", villages: [] },
      { code: "MH", name: "Mahoba", villages: [] },
      { code: "MP", name: "Mainpuri", villages: [] },
      { code: "MT", name: "Mathura", villages: [] },
      { code: "MB", name: "Mau", villages: [] },
      { code: "ME", name: "Meerut", villages: [] },
      { code: "MI", name: "Mirzapur", villages: [] },
      { code: "MO", name: "Moradabad", villages: [] },
      { code: "MU", name: "Muzaffarnagar", villages: [] },
      { code: "PI", name: "Pilibhit", villages: [] },
      { code: "PR", name: "Pratapgarh", villages: [] },
      { code: "AH", name: "Prayagraj", villages: [] },
      { code: "RB", name: "Raebareli", villages: [] },
      { code: "RA", name: "Rampur", villages: [] },
      { code: "SA", name: "Saharanpur", villages: [] },
      { code: "SM", name: "Sambhal", villages: [] },
      { code: "SK", name: "Sant Kabir Nagar", villages: [] },
      { code: "SJ", name: "Shahjahanpur", villages: [] },
      { code: "SH", name: "Shamli", villages: [] },
      { code: "SV", name: "Shravasti", villages: [] },
      { code: "SN", name: "Siddharthnagar", villages: [] },
      { code: "SI", name: "Sitapur", villages: [] },
      { code: "SO", name: "Sonbhadra", villages: [] },
      { code: "SU", name: "Sultanpur", villages: [] },
      { code: "UN", name: "Unnao", villages: [] },
      { code: "VA", name: "Varanasi", villages: [] }
    ] },
    { code: "UK", name: "Uttarakhand", districts: [
      { code: "AL", name: "Almora", villages: [] },
      { code: "BA", name: "Bageshwar", villages: [] },
      { code: "CL", name: "Chamoli", villages: [] },
      { code: "CP", name: "Champawat", villages: [] },
      { code: "DD", name: "Dehradun", villages: [] },
      { code: "HA", name: "Haridwar", villages: [] },
      { code: "NA", name: "Nainital", villages: [] },
      { code: "PG", name: "Pauri Garhwal", villages: [] },
      { code: "PI", name: "Pithoragarh", villages: [] },
      { code: "RP", name: "Rudraprayag", villages: [] },
      { code: "TG", name: "Tehri Garhwal", villages: [] },
      { code: "US", name: "Udham Singh Nagar", villages: [] },
      { code: "UT", name: "Uttarkashi", villages: [] }
    ] },
    { code: "WB", name: "West Bengal", districts: [
      { code: "AD", name: "Alipurduar", villages: [] },
      { code: "BN", name: "Bankura", villages: [] },
      { code: "BI", name: "Birbhum", villages: [] },
      { code: "KB", name: "Cooch Behar", villages: [] },
      { code: "DD", name: "Dakshin Dinajpur", villages: [] },
      { code: "DA", name: "Darjeeling", villages: [] },
      { code: "HG", name: "Hooghly", villages: [] },
      { code: "HR", name: "Howrah", villages: [] },
      { code: "JA", name: "Jalpaiguri", villages: [] },
      { code: "JH", name: "Jhargram", villages: [] },
      { code: "KA", name: "Kalimpong", villages: [] },
      { code: "KO", name: "Kolkata", villages: [] },
      { code: "MA", name: "Maldah", villages: [] },
      { code: "MSD", name: "Murshidabad", villages: [] },
      { code: "NA", name: "Nadia", villages: [] },
      { code: "PN", name: "North 24 Parganas", villages: [] },
      { code: "BR", name: "Paschim Bardhaman", villages: [] },
      { code: "PM", name: "Paschim Medinipur", villages: [] },
      { code: "BR", name: "Purba Bardhaman", villages: [] },
      { code: "PR", name: "Purba Medinipur", villages: [] },
      { code: "PU", name: "Purulia", villages: [] },
      { code: "PS", name: "South 24 Parganas", villages: [] },
      { code: "UD", name: "Uttar Dinajpur", villages: [] }
    ] },
    { code: "AN", name: "Andaman and Nicobar", districts: [
      { code: "NI", name: "Nicobar", villages: [] },
      { code: "NA", name: "North and Middle Andaman", villages: [] },
      { code: "SA", name: "South Andaman", villages: [] }
    ] },
    { code: "CH", name: "Chandigarh", districts: [
      { code: "CH", name: "Chandigarh", villages: [] }
    ] },
    { code: "DD", name: "Dadra and Nagar Haveli and Daman and Diu", districts: [
      { code: "DA", name: "Daman", villages: [] },
      { code: "DI", name: "Diu", villages: [] },
      { code: "DN", name: "Dadra and Nagar Haveli", villages: [] }
    ] },
    { code: "JK", name: "Jammu and Kashmir", districts: [
      { code: "AN", name: "Anantnag", villages: [] },
      { code: "BD", name: "Budgam", villages: [] },
      { code: "BPR", name: "Bandipore", villages: [] },
      { code: "BR", name: "Baramulla", villages: [] },
      { code: "DO", name: "Doda", villages: [] },
      { code: "GB", name: "Ganderbal", villages: [] },
      { code: "JA", name: "Jammu", villages: [] },
      { code: "KT", name: "Kathua", villages: [] },
      { code: "KW", name: "Kishtwar", villages: [] },
      { code: "KG", name: "Kulgam", villages: [] },
      { code: "KU", name: "Kupwara", villages: [] },
      { code: "PO", name: "Poonch", villages: [] },
      { code: "PU", name: "Pulwama", villages: [] },
      { code: "RA", name: "Rajouri", villages: [] },
      { code: "RB", name: "Ramban", villages: [] },
      { code: "RS", name: "Reasi", villages: [] },
      { code: "SB", name: "Samba", villages: [] },
      { code: "SH", name: "Shopian", villages: [] },
      { code: "SR", name: "Srinagar", villages: [] },
      { code: "UD", name: "Udhampur", villages: [] }
    ] },
    { code: "LA", name: "Ladakh", districts: [
      { code: "KR", name: "Kargil", villages: [] },
      { code: "LE", name: "Leh", villages: [] }
    ] },
    { code: "LD", name: "Lakshadweep", districts: [
      { code: "LD", name: "Lakshadweep", villages: [] }
    ] },
    { code: "DL", name: "National Capital Territory of Delhi", districts: [
      { code: "CD", name: "Central Delhi", villages: [] },
      { code: "ED", name: "East Delhi", villages: [] },
      { code: "ND", name: "New Delhi", villages: [] },
      { code: "NO", name: "North Delhi", villages: [] },
      { code: "NE", name: "North East Delhi", villages: [] },
      { code: "NW", name: "North West Delhi", villages: [] },
      { code: "\u2013", name: "Shahdara district", villages: [] },
      { code: "SD", name: "South Delhi", villages: [] },
      { code: "SE", name: "South East Delhi", villages: [] },
      { code: "SW", name: "South West Delhi", villages: [] },
      { code: "WD", name: "West Delhi", villages: [] }
    ] },
    { code: "PY", name: "Puducherry", districts: [
      { code: "KA", name: "Karaikal", villages: [] },
      { code: "MA", name: "Mah\xE9", villages: [] },
      { code: "PO", name: "Puducherry", villages: [] },
      { code: "YA", name: "Yanam", villages: [] }
    ] }
  ];

  // D:/SIH26-TryHards/assets/js/data.js
  var SOIL_TYPES = [
    { value: "black", key: "soil.black" },
    { value: "red", key: "soil.red" },
    { value: "sandy", key: "soil.sandy" },
    { value: "loamy", key: "soil.loamy" },
    { value: "alluvial", key: "soil.alluvial" },
    { value: "lateritic", key: "soil.lateritic" }
  ];
  var IRRIGATION_TYPES = [
    { value: "rainfed", key: "irrig.rainfed" },
    { value: "canal", key: "irrig.canal" },
    { value: "borewell", key: "irrig.borewell" },
    { value: "well", key: "irrig.well" },
    { value: "drip", key: "irrig.drip" },
    { value: "sprinkler", key: "irrig.sprinkler" }
  ];
  var CROP_CATALOGUE = [
    { value: "cotton", key: "crop.cotton", varieties: ["Bt Cotton", "Suraj", "Bunny"] },
    { value: "onion", key: "crop.onion", varieties: ["Nashik Red", "Agrifound Light Red", "Pusa Red"] },
    { value: "soybean", key: "crop.soybean", varieties: ["JS-9305", "JS-335", "MAUS-71"] },
    { value: "chilli", key: "crop.chilli", varieties: ["Teja", "Byadgi", "G4"] },
    { value: "tomato", key: "crop.tomato", varieties: ["Abhinav", "Arka Rakshak", "Pusa Ruby"] },
    { value: "wheat", key: "crop.wheat", varieties: ["HD-2967", "Lokwan", "Shresth"] },
    { value: "rice", key: "crop.rice", varieties: ["Sona Masuri", "IR-64", "Basmati 1121"] },
    { value: "groundnut", key: "crop.groundnut", varieties: ["TAG-24", "JL-24", "Girnar-2"] }
  ];
  var FREIGHT_PER_KM = 40;
  var MANDI_FEE_PCT = 0.01;
  var OFFICER = {
    name: "A. Kulkarni",
    designation: "Agriculture Officer",
    district: "Nashik",
    phone: "+919000010001"
    /* demo number */
  };

  // D:/SIH26-TryHards/assets/js/services/simWeather.js
  function hashCode(str) {
    let h = 7;
    for (let i = 0; i < str.length; i += 1) {
      h = h * 31 + str.charCodeAt(i) | 0;
    }
    return Math.abs(h);
  }
  var RAIN_BUCKETS = [0, 0, 2, 5, 12, 28, 48];
  function classifySoilHydration(input) {
    let vwc = typeof input === "number" && !isNaN(input) ? input : 25;
    if (vwc > 0 && vwc <= 1) {
      vwc = vwc * 100;
    }
    vwc = Math.max(0, Math.min(100, Math.round(vwc * 10) / 10));
    if (vwc > 40) {
      return {
        tier: "saturated",
        label: "Saturated (Drainage Required)",
        vwcPct: vwc,
        description: "Macropores filled with gravitational water. Immediate drainage required to prevent root hypoxia."
      };
    }
    if (vwc >= 25) {
      return {
        tier: "optimal",
        label: "Optimal (Field Capacity)",
        vwcPct: vwc,
        description: "Field capacity equilibrium. Optimal balance of plant-available water and soil aeration."
      };
    }
    if (vwc >= 18) {
      return {
        tier: "adequate",
        label: "Adequate Moisture",
        vwcPct: vwc,
        description: "Capillary water readily accessible. Routine irrigation schedule recommended."
      };
    }
    if (vwc >= 10) {
      return {
        tier: "depleted",
        label: "Depleted (Irrigation Needed)",
        vwcPct: vwc,
        description: "Management allowed depletion threshold exceeded. Irrigation required to avoid biomass loss."
      };
    }
    return {
      tier: "stress",
      label: "Critical Stress (Wilting Point)",
      vwcPct: vwc,
      description: "Permanent wilting point reached. Emergency irrigation required to prevent crop mortality."
    };
  }
  function simulateAgriWeather(latOrCode = 20, lonOrDate = 73.8, today = /* @__PURE__ */ new Date()) {
    let targetDate = today;
    let codeStr = "20.0_73.8";
    if (lonOrDate instanceof Date) {
      targetDate = lonOrDate;
      codeStr = String(latOrCode);
    } else if (typeof latOrCode === "string") {
      codeStr = latOrCode;
    } else if (typeof latOrCode === "number" && typeof lonOrDate === "number") {
      codeStr = `${latOrCode.toFixed(2)}_${lonOrDate.toFixed(2)}`;
    }
    const dateKey = targetDate.toISOString().slice(0, 10);
    const seed = hashCode(`${codeStr}:${dateKey}`);
    const weekday = (targetDate.getDay() + 6) % 7;
    const forecast = [];
    for (let i = 0; i < 7; i += 1) {
      const daySeed = hashCode(`${codeStr}:${dateKey}:${i}`);
      const rainMm = RAIN_BUCKETS[daySeed % RAIN_BUCKETS.length];
      const tmax = 28 + daySeed % 12;
      const tmin = tmax - 6 - daySeed % 3;
      const et0 = Math.round((3.2 + daySeed % 38 / 10) * 10) / 10;
      const uvIndexMax = Math.round((5 + daySeed % 60 / 10) * 10) / 10;
      const windSpeedMax = 8 + daySeed % 16;
      const condition = rainMm >= 40 ? "storm" : rainMm >= 10 ? "rain" : rainMm >= 2 ? "cloud" : "clear";
      const dayDate = new Date(targetDate);
      dayDate.setDate(dayDate.getDate() + i);
      forecast.push({
        date: dayDate.toISOString().slice(0, 10),
        dayIndex: (weekday + i) % 7,
        tempMax: tmax,
        tempMin: tmin,
        precipitationSum: rainMm,
        et0,
        uvIndexMax,
        windSpeedMax,
        rainMm,
        tmax,
        tmin,
        condition
      });
    }
    const currentTemp = forecast[0].tmin + 3 + seed % 6;
    const currentHumidity = 45 + seed % 45;
    const currentWind = 5 + seed % 15;
    const currentPrecip = forecast[0].rainMm > 15 ? 2.5 : 0;
    const currentApparent = Math.round((currentTemp + (currentHumidity > 70 ? 2.5 : -1)) * 10) / 10;
    const current2 = {
      temperature: currentTemp,
      apparentTemperature: currentApparent,
      humidity: currentHumidity,
      windSpeed: currentWind,
      windDirection: seed * 37 % 360,
      precipitation: currentPrecip,
      cloudCover: 10 + seed % 80,
      surfacePressure: 1005 + seed % 18,
      uvIndex: Math.round((3 + seed % 80 / 10) * 10) / 10,
      weatherCode: forecast[0].condition === "storm" ? 95 : forecast[0].condition === "rain" ? 63 : forecast[0].condition === "cloud" ? 2 : 0
    };
    const vwcBase = 16 + seed % 24;
    const topsoilMoistureVwc = Math.round((vwcBase - 2 + seed % 5) * 10) / 10;
    const subsoilMoistureVwc = Math.round(vwcBase * 10) / 10;
    const deepMoistureVwc = Math.round((vwcBase + 4 + seed % 4) * 10) / 10;
    const currentMoistureVwc = subsoilMoistureVwc;
    const soilTemp = currentTemp - 2;
    const hydration = classifySoilHydration(currentMoistureVwc);
    const soil = {
      currentMoistureVwc,
      topsoilMoistureVwc,
      subsoilMoistureVwc,
      deepMoistureVwc,
      soilTemp,
      hydrationStatus: hydration.tier,
      hydrationLabel: hydration.label,
      hydrationDescription: hydration.description
    };
    const daily = {
      et0: forecast[0].et0,
      tempMax: forecast[0].tempMax,
      tempMin: forecast[0].tempMin,
      precipSum: forecast[0].precipitationSum,
      uvIndexMax: forecast[0].uvIndexMax,
      windSpeedMax: forecast[0].windSpeedMax
    };
    return {
      current: current2,
      soil,
      daily,
      forecast
    };
  }
  function simulateWeather(districtCode = "NS", today = /* @__PURE__ */ new Date()) {
    const dateKey = today.toISOString().slice(0, 10);
    const seed = hashCode(`${districtCode}:${dateKey}`);
    const agri = simulateAgriWeather(districtCode, today);
    const forecast7d = agri.forecast;
    const normal = 480 + seed % 220;
    const actual = Math.round(normal * (0.55 + seed % 90 / 100));
    const devPct = Math.round((actual - normal) / normal * 100);
    const rainfall7dMm = forecast7d.reduce((sum, d) => sum + d.rainMm, 0);
    return {
      districtCode,
      dateKey,
      tempMaxC: forecast7d[0].tmax,
      humidityPct: agri.current.humidity,
      rainfall7dMm,
      seasonNormalMm: normal,
      seasonActualMm: actual,
      devPct,
      current: {
        temperature_2m: agri.current.temperature,
        relative_humidity_2m: agri.current.humidity,
        apparent_temperature: agri.current.apparentTemperature,
        precipitation: agri.current.precipitation,
        rain: agri.current.precipitation,
        weather_code: agri.current.weatherCode,
        cloud_cover: agri.current.cloudCover,
        surface_pressure: agri.current.surfacePressure,
        wind_speed_10m: agri.current.windSpeed,
        wind_direction_10m: agri.current.windDirection,
        uv_index: agri.current.uvIndex
      },
      soil: agri.soil,
      daily: agri.daily,
      dailyEt0: forecast7d.map((d) => d.et0),
      soilMoisture: (agri.soil.currentMoistureVwc / 100).toFixed(2),
      forecast7d,
      forecast: forecast7d,
      agri
    };
  }

  // D:/SIH26-TryHards/assets/js/services/simPrices.js
  function hashCode2(str) {
    let h = 7;
    for (let i = 0; i < str.length; i += 1) {
      h = h * 31 + str.charCodeAt(i) | 0;
    }
    return Math.abs(h);
  }
  var CROP_BASE = {
    cotton: 6800,
    onion: 1750,
    soybean: 4700,
    chilli: 15e3,
    tomato: 1500,
    wheat: 2400,
    rice: 2200,
    groundnut: 6200
  };
  var DAY_SUFFIXES = [
    { suffix: "APMC", days: "Mon\u2013Sat", extraKm: 0 },
    { suffix: "Krishi Upaj Mandi", days: "Mon\u2013Fri", extraKm: 18 },
    { suffix: "Rural Market", days: "Tue, Fri", extraKm: 34 }
  ];
  function getMandisForDistrict(districtCode, districtName) {
    const baseSeed = hashCode2(`${districtCode}:mandis`);
    return DAY_SUFFIXES.map((s, i) => {
      const seed = hashCode2(`${districtCode}:m${i}`);
      return {
        id: `${districtCode}-m${i + 1}`,
        name: `${districtName} ${s.suffix}`,
        distanceKm: 8 + seed % 26 + s.extraKm,
        operatingDays: s.days,
        _seed: seed
      };
    }).map(({ _seed, ...m }) => ({ ...m, baseSeed }));
  }
  function getPrices(districtCode, crop) {
    const base = CROP_BASE[crop] ?? 3e3;
    const seed = hashCode2(`${districtCode}:${crop}`);
    const avg3mo = Math.round(base * (0.9 + seed % 30 / 100));
    const crashFactor = seed % 4 === 0 ? 0.62 + seed % 12 / 100 : 0.94 + seed % 14 / 100;
    const current2 = Math.round(avg3mo * crashFactor);
    const mandis = getMandisForDistrict(districtCode, "");
    const quotes = {};
    mandis.forEach((m) => {
      const q = hashCode2(`${districtCode}:${crop}:${m.id}`);
      quotes[m.id] = {
        modal: Math.round(current2 * (0.95 + q % 12 / 100)),
        trend7dPct: Math.round((q % 130 - 55) / 10 * 10) / 10
        // −5.5…+7.4 %
      };
    });
    return { crop, avg3mo, current: current2, quotes };
  }

  // D:/SIH26-TryHards/assets/js/advisory.js
  var DAY_MS = 864e5;
  var STAGE_KEYS = [
    "sowing",
    "vegetative",
    "flowering",
    "grain_fill",
    "maturity",
    "harvest_ready"
  ];
  var STAGE_DISPLAY_NAMES = [
    "Sowing / Germination",
    "Vegetative Canopy",
    "Flowering / Reproductive",
    "Grain Fill / Bulking",
    "Maturity / Ripening",
    "Harvest Ready"
  ];
  var CROP_WINDOWS = {
    wheat: {
      name: "Wheat",
      botanicalName: "Triticum aestivum",
      season: "Rabi",
      stages: [15, 50, 80, 110, 130],
      duration: 140,
      kc: [0.4, 0.8, 1.15, 1.1, 0.65, 0.25],
      tBase: 5,
      targetGdd: 1800
    },
    rice: {
      name: "Rice",
      botanicalName: "Oryza sativa",
      season: "Kharif/Rabi",
      stages: [15, 45, 70, 95, 115],
      duration: 125,
      kc: [1.05, 1.15, 1.25, 1.1, 0.85, 0.5],
      tBase: 10,
      targetGdd: 2100
    },
    cotton: {
      name: "Cotton",
      botanicalName: "Gossypium hirsutum",
      season: "Kharif",
      stages: [15, 50, 85, 120, 155],
      duration: 170,
      kc: [0.45, 0.75, 1.2, 1.05, 0.7, 0.4],
      tBase: 15,
      targetGdd: 2400
    },
    maize: {
      name: "Maize",
      botanicalName: "Zea mays",
      season: "Kharif/Rabi",
      stages: [12, 35, 60, 85, 105],
      duration: 115,
      kc: [0.4, 0.8, 1.2, 1.05, 0.6, 0.35],
      tBase: 10,
      targetGdd: 1650
    },
    mustard: {
      name: "Mustard",
      botanicalName: "Brassica juncea",
      season: "Rabi",
      stages: [12, 35, 60, 85, 105],
      duration: 115,
      kc: [0.4, 0.75, 1.15, 1, 0.55, 0.3],
      tBase: 5,
      targetGdd: 1500
    },
    soybean: {
      name: "Soybean",
      botanicalName: "Glycine max",
      season: "Kharif",
      stages: [12, 40, 65, 85, 100],
      duration: 110,
      kc: [0.4, 0.75, 1.15, 1.05, 0.6, 0.35],
      tBase: 10,
      targetGdd: 1600
    },
    tomato: {
      name: "Tomato",
      botanicalName: "Solanum lycopersicum",
      season: "Multi",
      stages: [10, 35, 55, 75, 90],
      duration: 100,
      kc: [0.45, 0.75, 1.15, 1.1, 0.8, 0.6],
      tBase: 10,
      targetGdd: 1750
    },
    potato: {
      name: "Potato",
      botanicalName: "Solanum tuberosum",
      season: "Rabi",
      stages: [15, 35, 55, 80, 95],
      duration: 105,
      kc: [0.45, 0.8, 1.15, 1.1, 0.7, 0.4],
      tBase: 7,
      targetGdd: 1450
    },
    sugarcane: {
      name: "Sugarcane",
      botanicalName: "Saccharum officinarum",
      season: "Annual",
      stages: [35, 100, 210, 290, 330],
      duration: 360,
      kc: [0.45, 0.85, 1.25, 1.1, 0.75, 0.5],
      tBase: 12,
      targetGdd: 4800
    },
    chilli: {
      name: "Chilli",
      botanicalName: "Capsicum annuum",
      season: "Multi",
      stages: [15, 45, 75, 100, 130],
      duration: 140,
      kc: [0.4, 0.75, 1.1, 1.05, 0.8, 0.5],
      tBase: 10,
      targetGdd: 2e3
    },
    onion: {
      name: "Onion",
      botanicalName: "Allium cepa",
      season: "Rabi/Kharif",
      stages: [10, 30, 50, 70, 90],
      duration: 100,
      kc: [0.5, 0.75, 1.05, 1, 0.75, 0.5],
      tBase: 6,
      targetGdd: 1400
    },
    groundnut: {
      name: "Groundnut",
      botanicalName: "Arachis hypogaea",
      season: "Kharif/Rabi",
      stages: [12, 40, 65, 90, 110],
      duration: 120,
      kc: [0.4, 0.75, 1.15, 1.05, 0.65, 0.4],
      tBase: 13,
      targetGdd: 1850
    }
  };
  var GENERIC_CROP_MODEL = {
    name: "Generic Crop",
    botanicalName: "Plantae",
    season: "Kharif",
    stages: [15, 45, 75, 100, 120],
    duration: 120,
    kc: [0.45, 0.75, 1.15, 1.05, 0.7, 0.4],
    tBase: 10,
    targetGdd: 1600
  };
  function calculateCropPhenology(cropType, sowingDate, currentDate = /* @__PURE__ */ new Date(), tempHistory = null) {
    let today = currentDate instanceof Date && !isNaN(currentDate.getTime()) ? currentDate : new Date(currentDate || Date.now());
    if (isNaN(today.getTime()))
      today = /* @__PURE__ */ new Date();
    let sown;
    if (sowingDate instanceof Date && !isNaN(sowingDate.getTime())) {
      sown = sowingDate;
    } else if (typeof sowingDate === "string" && sowingDate.trim()) {
      const parsed = /* @__PURE__ */ new Date(`${sowingDate.trim().slice(0, 10)}T00:00:00`);
      sown = !isNaN(parsed.getTime()) ? parsed : new Date(today);
    } else {
      sown = new Date(today);
    }
    const daysElapsed = Math.max(0, Math.floor((today.getTime() - sown.getTime()) / DAY_MS));
    const cropKey = (cropType || "").toString().toLowerCase().trim().replace(/[^a-z]/g, "");
    const model = CROP_WINDOWS[cropKey] || GENERIC_CROP_MODEL;
    const thresholds = model.stages;
    const totalDuration = model.duration;
    let stageIndex = thresholds.findIndex((t2) => daysElapsed < t2);
    if (stageIndex === -1) {
      stageIndex = STAGE_KEYS.length - 1;
    }
    const stageKey = STAGE_KEYS[stageIndex];
    const stageName = STAGE_DISPLAY_NAMES[stageIndex];
    let stageStartDay = 0;
    let stageEndDay = thresholds[0];
    if (stageIndex === 0) {
      stageStartDay = 0;
      stageEndDay = thresholds[0];
    } else if (stageIndex < 5) {
      stageStartDay = thresholds[stageIndex - 1];
      stageEndDay = thresholds[stageIndex];
    } else {
      stageStartDay = thresholds[4];
      stageEndDay = totalDuration;
    }
    const stageDuration = Math.max(1, stageEndDay - stageStartDay);
    const daysInStage = Math.max(0, Math.min(stageDuration, daysElapsed - stageStartDay));
    const progressPct = Math.min(100, Math.max(0, Math.round(daysElapsed / totalDuration * 100)));
    const harvestTime = new Date(sown.getTime() + totalDuration * DAY_MS);
    const expectedHarvestDate = !isNaN(harvestTime.getTime()) ? harvestTime.toISOString().slice(0, 10) : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const kc = model.kc[stageIndex] ?? 0.8;
    let gddAccrued = 0;
    if (Array.isArray(tempHistory) && tempHistory.length > 0) {
      gddAccrued = Math.round(
        tempHistory.reduce((sum, t2) => sum + Math.max(0, t2 - model.tBase), 0)
      );
    } else {
      const dailyMeanTemp = 27.5;
      const dailyGdd = Math.max(0, dailyMeanTemp - model.tBase);
      gddAccrued = Math.round(Math.min(model.targetGdd, daysElapsed * dailyGdd));
    }
    return {
      crop: cropKey,
      cropName: model.name,
      sowingDate: sown.toISOString().slice(0, 10),
      daysElapsed,
      totalDuration,
      stageIndex,
      stageKey,
      stageName,
      progressPct,
      daysInStage,
      stageDuration,
      expectedHarvestDate,
      kc,
      gddAccrued,
      targetGdd: model.targetGdd,
      tBase: model.tBase
    };
  }
  function calculateStage(sownOnISO, crop, today = /* @__PURE__ */ new Date()) {
    if (crop instanceof Date) {
      today = crop;
      crop = void 0;
    }
    const phenology = calculateCropPhenology(crop, sownOnISO, today);
    return {
      stage: phenology.stageKey === "grain_fill" ? "grain-fill" : phenology.stageKey === "harvest_ready" ? "harvest-ready" : phenology.stageKey,
      stageKey: phenology.stageKey,
      stageIndex: phenology.stageIndex,
      stageName: phenology.stageName,
      daysSinceSowing: phenology.daysElapsed,
      expectedHarvest: phenology.expectedHarvestDate,
      progressPct: phenology.progressPct,
      kc: phenology.kc,
      gddAccrued: phenology.gddAccrued
    };
  }
  function calculateCropWaterDemand(et0Mm = 4, cropType = "wheat", stage = 1, areaAcres = 1) {
    const cropKey = (cropType || "").toString().toLowerCase().trim().replace(/[^a-z]/g, "");
    const model = CROP_WINDOWS[cropKey] || GENERIC_CROP_MODEL;
    let stageIdx = 0;
    if (typeof stage === "number") {
      stageIdx = Math.max(0, Math.min(5, Math.floor(stage)));
    } else if (typeof stage === "string") {
      const norm = stage.toLowerCase().replace("-", "_");
      const found = STAGE_KEYS.indexOf(norm);
      stageIdx = found >= 0 ? found : 0;
    }
    const kc = model.kc[stageIdx] ?? 0.8;
    const et0 = Math.max(0, typeof et0Mm === "number" && !isNaN(et0Mm) ? et0Mm : 4);
    const acres = Math.max(0, typeof areaAcres === "number" && !isNaN(areaAcres) ? areaAcres : 1);
    const etcMm = Math.round(et0 * kc * 100) / 100;
    const litersPerAcre = Math.round(etcMm * 4046.8564);
    const totalLiters = Math.round(litersPerAcre * acres);
    return {
      crop: cropKey,
      cropName: model.name,
      stageIndex: stageIdx,
      stageKey: STAGE_KEYS[stageIdx],
      kc,
      et0Mm: et0,
      etcMm,
      litersPerAcre,
      totalLiters,
      areaAcres: acres
    };
  }
  function evaluateSprayWindow(currentWeather = {}, hourlyForecast = []) {
    const temp = typeof currentWeather.temperature === "number" ? currentWeather.temperature : typeof currentWeather.temperature_2m === "number" ? currentWeather.temperature_2m : typeof currentWeather.tempMaxC === "number" ? currentWeather.tempMaxC : 26;
    const rh = typeof currentWeather.humidity === "number" ? currentWeather.humidity : typeof currentWeather.relative_humidity_2m === "number" ? currentWeather.relative_humidity_2m : typeof currentWeather.humidityPct === "number" ? currentWeather.humidityPct : 60;
    const windSpeed = typeof currentWeather.windSpeed === "number" ? currentWeather.windSpeed : typeof currentWeather.wind_speed_10m === "number" ? currentWeather.wind_speed_10m : 8;
    const currentRain = typeof currentWeather.precipitation === "number" ? currentWeather.precipitation : typeof currentWeather.rain === "number" ? currentWeather.rain : 0;
    let tomorrowRain = 0;
    if (Array.isArray(hourlyForecast) && hourlyForecast.length > 0) {
      if (hourlyForecast[1]?.precipitationSum !== void 0) {
        tomorrowRain = hourlyForecast[1].precipitationSum;
      } else if (hourlyForecast[1]?.rainMm !== void 0) {
        tomorrowRain = hourlyForecast[1].rainMm;
      } else if (typeof hourlyForecast[0]?.precipitation === "number") {
        tomorrowRain = hourlyForecast.slice(0, 24).reduce((s, h) => s + (h.precipitation || 0), 0);
      }
    } else if (hourlyForecast && typeof hourlyForecast === "object") {
      tomorrowRain = hourlyForecast.precipitationSum ?? hourlyForecast.rainMm ?? hourlyForecast.precipitation ?? 0;
    }
    const deltaT = Math.round(temp * (1 - rh / 100) * 0.7 * 10) / 10;
    const params = {
      tempC: temp,
      rhPct: rh,
      windSpeedKmH: windSpeed,
      rainMm: currentRain,
      tomorrowRainMm: tomorrowRain,
      deltaTC: deltaT
    };
    if (currentRain > 0 || tomorrowRain >= 2) {
      return {
        status: "unsafe",
        severity: "danger",
        titleKey: "spray.unsafeTitle",
        reasonKey: "spray.rainImminent",
        reasonText: "Rainfall active or imminent within rainfastness window (risk of chemical wash-off)",
        reason: "Rainfall active or imminent within rainfastness window (risk of chemical wash-off)",
        score: 10,
        windowTimeSlot: "Prohibited",
        recommendedSlots: [],
        deltaT,
        params,
        constraints: { rainHazard: true }
      };
    }
    if (windSpeed < 3) {
      return {
        status: "unsafe",
        severity: "danger",
        titleKey: "spray.unsafeTitle",
        reasonKey: "spray.thermalInversion",
        reasonText: "Surface thermal inversion hazard (calm wind < 3 km/h traps chemical vapor)",
        reason: "Surface thermal inversion hazard (calm wind < 3 km/h traps chemical vapor)",
        score: 20,
        windowTimeSlot: "Prohibited",
        recommendedSlots: [],
        deltaT,
        params,
        constraints: { thermalInversion: true }
      };
    }
    if (windSpeed > 20) {
      return {
        status: "unsafe",
        severity: "danger",
        titleKey: "spray.unsafeTitle",
        reasonKey: "spray.windHigh",
        reasonText: "High wind drift hazard (wind speed > 20 km/h causes off-target drift)",
        reason: "High wind drift hazard (wind speed > 20 km/h causes off-target drift)",
        score: 15,
        windowTimeSlot: "Prohibited",
        recommendedSlots: [],
        deltaT,
        params,
        constraints: { windDrift: true }
      };
    }
    if (temp > 35) {
      return {
        status: "unsafe",
        severity: "danger",
        titleKey: "spray.unsafeTitle",
        reasonKey: "spray.heatScorch",
        reasonText: "Extreme heat hazard (temperature > 35 C causes leaf scorch and droplet evaporation)",
        reason: "Extreme heat hazard (temperature > 35 C causes leaf scorch and droplet evaporation)",
        score: 25,
        windowTimeSlot: "Prohibited",
        recommendedSlots: [],
        deltaT,
        params,
        constraints: { heatScorch: true }
      };
    }
    if (deltaT > 10) {
      return {
        status: "unsafe",
        severity: "danger",
        titleKey: "spray.unsafeTitle",
        reasonKey: "spray.deltaTHigh",
        reasonText: "High Delta T (> 10 C causes rapid droplet evaporation before canopy contact)",
        reason: "High Delta T (> 10 C causes rapid droplet evaporation before canopy contact)",
        score: 30,
        windowTimeSlot: "Prohibited",
        recommendedSlots: [],
        deltaT,
        params,
        constraints: { deltaTHigh: true }
      };
    }
    if (windSpeed >= 15) {
      return {
        status: "caution",
        severity: "warning",
        titleKey: "spray.cautionTitle",
        reasonKey: "spray.windModerate",
        reasonText: "Moderate wind (15-20 km/h) - use low-drift nozzles and reduced boom height",
        reason: "Moderate wind (15-20 km/h) - use low-drift nozzles and reduced boom height",
        score: 60,
        windowTimeSlot: "06:00 - 08:30",
        recommendedSlots: ["06:00 - 08:30"],
        deltaT,
        params,
        constraints: { moderateWind: true }
      };
    }
    if (temp >= 30) {
      return {
        status: "caution",
        severity: "warning",
        titleKey: "spray.cautionTitle",
        reasonKey: "spray.heatMorningOnly",
        reasonText: "Elevated temperature (30-35 C) - restrict spraying strictly to early morning",
        reason: "Elevated temperature (30-35 C) - restrict spraying strictly to early morning",
        score: 65,
        windowTimeSlot: "06:00 - 08:30",
        recommendedSlots: ["06:00 - 08:30"],
        deltaT,
        params,
        constraints: { elevatedTemp: true }
      };
    }
    if (rh < 40 || rh > 80) {
      return {
        status: "caution",
        severity: "warning",
        titleKey: "spray.cautionTitle",
        reasonKey: "spray.rhSuboptimal",
        reasonText: "Suboptimal relative humidity - monitor droplet evaporation or fungal risk",
        reason: "Suboptimal relative humidity - monitor droplet evaporation or fungal risk",
        score: 70,
        windowTimeSlot: "06:30 - 09:00",
        recommendedSlots: ["06:30 - 09:00"],
        deltaT,
        params,
        constraints: { suboptimalRh: true }
      };
    }
    if (deltaT < 2 || deltaT > 8) {
      return {
        status: "caution",
        severity: "warning",
        titleKey: "spray.cautionTitle",
        reasonKey: "spray.deltaTCaution",
        reasonText: "Marginal Delta T - droplet survival or evaporation slightly off ideal range",
        reason: "Marginal Delta T - droplet survival or evaporation slightly off ideal range",
        score: 75,
        windowTimeSlot: "06:00 - 09:00",
        recommendedSlots: ["06:00 - 09:00"],
        deltaT,
        params,
        constraints: { marginalDeltaT: true }
      };
    }
    return {
      status: "optimal",
      severity: "success",
      titleKey: "spray.optimalTitle",
      reasonKey: "spray.optimal",
      reasonText: "Optimal microclimatic conditions for chemical application",
      reason: "Optimal microclimatic conditions for chemical application",
      score: 95,
      windowTimeSlot: "06:00 - 09:30",
      recommendedSlots: ["06:00 - 09:30", "16:30 - 18:30"],
      deltaT,
      params,
      constraints: {}
    };
  }
  function buildTomorrowActionPlan(profile = {}, tomorrowWeather = {}, phenologyStage = null, soilHydration = null) {
    let tw = tomorrowWeather;
    if (tw?.forecast && Array.isArray(tw.forecast) && tw.forecast[1]) {
      tw = tw.forecast[1];
    } else if (tw?.forecast7d && Array.isArray(tw.forecast7d) && tw.forecast7d[1]) {
      tw = tw.forecast7d[1];
    }
    const tmax = tw?.tempMax ?? tw?.tmax ?? 32;
    const tmin = tw?.tempMin ?? tw?.tmin ?? 22;
    const rain = tw?.precipitationSum ?? tw?.rainMm ?? tw?.precipitation ?? 0;
    const et0 = tw?.et0 ?? tw?.et0_fao_evapotranspiration ?? 4.5;
    const condition = tw?.condition ?? (rain >= 40 ? "storm" : rain >= 10 ? "rain" : rain >= 2 ? "cloud" : "clear");
    const weatherSummary = {
      tmax,
      tmin,
      rainMm: rain,
      et0Mm: et0,
      condition
    };
    const synopsis = `${condition.toUpperCase()} - Temp: ${tmin}-${tmax} C, Rain: ${rain} mm, ET0: ${et0} mm/day.`;
    let stageKey = "vegetative";
    let stageName = "Vegetative Canopy";
    if (typeof phenologyStage === "string") {
      stageKey = phenologyStage.toLowerCase().replace("-", "_");
      const idx = STAGE_KEYS.indexOf(stageKey);
      stageName = idx >= 0 ? STAGE_DISPLAY_NAMES[idx] : phenologyStage;
    } else if (phenologyStage && typeof phenologyStage === "object") {
      stageKey = (phenologyStage.stageKey || phenologyStage.stage || "vegetative").toLowerCase().replace("-", "_");
      stageName = phenologyStage.stageName || phenologyStage.stage || "Vegetative Canopy";
    } else if (profile.sowingDate && profile.crop) {
      const pheno = calculateCropPhenology(profile.crop, profile.sowingDate);
      stageKey = pheno.stageKey;
      stageName = pheno.stageName;
    }
    let hydStatus = "optimal";
    if (typeof soilHydration === "string") {
      hydStatus = soilHydration.toLowerCase();
    } else if (soilHydration && typeof soilHydration === "object") {
      hydStatus = (soilHydration.hydrationStatus || soilHydration.tier || "optimal").toLowerCase();
    }
    const cropName = (profile.crop || "Crop").toString().toUpperCase();
    const stagePriorities = {
      sowing: {
        title: "Seedbed Moisture & Germination Inspection",
        body: `Inspect seedbed emergence for ${cropName}. Maintain topsoil moisture and prevent soil crusting.`
      },
      vegetative: {
        title: "Canopy Aeration & Nitrogen Management",
        body: `Support active vegetative growth for ${cropName}. Monitor tiller count and apply scheduled split nutrients.`
      },
      flowering: {
        title: "Pollination Protection & Critical Moisture Watch",
        body: `Critical reproductive stage for ${cropName}. Prevent moisture stress and scout daily for sucking pests.`
      },
      grain_fill: {
        title: "Kernel Bulking & Nutrient Translocation",
        body: `Ensure consistent moisture for ${cropName} grain development. Apply foliar potassium if recommended.`
      },
      maturity: {
        title: "Pre-Harvest Desiccation & Storage Prep",
        body: `Monitor grain moisture reduction for ${cropName}. Taper irrigation and prepare harvesting machinery.`
      },
      harvest_ready: {
        title: "Harvest Mobilization & Moisture Sampling",
        body: `Field moisture optimal for ${cropName} harvesting. Coordinate picking/threshing during dry morning weather.`
      }
    };
    const priority = stagePriorities[stageKey] || stagePriorities.vegetative;
    const cropPriority = {
      stage: stageKey,
      stageName,
      priorityTitle: priority.title,
      priorityBody: priority.body
    };
    const irrigationType = (profile.irrigation || "").toLowerCase();
    const areaAcres = parseFloat(profile.areaAcres) || 1;
    const demand = calculateCropWaterDemand(et0, profile.crop || "wheat", stageKey, areaAcres);
    let irrigationDirective = {
      action: "APPLY",
      quantityLitersPerAcre: demand.litersPerAcre,
      totalLiters: demand.totalLiters,
      rationale: `Apply crop water demand of ${demand.litersPerAcre.toLocaleString()} Liters/Acre (${demand.totalLiters.toLocaleString()} L total) during early morning (06:00 - 08:30).`
    };
    if (rain >= 10) {
      irrigationDirective = {
        action: "SUSPEND",
        quantityLitersPerAcre: 0,
        totalLiters: 0,
        rationale: `Heavy rainfall predicted (${rain} mm). Suspend all irrigation to prevent root waterlogging and nutrient runoff.`
      };
    } else if (rain >= 2) {
      irrigationDirective = {
        action: "POSTPONE",
        quantityLitersPerAcre: 0,
        totalLiters: 0,
        rationale: `Moderate rainfall forecast (${rain} mm). Postpone irrigation and reassess root zone moisture tomorrow afternoon.`
      };
    } else if (irrigationType === "rainfed") {
      irrigationDirective = {
        action: "CONSERVE",
        quantityLitersPerAcre: 0,
        totalLiters: 0,
        rationale: "Rainfed cultivation active. Implement organic mulching and inter-row weed clearance to conserve soil moisture."
      };
    } else if (hydStatus === "saturated") {
      irrigationDirective = {
        action: "DRAIN",
        quantityLitersPerAcre: 0,
        totalLiters: 0,
        rationale: "Soil is at saturation (> 40% VWC). Open field drainage ditches to prevent root asphyxiation."
      };
    }
    const spraySafety = evaluateSprayWindow({
      temperature: tmax - 2,
      humidity: tw?.humidity ?? 60,
      windSpeed: tw?.windSpeedMax ?? 10,
      precipitation: rain
    }, tw);
    let waterTask = "";
    if (irrigationDirective.action === "APPLY") {
      waterTask = `Irrigation: Apply ${demand.litersPerAcre.toLocaleString()} Liters/Acre before 08:30`;
    } else if (irrigationDirective.action === "SUSPEND") {
      waterTask = `Irrigation: Suspend all pumping due to ${rain} mm rain forecast`;
    } else if (irrigationDirective.action === "POSTPONE") {
      waterTask = `Irrigation: Postpone pumping and check root zone moisture post-rain`;
    } else if (irrigationDirective.action === "CONSERVE") {
      waterTask = "Soil Moisture: Maintain mulch cover and clear weeds to conserve moisture";
    } else {
      waterTask = "Drainage: Inspect and clear field drainage channels immediately";
    }
    let sprayTask = "";
    if (spraySafety.status === "optimal") {
      sprayTask = `Plant Protection: Safe spray window active from ${spraySafety.windowTimeSlot}`;
    } else if (spraySafety.status === "caution") {
      sprayTask = `Plant Protection: Caution window ${spraySafety.windowTimeSlot} (Use low-drift nozzles)`;
    } else {
      sprayTask = `Plant Protection: Spray prohibited (${spraySafety.reasonText})`;
    }
    let scoutTask = `Crop Scouting: ${priority.title} for ${cropName} (${stageName})`;
    const checklist = [waterTask, sprayTask, scoutTask];
    const tomorrowDate = /* @__PURE__ */ new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const dateISO = tomorrowDate.toISOString().slice(0, 10);
    return {
      dateISO,
      synopsis,
      weatherSummary,
      cropPriority,
      operationalPriority: `${priority.title}: ${priority.body}`,
      irrigationDirective,
      spraySafety,
      checklist
    };
  }
  var SEVERITY_ORDER = { urgent: 0, warning: 1, info: 2 };
  var GROWTH_STAGES = ["sowing", "vegetative", "flowering"];
  function buildAdvisories(draft, weather) {
    const out = [];
    const rawStage = draft?.growthStage ?? "vegetative";
    const stage = rawStage.replace("_", "-");
    const crop = draft?.crop ?? "";
    const soil = draft?.soilType ?? "";
    const irrigation = draft?.irrigation ?? "";
    if (!weather || !weather.forecast7d && !weather.forecast) {
      out.push({
        severity: "info",
        titleKey: "adv.allClear.title",
        bodyKey: "adv.allClear.body",
        whyKey: "adv.allClear.why",
        params: { crop, stage }
      });
      return out;
    }
    const forecast = weather.forecast7d || weather.forecast || [];
    const heavy = forecast.slice(0, 2).find((d) => (d.rainMm || d.precipitationSum || 0) >= 40);
    if (heavy && (stage === "harvest-ready" || stage === "harvest_ready")) {
      out.push({
        severity: "urgent",
        titleKey: "adv.harvestRain.title",
        bodyKey: "adv.harvestRain.body",
        whyKey: "adv.harvestRain.why",
        params: { mm: heavy.rainMm || heavy.precipitationSum, crop, dayIndex: heavy.dayIndex }
      });
    } else if (heavy) {
      out.push({
        severity: "warning",
        titleKey: "adv.holdSpray.title",
        bodyKey: "adv.holdSpray.body",
        whyKey: "adv.holdSpray.why",
        params: { mm: heavy.rainMm || heavy.precipitationSum, dayIndex: heavy.dayIndex }
      });
    }
    if ((weather.devPct ?? 0) <= -40 && GROWTH_STAGES.includes(stage)) {
      out.push({
        severity: "warning",
        titleKey: "adv.irrigate.title",
        bodyKey: "adv.irrigate.body",
        whyKey: "adv.irrigate.why",
        params: {
          district: draft.districtName || "Farm",
          pct: Math.abs(weather.devPct),
          crop,
          stage
        }
      });
    }
    const tmax = weather.tempMaxC ?? weather.current?.temperature ?? weather.daily?.tempMax ?? 30;
    if (tmax >= 38) {
      out.push({
        severity: "warning",
        titleKey: "adv.heat.title",
        bodyKey: "adv.heat.body",
        whyKey: "adv.heat.why",
        params: { tmax }
      });
    }
    const rainNext3 = forecast.slice(0, 3).reduce((s, d) => s + (d.rainMm || d.precipitationSum || 0), 0);
    if (rainNext3 >= 80 && (soil === "sandy" || soil === "lateritic") && GROWTH_STAGES.includes(stage)) {
      out.push({
        severity: "warning",
        titleKey: "adv.waterlog.title",
        bodyKey: "adv.waterlog.body",
        whyKey: "adv.waterlog.why",
        params: { mm: Math.round(rainNext3), crop, soil }
      });
    }
    if (irrigation === "rainfed" && (weather.devPct ?? 0) <= -25 && (weather.devPct ?? 0) > -40 && GROWTH_STAGES.includes(stage)) {
      out.push({
        severity: "warning",
        titleKey: "adv.rainfedStress.title",
        bodyKey: "adv.rainfedStress.body",
        whyKey: "adv.rainfedStress.why",
        params: {
          crop,
          stage,
          pct: Math.abs(weather.devPct),
          district: draft.districtName || "Farm"
        }
      });
    }
    const humidity = weather.humidityPct ?? weather.current?.humidity ?? 60;
    if (soil === "black" && stage === "flowering" && humidity >= 75) {
      out.push({
        severity: "info",
        titleKey: "adv.fungalWatch.title",
        bodyKey: "adv.fungalWatch.body",
        whyKey: "adv.fungalWatch.why",
        params: { crop, humidity }
      });
    }
    if (!out.length) {
      out.push({
        severity: "info",
        titleKey: "adv.allClear.title",
        bodyKey: "adv.allClear.body",
        whyKey: "adv.allClear.why",
        params: { crop, stage }
      });
    }
    return out.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]).slice(0, 2);
  }

  // D:/SIH26-TryHards/assets/js/mandi.js
  var round = (n) => Math.round(n);
  function rankMandis({ mandis, prices, quintals, freightPerKm, feePct }) {
    const q = Math.max(0, Number(quintals) || 0);
    const rows = mandis.map((m) => {
      const quote = prices.quotes[m.id] ?? {};
      const price = quote.modal ?? prices.current ?? 0;
      const gross = price * q;
      const transport = m.distanceKm * 2 * freightPerKm;
      const fee = gross * feePct;
      const net = round(gross - transport - fee);
      return {
        id: m.id,
        name: m.name,
        price,
        distanceKm: m.distanceKm,
        operatingDays: m.operatingDays,
        trend7dPct: quote.trend7dPct ?? 0,
        min: quote.min ?? price,
        max: quote.max ?? price,
        msp: quote.msp ?? price,
        variety: quote.variety ?? "Standard",
        arrivalDate: quote.arrivalDate ?? "Today",
        gross: round(gross),
        transport: round(transport),
        fee: round(fee),
        net,
        isBestNet: false
      };
    }).sort((a, b) => b.net - a.net);
    if (rows.length)
      rows[0].isBestNet = true;
    const bestNet = rows[0] ?? null;
    const bestPrice = rows.length ? rows.reduce((best, r) => r.price > best.price ? r : best, rows[0]) : null;
    const inversion = bestNet && bestPrice && bestPrice.id !== bestNet.id ? {
      priceLeader: bestPrice.name,
      netLeader: bestNet.name,
      gap: bestNet.net - bestPrice.net
    } : null;
    return { rows, bestNet, bestPrice, inversion };
  }

  // D:/SIH26-TryHards/assets/js/repository/demoRepository.js
  var demoAccounts = /* @__PURE__ */ new Map();
  var demoRepository = {
    mode: "demo",
    /* State → districts → villages for the S2 cascading selects. */
    getLocationTree() {
      return LOCATION_TREE;
    },
    /* S3 land form options. */
    getLandOptions() {
      return { soils: SOIL_TYPES, irrigation: IRRIGATION_TYPES };
    },
    /* S4 crop catalogue with varieties. */
    getCropCatalogue() {
      return CROP_CATALOGUE;
    },
    /* ---- demo auth fallback (pathway.md §8 demo-safety) ----
       Used only when the FastAPI service is unreachable. Same
       shapes as the real API; OTP fixed at 000000 per DECISIONS.md
       §3, officer creds mirror the seeded backend account. */
    async ping() {
      return false;
    },
    async requestOtp() {
      return { expires_in: 300, dev_code: "000000", sent: false };
    },
    async verifyOtp(phone2, otp) {
      if (otp !== "000000") {
        throw { code: "INVALID_OTP", message: "Demo code is 000000." };
      }
      const known = demoAccounts.get(phone2);
      return {
        token: `demo-farmer-${phone2}`,
        role: "farmer",
        farmer: {
          phone: phone2,
          masked: `\u2022\u2022\u2022 ${phone2.slice(-3)}`,
          new_account: !known,
          has_profile: Boolean(known?.display_name)
        }
      };
    },
    async saveProfile(payload, token) {
      const phone2 = token?.replace("demo-farmer-", "") ?? "";
      const prev = demoAccounts.get(phone2) ?? {};
      const record = { ...prev, ...payload };
      demoAccounts.set(phone2, record);
      return { display_name: record.display_name, farm: {
        village_name: record.village_name,
        area_acres: record.area_acres,
        soil_type: record.soil_type,
        irrigation_type: record.irrigation_type
      }, crop_cycle: {
        crop: record.crop,
        variety: record.variety,
        sown_on: record.sown_on,
        growth_stage: record.growth_stage,
        expected_harvest: record.expected_harvest
      } };
    },
    async getMe(token) {
      const phone2 = token?.replace("demo-farmer-", "") ?? "";
      const rec = demoAccounts.get(phone2);
      if (!rec) {
        return {
          phone_masked: `\u2022\u2022\u2022 ${phone2.slice(-3)}`,
          display_name: null,
          farm: null,
          crop_cycle: null
        };
      }
      return this.saveProfile(rec, token);
    },
    async loginOfficer(staffId, password) {
      if (staffId !== "OFF-1001" || password !== "Kisan@2026") {
        throw { code: "INVALID_CREDENTIALS", message: "Wrong staff ID or password." };
      }
      return {
        token: `demo-officer-${Date.now()}`,
        role: "officer",
        officer: { staff_id: staffId, name: "A. Kulkarni", district: "Nashik" }
      };
    },
    async logout() {
      return true;
    },
    /* ---- S7 farmer home (pathway.md P4) ----
       Composes the simulated weather provider + the pure advisory
       rules — the same composition the backend service will run.
       The farmer NEVER receives a risk score here (DECISIONS.md §6). */
    getFarmerHome(draft) {
      const weather = simulateWeather(draft.districtCode || draft.stateCode);
      const advisories = buildAdvisories(draft, weather);
      return { weather, advisories };
    },
    /* ---- S9 mandi comparison (pathway.md P6) ----
       SimulatedPriceProvider + pure rankMandis engine, composed here
       so the screen never touches data.js or the provider. */
    compareMandis(draft, quintals) {
      const mandis = getMandisForDistrict(draft.districtCode, draft.districtName ?? "");
      const prices = getPrices(draft.districtCode, draft.crop);
      const result = rankMandis({
        mandis,
        prices,
        quintals,
        freightPerKm: FREIGHT_PER_KM,
        feePct: MANDI_FEE_PCT
      });
      return { ...result, quintals };
    },
    /* ---- S10 officer contact card ---- */
    getOfficerContact() {
      return OFFICER;
    },
    /* ---- O1–O6 Officer triage and caseload (pathway.md P9–P11) ---- */
    getOfficerCaseload(district = "Nashik") {
      const list = [
        {
          id: "F-101",
          name: "Mohan Deshmukh",
          village: "Niphad",
          district: district || "Nashik",
          acres: 4.5,
          crop: "Cotton",
          stage: "Flowering",
          score: 88,
          band: "CRITICAL",
          phone: "+919822012345",
          drivers: [
            { icon: "rain", label: "48% Monsoon Deficit" },
            { icon: "trend_down", label: "34% Mandi Price Crash" },
            { icon: "alert", label: "Flowering Heat Stress" },
            { icon: "credit", label: "Loan EMI Due in 12 days" }
          ],
          latestAction: null
        },
        {
          id: "F-102",
          name: "Sanjay Shinde",
          village: "Dindori",
          district: district || "Nashik",
          acres: 3,
          crop: "Onion",
          stage: "Bulb Formation",
          score: 76,
          band: "HIGH",
          phone: "+919822067890",
          drivers: [
            { icon: "trend_down", label: "45% Price Drop vs 3mo Avg" },
            { icon: "rain", label: "28% Rain Deficit" }
          ],
          latestAction: null
        },
        {
          id: "F-103",
          name: "Sunita Patil",
          village: "Lasalgaon",
          district: district || "Nashik",
          acres: 5.2,
          crop: "Soybean",
          stage: "Grain Filling",
          score: 68,
          band: "HIGH",
          phone: "+919822045678",
          drivers: [
            { icon: "rain", label: "32% Rain Deficit" },
            { icon: "sprout", label: "Yield Critical Moisture Gap" }
          ],
          latestAction: null
        },
        {
          id: "F-104",
          name: "Ramesh Gaikwad",
          village: "Yeola",
          district: district || "Nashik",
          acres: 2.5,
          crop: "Tomato",
          stage: "Harvest Ready",
          score: 52,
          band: "MEDIUM",
          phone: "+919822089012",
          drivers: [
            { icon: "trend_down", label: "22% Price Volatility" },
            { icon: "rain", label: "Heavy Rain Forecast on Ready Crop" }
          ],
          latestAction: null
        },
        {
          id: "F-105",
          name: "Anil Jadhav",
          village: "Sinnar",
          district: district || "Nashik",
          acres: 6,
          crop: "Wheat",
          stage: "Vegetative",
          score: 24,
          band: "LOW",
          phone: "+919822034567",
          drivers: [
            { icon: "check", label: "Crop on Track" },
            { icon: "water", label: "Canal Irrigation Active" }
          ],
          latestAction: null
        }
      ];
      const counts = {
        CRITICAL: list.filter((c) => c.band === "CRITICAL").length,
        HIGH: list.filter((c) => c.band === "HIGH").length,
        MEDIUM: list.filter((c) => c.band === "MEDIUM").length,
        LOW: list.filter((c) => c.band === "LOW").length,
        TOTAL: list.length
      };
      return { list, counts };
    }
  };

  // D:/SIH26-TryHards/assets/js/config.js
  function getSarvamKey() {
    try {
      const stored = localStorage.getItem("sarvam_api_key");
      if (stored)
        return stored;
    } catch {
    }
    return "";
  }
  var SARVAM_API_KEY = getSarvamKey();
  function setSarvamKey(key) {
    try {
      localStorage.setItem("sarvam_api_key", key);
    } catch {
    }
  }
  var SARVAM_LOCALES = {
    en: "en-IN",
    hi: "hi-IN",
    mr: "mr-IN",
    bn: "bn-IN",
    ta: "ta-IN",
    te: "te-IN"
  };
  var API_BASE_URL = "http://localhost:8001/api/v1";

  // D:/SIH26-TryHards/assets/js/services/weather.js
  var GEO_CACHE = /* @__PURE__ */ new Map();
  var OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/forecast";
  var GEOCODING_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
  var CURRENT_PARAMS = [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "precipitation",
    "rain",
    "weather_code",
    "cloud_cover",
    "surface_pressure",
    "wind_speed_10m",
    "wind_direction_10m",
    "uv_index"
  ].join(",");
  var HOURLY_PARAMS = [
    "soil_moisture_0_to_1cm",
    "soil_moisture_1_to_3cm",
    "soil_moisture_3_to_9cm",
    "soil_moisture_9_to_27cm",
    "soil_temperature_0cm"
  ].join(",");
  var DAILY_PARAMS = [
    "temperature_2m_max",
    "temperature_2m_min",
    "precipitation_sum",
    "et0_fao_evapotranspiration",
    "uv_index_max",
    "wind_speed_10m_max"
  ].join(",");
  function buildOpenMeteoUrl(lat, lon) {
    return `${OPEN_METEO_BASE_URL}?latitude=${lat}&longitude=${lon}&current=${CURRENT_PARAMS}&hourly=${HOURLY_PARAMS}&daily=${DAILY_PARAMS}&timezone=auto&forecast_days=7`;
  }
  function classifySoilHydration2(input) {
    let vwc = typeof input === "number" && !isNaN(input) ? input : 25;
    if (vwc > 0 && vwc <= 1) {
      vwc = vwc * 100;
    }
    vwc = Math.max(0, Math.min(100, Math.round(vwc * 10) / 10));
    if (vwc > 40) {
      return {
        tier: "saturated",
        label: "Saturated (Drainage Required)",
        vwcPct: vwc,
        description: "Macropores filled with gravitational water. Immediate drainage required to prevent root hypoxia."
      };
    }
    if (vwc >= 25) {
      return {
        tier: "optimal",
        label: "Optimal (Field Capacity)",
        vwcPct: vwc,
        description: "Field capacity equilibrium. Optimal balance of plant-available water and soil aeration."
      };
    }
    if (vwc >= 18) {
      return {
        tier: "adequate",
        label: "Adequate Moisture",
        vwcPct: vwc,
        description: "Capillary water readily accessible. Routine irrigation schedule recommended."
      };
    }
    if (vwc >= 10) {
      return {
        tier: "depleted",
        label: "Depleted (Irrigation Needed)",
        vwcPct: vwc,
        description: "Management allowed depletion threshold exceeded. Irrigation required to avoid biomass loss."
      };
    }
    return {
      tier: "stress",
      label: "Critical Stress (Wilting Point)",
      vwcPct: vwc,
      description: "Permanent wilting point reached. Emergency irrigation required to prevent crop mortality."
    };
  }
  async function geocodeDistrict(districtName) {
    if (!districtName || typeof districtName !== "string") {
      return { lat: 20, lon: 73.8 };
    }
    const key = districtName.toLowerCase().trim();
    if (GEO_CACHE.has(key))
      return GEO_CACHE.get(key);
    try {
      const res = await fetch(
        `${GEOCODING_BASE_URL}?name=${encodeURIComponent(districtName)}&count=1&language=en&format=json`
      );
      const data = await res.json();
      if (data.results?.length) {
        const { latitude, longitude } = data.results[0];
        const loc = { lat: latitude, lon: longitude };
        GEO_CACHE.set(key, loc);
        return loc;
      }
    } catch {
    }
    const fallback = { lat: 20, lon: 73.8 };
    GEO_CACHE.set(key, fallback);
    return fallback;
  }
  function parseAgriWeatherResponse(data) {
    const currentData = data.current ?? {};
    const hourlyData = data.hourly ?? {};
    const dailyData = data.daily ?? {};
    const rawTopsoil = hourlyData.soil_moisture_0_to_1cm?.[0] ?? 0.22;
    const rawSeedbed = hourlyData.soil_moisture_1_to_3cm?.[0] ?? 0.25;
    const rawSubsoil = hourlyData.soil_moisture_3_to_9cm?.[0] ?? rawSeedbed;
    const rawDeep = hourlyData.soil_moisture_9_to_27cm?.[0] ?? 0.3;
    const soilTemp = Math.round((hourlyData.soil_temperature_0cm?.[0] ?? currentData.temperature_2m ?? 24) * 10) / 10;
    const topsoilMoistureVwc = Math.round(rawTopsoil * 1e3) / 10;
    const subsoilMoistureVwc = Math.round(rawSubsoil * 1e3) / 10;
    const deepMoistureVwc = Math.round(rawDeep * 1e3) / 10;
    const currentMoistureVwc = subsoilMoistureVwc;
    const hydration = classifySoilHydration2(currentMoistureVwc);
    const current2 = {
      temperature: Math.round((currentData.temperature_2m ?? 28) * 10) / 10,
      apparentTemperature: Math.round((currentData.apparent_temperature ?? currentData.temperature_2m ?? 28) * 10) / 10,
      humidity: Math.round(currentData.relative_humidity_2m ?? 60),
      windSpeed: Math.round((currentData.wind_speed_10m ?? 8) * 10) / 10,
      windDirection: Math.round(currentData.wind_direction_10m ?? 180),
      precipitation: Math.round((currentData.precipitation ?? 0) * 10) / 10,
      cloudCover: Math.round(currentData.cloud_cover ?? 20),
      surfacePressure: Math.round((currentData.surface_pressure ?? 1012) * 10) / 10,
      uvIndex: Math.round((currentData.uv_index ?? 5) * 10) / 10,
      weatherCode: currentData.weather_code ?? 0
    };
    const soil = {
      currentMoistureVwc,
      topsoilMoistureVwc,
      subsoilMoistureVwc,
      deepMoistureVwc,
      soilTemp,
      hydrationStatus: hydration.tier,
      hydrationLabel: hydration.label,
      hydrationDescription: hydration.description
    };
    const daily = {
      et0: Math.round((dailyData.et0_fao_evapotranspiration?.[0] ?? 4) * 10) / 10,
      tempMax: Math.round(dailyData.temperature_2m_max?.[0] ?? 32),
      tempMin: Math.round(dailyData.temperature_2m_min?.[0] ?? 22),
      precipSum: Math.round((dailyData.precipitation_sum?.[0] ?? 0) * 10) / 10,
      uvIndexMax: Math.round((dailyData.uv_index_max?.[0] ?? 6) * 10) / 10,
      windSpeedMax: Math.round((dailyData.wind_speed_10m_max?.[0] ?? 12) * 10) / 10
    };
    const weekday = ((/* @__PURE__ */ new Date()).getDay() + 6) % 7;
    const forecast = [];
    const count = Math.max(
      7,
      dailyData.time?.length || 0,
      dailyData.precipitation_sum?.length || 0
    );
    for (let i = 0; i < Math.min(7, count); i++) {
      const rainMm = Math.round((dailyData.precipitation_sum?.[i] ?? 0) * 10) / 10;
      const tmax = Math.round(dailyData.temperature_2m_max?.[i] ?? 30);
      const tmin = Math.round(dailyData.temperature_2m_min?.[i] ?? 22);
      const et0Val = Math.round((dailyData.et0_fao_evapotranspiration?.[i] ?? 4) * 10) / 10;
      const uvVal = Math.round((dailyData.uv_index_max?.[i] ?? 6) * 10) / 10;
      const windVal = Math.round((dailyData.wind_speed_10m_max?.[i] ?? 10) * 10) / 10;
      const condition = rainMm >= 40 ? "storm" : rainMm >= 10 ? "rain" : rainMm >= 2 ? "cloud" : "clear";
      forecast.push({
        date: dailyData.time?.[i] || "",
        dayIndex: (weekday + i) % 7,
        tempMax: tmax,
        tempMin: tmin,
        precipitationSum: rainMm,
        et0: et0Val,
        uvIndexMax: uvVal,
        windSpeedMax: windVal,
        rainMm,
        tmax,
        tmin,
        condition
      });
    }
    return {
      current: current2,
      soil,
      daily,
      forecast
    };
  }
  async function fetchAgriWeather(lat, lon) {
    try {
      if (typeof lat !== "number" || typeof lon !== "number" || isNaN(lat) || isNaN(lon)) {
        throw new Error(`Invalid geographic coordinates: lat=${lat}, lon=${lon}`);
      }
      if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        throw new Error(`Coordinates out of bounds: lat=${lat}, lon=${lon}`);
      }
      const url = buildOpenMeteoUrl(lat, lon);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Open-Meteo HTTP ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      return parseAgriWeatherResponse(data);
    } catch {
      return simulateAgriWeather(lat, lon);
    }
  }
  async function fetchWeather(districtName, today = /* @__PURE__ */ new Date()) {
    const dateKey = today.toISOString().slice(0, 10);
    const { lat, lon } = await geocodeDistrict(districtName);
    let agriData;
    try {
      agriData = await fetchAgriWeather(lat, lon);
    } catch {
      agriData = simulateAgriWeather(lat, lon, today);
    }
    const forecast7d = agriData.forecast || [];
    const rainfall7dMm = Math.round(forecast7d.reduce((s, d) => s + (d.rainMm || d.precipitationSum || 0), 0) * 10) / 10;
    const seasonNormalMm = 900;
    const dailyAvg = rainfall7dMm / (forecast7d.length || 7);
    const seasonActualMm = Math.round(dailyAvg * 122);
    const devPct = Math.round((seasonActualMm - seasonNormalMm) / seasonNormalMm * 100);
    const dailyEt0 = forecast7d.map((d) => d.et0 ?? 4);
    return {
      districtCode: (districtName || "NS").slice(0, 2).toUpperCase(),
      dateKey,
      tempMaxC: forecast7d[0]?.tmax ?? agriData.daily?.tempMax ?? 30,
      humidityPct: agriData.current?.humidity ?? 60,
      rainfall7dMm,
      seasonNormalMm,
      seasonActualMm,
      devPct,
      current: {
        temperature_2m: agriData.current.temperature,
        relative_humidity_2m: agriData.current.humidity,
        apparent_temperature: agriData.current.apparentTemperature,
        precipitation: agriData.current.precipitation,
        rain: agriData.current.precipitation,
        weather_code: agriData.current.weatherCode,
        cloud_cover: agriData.current.cloudCover,
        surface_pressure: agriData.current.surfacePressure,
        wind_speed_10m: agriData.current.windSpeed,
        wind_direction_10m: agriData.current.windDirection,
        uv_index: agriData.current.uvIndex
      },
      soil: agriData.soil,
      daily: agriData.daily,
      dailyEt0,
      soilMoisture: (agriData.soil.currentMoistureVwc / 100).toFixed(2),
      forecast7d,
      forecast: forecast7d,
      agri: agriData
    };
  }

  // D:/SIH26-TryHards/assets/js/repository/apiRepository.js
  async function request(path, { method = "POST", body, token } = {}) {
    let res;
    try {
      res = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...token ? { Authorization: `Bearer ${token}` } : {}
        },
        body: body === void 0 ? void 0 : JSON.stringify(body)
      });
    } catch {
      throw { code: "NETWORK", message: "Service unreachable." };
    }
    const payload = await res.json().catch(() => ({}));
    const err = payload?.error ?? payload?.detail?.error;
    let code = err?.code;
    if (!code && Array.isArray(payload?.detail))
      code = "VALIDATION";
    if (!res.ok) {
      throw {
        code: code ?? (res.status === 401 ? "TOKEN_EXPIRED" : "NETWORK"),
        message: err?.message ?? "Request failed."
      };
    }
    return payload.data ?? payload;
  }
  var apiRepository = {
    mode: "connected",
    async ping() {
      try {
        await request("/health", { method: "GET" });
        return true;
      } catch {
        return false;
      }
    },
    /* ---- farmer OTP flow ---- */
    requestOtp(phone2) {
      return request("/auth/otp/request", { body: { phone: phone2 } });
    },
    verifyOtp(phone2, otp) {
      return request("/auth/otp/verify", { body: { phone: phone2, otp } });
    },
    /* ---- officer login ---- */
    loginOfficer(staffId, password) {
      return request("/auth/officer/login", { body: { staff_id: staffId, password } });
    },
    getSessionRemote(token) {
      return request("/auth/session", { method: "GET", token });
    },
    async logout(token) {
      try {
        await request("/auth/logout", { token });
      } catch {
      }
      return true;
    },
    /* ---- account setup ---- */
    saveProfile(payload, token) {
      return request("/farmers/me/profile", { body: payload, token });
    },
    getMe(token) {
      return request("/farmers/me", { method: "GET", token });
    },
    /* ---- S7 farmer home (live weather via Open-Meteo) ----
       Open-Meteo is free, CORS-friendly, no key required.
       Falls back to offline message if network fails. */
    async getFarmerHome(draft) {
      let weather;
      try {
        weather = await fetchWeather(draft.districtName || "Nashik");
      } catch {
        weather = null;
      }
      const advisories = buildAdvisories(draft, weather);
      return { weather, advisories };
    },
    /* ---- S9 mandi comparison (server-side data.gov.in) ----
       Backend tries data.gov.in AGMARKNET; if unavailable, falls
       back to simulated mandi data so the screen always renders. */
    async compareMandis(draft, quintals) {
      try {
        const data = await request(
          `/mandi/prices?commodity=${encodeURIComponent(draft.crop || "")}&district=${encodeURIComponent(draft.districtName || "")}&state=${encodeURIComponent(draft.stateName || "")}`,
          { method: "GET" }
        );
        if (data.source === "data.govin" && data.records?.length) {
          const mandis2 = data.records.map((r, i) => ({
            id: `DG-${i}`,
            name: r.mandi || r.market || `Mandi ${i + 1}`,
            distanceKm: 20 + i * 15,
            operatingDays: "Mon-Sat"
          }));
          const prices2 = {
            current: data.records[0]?.price || 0,
            quotes: Object.fromEntries(data.records.map((r, i) => [`DG-${i}`, { modal: r.price || 0, trend7dPct: 0 }]))
          };
          return rankMandis({ mandis: mandis2, prices: prices2, quintals, freightPerKm: FREIGHT_PER_KM, feePct: MANDI_FEE_PCT });
        }
      } catch {
      }
      const mandis = getMandisForDistrict(draft.districtCode, draft.districtName ?? "");
      const prices = getPrices(draft.districtCode, draft.crop);
      return rankMandis({ mandis, prices, quintals, freightPerKm: FREIGHT_PER_KM, feePct: MANDI_FEE_PCT });
    },
    /* ---- S10 officer contact card ---- */
    getOfficerContact() {
      return { name: "A. Kulkarni", phone: "+919876543210", district: "Nashik" };
    },
    /* ---- S10 visit request (local until backend persists) ---- */
    saveVisitRequest(payload, _token) {
      return request("/visits", { body: payload }).catch(() => {
        return { ok: true, message: "Request saved locally." };
      });
    },
    /* ---- officer caseload (from backend DB later; for now, demo seed) ---- */
    getOfficerCaseload(district) {
      return request(`/officer/caseload?district=${encodeURIComponent(district || "Nashik")}`, {
        method: "GET"
      }).catch(() => {
        return { list: [], counts: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, TOTAL: 0 } };
      });
    }
  };

  // D:/SIH26-TryHards/assets/js/repository/index.js
  var resolvedRepo = null;
  async function resolveRepository() {
    if (resolvedRepo)
      return resolvedRepo;
    try {
      const up = await apiRepository.ping();
      resolvedRepo = up ? apiRepository : demoRepository;
    } catch {
      resolvedRepo = demoRepository;
    }
    return resolvedRepo;
  }
  var repository = demoRepository;
  var authPromise = null;
  function getAuth() {
    if (!authPromise) {
      authPromise = resolveRepository();
    }
    return authPromise;
  }

  // D:/SIH26-TryHards/assets/js/router.js
  var routes = /* @__PURE__ */ new Map();
  var fallbackRoute = "welcome";
  function register(name, handler) {
    routes.set(name, handler);
  }
  function go(name) {
    const target = `#/${name}`;
    if (location.hash === target) {
      handle();
    } else {
      location.hash = target;
    }
  }
  function start(fallback) {
    fallbackRoute = fallback;
    window.addEventListener("hashchange", handle);
    handle();
  }
  function currentRoute() {
    return location.hash.replace(/^#\//, "") || fallbackRoute;
  }
  function handle() {
    const name = currentRoute();
    const handler = routes.get(name) ?? routes.get(fallbackRoute);
    if (handler)
      handler(name);
  }

  // D:/SIH26-TryHards/assets/js/components/select.js
  var CHEVRON = `<svg class="select__chevron" width="16" height="16" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;
  var CHECK = `<span class="select__check" aria-hidden="true">\u2713</span>`;
  function createSelect({
    placeholder = "",
    options = [],
    value = "",
    disabled = false,
    searchable = false,
    searchPlaceholder = "",
    labelledBy = null,
    onChange = null
  }) {
    const root = document.createElement("div");
    root.className = "select";
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    if (labelledBy)
      trigger.setAttribute("aria-labelledby", labelledBy);
    if (disabled)
      trigger.disabled = true;
    const valueLabel = document.createElement("span");
    valueLabel.className = "select__value";
    trigger.append(valueLabel);
    trigger.insertAdjacentHTML("beforeend", CHEVRON);
    const popover = document.createElement("div");
    popover.className = "select-popover";
    popover.hidden = true;
    const search = document.createElement("input");
    search.type = "text";
    search.className = "select-search";
    search.placeholder = searchPlaceholder;
    if (searchable)
      popover.append(search);
    const empty = document.createElement("div");
    empty.className = "select-empty";
    empty.hidden = true;
    let currentOptions = [];
    let currentValue = "";
    let currentPlaceholder = placeholder;
    let emptyLabel = "No matches";
    let activeIndex = -1;
    function labelFor(v) {
      return currentOptions.find((o) => o.value === v)?.label ?? "";
    }
    function paintTrigger() {
      const label = labelFor(currentValue);
      valueLabel.textContent = label || currentPlaceholder;
      trigger.classList.toggle("is-placeholder", !label);
    }
    function buildList() {
      popover.querySelectorAll(".select-option").forEach((n) => n.remove());
      activeIndex = -1;
      currentOptions.forEach((opt) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "select-option";
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", String(opt.value === currentValue));
        item.dataset.value = opt.value;
        item.innerHTML = `<span class="select-option__label"></span>${CHECK}`;
        item.querySelector(".select-option__label").textContent = opt.label;
        item.addEventListener("click", () => choose(opt.value));
        item.addEventListener("mouseenter", () => {
          const idx = visibleItems().indexOf(item);
          if (idx >= 0) {
            activeIndex = idx;
            paintActive();
          }
        });
        popover.append(item);
      });
    }
    function paintActive() {
      const items = visibleItems();
      items.forEach((el2, i) => el2.classList.toggle("is-active", i === activeIndex));
      const el = items[activeIndex];
      if (!el)
        return;
      if (el.offsetTop < popover.scrollTop)
        popover.scrollTop = el.offsetTop - 6;
      else if (el.offsetTop + el.offsetHeight > popover.scrollTop + popover.clientHeight) {
        popover.scrollTop = el.offsetTop + el.offsetHeight - popover.clientHeight + 6;
      }
    }
    function visibleItems() {
      return [...popover.querySelectorAll(".select-option:not([hidden])")];
    }
    function open() {
      if (trigger.disabled)
        return;
      popover.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      if (searchable) {
        search.value = "";
        filter("");
        search.focus();
      }
      const items = visibleItems();
      activeIndex = items.findIndex((el) => el.getAttribute("aria-selected") === "true");
      paintActive();
    }
    function close() {
      popover.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus({ preventScroll: true });
    }
    function choose(v) {
      const changed = v !== currentValue;
      currentValue = v;
      paintTrigger();
      buildList();
      close();
      if (changed)
        onChange?.(v);
    }
    function setOptions(next) {
      currentOptions = next;
      if (currentValue && !currentOptions.some((o) => o.value === currentValue)) {
        currentValue = "";
      }
      buildList();
      paintTrigger();
    }
    function setValue(v) {
      currentValue = currentOptions.some((o) => o.value === v) ? v : "";
      paintTrigger();
      buildList();
    }
    function setPlaceholder(p) {
      currentPlaceholder = p;
      paintTrigger();
    }
    function setEmptyLabel(label) {
      emptyLabel = label;
    }
    function setSearchPlaceholder(p) {
      search.placeholder = p;
    }
    function setDisabled(b) {
      trigger.disabled = b;
      if (b)
        close();
    }
    trigger.addEventListener("click", () => popover.hidden ? open() : close());
    trigger.addEventListener("keydown", (e) => {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        open();
      }
    });
    function move(delta) {
      const items = visibleItems();
      if (!items.length)
        return;
      activeIndex = (activeIndex + delta + items.length) % items.length;
      paintActive();
    }
    popover.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        move(1);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        move(-1);
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        activeIndex = 0;
        paintActive();
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        activeIndex = visibleItems().length - 1;
        paintActive();
        return;
      }
      if (e.key === "Enter") {
        if (e.target.closest?.(".select-option"))
          return;
        e.preventDefault();
        const item = visibleItems()[activeIndex];
        if (item)
          choose(item.dataset.value);
      }
    });
    if (!searchable) {
      let buffer = "";
      let timer = null;
      popover.addEventListener("keydown", (e) => {
        if (e.key.length !== 1 || e.ctrlKey || e.metaKey)
          return;
        buffer += e.key.toLowerCase();
        clearTimeout(timer);
        timer = setTimeout(() => {
          buffer = "";
        }, 400);
        const items = visibleItems();
        const hit = items.findIndex((el) => el.textContent.trim().toLowerCase().startsWith(buffer));
        if (hit >= 0) {
          activeIndex = hit;
          paintActive();
        }
      });
    }
    function filter(query) {
      const q = query.trim().toLowerCase();
      let shown = 0;
      popover.querySelectorAll(".select-option").forEach((el) => {
        const show = !q || el.textContent.trim().toLowerCase().includes(q);
        el.hidden = !show;
        if (show)
          shown += 1;
      });
      empty.textContent = emptyLabel;
      empty.hidden = shown > 0;
      activeIndex = shown ? 0 : -1;
      paintActive();
    }
    if (searchable) {
      search.addEventListener("input", () => filter(search.value));
      search.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          move(1);
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          move(-1);
        }
      });
    }
    document.addEventListener("click", (e) => {
      if (!popover.hidden && !root.contains(e.target))
        close();
    });
    root.append(trigger, popover);
    if (searchable)
      popover.append(empty);
    currentOptions = options;
    currentValue = value;
    buildList();
    paintTrigger();
    return {
      el: root,
      getValue: () => currentValue,
      setOptions,
      setValue,
      setPlaceholder,
      setEmptyLabel,
      setSearchPlaceholder,
      setDisabled
    };
  }

  // D:/SIH26-TryHards/assets/js/services/sarvam.js
  var ENDPOINT = "https://api.sarvam.ai/translate";
  function sarvamEnabled() {
    return Boolean(SARVAM_API_KEY);
  }
  function cacheFor(locale) {
    const cache = getTranslationCache();
    return cache[locale] ?? {};
  }
  function storeInCache(locale, pairs) {
    const cache = getTranslationCache();
    cache[locale] = { ...cache[locale] ?? {}, ...pairs };
    saveTranslationCache(cache);
  }
  async function translateOne(text, locale) {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": SARVAM_API_KEY
      },
      body: JSON.stringify({
        input: text,
        source_language_code: "en-IN",
        target_language_code: locale,
        mode: "formal"
      })
    });
    if (!response.ok)
      throw new Error(`sarvam ${response.status}`);
    const data = await response.json();
    const out = data.translated_text ?? data.output ?? null;
    if (!out)
      throw new Error("sarvam: empty response");
    return out;
  }
  async function translateNames(texts, locale) {
    const unique = [...new Set(texts.filter(Boolean))];
    if (!sarvamEnabled() || locale === "en-IN" || unique.length === 0)
      return {};
    const cached = cacheFor(locale);
    const result = {};
    const pending = [];
    unique.forEach((text) => {
      if (cached[text])
        result[text] = cached[text];
      else
        pending.push(text);
    });
    for (const text of pending) {
      try {
        const translated = await translateOne(text, locale);
        result[text] = translated;
      } catch {
      }
    }
    if (Object.keys(result).length)
      storeInCache(locale, result);
    return result;
  }

  // D:/SIH26-TryHards/assets/js/voice.js
  var synth = typeof window !== "undefined" ? window.speechSynthesis : null;
  var cachedVoices = [];
  function loadVoices() {
    if (!synth)
      return [];
    cachedVoices = synth.getVoices();
    return cachedVoices;
  }
  if (synth) {
    loadVoices();
    synth.addEventListener?.("voiceschanged", loadVoices);
  }
  function voiceFor(bcp47) {
    const voices = cachedVoices.length ? cachedVoices : loadVoices();
    const base = bcp47.split("-")[0];
    return voices.find((v) => v.lang === bcp47) ?? voices.find((v) => v.lang?.replace("_", "-") === bcp47) ?? voices.find((v) => v.lang?.startsWith(base)) ?? null;
  }
  function speak(parts, bcp47, { onStart, onEnd } = {}) {
    if (!synth)
      return { ok: false, reason: "unsupported" };
    synth.cancel();
    const text = (Array.isArray(parts) ? parts : [parts]).filter(Boolean).join(". ");
    if (!text.trim())
      return { ok: false, reason: "empty" };
    const utter = new SpeechSynthesisUtterance(text);
    const voice = voiceFor(bcp47);
    if (voice)
      utter.voice = voice;
    utter.lang = bcp47;
    utter.rate = 0.92;
    utter.pitch = 1;
    utter.addEventListener("start", () => onStart?.());
    utter.addEventListener("end", () => onEnd?.());
    utter.addEventListener("error", () => onEnd?.());
    synth.speak(utter);
    return { ok: true, reason: voice ? "voice" : "fallback-voice" };
  }
  function stop() {
    synth?.cancel();
  }
  function isSpeaking() {
    return Boolean(synth?.speaking);
  }

  // D:/SIH26-TryHards/assets/js/icons.js
  var svg = (paths, s = 18, cls = "") => `<svg class="icon${cls ? " " + cls : ""}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  var speaker = (s = 18) => svg(
    `<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M18.5 5.5a9 9 0 010 13"/>`,
    s
  );
  var stopIcon = (s = 18) => svg(`<rect x="6" y="6" width="12" height="12" rx="2"/>`, s);
  var check = (s = 18) => svg(`<path d="M4.5 12.5l4.5 4.5L19.5 6.5"/>`, s);
  var checkCircle = (s = 18) => svg(
    `<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
    s
  );
  var alert = (s = 18) => svg(
    `<path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
    s
  );
  var alertTriangle = alert;
  var xCircle = (s = 18) => svg(
    `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`,
    s
  );
  var info = (s = 18) => svg(
    `<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`,
    s
  );
  var thermometer = (s = 18) => svg(
    `<path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>`,
    s
  );
  var droplet = (s = 18) => svg(
    `<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>`,
    s
  );
  var wind = (s = 18) => svg(
    `<path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>`,
    s
  );
  var sun = (s = 18) => svg(
    `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`,
    s
  );
  var gauge = (s = 18) => svg(
    `<path d="M12 15l3.5-3.5"/><circle cx="12" cy="12" r="9"/><path d="M3.6 9h3.8M16.6 9h3.8"/>`,
    s
  );
  var cloud = (s = 18) => svg(
    `<path d="M17.5 19H7a5 5 0 01-.4-9.96A6 6 0 0118 8.7 5 5 0 0117.5 19z"/>`,
    s
  );
  var sprayer = (s = 18) => svg(
    `<path d="M7 11V6a2 2 0 012-2h6a2 2 0 012 2v5"/><rect x="5" y="11" width="14" height="10" rx="2"/><line x1="12" y1="4" x2="12" y2="2"/><path d="M21 7l-2 2M21 11l-2-1M3 7l2 2M3 11l2-1"/>`,
    s
  );
  var sprout = (s = 18) => svg(
    `<path d="M7 20h10M12 20v-8M12 12c-3-4-8-4-8-4s0 6 5 6h3zM12 12c3-4 8-4 8-4s0 6-5 6h-3z"/>`,
    s
  );
  var clock = (s = 18) => svg(
    `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    s
  );
  var activity = (s = 18) => svg(
    `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
    s
  );
  var phone = (s = 18) => svg(
    `<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>`,
    s
  );
  var creditCard = (s = 18) => svg(
    `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>`,
    s
  );
  var trendDown = (s = 18) => svg(
    `<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>`,
    s
  );
  function weatherIcon(condition, s = 26) {
    if (condition === "clear") {
      return svg(
        `<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>`,
        s
      );
    }
    if (condition === "cloud") {
      return svg(`<path d="M17.5 18H7a4.5 4.5 0 01-.4-9A6 6 0 0118 8.7 4 4 0 0117.5 18z"/>`, s);
    }
    if (condition === "rain") {
      return svg(
        `<path d="M17.5 14H7a4.5 4.5 0 01-.4-9A6 6 0 0118 4.7 4 4 0 0117.5 14z"/><path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3"/>`,
        s
      );
    }
    return svg(
      `<path d="M17.5 13H7a4.5 4.5 0 01-.4-9A6 6 0 0118 3.7 4 4 0 0117.5 13z"/><path d="M12.5 13l-2.5 4h3l-2.5 4"/>`,
      s
    );
  }
  function sprayStatusIcon(status, s = 18) {
    if (status === "optimal")
      return checkCircle(s);
    if (status === "caution")
      return alertTriangle(s);
    return xCircle(s);
  }

  // D:/SIH26-TryHards/assets/js/loan.js
  function calculateEMI(principal, annualRate, months) {
    if (months <= 0 || principal <= 0)
      return 0;
    if (annualRate <= 0)
      return principal / months;
    const r = annualRate / 12 / 100;
    const emi = principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
    return emi;
  }
  function generateSchedule(principal, annualRate, months, startDate = /* @__PURE__ */ new Date()) {
    const emi = calculateEMI(principal, annualRate, months);
    let balance = principal;
    const schedule = [];
    const r = annualRate / 12 / 100;
    let currentDate = new Date(startDate);
    for (let i = 1; i <= months; i++) {
      currentDate.setMonth(currentDate.getMonth() + 1);
      const interest = balance * r;
      let principalPart = emi - interest;
      if (i === months) {
        principalPart = balance;
      }
      balance -= principalPart;
      if (balance < 0)
        balance = 0;
      schedule.push({
        month: i,
        date: currentDate.toISOString().slice(0, 10),
        emi,
        principal: principalPart,
        interest,
        balance
      });
    }
    return {
      emi,
      totalPayment: emi * months,
      totalInterest: emi * months - principal,
      schedule
    };
  }

  // D:/SIH26-TryHards/assets/js/farmer.js
  var _el = (id) => document.getElementById(id);
  var $ = (id) => {
    const el = _el(id);
    if (el)
      return el;
    return new Proxy({}, { get: () => "", set: () => true });
  };
  var languageGate = $("languageGate");
  var languageGrid = $("languageGrid");
  var voiceNote = $("voiceNote");
  var openPickerBtn = $("openLanguagePicker");
  var selectedLabel = $("selectedLanguageLabel");
  var locationError = $("locationError");
  var villageFreeField = $("villageFreeField");
  var villageFree = $("villageFree");
  var landError = $("landError");
  var landArea = $("landArea");
  var cropError = $("cropError");
  var varietyFreeField = $("varietyFreeField");
  var varietyFree = $("varietyFree");
  var sownDate = $("sownDate");
  var stageChip = $("stageChip");
  var authTabs = $("authTabs");
  var tabFarmer = $("tabFarmer");
  var tabOfficer = $("tabOfficer");
  var panelFarmer = $("panelFarmer");
  var panelOfficer = $("panelOfficer");
  var phoneInput = $("phoneInput");
  var otpField = $("otpField");
  var otpInput = $("otpInput");
  var demoOtpNote = $("demoOtpNote");
  var sendOtpBtn = $("sendOtpBtn");
  var resendBtn = $("resendBtn");
  var farmerError = $("farmerError");
  var staffInput = $("staffInput");
  var passwordInput = $("passwordInput");
  var officerError = $("officerError");
  var authError = $("authError");
  var authSuccess = $("authSuccess");
  var authSuccessActions = $("authSuccessActions");
  var authContinueBtn = $("authContinueBtn");
  var guestBtn = $("guestBtn");
  var signoutBtn = $("signoutBtn");
  var otpSent = false;
  var resendTimer = null;
  var homeAdvisories = [];
  var acked = false;
  var meCache = null;
  var mandiQty = 20;
  var selectedAdvisoryIndex = 0;
  var visitForm = $("visitForm");
  var visitDateInput = $("visitDateInput");
  var visitReasonInput = $("visitReasonInput");
  var visitError = $("visitError");
  var visitSuccess = $("visitSuccess");
  var officerVisitToggleBtn = $("officerVisitToggleBtn");
  var VIEWS = ["welcome", "location", "land", "crop", "review", "intent", "auth", "profile", "home", "advisory", "mandi", "help", "officer", "loan"];
  var OTHER = "__other__";
  var TREE = repository.getLocationTree();
  var LAND = repository.getLandOptions();
  var CROPS = repository.getCropCatalogue();
  var SEVERITY_ICON = { urgent: alert, warning: alert, watch: alert, info };
  var gateAdvances = false;
  function getLanguageByCode(code) {
    return LANGUAGES.find((l) => l.code === code) ?? null;
  }
  function speak2(language) {
    if (!("speechSynthesis" in window)) {
      voiceNote.textContent = t("gate.unavailable");
      return;
    }
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(language.nativeName);
    speech.lang = language.locale;
    speech.rate = 0.85;
    window.speechSynthesis.speak(speech);
    voiceNote.textContent = t("gate.preview", { language: language.nativeName });
  }
  function renderLanguageTiles() {
    languageGrid.replaceChildren();
    LANGUAGES.forEach((language) => {
      const tile = document.createElement("div");
      tile.className = "language-tile";
      const choose = document.createElement("button");
      choose.className = "language-tile__choice";
      choose.type = "button";
      choose.dataset.language = language.code;
      choose.setAttribute("aria-label", `Choose ${language.label}`);
      const name = document.createElement("span");
      name.className = "language-tile__name";
      name.textContent = language.nativeName;
      const listen = document.createElement("button");
      listen.className = "language-tile__listen";
      listen.type = "button";
      listen.innerHTML = speaker(16);
      listen.title = `Listen to ${language.label}`;
      listen.setAttribute("aria-label", `Listen to ${language.label}`);
      listen.addEventListener("click", () => speak2(language));
      choose.append(name);
      choose.addEventListener("click", () => selectLanguage(language, { advance: gateAdvances }));
      tile.append(choose, listen);
      languageGrid.append(tile);
    });
  }
  function selectLanguage(language, { advance }) {
    setLanguage(language.code);
    setLang(language.code);
    applyCopy();
    voiceNote.textContent = "";
    languageGate.hidden = true;
    openPickerBtn.hidden = false;
    openPickerBtn.focus();
    if (advance)
      go("location");
  }
  function applyCopy() {
    document.documentElement.lang = getLang();
    const lang = getLanguageByCode(getLang());
    selectedLabel.textContent = lang ? lang.nativeName : "English";
    $("taglineText").textContent = t("brand.tagline");
    $("languageTitle").textContent = t("gate.choose");
    $("languagePrompt").textContent = t("gate.prompt");
    $("welcomeStep").textContent = t("welcome.stepLabel");
    $("starterTitle").textContent = t("welcome.title");
    $("welcomeText").textContent = t("welcome.text");
    $("welcomeNext").textContent = t("welcome.next");
    $("startSetup").textContent = t("welcome.cta");
    $("locStepLabel").textContent = t("loc.stepLabel");
    $("locTitle").textContent = t("loc.title");
    $("locHelp").textContent = t("loc.help");
    $("lblState").textContent = t("loc.state");
    $("lblDistrict").textContent = t("loc.district");
    $("lblVillage").textContent = t("loc.village");
    $("lblVillageFree").textContent = t("loc.village");
    villageFree.placeholder = t("loc.villageFreePh");
    $("locBack").textContent = t("loc.back");
    $("locContinue").textContent = t("loc.continue");
    $("landStepLabel").textContent = t("land.stepLabel");
    $("landTitle").textContent = t("land.title");
    $("landHelp").textContent = t("land.help");
    $("lblArea").textContent = t("land.area");
    landArea.placeholder = t("land.areaPh");
    $("lblSoil").textContent = t("land.soil");
    $("lblIrrigation").textContent = t("land.irrigation");
    $("landBack").textContent = t("loc.back");
    $("landContinue").textContent = t("loc.continue");
    $("cropStepLabel").textContent = t("crop.stepLabel");
    $("cropTitle").textContent = t("crop.title");
    $("cropHelp").textContent = t("crop.help");
    $("lblCrop").textContent = t("crop.crop");
    $("lblVariety").textContent = t("crop.variety");
    $("lblVarietyFree").textContent = t("crop.variety");
    varietyFree.placeholder = t("crop.varietyPh");
    $("lblSown").textContent = t("crop.sown");
    $("cropBack").textContent = t("loc.back");
    $("cropContinue").textContent = t("loc.continue");
    $("s5StepLabel").textContent = t("s5.stepLabel");
    $("s5Title").textContent = t("s5.title");
    $("s5Help").textContent = t("s5.help");
    $("reviewBack").textContent = t("loc.back");
    $("reviewSave").textContent = t("s5.save");
    $("reviewSaved").textContent = t("s5.saved");
    $("intentStepLabel").textContent = t("intent.stepLabel");
    $("intentTitle").textContent = t("intent.title");
    $("intentWhy").textContent = t("intent.why");
    $("intentSummaryLabel").textContent = t("intent.summary");
    $("intentBenefitsTitle").textContent = t("intent.benefitsTitle");
    $("intentPrivacy").textContent = t("intent.privacy");
    $("consentText").textContent = t("intent.terms");
    $("intentContinue").textContent = t("intent.continue");
    $("intentChange").textContent = t("intent.change");
    $("intentBack").textContent = `\u2039 ${t("loc.back")}`;
    $("intentGuest").textContent = t("s6.guest");
    $("s6StepLabel").textContent = t("s6.stepLabel");
    $("s6Title").textContent = t("s6.title");
    $("s6Help").textContent = t("s6.help");
    tabFarmer.textContent = t("s6.tabFarmer");
    tabOfficer.textContent = t("s6.tabOfficer");
    $("lblPhone").textContent = t("s6.phone");
    phoneInput.placeholder = t("s6.phonePh");
    $("lblOtp").textContent = t("s6.otp");
    otpInput.placeholder = t("s6.otpPh");
    sendOtpBtn.textContent = otpSent ? t("s6.verify") : t("s6.sendCode");
    $("lblStaff").textContent = t("s6.staffId");
    $("lblPassword").textContent = t("s6.password");
    $("officerLoginBtn").textContent = t("s6.signIn");
    $("forgotNote").textContent = t("s6.forgot");
    guestBtn.textContent = t("s6.guest");
    signoutBtn.textContent = t("s6.signout");
    authContinueBtn.textContent = t("s6.continue");
    $("lblName").textContent = t("p.name");
    $("displayNameInput").placeholder = t("p.namePh");
    $("profileSaveBtn").textContent = t("p.save");
    $("advisoryTitle").textContent = t("home.title");
    $("advisoryDetailWhyLabel").textContent = t("adv.detail.why");
    $("advisoryDetailBack").textContent = `\u2039 ${t("loc.back")}`;
    $("guestNote").textContent = t("home.guestNote");
    paintListenButton(isSpeaking());
    $("ackBtn").innerHTML = acked ? `${check(18)}<span>${escapeHtml(t("home.acked"))}</span>` : `${check(18)}<span>${escapeHtml(t("home.ack"))}</span>`;
    $("ackBtn").disabled = acked;
    $("weatherDeviation").className = "deviation";
    $("mandiStepLabel").textContent = t("nav.mandi");
    $("mandiTitle").textContent = t("mandi.title");
    $("mandiHelp").textContent = t("mandi.help");
    $("lblMandiCrop").textContent = t("mandi.cropLabel");
    $("lblMandiQty").textContent = t("mandi.qtyLabel");
    $("mandiQtyInput").placeholder = t("mandi.qtyPh");
    $("mandiRecalcBtn").textContent = t("mandi.recalc");
    $("mandiResultsLabel").textContent = t("mandi.bestNetTag");
    $("helpStepLabel").textContent = t("nav.help");
    $("helpTitle").textContent = t("help.title");
    $("helpHelp").textContent = t("help.help");
    $("officerRole").textContent = t("help.officerRole");
    $("officerCallBtn").textContent = t("help.callBtn");
    $("officerVisitToggleBtn").textContent = t("help.visitBtn");
    $("visitFormTitle").textContent = t("help.visitTitle");
    $("lblVisitDate").textContent = t("help.visitDateLabel");
    $("lblVisitReason").textContent = t("help.visitReasonLabel");
    $("visitReasonInput").placeholder = t("help.visitReasonPh");
    $("visitSubmitBtn").textContent = t("help.visitSubmit");
    $("visitCancelBtn").textContent = t("help.visitCancel");
    $("helplinesTitle").textContent = t("help.helplinesTitle");
    $("kccName").textContent = t("help.kcc");
    $("disasterName").textContent = t("help.disasterLine");
    $("schemesTitle").textContent = t("help.schemesTitle");
    $("scheme1Title").textContent = t("help.scheme1Title");
    $("scheme1Desc").textContent = t("help.scheme1Desc");
    $("scheme2Title").textContent = t("help.scheme2Title");
    $("scheme2Desc").textContent = t("help.scheme2Desc");
    $("navHomeLabel").textContent = t("nav.home");
    $("navMandiLabel").textContent = t("nav.mandi");
    $("navHelpLabel").textContent = t("nav.help");
    $("navLoanLabel").textContent = t("nav.loan");
    $("navProfileLabel").textContent = t("nav.profile");
    $("loanTitle").textContent = t("loan.title");
    $("loanHelp").textContent = t("loan.help");
    $("lblLoanAmount").textContent = t("loan.amount");
    $("lblLoanTenure").textContent = t("loan.tenure");
    $("lblLoanRate").textContent = t("loan.rate");
    $("loanCalcBtn").textContent = t("loan.calculate");
    $("loanResultTitle").textContent = t("loan.resultTitle");
    $("lblLoanEmi").textContent = t("loan.emi");
    $("lblLoanTotalInterest").textContent = t("loan.totalInterest");
    $("lblLoanTotalPayment").textContent = t("loan.totalPayment");
    $("loanKccNote").textContent = t("loan.kccNote");
    $("profileFarmOverviewTitle").textContent = t("profile.title");
    $("lblProfileLoc").textContent = t("profile.locLabel");
    $("lblProfileLand").textContent = t("profile.landLabel");
    $("lblProfileCrop").textContent = t("profile.cropLabel");
    $("lblProfileLang").textContent = t("profile.langLabel");
    $("btnEditLoc").textContent = t("profile.change");
    $("btnEditLand").textContent = t("profile.change");
    $("btnEditCrop").textContent = t("profile.change");
    $("btnEditLang").textContent = t("profile.change");
    $("profileSignoutBtn").textContent = t("profile.signout");
    paintAuthState();
    if (getSession()) {
      renderHome().catch(() => {
      });
    }
    stateSelect.setPlaceholder(t("loc.ph.state"));
    districtSelect.setPlaceholder(t("loc.ph.district"));
    villageSelect.setPlaceholder(t("loc.ph.village"));
    stateSelect.setSearchPlaceholder(t("loc.search"));
    districtSelect.setSearchPlaceholder(t("loc.search"));
    stateSelect.setEmptyLabel(t("loc.noResults"));
    districtSelect.setEmptyLabel(t("loc.noResults"));
    soilSelect.setPlaceholder(t("ph.select"));
    irrigationSelect.setPlaceholder(t("ph.select"));
    cropSelect.setPlaceholder(t("ph.select"));
    varietySelect.setPlaceholder(t("ph.select"));
    refreshCascades();
    paintStage();
    translateGeo();
  }
  var stateSelect = createSelect({
    placeholder: t("loc.ph.state"),
    searchable: true,
    searchPlaceholder: t("loc.search"),
    labelledBy: "lblState",
    onChange: onStateChange
  });
  var districtSelect = createSelect({
    placeholder: t("loc.ph.district"),
    searchable: true,
    searchPlaceholder: t("loc.search"),
    labelledBy: "lblDistrict",
    onChange: onDistrictChange
  });
  var villageSelect = createSelect({
    placeholder: t("loc.ph.village"),
    labelledBy: "lblVillage",
    onChange: onVillageChange
  });
  function selectedState() {
    return TREE.find((s) => s.code === stateSelect.getValue()) ?? null;
  }
  function selectedDistrict() {
    return selectedState()?.districts.find((d) => d.code === districtSelect.getValue()) ?? null;
  }
  function villageOptions() {
    const district = selectedDistrict();
    const options = (district?.villages ?? []).map((v) => ({ value: v, label: v }));
    options.push({ value: OTHER, label: t("loc.other") });
    return options;
  }
  function refreshCascades() {
    const draft = getDraftProfile();
    stateSelect.setOptions(TREE.map((s) => ({ value: s.code, label: s.name })));
    if (draft?.stateCode)
      stateSelect.setValue(draft.stateCode);
    const state = selectedState();
    districtSelect.setOptions(
      state ? state.districts.map((d) => ({ value: d.code, label: d.name })) : []
    );
    districtSelect.setDisabled(!state);
    if (state && draft?.districtCode)
      districtSelect.setValue(draft.districtCode);
    villageSelect.setOptions(villageOptions());
    villageSelect.setDisabled(!selectedDistrict());
    if (draft?.village) {
      villageSelect.setValue(draft.villageCustom ? OTHER : draft.village);
      villageFree.value = draft.villageCustom ? draft.village : "";
    }
    villageFreeField.hidden = villageSelect.getValue() !== OTHER;
  }
  function onStateChange(code) {
    const state = TREE.find((s) => s.code === code);
    saveDraftProfile({
      stateCode: state?.code ?? null,
      stateName: state?.name ?? null,
      districtCode: null,
      districtName: null,
      village: null,
      villageCustom: false
    });
    refreshCascades();
    hideError(locationError);
    translateGeo();
  }
  function onDistrictChange() {
    const district = selectedDistrict();
    saveDraftProfile({
      districtCode: district?.code ?? null,
      districtName: district?.name ?? null,
      village: null,
      villageCustom: false
    });
    refreshCascades();
    hideError(locationError);
    translateGeo();
  }
  function onVillageChange(value) {
    const custom = value === OTHER;
    villageFreeField.hidden = !custom;
    if (custom) {
      villageFree.focus();
      saveDraftProfile({ village: villageFree.value.trim() || null, villageCustom: true });
    } else {
      villageFree.value = "";
      saveDraftProfile({ village: value || null, villageCustom: false });
    }
    hideError(locationError);
  }
  function onFreeVillageInput() {
    saveDraftProfile({ village: villageFree.value.trim() || null, villageCustom: true });
  }
  function showError(node, fieldKey) {
    node.textContent = t("err.required", { field: t(fieldKey) });
    node.hidden = false;
  }
  function showErrorText(node, key, params) {
    node.textContent = t(key, params);
    node.hidden = false;
  }
  function hideError(node) {
    node.hidden = true;
  }
  function onSubmitLocation(event) {
    event.preventDefault();
    const custom = villageSelect.getValue() === OTHER;
    const village = custom ? villageFree.value.trim() : villageSelect.getValue();
    let missing = null;
    if (!stateSelect.getValue())
      missing = "loc.state";
    else if (!districtSelect.getValue())
      missing = "loc.district";
    else if (!village)
      missing = "loc.village";
    if (missing) {
      showError(locationError, missing);
      return;
    }
    const state = selectedState();
    const district = selectedDistrict();
    saveDraftProfile({
      stateCode: state.code,
      stateName: state.name,
      districtCode: district.code,
      districtName: district.name,
      village,
      villageCustom: custom
    });
    hideError(locationError);
    go("land");
  }
  var soilSelect = createSelect({
    placeholder: t("ph.select"),
    labelledBy: "lblSoil",
    onChange: () => {
      saveLand();
      hideError(landError);
    }
  });
  var irrigationSelect = createSelect({
    placeholder: t("ph.select"),
    labelledBy: "lblIrrigation",
    onChange: () => {
      saveLand();
      hideError(landError);
    }
  });
  function refreshLand() {
    const draft = getDraftProfile();
    soilSelect.setOptions(LAND.soils.map((s) => ({ value: s.value, label: t(s.key) })));
    irrigationSelect.setOptions(LAND.irrigation.map((i) => ({ value: i.value, label: t(i.key) })));
    if (draft?.soilType)
      soilSelect.setValue(draft.soilType);
    if (draft?.irrigation)
      irrigationSelect.setValue(draft.irrigation);
    if (draft?.areaAcres)
      landArea.value = draft.areaAcres;
  }
  function saveLand() {
    const area = parseFloat(landArea.value);
    saveDraftProfile({
      areaAcres: Number.isFinite(area) && area > 0 ? area : null,
      soilType: soilSelect.getValue() || null,
      irrigation: irrigationSelect.getValue() || null
    });
  }
  function onSubmitLand(event) {
    event.preventDefault();
    saveLand();
    const area = parseFloat(landArea.value);
    if (!Number.isFinite(area) || area <= 0) {
      showErrorText(landError, "err.area");
      return;
    }
    if (!soilSelect.getValue()) {
      showError(landError, "land.soil");
      return;
    }
    if (!irrigationSelect.getValue()) {
      showError(landError, "land.irrigation");
      return;
    }
    hideError(landError);
    go("crop");
  }
  var cropSelect = createSelect({
    placeholder: t("ph.select"),
    labelledBy: "lblCrop",
    onChange: onCropChange
  });
  var varietySelect = createSelect({
    placeholder: t("ph.select"),
    labelledBy: "lblVariety",
    onChange: onVarietyChange
  });
  function selectedCrop() {
    return CROPS.find((c) => c.value === cropSelect.getValue()) ?? null;
  }
  function refreshCrop() {
    const draft = getDraftProfile();
    cropSelect.setOptions(CROPS.map((c) => ({ value: c.value, label: t(c.key) })));
    if (draft?.crop)
      cropSelect.setValue(draft.crop);
    const crop = selectedCrop();
    const options = crop ? crop.varieties.map((v) => ({ value: v, label: v })) : [];
    options.push({ value: OTHER, label: t("crop.other") });
    varietySelect.setOptions(options);
    varietySelect.setDisabled(!crop);
    if (draft?.variety) {
      varietySelect.setValue(draft.varietyCustom ? OTHER : draft.variety);
      varietyFree.value = draft.varietyCustom ? draft.variety : "";
    }
    varietyFreeField.hidden = varietySelect.getValue() !== OTHER;
    if (draft?.sownOn)
      sownDate.value = draft.sownOn;
  }
  function onCropChange() {
    saveDraftProfile({
      crop: cropSelect.getValue() || null,
      variety: null,
      varietyCustom: false
    });
    refreshCrop();
    hideError(cropError);
    paintStage();
  }
  function onVarietyChange(value) {
    const custom = value === OTHER;
    varietyFreeField.hidden = !custom;
    if (custom) {
      varietyFree.focus();
      saveDraftProfile({ variety: varietyFree.value.trim() || null, varietyCustom: true });
    } else {
      varietyFree.value = "";
      saveDraftProfile({ variety: value || null, varietyCustom: false });
    }
    hideError(cropError);
  }
  function onFreeVarietyInput() {
    saveDraftProfile({ variety: varietyFree.value.trim() || null, varietyCustom: true });
  }
  function onSownChange() {
    saveCropStage();
    hideError(cropError);
    paintStage();
  }
  function saveCropStage() {
    const crop = cropSelect.getValue() || null;
    const sown = sownDate.value || null;
    let stage = null;
    let expectedHarvest = null;
    let stageDays = null;
    if (crop && sown) {
      const derived = calculateStage(sown, crop);
      if (/* @__PURE__ */ new Date(`${sown}T00:00:00`) <= /* @__PURE__ */ new Date()) {
        stage = derived.stage;
        expectedHarvest = derived.expectedHarvest;
        stageDays = derived.daysSinceSowing;
      }
    }
    const custom = varietySelect.getValue() === OTHER;
    saveDraftProfile({
      crop,
      variety: custom ? varietyFree.value.trim() || null : varietySelect.getValue() || null,
      varietyCustom: custom,
      sownOn: sown,
      growthStage: stage,
      expectedHarvest,
      stageDays
    });
  }
  function paintStage() {
    const draft = getDraftProfile();
    if (!draft?.crop || !draft?.sownOn || !draft?.growthStage) {
      stageChip.hidden = true;
      return;
    }
    stageChip.textContent = t("crop.stageNow", {
      crop: t(`crop.${draft.crop}`),
      stage: t(`stage.${draft.growthStage}`)
    });
    stageChip.hidden = false;
  }
  function onSubmitCrop(event) {
    event.preventDefault();
    saveCropStage();
    const draft = getDraftProfile();
    const todayISO = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    if (!draft.crop) {
      showError(cropError, "crop.crop");
      return;
    }
    if (!draft.variety) {
      showError(cropError, "crop.variety");
      return;
    }
    if (!draft.sownOn) {
      showError(cropError, "crop.sown");
      return;
    }
    if (draft.sownOn > todayISO) {
      showErrorText(cropError, "err.sown");
      return;
    }
    hideError(cropError);
    go("review");
  }
  function buildReview() {
    const d = getDraftProfile();
    const rows = $("reviewRows");
    rows.replaceChildren();
    if (!locationComplete(d) || !landComplete(d) || !cropComplete(d))
      return;
    const locale = getLanguageByCode(getLang())?.locale ?? "en-IN";
    const rowsDef = [
      {
        label: t("s5.locLabel"),
        value: `${d.village} \xB7 ${d.districtName} \xB7 ${d.stateName}`,
        go: "location"
      },
      {
        label: t("s5.landLabel"),
        value: [
          t("land.acres", { acres: d.areaAcres }),
          t(`soil.${d.soilType}`),
          t(`irrig.${d.irrigation}`)
        ].join(" \xB7 "),
        go: "land"
      },
      {
        label: t("s5.cropLabel"),
        value: [
          t(`crop.${d.crop}`),
          d.variety,
          (/* @__PURE__ */ new Date(`${d.sownOn}T00:00:00`)).toLocaleDateString(locale),
          t(`stage.${d.growthStage}`)
        ].join(" \xB7 "),
        go: "crop"
      }
    ];
    rowsDef.forEach((row) => {
      const el = document.createElement("div");
      el.className = "review-row";
      const meta = document.createElement("div");
      meta.className = "review-row__meta";
      const label = document.createElement("div");
      label.className = "review-row__label";
      label.textContent = row.label;
      const value = document.createElement("div");
      value.className = "review-row__value";
      value.textContent = row.value;
      meta.append(label, value);
      const change = document.createElement("button");
      change.type = "button";
      change.className = "btn btn--outline";
      change.textContent = t("s5.change");
      change.addEventListener("click", () => go(row.go));
      el.append(meta, change);
      rows.append(el);
    });
  }
  function onSaveReview() {
    saveDraftProfile({ completed: true });
    go("intent");
  }
  function buildIntentSummary() {
    const d = getDraftProfile();
    const rows = $("intentSummary");
    rows.replaceChildren();
    if (!locationComplete(d) || !landComplete(d) || !cropComplete(d))
      return;
    const locale = getLanguageByCode(getLang())?.locale ?? "en-IN";
    const rowsDef = [
      {
        label: t("s5.locLabel"),
        value: `${d.village} \xB7 ${d.districtName}`
      },
      {
        label: t("s5.landLabel"),
        value: `${t("land.acres", { acres: d.areaAcres })} \xB7 ${t(`irrig.${d.irrigation}`)}`
      },
      {
        label: t("s5.cropLabel"),
        value: `${t(`crop.${d.crop}`)} \xB7 ${d.variety} \xB7 ${(/* @__PURE__ */ new Date(`${d.sownOn}T00:00:00`)).toLocaleDateString(locale)}`
      }
    ];
    rowsDef.forEach((row) => {
      const el = document.createElement("div");
      el.className = "review-row";
      const meta = document.createElement("div");
      meta.className = "review-row__meta";
      const label = document.createElement("div");
      label.className = "review-row__label";
      label.textContent = row.label;
      const value = document.createElement("div");
      value.className = "review-row__value";
      value.textContent = row.value;
      meta.append(label, value);
      el.append(meta);
      rows.append(el);
    });
  }
  function renderIntent() {
    buildIntentSummary();
    $("intentBenefits").innerHTML = ["intent.b1", "intent.b2", "intent.b3"].map((key) => `<li>${check(16)}<span>${escapeHtml(t(key))}</span></li>`).join("");
    const accepted = getDraftProfile()?.consent?.accepted === true && getDraftProfile()?.consent?.version === 1;
    $("consentCheck").checked = accepted;
    $("intentContinue").disabled = !accepted;
  }
  function onConsentChange() {
    const accepted = $("consentCheck").checked;
    saveDraftProfile({
      consent: accepted ? { version: 1, accepted: true, acceptedAt: (/* @__PURE__ */ new Date()).toISOString() } : { version: 1, accepted: false }
    });
    $("intentContinue").disabled = !accepted;
  }
  var AUTH_ERR_KEYS = /* @__PURE__ */ new Set([
    "INVALID_OTP",
    "OTP_EXPIRED",
    "TOO_MANY_ATTEMPTS",
    "RATE_LIMITED",
    "INVALID_CREDENTIALS",
    "NETWORK",
    "VALIDATION",
    "TOKEN_EXPIRED",
    "TOKEN_INVALID",
    "NO_TOKEN",
    "NO_ACCOUNT"
  ]);
  function authErrorKey(code) {
    return AUTH_ERR_KEYS.has(code) ? `err.auth.${code}` : "err.auth.NETWORK";
  }
  function setAuthTab(which) {
    const farmer = which === "farmer";
    tabFarmer.setAttribute("aria-selected", String(farmer));
    tabOfficer.setAttribute("aria-selected", String(!farmer));
    panelFarmer.hidden = !farmer;
    panelOfficer.hidden = farmer;
  }
  function paintAuthState() {
    const session = getSession();
    const signedIn = Boolean(session?.role && session.role !== "guest");
    const guest = session?.role === "guest";
    authTabs.hidden = signedIn || guest;
    panelFarmer.hidden = !farmerTabActive() || signedIn || guest;
    panelOfficer.hidden = farmerTabActive() || signedIn || guest;
    guestBtn.hidden = signedIn || guest;
    signoutBtn.hidden = !(signedIn || guest);
    authSuccessActions.hidden = !(signedIn || guest);
    if (signedIn) {
      const who = session.role === "officer" ? session.name ?? session.id : session.name ?? session.masked ?? `\u2022\u2022\u2022 ${(session.phone ?? "").slice(-3)}`;
      authSuccess.hidden = false;
      authSuccess.classList.remove("form-error");
      authSuccess.textContent = t("s6.signedInAs", { who });
    } else if (guest) {
      authSuccess.hidden = false;
      authSuccess.textContent = t("s6.successGuest");
    } else {
      authSuccess.hidden = true;
    }
  }
  function farmerTabActive() {
    return tabFarmer.getAttribute("aria-selected") === "true";
  }
  function showAuthSuccess(key, params) {
    authSuccess.textContent = t(key, params);
    authSuccess.hidden = false;
    authSuccessActions.hidden = false;
  }
  function startResendCountdown() {
    let seconds = 30;
    resendBtn.hidden = false;
    resendBtn.disabled = true;
    clearInterval(resendTimer);
    resendTimer = setInterval(() => {
      seconds -= 1;
      if (seconds <= 0) {
        clearInterval(resendTimer);
        resendBtn.disabled = false;
        resendBtn.textContent = t("s6.sendCode");
      } else {
        resendBtn.textContent = t("s6.resendIn", { seconds });
      }
    }, 1e3);
  }
  async function onFarmerSubmit(event) {
    event.preventDefault();
    hideError(farmerError);
    const phone2 = phoneInput.value.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(phone2)) {
      showErrorText(farmerError, "err.auth.phone");
      return;
    }
    const auth = await getAuth();
    if (!otpSent) {
      sendOtpBtn.disabled = true;
      try {
        const res = await auth.requestOtp(phone2);
        otpSent = true;
        otpField.hidden = false;
        otpInput.focus();
        sendOtpBtn.textContent = t("s6.verify");
        startResendCountdown();
        if (res?.dev_code) {
          demoOtpNote.textContent = t("s6.demoOtp", { code: res.dev_code });
          demoOtpNote.hidden = false;
        }
      } catch (e) {
        showErrorText(farmerError, authErrorKey(e.code));
      } finally {
        sendOtpBtn.disabled = false;
      }
      return;
    }
    const otp = otpInput.value.trim();
    if (!/^\d{6}$/.test(otp)) {
      showErrorText(farmerError, "err.auth.otpShape");
      return;
    }
    sendOtpBtn.disabled = true;
    try {
      const res = await auth.verifyOtp(phone2, otp);
      saveSession({
        token: res.token,
        role: "farmer",
        phone: phone2,
        masked: res.farmer.masked,
        name: null
      });
      clearInterval(resendTimer);
      if (res.farmer.new_account || !res.farmer.has_profile) {
        go("profile");
      } else {
        await recoverAccount();
        go("home");
      }
    } catch (e) {
      showErrorText(farmerError, authErrorKey(e.code));
      if (e.code === "OTP_EXPIRED" || e.code === "TOO_MANY_ATTEMPTS") {
        otpSent = false;
        otpField.hidden = true;
        demoOtpNote.hidden = true;
        sendOtpBtn.textContent = t("s6.sendCode");
      }
    } finally {
      sendOtpBtn.disabled = false;
    }
  }
  async function onResend() {
    if (resendBtn.disabled)
      return;
    hideError(farmerError);
    const phone2 = phoneInput.value.replace(/\D/g, "");
    const auth = await getAuth();
    resendBtn.disabled = true;
    try {
      const res = await auth.requestOtp(phone2);
      if (res?.dev_code) {
        demoOtpNote.textContent = t("s6.demoOtp", { code: res.dev_code });
        demoOtpNote.hidden = false;
      }
      startResendCountdown();
    } catch (e) {
      showErrorText(farmerError, authErrorKey(e.code));
      resendBtn.disabled = false;
    }
  }
  async function onOfficerSubmit(event) {
    event.preventDefault();
    hideError(officerError);
    const staffId = staffInput.value.trim();
    const password = passwordInput.value;
    if (!staffId || !password) {
      showErrorText(officerError, "err.auth.INVALID_CREDENTIALS");
      return;
    }
    const auth = await getAuth();
    $("officerLoginBtn").disabled = true;
    try {
      const res = await auth.loginOfficer(staffId, password);
      saveSession({
        token: res.token,
        role: "officer",
        id: res.officer.staff_id,
        name: res.officer.name
      });
      showAuthSuccess("s6.successOfficer", { name: res.officer.name });
      paintAuthState();
    } catch (e) {
      showErrorText(officerError, authErrorKey(e.code));
    } finally {
      $("officerLoginBtn").disabled = false;
    }
  }
  async function onGuest() {
    const auth = await getAuth();
    saveSession({ role: "guest" });
    showAuthSuccess("s6.successGuest");
    paintAuthState();
  }
  async function onSignout() {
    const session = getSession();
    const auth = await getAuth();
    if (session?.token)
      await auth.logout(session.token);
    clearSession();
    meCache = null;
    otpSent = false;
    otpField.hidden = true;
    demoOtpNote.hidden = true;
    sendOtpBtn.textContent = t("s6.sendCode");
    authSuccess.hidden = true;
    authSuccessActions.hidden = true;
    paintAuthState();
  }
  function profilePayload(displayName, draft) {
    return {
      display_name: displayName,
      language_code: getLang(),
      state_name: draft.stateName ?? null,
      district_name: draft.districtName ?? null,
      village_name: draft.village ?? null,
      area_acres: draft.areaAcres ?? null,
      soil_type: draft.soilType ?? null,
      irrigation_type: draft.irrigation ?? null,
      crop: draft.crop ?? null,
      variety: draft.variety ?? null,
      sown_on: draft.sownOn ?? null,
      growth_stage: draft.growthStage ?? null,
      expected_harvest: draft.expectedHarvest ?? null
    };
  }
  async function recoverAccount() {
    const auth = await getAuth();
    const session = getSession();
    if (!session?.token)
      return;
    try {
      const me = await auth.getMe(session.token);
      meCache = me;
      if (me.display_name) {
        saveSession({ ...session, name: me.display_name });
      }
      if (!me.farm) {
        const draft = getDraftProfile();
        if (draft && locationComplete(draft) && landComplete(draft) && cropComplete(draft)) {
          meCache = await auth.saveProfile(
            profilePayload(me.display_name ?? "", draft),
            session.token
          );
          saveDraftProfile({ attached: true });
        }
      }
    } catch {
    }
  }
  async function onSubmitProfile(event) {
    event.preventDefault();
    const errNode = $("profileError");
    hideError(errNode);
    const name = $("displayNameInput").value.trim();
    if (!name) {
      showErrorText(errNode, "err.auth.name");
      return;
    }
    const session = getSession();
    if (!session?.token) {
      go("auth");
      return;
    }
    $("profileSaveBtn").disabled = true;
    try {
      const auth = await getAuth();
      const draft = getDraftProfile() ?? {};
      meCache = await auth.saveProfile(profilePayload(name, draft), session.token);
      saveSession({ ...session, name });
      saveDraftProfile({ attached: true });
      go("home");
    } catch (e) {
      if (["TOKEN_EXPIRED", "TOKEN_INVALID", "NO_TOKEN"].includes(e.code)) {
        clearSession();
        meCache = null;
        go("auth");
        return;
      }
      showErrorText(errNode, authErrorKey(e.code));
    } finally {
      $("profileSaveBtn").disabled = false;
    }
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }
  function localeDay(dayIndex) {
    const locale = getLanguageByCode(getLang())?.locale ?? "en-IN";
    return new Date(2026, 7, 3 + dayIndex).toLocaleDateString(locale, { weekday: "short" });
  }
  function formatCompassDirection(deg) {
    if (typeof deg !== "number" || isNaN(deg))
      return "Calm";
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const idx = Math.round(deg / 22.5) % 16;
    return directions[idx];
  }
  function renderCropPhenology(draft) {
    const mount = $("cropPhenologyMount");
    if (!mount)
      return null;
    const crop = draft?.crop || "wheat";
    const sown = draft?.sownOn || draft?.sownOnISO || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const pheno = calculateCropPhenology(crop, sown);
    const STAGES_META = [
      { key: "sowing", name: "Sowing" },
      { key: "vegetative", name: "Vegetative" },
      { key: "flowering", name: "Flowering" },
      { key: "grain_fill", name: "Grain Fill" },
      { key: "maturity", name: "Maturity" },
      { key: "harvest_ready", name: "Harvest" }
    ];
    const daysRemaining = Math.max(0, pheno.totalDuration - pheno.daysElapsed);
    mount.innerHTML = `
    <div class="phenology-card">
      <div class="phenology-header">
        <div class="phenology-title-wrap">
          <span class="phenology-eyebrow">
            ${sprout(16)} Growth Tracker
          </span>
          <h2 class="phenology-crop-name">${escapeHtml(pheno.cropName)} &mdash; ${escapeHtml(pheno.stageName)}</h2>
          <p class="phenology-sub">Day ${pheno.daysElapsed} of ${pheno.totalDuration} &middot; Expected Harvest: ${pheno.expectedHarvestDate}</p>
        </div>
        <span class="phenology-badge">${pheno.progressPct}% Season Progress</span>
      </div>

      <div class="phenology-bar-container">
        <div class="phenology-bar-track">
          <div class="phenology-bar-fill" style="width: ${pheno.progressPct}%;"></div>
        </div>
        <div class="phenology-stepper">
          ${STAGES_META.map((s, idx) => {
      const isCompleted = idx < pheno.stageIndex;
      const isActive = idx === pheno.stageIndex;
      const cls = isActive ? "phenology-step--active" : isCompleted ? "phenology-step--completed" : "";
      return `
              <div class="phenology-step ${cls}">
                <div class="phenology-step__dot"></div>
                <span class="phenology-step__name">${escapeHtml(s.name)}</span>
              </div>
            `;
    }).join("")}
        </div>
      </div>

      <div class="phenology-meta-grid">
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Crop Factor (Kc)</span>
          <span class="phenology-meta-val">${pheno.kc.toFixed(2)}</span>
        </div>
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Thermal Units (GDD)</span>
          <span class="phenology-meta-val">${pheno.gddAccrued} &deg;C-days</span>
        </div>
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Stage Duration</span>
          <span class="phenology-meta-val">${pheno.daysInStage} / ${pheno.stageDuration} days</span>
        </div>
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Days to Harvest</span>
          <span class="phenology-meta-val">${daysRemaining} days</span>
        </div>
      </div>
    </div>
  `;
    return pheno;
  }
  function renderAgronomyTelemetry(weather, draft, pheno) {
    const mount = $("agronomyTelemetryMount");
    if (!mount)
      return;
    const current2 = weather.current || {};
    const temp = typeof current2.temperature_2m === "number" ? current2.temperature_2m : typeof current2.temperature === "number" ? current2.temperature : 28;
    const feelsLike = typeof current2.apparent_temperature === "number" ? current2.apparent_temperature : typeof current2.apparentTemperature === "number" ? current2.apparentTemperature : temp;
    const rh = typeof current2.relative_humidity_2m === "number" ? current2.relative_humidity_2m : typeof current2.humidity === "number" ? current2.humidity : 60;
    const windSpd = typeof current2.wind_speed_10m === "number" ? current2.wind_speed_10m : typeof current2.windSpeed === "number" ? current2.windSpeed : 8;
    const windDir = typeof current2.wind_direction_10m === "number" ? current2.wind_direction_10m : typeof current2.windDirection === "number" ? current2.windDirection : 0;
    const uv = typeof current2.uv_index === "number" ? current2.uv_index : typeof current2.uvIndex === "number" ? current2.uvIndex : 5;
    const pressure = typeof current2.surface_pressure === "number" ? current2.surface_pressure : typeof current2.surfacePressure === "number" ? current2.surfacePressure : 1012;
    const cloud2 = typeof current2.cloud_cover === "number" ? current2.cloud_cover : typeof current2.cloudCover === "number" ? current2.cloudCover : 20;
    let vwc = 28;
    if (typeof weather.soil?.currentMoistureVwc === "number") {
      vwc = weather.soil.currentMoistureVwc;
    } else if (typeof weather.soilMoisture === "string" || typeof weather.soilMoisture === "number") {
      const parsed = parseFloat(weather.soilMoisture);
      if (!isNaN(parsed)) {
        vwc = parsed <= 1 ? parsed * 100 : parsed;
      }
    }
    const hydration = classifySoilHydration2(vwc);
    const et0 = weather.daily?.et0 ?? weather.dailyEt0?.[0] ?? 4.2;
    const stageIdx = pheno?.stageIndex ?? 1;
    const area = parseFloat(draft?.areaAcres) || 1;
    const waterDemand = calculateCropWaterDemand(et0, draft?.crop || "wheat", stageIdx, area);
    const uvLevel = uv < 3 ? "Low" : uv < 6 ? "Moderate" : uv < 8 ? "High" : "Very High";
    mount.innerHTML = `
    <div class="telemetry-header">
      <span class="telemetry-eyebrow">
        ${gauge(16)} Live Weather
      </span>
    </div>
    <div class="telemetry-grid">
      <!-- 1. Temperature -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Temperature</span>
          <span class="telemetry-card__icon">${thermometer(18)}</span>
        </div>
        <div class="telemetry-card__val">${temp.toFixed(1)} &deg;C</div>
        <div class="telemetry-card__sub">Max ${weather.tempMaxC ?? 32} &deg;C &middot; Min ${weather.daily?.tempMin ?? 22} &deg;C</div>
      </div>

      <!-- 2. Apparent Temperature -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Feels Like</span>
          <span class="telemetry-card__icon">${thermometer(18)}</span>
        </div>
        <div class="telemetry-card__val">${feelsLike.toFixed(1)} &deg;C</div>
        <div class="telemetry-card__sub">Thermal Comfort Index</div>
      </div>

      <!-- 3. Soil Moisture (5-Tier Hydration) -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Soil Moisture</span>
          <span class="telemetry-card__icon">${droplet(18)}</span>
        </div>
        <div class="telemetry-card__val">${vwc.toFixed(1)}% VWC</div>
        <div class="telemetry-card__sub">
          <span class="tier-badge tier-badge--${hydration.tier}">${hydration.tier.toUpperCase()}</span>
        </div>
      </div>

      <!-- 4. ET0 & Crop Water Demand -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Evapotranspiration</span>
          <span class="telemetry-card__icon">${droplet(18)}</span>
        </div>
        <div class="telemetry-card__val">${et0.toFixed(1)} mm/day</div>
        <div class="telemetry-card__sub">${Math.round(waterDemand.litersPerAcre).toLocaleString("en-IN")} L/Acre Demand</div>
      </div>

      <!-- 5. Humidity -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Humidity</span>
          <span class="telemetry-card__icon">${droplet(18)}</span>
        </div>
        <div class="telemetry-card__val">${Math.round(rh)}%</div>
        <div class="telemetry-card__sub">Atmospheric Moisture</div>
      </div>

      <!-- 6. Wind Speed & Direction -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Wind Speed</span>
          <span class="telemetry-card__icon">${wind(18)}</span>
        </div>
        <div class="telemetry-card__val">${windSpd.toFixed(1)} km/h</div>
        <div class="telemetry-card__sub">${formatCompassDirection(windDir)} (${Math.round(windDir)}&deg;)</div>
      </div>

      <!-- 7. UV Index -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">UV Index</span>
          <span class="telemetry-card__icon">${sun(18)}</span>
        </div>
        <div class="telemetry-card__val">${uv.toFixed(1)}</div>
        <div class="telemetry-card__sub">${uvLevel} Solar Load</div>
      </div>

      <!-- 8. Surface Pressure -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Surface Pressure</span>
          <span class="telemetry-card__icon">${gauge(18)}</span>
        </div>
        <div class="telemetry-card__val">${Math.round(pressure)} hPa</div>
        <div class="telemetry-card__sub">Barometric Stability</div>
      </div>

      <!-- 9. Cloud Cover -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Cloud Cover</span>
          <span class="telemetry-card__icon">${cloud(18)}</span>
        </div>
        <div class="telemetry-card__val">${Math.round(cloud2)}%</div>
        <div class="telemetry-card__sub">Solar Radiation Flux</div>
      </div>
    </div>
  `;
  }
  function renderSprayWindow(weather) {
    const mount = $("sprayWindowMount");
    if (!mount)
      return;
    const hourlyOrDaily = weather.forecast7d || weather.forecast || [];
    const spray = evaluateSprayWindow(weather.current, hourlyOrDaily);
    const statusLabel = spray.status === "optimal" ? "Optimal Window" : spray.status === "caution" ? "Caution Window" : "Unsafe to Spray";
    const defaultSlots = spray.status === "optimal" ? [{ start: "06:00 AM", end: "09:30 AM", period: "Morning Calm" }, { start: "05:00 PM", end: "07:00 PM", period: "Dusk" }] : spray.status === "caution" ? [{ start: "06:00 AM", end: "08:00 AM", period: "Early Window Only" }] : [];
    const slots = spray.recommendedSlots && spray.recommendedSlots.length ? spray.recommendedSlots : defaultSlots;
    mount.innerHTML = `
    <div class="spray-card">
      <div class="spray-header">
        <div class="phenology-title-wrap">
          <span class="phenology-eyebrow">
            ${sprayer(16)} Safe to Spray
          </span>
          <h2 class="phenology-crop-name">Spray Conditions</h2>
        </div>
        <span class="spray-status-badge spray-status-badge--${spray.status}">
          ${sprayStatusIcon(spray.status, 14)} ${statusLabel}
        </span>
      </div>

      <div class="spray-reason-box">
        <span style="flex-shrink:0; margin-top:2px;">${info(16)}</span>
        <span>${escapeHtml(spray.reasonText || spray.reason)}</span>
      </div>

      <div class="spray-metrics-grid">
        <div class="spray-metric">
          <span class="spray-metric__label">Delta T (&Delta;T)</span>
          <span class="spray-metric__val">${spray.deltaT ?? "--"} &deg;C</span>
        </div>
        <div class="spray-metric">
          <span class="spray-metric__label">Wind Speed</span>
          <span class="spray-metric__val">${spray.params?.windSpeedKmH ?? "--"} km/h</span>
        </div>
        <div class="spray-metric">
          <span class="spray-metric__label">Rain Risk</span>
          <span class="spray-metric__val">${spray.params?.tomorrowRainMm ? spray.params.tomorrowRainMm + " mm forecast" : "0.0 mm"}</span>
        </div>
        <div class="spray-metric">
          <span class="spray-metric__label">Temperature &amp; RH</span>
          <span class="spray-metric__val">${spray.params?.tempC ?? "--"} &deg;C &middot; ${spray.params?.rhPct ?? "--"}%</span>
        </div>
      </div>

      <div class="spray-slots-wrap">
        <span class="spray-slots-label">Recommended Application Slots</span>
        <div class="spray-slots-list">
          ${slots.length ? slots.map((s) => `
            <span class="spray-slot-pill">
              ${clock(13)} ${s.start} - ${s.end} (${s.period})
            </span>
          `).join("") : `
            <span class="spray-slot-pill" style="border-color:hsl(var(--danger)/.3); color:hsl(var(--danger));">
              ${xCircle(13)} Application Suspended Due to Constraints
            </span>
          `}
        </div>
      </div>
    </div>
  `;
  }
  function renderTomorrowActionPlan(draft, weather, pheno) {
    const mount = $("tomorrowActionPlanMount");
    if (!mount)
      return;
    const tomorrowWeather = weather.forecast7d && weather.forecast7d[1] ? weather.forecast7d[1] : weather.forecast && weather.forecast[1] ? weather.forecast[1] : {};
    const plan = buildTomorrowActionPlan(draft, tomorrowWeather, pheno, weather.soil);
    mount.innerHTML = `
    <div class="action-plan-card">
      <div class="phenology-header">
        <div class="phenology-title-wrap">
          <span class="phenology-eyebrow">
            ${activity(16)} Tomorrow's Action Plan
          </span>
          <h2 class="phenology-crop-name">Daily Field Operations Directive</h2>
        </div>
      </div>

      <div class="action-plan-synopsis-banner">
        <span class="action-plan-synopsis-title">Meteorological Synopsis</span>
        <span class="action-plan-synopsis-text">${escapeHtml(plan.synopsis)}</span>
      </div>

      <div class="action-plan-grid">
        <div class="action-plan-directive-box">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="phenology-meta-label">Irrigation Directive</span>
            <span class="action-directive-badge action-directive-badge--${plan.irrigationDirective.action.toLowerCase()}">
              ${plan.irrigationDirective.action}
            </span>
          </div>
          <div class="action-directive-quant">
            ${Math.round(plan.irrigationDirective.quantityLitersPerAcre).toLocaleString("en-IN")} Liters / Acre
          </div>
          <div class="action-directive-rationale">
            ${escapeHtml(plan.irrigationDirective.rationale)}
          </div>
        </div>

        <div class="action-checklist-wrap">
          <span class="action-checklist-title">Operational Checklist</span>
          <ul class="action-checklist">
            ${plan.checklist.map((item) => `
              <li class="checklist-item">
                <span class="checklist-item__icon">${check(14)}</span>
                <span>${escapeHtml(item)}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
  }
  async function renderHome() {
    const draft = getDraftProfile() ?? {};
    const session = getSession();
    const eff = {
      ...draft,
      village: meCache?.farm?.village_name ?? meCache?.profile?.village_name ?? draft.village,
      districtName: meCache?.profile?.district_name ?? draft.districtName,
      stateName: meCache?.profile?.state_name ?? draft.stateName,
      crop: meCache?.crop_cycle?.crop ?? draft.crop,
      growthStage: meCache?.crop_cycle?.growth_stage ?? draft.growthStage
    };
    const repo = await getAuth();
    let weather, advisories;
    try {
      ({ weather, advisories } = await repo.getFarmerHome(eff));
    } catch (e) {
      console.warn("[home] getFarmerHome failed, using fallback:", e);
      weather = { forecast7d: [], tempMaxC: 0, humidityPct: 0, devPct: 0, current: {}, dailyEt0: [] };
      advisories = [{ severity: "info", titleKey: "adv.allClear.title", bodyKey: "adv.allClear.body", whyKey: "adv.allClear.why", params: {} }];
    }
    homeAdvisories = advisories;
    const masked = session?.masked ?? `\u2022\u2022\u2022 ${(session?.phone ?? "").slice(-3)}`;
    const name = session?.role === "officer" ? session.name ?? session.id : session?.role === "farmer" ? session.name ?? masked : "Guest";
    const isMasked = name.includes("\u2022");
    $("homeAvatar").textContent = isMasked ? name.match(/\d{3}$/)?.[0] ?? "\u2022\u2022\u2022" : (name || "?").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    $("homeTitle").textContent = t("home.hello", { name: name || "" });
    $("homeFarmLine").textContent = [eff.village, eff.districtName, eff.stateName].filter(Boolean).join(" \xB7 ");
    const guest = session?.role === "guest";
    $("guestNote").hidden = !guest;
    if (guest)
      $("guestNote").textContent = t("home.guestNote");
    const pheno = renderCropPhenology(eff);
    renderTomorrowActionPlan(eff, weather, pheno);
    renderAgronomyTelemetry(weather, eff, pheno);
    renderSprayWindow(weather);
    $("advisoryList").innerHTML = advisories.map((a, i) => {
      const iconFn = SEVERITY_ICON[a.severity] || info;
      return `
    <article class="advisory" data-severity="${a.severity}" data-index="${i}" role="button" tabindex="0">
      <span class="advisory__rail" aria-hidden="true"></span>
      <div class="advisory__body">
        <span class="advisory__tag">
          ${iconFn(13)}
          ${escapeHtml(t(`severity.${a.severity}`))}
        </span>
        <h3 class="advisory__title">${escapeHtml(t(a.titleKey, renderParams(a.params)))}</h3>
        <p class="advisory__text">${escapeHtml(t(a.bodyKey, renderParams(a.params)))}</p>
        <p class="advisory__why">${escapeHtml(t(a.whyKey, renderParams(a.params)))}</p>
      </div>
    </article>`;
    }).join("");
    $("advisoryList").querySelectorAll(".advisory").forEach((card) => {
      card.addEventListener("click", () => {
        selectedAdvisoryIndex = Number(card.dataset.index);
        go("advisory");
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectedAdvisoryIndex = Number(card.dataset.index);
          go("advisory");
        }
      });
    });
    paintListenButton(false);
    $("ackBtn").innerHTML = acked ? `${check(18)}<span>${escapeHtml(t("home.acked"))}</span>` : `${check(18)}<span>${escapeHtml(t("home.ack"))}</span>`;
    $("ackBtn").disabled = acked;
    $("weatherTitle").textContent = t("weather.next7");
    $("weatherStrip").innerHTML = weather.forecast7d.map((day) => `
    <div class="wtile">
      <div class="wtile__day">${escapeHtml(localeDay(day.dayIndex))}</div>
      <div class="wtile__icon" style="color:hsl(var(--sky))">${weatherIcon(day.condition, 26)}</div>
      <div class="wtile__rain">${day.rainMm} mm</div>
      <div class="wtile__temp">${day.tmax}\xB0 / ${day.tmin}\xB0</div>
    </div>`).join("");
    const dev = $("weatherDeviation");
    const key = weather.devPct <= -10 ? "weather.deficit" : weather.devPct >= 10 ? "weather.surplus" : "weather.normal";
    dev.className = "deviation" + (key === "weather.normal" ? " deviation--ok" : "");
    dev.innerHTML = `${key === "weather.normal" ? info(17) : alert(17)}
    <span>${escapeHtml(t(key, {
      district: draft.districtName ?? "",
      pct: Math.abs(weather.devPct)
    }))}</span>`;
  }
  function renderParams(params) {
    if (!params || params.dayIndex === void 0)
      return params;
    return { ...params, day: localeDay(params.dayIndex) };
  }
  function paintListenButton(speaking) {
    const btn = $("listenBtn");
    btn.dataset.speaking = String(speaking);
    btn.innerHTML = speaking ? `${stopIcon(18)}<span>${escapeHtml(t("home.stop"))}</span>` : `${speaker(18)}<span>${escapeHtml(t("home.listen"))}</span>`;
  }
  function onListen() {
    if (isSpeaking()) {
      stop();
      paintListenButton(false);
      return;
    }
    const locale = getLanguageByCode(getLang())?.locale ?? "en-IN";
    const parts = homeAdvisories.flatMap((a) => {
      const p = renderParams(a.params);
      return [t(a.titleKey, p), t(a.bodyKey, p)];
    });
    const result = speak(parts, locale, {
      onStart: () => paintListenButton(true),
      onEnd: () => paintListenButton(false)
    });
    const note = $("homeVoiceNote");
    if (!result.ok) {
      note.textContent = t("home.voiceUnavailable");
    } else {
      note.textContent = "";
    }
  }
  function onAcknowledge() {
    acked = true;
    $("ackBtn").innerHTML = `${check(18)}<span>${escapeHtml(t("home.acked"))}</span>`;
    $("ackBtn").disabled = true;
  }
  function renderAdvisoryDetail() {
    const advisories = homeAdvisories;
    const a = advisories[selectedAdvisoryIndex];
    if (!a) {
      go("home");
      return;
    }
    const p = renderParams(a.params);
    const isAcked = getAckedAdvisories().has(a.titleKey);
    $("advisoryDetailSeverity").innerHTML = `${(SEVERITY_ICON[a.severity] || info)(16)} ${escapeHtml(t(`severity.${a.severity}`))}`;
    $("advisoryDetailSeverity").dataset.severity = a.severity;
    $("advisoryDetailTitle").textContent = t(a.titleKey, p);
    $("advisoryDetailBody").textContent = t(a.bodyKey, p);
    $("advisoryDetailWhy").textContent = t(a.whyKey, p);
    const ackBtn = $("advisoryDetailAck");
    if (isAcked) {
      ackBtn.innerHTML = `${check(16)}<span>${escapeHtml(t("home.acked"))}</span>`;
      ackBtn.disabled = true;
    } else {
      ackBtn.innerHTML = `${check(16)}<span>${escapeHtml(t("home.ack"))}</span>`;
      ackBtn.disabled = false;
    }
    ackBtn.onclick = () => {
      ackAdvisory(a.titleKey);
      ackBtn.innerHTML = `${check(16)}<span>${escapeHtml(t("home.acked"))}</span>`;
      ackBtn.disabled = true;
    };
  }
  var geoToken = 0;
  function currentLabels() {
    const state = selectedState();
    const district = selectedDistrict();
    return [
      ...TREE.map((s) => s.name),
      ...state ? state.districts.map((d) => d.name) : [],
      ...district ? district.villages ?? [] : []
    ];
  }
  async function translateGeo() {
    const locale = SARVAM_LOCALES[getLang()];
    if (!sarvamEnabled() || !locale || locale === "en-IN")
      return;
    const token = ++geoToken;
    const map = await translateNames(currentLabels(), locale);
    if (token !== geoToken || !Object.keys(map).length)
      return;
    const tr = (label) => map[label] ?? label;
    stateSelect.setOptions(TREE.map((s) => ({ value: s.code, label: tr(s.name) })));
    stateSelect.setValue(stateSelect.getValue());
    const state = selectedState();
    if (state) {
      districtSelect.setOptions(state.districts.map((d) => ({ value: d.code, label: tr(d.name) })));
      districtSelect.setValue(districtSelect.getValue());
      const district = selectedDistrict();
      if (district) {
        villageSelect.setOptions([
          ...(district.villages ?? []).map((v) => ({ value: v, label: tr(v) })),
          { value: OTHER, label: t("loc.other") }
        ]);
        villageSelect.setValue(villageSelect.getValue());
      }
    }
  }
  async function renderMandi(overrideQty) {
    const draft = getDraftProfile() ?? {};
    const eff = {
      ...draft,
      districtCode: meCache?.profile?.district_code ?? draft.districtCode ?? "nashik",
      districtName: meCache?.profile?.district_name ?? draft.districtName ?? "Nashik",
      crop: meCache?.crop_cycle?.crop ?? draft.crop ?? "cotton"
    };
    const cropName = t(`crop.${eff.crop}`);
    $("mandiCropDisplay").textContent = cropName;
    if (overrideQty !== void 0) {
      mandiQty = overrideQty;
    } else if (!mandiQty) {
      mandiQty = Math.max(5, Math.round((Number(draft.areaAcres) || 3) * 6));
    }
    $("mandiQtyInput").value = mandiQty;
    const repo = await getAuth();
    const comparison = await repo.compareMandis(eff, mandiQty);
    const { rows, bestNet, inversion } = comparison;
    const invBox = $("mandiInversion");
    if (inversion) {
      invBox.hidden = false;
      invBox.textContent = t("mandi.inversion", {
        priceLeader: inversion.priceLeader,
        netLeader: inversion.netLeader,
        gap: inversion.gap.toLocaleString("en-IN")
      });
    } else {
      invBox.hidden = true;
    }
    $("mandiList").innerHTML = `
    <div class="mandi-table-wrapper">
      <table class="mandi-table">
        <thead>
          <tr>
            <th>APMC Mandi Yard & Location</th>
            <th>Today's Modal Rate</th>
            <th>Rate per Kg</th>
            <th>Daily Range (Min-Max)</th>
            <th>Day-over-Day Trend</th>
            <th>Govt MSP Status</th>
            <th>Arrival & Variety</th>
            <th>Take-Home Net</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((r) => {
      const isBest = r.isBestNet;
      const trendIcon = r.trend7dPct > 0 ? "-" : r.trend7dPct < 0 ? "-" : '"?';
      const trendColor = r.trend7dPct > 0 ? "hsl(120 40% 30%)" : r.trend7dPct < 0 ? "hsl(0 60% 40%)" : "hsl(var(--muted-foreground))";
      const trendBg = r.trend7dPct > 0 ? "hsl(120 40% 95%)" : r.trend7dPct < 0 ? "hsl(0 60% 95%)" : "#f8f9fa";
      const diffMsp = r.price - r.msp;
      const mspColor = diffMsp >= 0 ? "hsl(120 40% 30%)" : "hsl(0 60% 40%)";
      const mspBg = diffMsp >= 0 ? "hsl(120 40% 95%)" : "hsl(0 60% 95%)";
      const mspText = diffMsp >= 0 ? `+\u20B9${diffMsp} (Above MSP)` : `-\u20B9${Math.abs(diffMsp)} (Below MSP)`;
      return `
              <tr class="${isBest ? "best-net-row" : ""}">
                <td>
                  <div style="font-weight:700; color:hsl(var(--foreground)); font-size:13px;">${escapeHtml(r.name)}</div>
                  <div style="font-size:11px; color:hsl(var(--muted-foreground)); margin-top:2px;">
                    ${isBest ? `<span style="color:hsl(var(--primary)); font-weight:600;">${check(12)} Best Net (${r.distanceKm}km)</span>` : `${r.distanceKm} km away ^' ${r.operatingDays}`}
                  </div>
                </td>
                <td style="font-weight:800; font-size:14px;">\u20B9${r.price.toLocaleString("en-IN")}/Qtl</td>
                <td style="font-weight:600; color:hsl(var(--muted-foreground));">\u20B9${(r.price / 100).toFixed(1)}/kg</td>
                <td style="color:hsl(var(--muted-foreground));">\u20B9${r.min} - \u20B9${r.max}</td>
                <td>
                  <span style="display:inline-flex; align-items:center; gap:4px; padding:2px 6px; border-radius:4px; background:${trendBg}; color:${trendColor}; font-weight:700; font-size:11px;">
                    ${trendIcon} ${r.trend7dPct > 0 ? "+" : ""}${r.trend7dPct}%
                  </span>
                </td>
                <td>
                  <span style="display:inline-flex; align-items:center; padding:2px 6px; border-radius:4px; background:${mspBg}; color:${mspColor}; font-weight:700; font-size:11px;">
                    ${mspText}
                  </span>
                  <div style="font-size:10px; color:hsl(var(--muted-foreground)); margin-top:2px;">Govt MSP: \u20B9${r.msp}</div>
                </td>
                <td style="font-size:12px;">
                  <div style="font-weight:600;">${r.arrivalDate}</div>
                  <div style="color:hsl(var(--muted-foreground)); font-size:11px;">${r.variety}</div>
                </td>
                <td>
                  <div style="font-weight:800; font-size:14px; color:hsl(var(--primary));">\u20B9${r.net.toLocaleString("en-IN")}</div>
                  <div style="font-size:10px; color:hsl(var(--muted-foreground));">Total Net (${r.distanceKm}km)</div>
                </td>
              </tr>
            `;
    }).join("")}
        </tbody>
      </table>
    </div>
  `;
  }
  function onMandiQtyChange() {
    const val = parseFloat($("mandiQtyInput").value);
    if (Number.isFinite(val) && val > 0) {
      renderMandi(val);
    }
  }
  function renderHelp() {
    const officer = repository.getOfficerContact();
    const draft = getDraftProfile() ?? {};
    const district = meCache?.profile?.district_name ?? draft.districtName ?? officer.district;
    $("officerName").textContent = officer.name;
    $("officerJurisdiction").textContent = `${district} \xB7 Maharashtra`;
    $("officerCallBtn").href = `tel:${officer.phone}`;
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    visitDateInput.min = tomorrow.toISOString().slice(0, 10);
    if (!visitDateInput.value) {
      visitDateInput.value = tomorrow.toISOString().slice(0, 10);
    }
  }
  function onToggleVisitForm() {
    visitForm.hidden = !visitForm.hidden;
    visitSuccess.hidden = true;
    visitError.hidden = true;
    if (!visitForm.hidden) {
      visitDateInput.focus();
    }
  }
  function onVisitCancel() {
    visitForm.hidden = true;
    visitSuccess.hidden = true;
    visitError.hidden = true;
  }
  function onVisitSubmit(e) {
    e.preventDefault();
    const dateVal = visitDateInput.value;
    if (!dateVal) {
      visitError.textContent = t("err.required", { field: t("help.visitDateLabel") });
      visitError.hidden = false;
      return;
    }
    visitError.hidden = true;
    const officer = repository.getOfficerContact();
    const draft = getDraftProfile() ?? {};
    const session = getSession();
    saveVisitRequest({
      preferredDate: dateVal,
      reason: visitReasonInput.value.trim() || null,
      officerId: officer.staff_id,
      farmerPhone: session?.phone ?? draft.phone ?? null
    });
    visitSuccess.textContent = t("help.visitSuccess", { name: officer.name });
    visitSuccess.hidden = false;
    visitReasonInput.value = "";
  }
  function renderDistressMonitor() {
    const mount = $("distressMonitorMount");
    if (!mount)
      return;
    mount.innerHTML = `
    <div class="distress-card" style="margin-top:16px;">
      <div class="distress-header">
        <div>
          <h3 style="font-size:14px; font-weight:800; color:hsl(var(--foreground));">Predictive Distress Risk & Early Warning</h3>
          <span style="font-size:11px; color:hsl(var(--muted-foreground));">3-Factor Algorithm: Rain + Price + Loan</span>
        </div>
        <div class="distress-score" style="background:#fef2f2; color:#b91c1c; border:1px solid #fecaca; padding:4px 8px; border-radius:12px; font-weight:800; font-size:12px;">
          High Distress: 85/100
        </div>
      </div>
      <div class="distress-factors" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-top:12px;">
        <div style="background:hsl(var(--muted)); padding:10px; border-radius:var(--radius); text-align:center;">
          <div style="font-size:10px; color:hsl(var(--muted-foreground));">3-Day Rain</div>
          <div style="font-size:13px; font-weight:700;">76 mm</div>
          <div style="font-size:10px; color:#b91c1c; margin-top:4px;">Inundation Risk</div>
        </div>
        <div style="background:hsl(var(--muted)); padding:10px; border-radius:var(--radius); text-align:center;">
          <div style="font-size:10px; color:hsl(var(--muted-foreground));">Mandi vs MSP</div>
          <div style="font-size:13px; font-weight:700;">-\u20B91,175</div>
          <div style="font-size:10px; color:#b91c1c; margin-top:4px;">Price Crash</div>
        </div>
        <div style="background:hsl(var(--muted)); padding:10px; border-radius:var(--radius); text-align:center;">
          <div style="font-size:10px; color:hsl(var(--muted-foreground));">Loan Due</div>
          <div style="font-size:13px; font-weight:700;">3 Days</div>
          <div style="font-size:10px; color:#b91c1c; margin-top:4px;">Imminent</div>
        </div>
      </div>
    </div>
  `;
  }
  function renderLoanSchedule(result) {
    const statusMount = $("loanStatusCards");
    if (statusMount) {
      statusMount.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
        <div style="background:hsl(var(--primary)/.1); padding:16px; border-radius:var(--radius); text-align:center; border:1px solid hsl(var(--primary)/.2);">
          <div style="font-size:11px; font-weight:700; color:hsl(var(--primary)); text-transform:uppercase;">Monthly EMI</div>
          <div style="font-size:24px; font-weight:800; color:hsl(var(--foreground)); line-height:1.2; margin-top:4px;">\u20B9${Math.round(result.emi).toLocaleString("en-IN")}</div>
          <div style="font-size:11px; color:hsl(var(--muted-foreground)); mt:4px;">Total Payable: \u20B9${Math.round(result.totalPayment).toLocaleString("en-IN")}</div>
        </div>
        <div style="background:hsl(var(--card)); padding:16px; border-radius:var(--radius); text-align:center; border:1px solid hsl(var(--border)); display:flex; flex-direction:column; justify-content:center;">
          <div style="font-size:11px; font-weight:700; color:hsl(var(--muted-foreground)); text-transform:uppercase;">Total Interest</div>
          <div style="font-size:20px; font-weight:800; color:hsl(var(--foreground)); line-height:1.2; margin-top:4px;">\u20B9${Math.round(result.totalInterest).toLocaleString("en-IN")}</div>
        </div>
      </div>
    `;
    }
    const tableMount = $("loanScheduleMount");
    if (tableMount && result.schedule) {
      tableMount.innerHTML = `
      <div class="section-head"><span class="eyebrow">Monthly Installment Schedule</span><span class="section-rule"></span></div>
      <div class="mandi-table-wrapper" style="max-height: 400px; overflow-y: auto;">
        <table class="mandi-table">
          <thead style="position: sticky; top: 0; background: hsl(var(--muted)); z-index: 10;">
            <tr>
              <th style="width: 40px; text-align:center;">Paid</th>
              <th>Due Date</th>
              <th>Base EMI</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            ${result.schedule.map((s) => {
        const isPaid = s.month <= 6;
        return `
                <tr>
                  <td style="text-align:center;">
                    <input type="checkbox" ${isPaid ? "checked" : ""} style="accent-color:hsl(var(--primary)); transform:scale(1.2);">
                  </td>
                  <td style="font-weight:600;">${new Date(s.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</td>
                  <td style="font-weight:700; color:hsl(var(--foreground));">\u20B9${Math.round(s.emi).toLocaleString("en-IN")}</td>
                  <td style="color:hsl(var(--muted-foreground));">\u20B9${Math.round(s.principal).toLocaleString("en-IN")}</td>
                  <td style="color:hsl(var(--muted-foreground));">\u20B9${Math.round(s.interest).toLocaleString("en-IN")}</td>
                  <td style="font-weight:700;">\u20B9${Math.round(s.balance).toLocaleString("en-IN")}</td>
                </tr>
              `;
      }).join("")}
          </tbody>
        </table>
      </div>
    `;
    }
  }
  function renderLoan() {
    const data = getLoanData();
    if (data) {
      $("loanAmountInput").value = data.amount || "";
      $("loanTenureInput").value = data.tenureMonths || "";
      $("loanRateInput").value = data.rate || "";
      if (data.amount > 0 && data.tenureMonths > 0 && data.rate > 0) {
        const result = generateSchedule(data.amount, data.rate, data.tenureMonths);
        renderDistressMonitor();
        renderLoanSchedule(result);
        $("loanResultBox").hidden = false;
      } else {
        $("loanResultBox").hidden = true;
      }
    } else {
      $("loanAmountInput").value = "50000";
      $("loanTenureInput").value = "12";
      $("loanRateInput").value = "7.0";
      $("loanResultBox").hidden = true;
    }
  }
  function onLoanSubmit(e) {
    e.preventDefault();
    const amt = parseFloat($("loanAmountInput").value);
    const ten = parseInt($("loanTenureInput").value, 10);
    const rate = parseFloat($("loanRateInput").value);
    if (amt > 0 && ten > 0 && rate > 0) {
      saveLoanData({ amount: amt, tenureMonths: ten, rate });
      renderLoan();
    }
  }
  function renderProfile() {
    const session = getSession();
    const draft = getDraftProfile() ?? {};
    const name = session?.name || draft.name || meCache?.display_name || null;
    const setupSec = $("profileSetupSection");
    const overviewSec = $("profileOverviewSection");
    if (!name) {
      setupSec.hidden = false;
      overviewSec.hidden = true;
      $("displayNameInput").focus();
      return;
    }
    setupSec.hidden = true;
    overviewSec.hidden = false;
    const eff = {
      ...draft,
      village: meCache?.farm?.village_name ?? meCache?.profile?.village_name ?? draft.village ?? "\u2014",
      districtName: meCache?.profile?.district_name ?? draft.districtName ?? "\u2014",
      stateName: meCache?.profile?.state_name ?? draft.stateName ?? "\u2014",
      areaAcres: meCache?.farm?.area_acres ?? draft.areaAcres ?? "\u2014",
      soilType: meCache?.farm?.soil_type ?? draft.soilType ?? "black",
      irrigation: meCache?.farm?.irrigation_type ?? draft.irrigation ?? "rainfed",
      crop: meCache?.crop_cycle?.crop ?? draft.crop ?? "cotton",
      variety: meCache?.crop_cycle?.variety ?? draft.variety ?? "Standard",
      growthStage: meCache?.crop_cycle?.growth_stage ?? draft.growthStage ?? "vegetative"
    };
    const masked = session?.masked ?? `\u2022\u2022\u2022 ${(session?.phone ?? draft.phone ?? "1234567890").slice(-3)}`;
    $("profileNameDisplay").textContent = name;
    $("profilePhoneDisplay").textContent = `${t("profile.phoneLabel")}: ${masked}`;
    const isMasked = name.includes("\u2022");
    $("profileAvatar").textContent = isMasked ? name.match(/\d{3}$/)?.[0] ?? "\u2022\u2022\u2022" : (name || "?").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    $("profileLocVal").textContent = `${eff.village} \xB7 ${eff.districtName} \xB7 ${eff.stateName}`;
    $("profileLandVal").textContent = `${eff.areaAcres} acres \xB7 ${t("soil." + eff.soilType)} \xB7 ${t("irrig." + eff.irrigation)}`;
    $("profileCropVal").textContent = `${t("crop." + eff.crop)} (${eff.variety}) \xB7 ${t("stage." + eff.growthStage)}`;
    $("profileLangVal").textContent = getLanguageByCode(getLang())?.nativeName ?? "English";
  }
  var officerCaseloadFilter = "ALL";
  var officerSearchQuery = "";
  function renderOfficer() {
    const session = getSession();
    const district = session?.district || "Nashik";
    $("officerDashTitle").textContent = t("officer.dashTitle", { name: session?.name || "Officer" });
    $("officerJurisdictionLine").textContent = t("officer.jurisdictionLine", { district });
    let { list, counts } = repository.getOfficerCaseload(district);
    const me = getDraftProfile();
    if (me && me.phone) {
      const exists = list.find((c) => c.phone === me.phone);
      if (!exists) {
        list.unshift({
          id: "F-REAL",
          name: me.name || "Local Farmer",
          village: me.district || district,
          district: me.district || district,
          acres: me.land?.area || 2,
          crop: me.crop?.type || "Crop",
          stage: "Current",
          score: 85,
          band: "HIGH",
          phone: me.phone,
          drivers: [
            { icon: "alert", label: "High Distress Trigger" }
          ]
        });
        counts.HIGH = (counts.HIGH || 0) + 1;
        counts.TOTAL += 1;
      }
    }
    $("statCriticalCount").textContent = counts.CRITICAL;
    $("statHighCount").textContent = counts.HIGH;
    $("statMediumCount").textContent = counts.MEDIUM;
    $("statTotalCount").textContent = counts.TOTAL;
    $("statCriticalLabel").textContent = t("officer.bandCritical");
    $("statHighLabel").textContent = t("officer.bandHigh");
    $("statMediumLabel").textContent = t("officer.bandMedium");
    $("statTotalLabel").textContent = t("officer.bandTotal");
    $("officerCaseloadHeading").textContent = t("officer.caseloadHeading");
    $("officerSearchInput").placeholder = t("officer.searchPh");
    const filtered = list.filter((item) => {
      if (officerCaseloadFilter !== "ALL" && item.band !== officerCaseloadFilter)
        return false;
      if (officerSearchQuery) {
        const q = officerSearchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchVillage = item.village.toLowerCase().includes(q);
        const matchCrop = item.crop.toLowerCase().includes(q);
        if (!matchName && !matchVillage && !matchCrop)
          return false;
      }
      return true;
    });
    const listMount = $("officerCaseloadList");
    if (!filtered.length) {
      listMount.innerHTML = `<p class="field-note" style="text-align:center; padding:20px;">No matching cases in this filter.</p>`;
      return;
    }
    const actions = getOfficerActions();
    listMount.innerHTML = filtered.map((c) => {
      const bandClass = `caseload-band--${c.band.toLowerCase()}`;
      const cardClass = `caseload-card--${c.band.toLowerCase()}`;
      const farmerActions = actions[c.id] ?? [];
      const lastAction = farmerActions.length ? farmerActions[farmerActions.length - 1] : null;
      const DRIVER_ICONS = {
        rain: droplet(13),
        trend_down: trendDown(13),
        alert: alert(13),
        credit: creditCard(13),
        sprout: sprout(13),
        check: check(13),
        water: droplet(13)
      };
      return `
      <article class="caseload-card ${cardClass}" data-farmer-id="${c.id}">
        <div class="caseload-card__head">
          <div>
            <h3 class="caseload-farmer-name">${escapeHtml(c.name)}</h3>
            <p class="caseload-farmer-sub">${escapeHtml(c.village)} \xB7 ${c.acres} acres \xB7 ${escapeHtml(c.crop)} (${escapeHtml(c.stage)})</p>
          </div>
          <span class="caseload-band ${bandClass}">
            Distress: ${c.score}/100 \xB7 ${c.band}
          </span>
        </div>

        <div class="caseload-drivers">
          ${c.drivers.map((d) => `<span class="caseload-tag">${DRIVER_ICONS[d.icon] || info(13)} ${escapeHtml(d.label)}</span>`).join("")}
        </div>

        ${farmerActions.length ? `
          <div class="caseload-actions-log">
            ${farmerActions.slice(-2).map((a) => `
              <div class="caseload-action-entry">
                <span class="caseload-action-type">${escapeHtml(t("officer.action." + a.type))}</span>
                ${a.notes ? `<span class="caseload-action-notes">${escapeHtml(a.notes)}</span>` : ""}
                <span class="caseload-action-time">${new Date(a.at).toLocaleDateString()}</span>
              </div>
            `).join("")}
          </div>
        ` : ""}

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; padding-top:8px; border-top:1px dashed hsl(var(--border));">
          <a href="tel:${c.phone}" class="btn btn--primary btn--sm" style="background-color:hsl(var(--primary)); text-decoration:none; padding:4px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">${phone(13)} <span>Call</span></a>
          <span style="font-size:12px; color:hsl(var(--muted-foreground));">
            ${lastAction?.type === "resolved" ? `<span style="background:hsl(120 40% 92%); color:hsl(120 40% 30%); padding:2px 8px; border-radius:4px; font-weight:600; display:inline-flex; align-items:center; gap:4px;">${check(13)} <span>${escapeHtml(t("officer.action.resolved"))}</span></span>` : lastAction ? `${t("officer.actionLabel")}: ${escapeHtml(t("officer.action." + lastAction.type))}` : t("officer.noAction")}
          </span>
          <div style="display:flex; gap:8px;">
            <a class="btn btn--outline btn--sm" href="tel:${c.phone}" style="display:inline-flex; align-items:center; gap:4px;">${phone(13)} <span>Call</span></a>
            <button class="btn btn--primary btn--sm log-action-btn" type="button">${t("officer.logAction")}</button>
          </div>
        </div>
      </article>
    `;
    }).join("");
    const existingForm = $("officerActionForm");
    if (existingForm)
      existingForm.remove();
    listMount.querySelectorAll(".log-action-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".caseload-card");
        const farmerId = card.dataset.farmerId;
        const farmerName = card.querySelector(".caseload-farmer-name").textContent;
        listMount.querySelectorAll(".caseload-card--expanded").forEach((c) => c.classList.remove("caseload-card--expanded"));
        const oldForm = $("officerActionForm");
        if (oldForm)
          oldForm.remove();
        card.classList.add("caseload-card--expanded");
        const form = document.createElement("form");
        form.id = "officerActionForm";
        form.className = "officer-action-form";
        form.novalidate = true;
        form.innerHTML = `
        <div class="section-head">
          <span class="eyebrow">${escapeHtml(t("officer.actionTitle", { name: farmerName }))}</span>
        </div>
        <div class="field">
          <label for="officerActionType">${escapeHtml(t("officer.actionTypeLabel"))}</label>
          <select class="input" id="officerActionType" required>
            <option value="">${escapeHtml(t("ph.select"))}</option>
            <option value="call_made">${escapeHtml(t("officer.action.call_made"))}</option>
            <option value="visit_done">${escapeHtml(t("officer.action.visit_done"))}</option>
            <option value="referral">${escapeHtml(t("officer.action.referral"))}</option>
            <option value="advisory_given">${escapeHtml(t("officer.action.advisory_given"))}</option>
            <option value="follow_up">${escapeHtml(t("officer.action.follow_up"))}</option>
            <option value="resolved">${escapeHtml(t("officer.action.resolved"))}</option>
            <option value="review_later">${escapeHtml(t("officer.action.review_later"))}</option>
          </select>
        </div>
        <div class="field">
          <label for="officerActionNotes">${escapeHtml(t("officer.actionNotesLabel"))}</label>
          <input class="input" id="officerActionNotes" type="text" placeholder="${escapeHtml(t("officer.actionNotesPh"))}" autocomplete="off">
        </div>
        <div class="btn-row">
          <button class="btn btn--ghost" type="button" id="officerActionCancel">${escapeHtml(t("help.visitCancel"))}</button>
          <button class="btn btn--primary" type="submit">${escapeHtml(t("officer.actionSubmit"))}</button>
        </div>
      `;
        card.appendChild(form);
        form.querySelector("#officerActionCancel").addEventListener("click", () => {
          card.classList.remove("caseload-card--expanded");
          form.remove();
        });
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const type = form.querySelector("#officerActionType").value;
          if (!type)
            return;
          const notes = form.querySelector("#officerActionNotes").value.trim();
          logOfficerAction(farmerId, type, notes);
          renderOfficer();
        });
      });
    });
  }
  function showView(name) {
    VIEWS.forEach((v) => {
      $(`view${v[0].toUpperCase()}${v.slice(1)}`).hidden = v !== name;
    });
    const active = $(`view${name[0].toUpperCase()}${name.slice(1)}`);
    if (active) {
      active.classList.remove("view-enter");
      void active.offsetWidth;
      active.classList.add("view-enter");
    }
    const headerOfficerBtn = document.getElementById("headerOfficerBtn");
    if (headerOfficerBtn) {
      const isDashboard = ["home", "mandi", "profile", "help", "officer", "loan", "auth"].includes(name);
      headerOfficerBtn.style.display = isDashboard ? "none" : "";
    }
    const nav = $("farmerNav");
    if (nav) {
      const isFarmerScreen = ["home", "mandi", "loan", "help", "profile"].includes(name);
      nav.hidden = !isFarmerScreen;
      if (isFarmerScreen) {
        nav.querySelectorAll(".farmer-nav__btn").forEach((btn) => {
          if (btn.dataset.route === name) {
            btn.setAttribute("aria-current", "page");
          } else {
            btn.removeAttribute("aria-current");
          }
        });
      }
    }
    window.scrollTo({ top: 0 });
  }
  function locationComplete(draft) {
    return Boolean(draft?.stateCode && draft?.districtCode && draft?.village);
  }
  function landComplete(draft) {
    return Boolean(draft?.areaAcres && draft?.soilType && draft?.irrigation);
  }
  function cropComplete(draft) {
    return Boolean(draft?.crop && draft?.variety && draft?.sownOn && draft?.growthStage);
  }
  function wire() {
    openPickerBtn.addEventListener("click", () => {
      voiceNote.textContent = "";
      gateAdvances = false;
      languageGate.hidden = false;
      languageGrid.querySelector(".language-tile__choice")?.focus();
    });
    $("startSetup").addEventListener("click", () => go("location"));
    $("stateMount").append(stateSelect.el);
    $("districtMount").append(districtSelect.el);
    $("villageMount").append(villageSelect.el);
    villageFree.addEventListener("input", onFreeVillageInput);
    $("soilMount").append(soilSelect.el);
    $("irrigationMount").append(irrigationSelect.el);
    landArea.addEventListener("input", saveLand);
    $("cropMount").append(cropSelect.el);
    $("varietyMount").append(varietySelect.el);
    varietyFree.addEventListener("input", onFreeVarietyInput);
    sownDate.addEventListener("change", onSownChange);
    sownDate.max = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    $("locationForm").addEventListener("submit", onSubmitLocation);
    $("locBack").addEventListener("click", () => go("welcome"));
    $("landForm").addEventListener("submit", onSubmitLand);
    $("landBack").addEventListener("click", () => go("location"));
    $("cropForm").addEventListener("submit", onSubmitCrop);
    $("cropBack").addEventListener("click", () => go("land"));
    $("reviewBack").addEventListener("click", () => go("crop"));
    $("reviewSave").addEventListener("click", onSaveReview);
    $("intentBack").addEventListener("click", () => go("review"));
    $("intentContinue").addEventListener("click", () => go("auth"));
    $("intentChange").addEventListener("click", () => go("review"));
    $("intentGuest").addEventListener("click", onGuest);
    $("consentCheck").addEventListener("change", onConsentChange);
    tabFarmer.addEventListener("click", () => setAuthTab("farmer"));
    tabOfficer.addEventListener("click", () => setAuthTab("officer"));
    panelFarmer.addEventListener("submit", onFarmerSubmit);
    resendBtn.addEventListener("click", onResend);
    panelOfficer.addEventListener("submit", onOfficerSubmit);
    guestBtn.addEventListener("click", onGuest);
    signoutBtn.addEventListener("click", onSignout);
    authContinueBtn.addEventListener("click", () => {
      const session = getSession();
      if (session?.role === "officer") {
        go("officer");
      } else {
        go("home");
      }
    });
    $("profileForm").addEventListener("submit", onSubmitProfile);
    $("listenBtn").addEventListener("click", onListen);
    $("ackBtn").addEventListener("click", onAcknowledge);
    $("advisoryDetailBack").addEventListener("click", () => go("home"));
    $("loanForm").addEventListener("submit", onLoanSubmit);
    $("mandiQtyInput").addEventListener("input", onMandiQtyChange);
    officerVisitToggleBtn.addEventListener("click", onToggleVisitForm);
    visitForm.addEventListener("submit", onVisitSubmit);
    $("visitCancelBtn").addEventListener("click", onVisitCancel);
    $("btnEditLoc").addEventListener("click", () => go("location"));
    $("btnEditLand").addEventListener("click", () => go("land"));
    $("btnEditCrop").addEventListener("click", () => go("crop"));
    $("btnEditLang").addEventListener("click", () => openPickerBtn.click());
    $("profileSignoutBtn").addEventListener("click", onSignout);
    $("sarvamKeyStatus").textContent = SARVAM_API_KEY ? "Key configured" : "Not configured";
    $("sarvamKeyInput").value = SARVAM_API_KEY ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "";
    $("sarvamKeySave").addEventListener("click", () => {
      const val = $("sarvamKeyInput").value.trim();
      if (val && val !== "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022") {
        setSarvamKey(val);
        $("sarvamKeyStatus").textContent = "Key saved \u2014 reload to activate";
        $("sarvamKeyInput").value = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
      }
    });
    const headerOfficerBtn = document.getElementById("headerOfficerBtn");
    if (headerOfficerBtn) {
      headerOfficerBtn.addEventListener("click", () => {
        go("auth");
        setAuthTab("officer");
      });
    }
    $("officerSignoutBtn").addEventListener("click", onSignout);
    $("officerSearchInput").addEventListener("input", (e) => {
      officerSearchQuery = e.target.value.trim();
      renderOfficer();
    });
    $("officerFilterChips").querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        officerCaseloadFilter = chip.dataset.band;
        $("officerFilterChips").querySelectorAll(".filter-chip").forEach(
          (c) => c.classList.toggle("filter-chip--active", c === chip)
        );
        renderOfficer();
      });
    });
    $("viewOfficer").querySelectorAll(".stat-tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        const filter = tile.dataset.filter;
        if (filter) {
          officerCaseloadFilter = filter;
          $("officerFilterChips").querySelectorAll(".filter-chip").forEach(
            (c) => c.classList.toggle("filter-chip--active", c.dataset.band === filter)
          );
          renderOfficer();
        }
      });
    });
    $("farmerNav").querySelectorAll(".farmer-nav__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const route = btn.dataset.route;
        if (route)
          go(route);
      });
    });
    window.addEventListener("beforeunload", () => stop());
  }
  function boot() {
    const saved = getLanguage();
    const validSaved = saved && getLanguageByCode(saved);
    if (validSaved)
      setLang(saved);
    renderLanguageTiles();
    wire();
    applyCopy();
    refreshLand();
    refreshCrop();
    register("welcome", () => {
      $("startSetup").hidden = !validSaved;
      showView("welcome");
    });
    register("location", () => {
      if (!getLanguage()) {
        go("welcome");
        return;
      }
      showView("location");
    });
    register("land", () => {
      const draft2 = getDraftProfile();
      if (!getLanguage() || !locationComplete(draft2)) {
        go("location");
        return;
      }
      showView("land");
    });
    register("crop", () => {
      const draft2 = getDraftProfile();
      if (!getLanguage() || !landComplete(draft2)) {
        go("land");
        return;
      }
      showView("crop");
    });
    register("review", () => {
      const draft2 = getDraftProfile();
      if (!getLanguage() || !cropComplete(draft2)) {
        go("crop");
        return;
      }
      buildReview();
      showView("review");
    });
    register("intent", () => {
      const draft2 = getDraftProfile();
      if (!getLanguage() || !cropComplete(draft2) || !draft2?.completed) {
        go("review");
        return;
      }
      renderIntent();
      showView("intent");
    });
    register("auth", () => {
      if (!getLanguage()) {
        go("welcome");
        return;
      }
      paintAuthState();
      showView("auth");
    });
    register("profile", () => {
      const session = getSession();
      if (!getLanguage() || session?.role !== "farmer" || !session?.token) {
        go("auth");
        return;
      }
      renderProfile();
      showView("profile");
    });
    register("home", async () => {
      if (!getLanguage() || !getSession()) {
        go("auth");
        return;
      }
      showView("home");
      await renderHome();
    });
    register("advisory", () => {
      if (!getLanguage() || !getSession()) {
        go("auth");
        return;
      }
      renderAdvisoryDetail();
      showView("advisory");
    });
    register("mandi", async () => {
      if (!getLanguage() || !getSession()) {
        go("auth");
        return;
      }
      showView("mandi");
      await renderMandi();
    });
    register("loan", () => {
      if (!getLanguage() || !getSession()) {
        go("auth");
        return;
      }
      applyCopy();
      renderLoan();
      showView("loan");
    });
    register("help", () => {
      if (!getLanguage() || !getSession()) {
        go("auth");
        return;
      }
      renderHelp();
      showView("help");
    });
    register("officer", () => {
      const session = getSession();
      if (!getLanguage() || session?.role !== "officer") {
        go("auth");
        return;
      }
      renderOfficer();
      showView("officer");
    });
    start("welcome");
    if (!validSaved) {
      gateAdvances = true;
      languageGate.hidden = false;
      return;
    }
    const draft = getDraftProfile();
    if (!draft)
      return;
    if (!locationComplete(draft))
      go("location");
    else if (!landComplete(draft))
      go("land");
    else if (!cropComplete(draft))
      go("crop");
    else if (!draft.completed)
      go("review");
    else if (!getSession()) {
      go(draft.consent?.accepted ? "auth" : "intent");
    } else if (getSession().role === "officer")
      go("officer");
    else if (getSession().role === "farmer" && !getSession().name && !draft.attached)
      go("profile");
    else
      go("home");
  }
  boot();
})();
