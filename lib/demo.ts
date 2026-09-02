import { SafetyGuidanceResponse, SupportedLanguage } from '@/types/safety';

export const DEMO_DATA: Record<string, Record<SupportedLanguage, SafetyGuidanceResponse>> = {
  burn: {
    en: {
      title: 'First-Aid Guidance: Minor Thermal Burn',
      severity: 'low',
      summary: 'Superficial skin burn causing mild redness and localized pain without deep tissue damage or extensive blistering.',
      steps: [
        'Move away from the heat source immediately to prevent further exposure.',
        'Cool the area under gentle, cool running tap water for 10 to 20 minutes.',
        'Gently remove rings, watches, or tight items near the affected area before swelling starts.',
        'Cover the burn loosely with a sterile non-stick bandage or clean plastic cling wrap.',
        'Keep the area clean, dry, and protected while it heals.',
      ],
      dontDo: [
        'Do NOT apply ice, ice water, or frozen items directly to the burn.',
        'Do NOT apply butter, toothpaste, oil, ghee, or turmeric to the burn.',
        'Do NOT break or pop any blisters that form.',
        'Do NOT use cotton wool or fluffy dressings that could stick to the wound.',
      ],
      warningSigns: [
        'Blisters covering an area larger than 2 inches / the palm of the hand.',
        'Burn turns white, leathery, dark brown, or completely painless.',
        'Signs of infection: increasing redness, pus discharge, or fever.',
        'Burn located on face, eyes, hands, joints, or groin.',
      ],
      seekHelp: 'Visit the campus health centre or doctor if pain persists beyond 24 hours, if the burn covers a sensitive area, or if blisters appear large and painful.',
      emergency: false,
      isDemo: true,
    },
    hi: {
      title: 'प्राथमिक चिकित्सा: हल्का जलना (Minor Burn)',
      severity: 'low',
      summary: 'त्वचा की ऊपरी सतह का हल्का जलना जिससे लालिमा और हल्का दर्द हो सकता है, बिना किसी गहरे घाव के।',
      steps: [
        'तुरंत गर्मी या गर्म वस्तु से दूर हट जाएं ताकि आगे नुकसान न हो।',
        'प्रभावित हिस्से को 10 से 20 मिनट तक नल के ठंडे बहते पानी के नीचे रखें।',
        'सूजन आने से पहले जली हुई जगह के पास की अंगूठी, घड़ी या तंग कपड़े आराम से उतार लें।',
        'घाव को साफ, सूखी और रोगाणुरहित (sterile) पट्टी या साफ सूती कपड़े से ढीला ढकें।',
        'जले हुए हिस्से को साफ और सूखा रखें।',
      ],
      dontDo: [
        'बर्फ या बहुत ठंडा पानी सीधे जले पर न लगाएं।',
        'मक्खन, टूथपेस्ट, तेल, हल्दी या कोई घरेलू मलहम न लगाएं।',
        'अगर छाले (blisters) पड़ जाएं तो उन्हें कतई न फोड़ें।',
        'रुई या रेशेदार कपड़ा न चिपकाएं जो घाव से चिपक सकता है।',
      ],
      warningSigns: [
        'हथेली के आकार से बड़ा छाला बन जाना।',
        'त्वचा का सफेद, सुन्न या गहरा भूरा हो जाना।',
        'संक्रमण के लक्षण: बढ़ता हुआ दर्द, मवाद या बुखार आना।',
        'चेहरे, आंखों, जोड़ों या संवेदनशील अंगों पर जलन होना।',
      ],
      seekHelp: 'यदि 24 घंटे बाद भी दर्द कम न हो, छाला बड़ा हो जाए, या जलन चेहरे/हाथों पर हो, तो तुरंत कैंपस मेडिकल सेंटर या डॉक्टर को दिखाएं।',
      emergency: false,
      isDemo: true,
    },
    hinglish: {
      title: 'First-Aid Guidance: Minor Burn',
      severity: 'low',
      summary: 'Skin ki upper layer par halka burn jisme redness aur mild pain hota hai bina kisi deep tissue damage ke.',
      steps: [
        'Heat source ya garam cheez se turant door ho jayein.',
        'Burn area par 10-20 minutes tak cool running tap water daalein.',
        'Swelling aane se pehle aas-paas ki ring, ghadi ya tight kapde gently nikal lein.',
        'Area ko ek clean sterile bandage ya loose clean kapde se cover karein.',
        'Wound ko dry aur infection-free rakhein.',
      ],
      dontDo: [
        'Direct ICE ya chilled water burn par bilkul na lagayein.',
        'Toothpaste, butter, tail (oil) ya haldi na lagayein.',
        'Agar blister (chhale) banein toh unhe pop/phodein mat.',
        'Cotton wool use na karein jo ghaav par chipak sake.',
      ],
      warningSigns: [
        'Agar blister palm (hatheli) se bada ho.',
        'Skin numb, white ya leather jaisi dark ho jaye.',
        'Pus aana, badhta hua pain ya fever aana.',
        'Face, eyes, joints ya sensitive areas par burn hona.',
      ],
      seekHelp: 'Agar 24 hours me pain kam na ho ya blisters severe dikhein toh turant campus medical centre ya doctor se consult karein.',
      emergency: false,
      isDemo: true,
    },
  },
  cut: {
    en: {
      title: 'First-Aid Guidance: Minor Cut / Laceration',
      severity: 'low',
      summary: 'Superficial skin cut with light bleeding that can typically be managed with clean pressure and protective dressing.',
      steps: [
        'Wash your hands thoroughly with soap and water before tending to the wound.',
        'Apply direct, steady pressure using a clean cloth or sterile gauze for 3–5 minutes to stop bleeding.',
        'Rinse the cut gently under running water and wash surrounding skin with mild soap.',
        'Apply a thin layer of antiseptic cream if available.',
        'Cover with an adhesive bandage (Band-Aid) or clean sterile dressing.',
      ],
      dontDo: [
        'Do NOT apply harsh chemical cleaners like hydrogen peroxide or strong alcohol directly inside a deep wound.',
        'Do NOT repeatedly lift the cloth to check bleeding during the first 3 minutes of pressure.',
        'Do NOT touch the open wound with dirty hands.',
      ],
      warningSigns: [
        'Bleeding does not stop after 10 minutes of continuous direct pressure.',
        'Cut is gaping open wide, deeper than 1/4 inch, or fat/muscle is visible.',
        'Object (glass, metal) remains deeply embedded in the cut.',
        'Numbness, loss of sensation, or inability to move the finger.',
      ],
      seekHelp: 'Consult medical staff if the cut might need stitches, if the object causing it was rusty/dirty (tetanus shot needed), or if redness and swelling spread.',
      emergency: false,
      isDemo: true,
    },
    hi: {
      title: 'प्राथमिक चिकित्सा: उंगली पर कट (Minor Cut)',
      severity: 'low',
      summary: 'उंगली पर हल्का चीरा जिससे मामूली रक्तस्राव हो रहा है।',
      steps: [
        'घाव छूने से पहले अपने हाथ साबुन और पानी से अच्छी तरह धोएं।',
        'रक्तस्राव रोकने के लिए साफ कपड़े या पट्टी से 3-5 मिनट तक लगातार सीधा दबाव बनाएं।',
        'कट को साफ बहते पानी से धोएं और आसपास की त्वचा साफ करें।',
        'यदि उपलब्ध हो तो एंटीसेप्टिक क्रीम की हल्की परत लगाएं।',
        'एक साफ चिपकने वाली पट्टी (बैंड-एड) या स्टेराइल ड्रेसिंग लगाएं।',
      ],
      dontDo: [
        'दबाव बनाते समय बार-बार कपड़ा उठाकर न देखें।',
        'गंदे हाथों से घाव को न छुएं।',
        'घाव में फंसे नुकीले कांच या धातु के टुकड़े को जबरन न खींचें।',
      ],
      warningSigns: [
        '10 मिनट लगातार दबाव के बाद भी खून बहना बंद न होना।',
        'घाव बहुत गहरा होना या किनारे आपस में न मिलना (टांके की आवश्यकता)।',
        'उंगली का सुन्न होना या हिलाने में असमर्थता।',
        'जंग लगी वस्तु से कटना (टिटनेस का खतरा)।',
      ],
      seekHelp: 'यदि घाव गहरा है, खून नहीं रुक रहा है या जंग लगी वस्तु से लगा है, तो तुरंत डॉक्टर से संपर्क करें और टिटनेस का टीका लगवाएं।',
      emergency: false,
      isDemo: true,
    },
    hinglish: {
      title: 'First-Aid Guidance: Minor Finger Cut',
      severity: 'low',
      summary: 'Finger par superficial cut jisme mild bleeding ho rahi hai.',
      steps: [
        'Pehle apne hands soap aur water se clean karein.',
        'Clean cloth ya sterile gauze se 3-5 minutes continuous direct pressure banayein.',
        'Cut ko running water se gently clean karein.',
        'Antiseptic ointment lagayein aur clean Band-Aid se cover karein.',
        'Bandage ko dry aur din me ek baar change karein.',
      ],
      dontDo: [
        'Har 30 seconds me kapda utha kar check mat karein (clotting disturb hoti hai).',
        'Dirty hands se wound ko touch na karein.',
        'Deep glass ya metal pieces ko forcibly pull out na karein.',
      ],
      warningSigns: [
        '10 minutes direct pressure ke baad bhi bleeding na rukna.',
        'Cut bohot deep ho jisme stitches ki zaroorat ho sakti hai.',
        'Finger numb ho jana ya movement me pain/restriction hona.',
        'Rusty/dirty object se cut lagna (Tetanus risk).',
      ],
      seekHelp: 'Agar cut deep hai ya bleeding nahi ruk rahi, toh campus medical clinic ya doctor ke paas visit karein.',
      emergency: false,
      isDemo: true,
    },
  },
  dizzy: {
    en: {
      title: 'Safety Guidance: Dizziness & Lightheadedness',
      severity: 'medium',
      summary: 'Sudden feeling of unsteadiness, wooziness, or faintness. Immediate fall-prevention and hydration are essential.',
      steps: [
        'Sit down or lie flat on the floor immediately to prevent falling and injury.',
        'Elevate your feet slightly above heart level (using a bag or cushion) to improve blood flow to the head.',
        'Loosen any tight collars, neckwear, or restrictive clothing.',
        'Sip cool water or electrolyte drink slowly once sitting upright safely.',
        'Stay seated in a well-ventilated, shaded area for at least 15 minutes until stability returns.',
      ],
      dontDo: [
        'Do NOT stand up quickly or attempt to walk alone while feeling woozy.',
        'Do NOT operate vehicles, heavy machinery, or campus lab equipment.',
        'Do NOT gulp down large quantities of fluids rapidly if feeling nauseous.',
        'Do NOT ignore accompanying symptoms like chest pain or weakness.',
      ],
      warningSigns: [
        'Loss of consciousness or fainting spell.',
        'Chest pain, palpitations, or shortness of breath.',
        'Sudden weakness or numbness on one side of face or body.',
        'Difficulty speaking or sudden blurred vision.',
      ],
      seekHelp: 'If dizziness persists longer than 20 minutes, is accompanied by vomiting, or you hit your head during a fall, seek immediate medical evaluation.',
      emergency: false,
      isDemo: true,
    },
    hi: {
      title: 'सुरक्षा मार्गदर्शन: चक्कर और सिर घूमना (Dizziness)',
      severity: 'medium',
      summary: 'अचानक चक्कर आना, आंखों के आगे अंधेरा छाना या कमजोरी महसूस होना। गिरने से बचाव सबसे महत्वपूर्ण है।',
      steps: [
        'गिरने की चोट से बचने के लिए तुरंत सुरक्षित बैठ जाएं या लेट जाएं।',
        'पैरों को तकिए या बैग की मदद से थोड़ा ऊपर उठाएं ताकि मस्तिष्क में रक्त संचार बेहतर हो।',
        'गले के तंग कपड़े, टाई या कॉलर ढीले करें।',
        'हवादार और ठंडी जगह पर बैठें और धीरे-धीरे पानी या ओआरएस/इलेक्ट्रोलाइट का घूंट लें।',
        'पूरी तरह सामान्य महसूस होने तक कम से कम 15 मिनट आराम करें।',
      ],
      dontDo: [
        'अचानक तेजी से उठकर खड़े न हों।',
        'अकेले चलने या सीढ़ियां चढ़ने का प्रयास न करें।',
        'वाहन या लैब उपकरण न चलाएं।',
      ],
      warningSigns: [
        'बेहोश हो जाना (Fainting)।',
        'सीने में दर्द, घबराहट या सांस फूलना।',
        'चेहरे या शरीर के एक तरफ कमजोरी या बोलने में लड़खड़ाहट।',
        'अचानक तेज सिरदर्द या उल्टी होना।',
      ],
      seekHelp: 'यदि 15-20 मिनट में आराम न मिले, बार-बार चक्कर आ रहे हों या सीने में तकलीफ हो, तो तुरंत डॉक्टर या इमरजेंसी हेल्प से संपर्क करें।',
      emergency: false,
      isDemo: true,
    },
    hinglish: {
      title: 'Safety Guidance: Dizziness & Chakkar Aana',
      severity: 'medium',
      summary: 'Achanak dizziness ya lightheadedness feel hona. Chot se bachne ke liye immediate rest zaroori hai.',
      steps: [
        'Girne se bachne ke liye turant safe ground par baith jayein ya let jayein.',
        'Legs ko pillow ya bag se thoda elevate (upar) karein taaki brain tak blood flow sahi ho.',
        'Tight clothes ya collar ko loose karein.',
        'Slowly thoda pani ya electrolyte/ORS sip karein.',
        'Well-ventilated jagah par 15 minutes aram karein, achanak uthne ki koshish na karein.',
      ],
      dontDo: [
        'Achanak jaldi me khade na hon.',
        'Akele stairs na chadein aur bike/scooty na chalayein.',
        'Symptoms ko ignore karke continuous kaam na karein.',
      ],
      warningSigns: [
        'Unconsciousness ya fainting hona.',
        'Chest pain ya saans lene me difficulty.',
        'Face ya body ke ek side weakness ya speech slur hona.',
        'Severe headache ya repeated vomiting.',
      ],
      seekHelp: 'Agar dizziness 20 minutes tak theek na ho ya black-out ho, toh turant campus health centre ya emergency ko contact karein.',
      emergency: false,
      isDemo: true,
    },
  },
  wire: {
    en: {
      title: 'Hazard Protocol: Unsafe / Exposed Electrical Wire',
      severity: 'high',
      summary: 'Severe physical electrocution hazard. High risk of electrical shock, arc flash, or fire.',
      steps: [
        'STOP and stay at least 10 meters (33 feet) away from the exposed wire and any puddles nearby.',
        'Do NOT touch the wire, anything touching it, or anyone in contact with it using bare hands or conductive objects.',
        'Warn others in the area immediately to keep their distance and cordon off the zone if safe to do so.',
        'If indoors and safely accessible without approaching the wire, turn off the main circuit breaker / power switch.',
        'Immediately report the exact location to Campus Security Desk and Facility Operations.',
      ],
      dontDo: [
        'Do NOT touch or approach the wire under any circumstances.',
        'Do NOT use water or wet objects anywhere near the electrical hazard.',
        'Do NOT try to move the wire with sticks, metal, or makeshift tools unless professionally trained.',
        'Do NOT attempt to rescue an electrocuted person with your bare hands while power is live.',
      ],
      warningSigns: [
        'Sparks, buzzing sounds, smoke, or burning plastic odor.',
        'Wire submerged in or touching standing water / wet grass.',
        'Someone is currently in contact with the live electrical current (Call 112 immediately).',
      ],
      seekHelp: 'Call Campus Security Desk (1800-011-2345) and National Emergency (112) immediately. Keep the perimeter clear until certified electricians confirm the area is de-energized.',
      emergency: true,
      isDemo: true,
    },
    hi: {
      title: 'सुरक्षा प्रोटोकॉल: खुला / असुरक्षित बिजली का तार (Electrical Hazard)',
      severity: 'high',
      summary: 'गंभीर बिजली का झटका (करंट) और आग लगने का जोखिम। तत्काल शारीरिक दूरी बनाए रखना अनिवार्य है।',
      steps: [
        'तुरंत रुकें और खुले तार से कम से कम 10 मीटर (33 फीट) की सुरक्षित दूरी बनाएं।',
        'तार को, उसके संपर्क में आई वस्तु को या पास के पानी को भूलकर भी न छुएं।',
        'आसपास मौजूद अन्य छात्रों और लोगों को जोर से सचेत करें और वहां आने से रोकें।',
        'यदि सुरक्षित दूरी पर मुख्य बिजली स्विच (Main MCB) मौजूद है, तो ही पावर बंद करें।',
        'तुरंत कैंपस सिक्योरिटी डेस्क और इमरजेंसी हेल्पलाइन को स्थान की सूचना दें।',
      ],
      dontDo: [
        'किसी भी परिस्थिति में तार के पास न जाएं।',
        'बिजली की आग या तार पर पानी बिल्कुल न डालें।',
        'तार को हटाने के लिए धातु या गीली लकड़ी का उपयोग न करें।',
        'करंट लगे व्यक्ति को नंगे हाथों से छूकर बचाने की कोशिश न करें।',
      ],
      warningSigns: [
        'चिनगारी (Sparks), आवाज, धुआं या जलने की गंध।',
        'तार पानी के गड्ढे या गीली जमीन में पड़ा होना।',
        'कोई व्यक्ति करंट के संपर्क में फंसा होना (तुरंत 112 पर कॉल करें)।',
      ],
      seekHelp: 'कैंपस सुरक्षा नियंत्रण कक्ष (1800-011-2345) और 112 पर तुरंत कॉल करें। जब तक इलेक्ट्रीशियन सुरक्षित न घोषित करे, क्षेत्र को खाली रखें।',
      emergency: true,
      isDemo: true,
    },
    hinglish: {
      title: 'Safety Protocol: Exposed / Open Electrical Wire',
      severity: 'high',
      summary: 'Severe electrical hazard. Electric shock, spark ya fire ka high risk hai. Safe distance banaye rakhein.',
      steps: [
        'Ruk jayein aur exposed wire se kam se kam 10 meters (33 feet) door rahein.',
        'Wire ko, uske paas ke paani ko ya kisi metallic cheez ko bilkul touch na karein.',
        'Aas-paas ke logo ko shout karke alert karein taaki koi paas na aaye.',
        'Agar main MCB / power switch safely accessible ho toh turn off karein.',
        'Turant Campus Security Desk aur Emergency team ko exact location report karein.',
      ],
      dontDo: [
        'Wire ke paas jaane ki bilkul galti na karein.',
        'Electric hazard ke paas paani use na karein.',
        'Makeshift sticks ya metal se wire hatane ki koshish na karein.',
        'Agar kisi ko shock laga ho toh live power me bare hands se touch na karein.',
      ],
      warningSigns: [
        'Sparks, buzzing sound ya burning plastic smell.',
        'Pani me wire gira hua hona.',
        'Kisi person ka live current me fasna (Immediate 112 call).',
      ],
      seekHelp: 'Campus Security Helpline (1800-011-2345) aur Emergency 112 par call karein aur area ko secure rakhein.',
      emergency: true,
      isDemo: true,
    },
  },
  generic: {
    en: {
      title: 'General First-Aid & Safety Assessment',
      severity: 'medium',
      summary: 'Initial general assessment based on your reported situation. Prioritize immediate scene safety and monitor conditions carefully.',
      steps: [
        'Ensure the surrounding area is safe and free from immediate hazards.',
        'Rest in a comfortable, supported position and avoid unnecessary exertion.',
        'Check for visible wounds, swelling, or localized pain.',
        'Apply basic first-aid: keep clean, apply gentle cooling or clean support if appropriate.',
        'Keep a designated person or buddy informed of your condition.',
      ],
      dontDo: [
        'Do NOT ignore rapidly worsening symptoms.',
        'Do NOT take unverified medications without consulting a qualified medical professional.',
        'Do NOT continue strenuous activity if experiencing discomfort.',
      ],
      warningSigns: [
        'Difficulty breathing, sudden chest pressure, or severe pain.',
        'Uncontrolled bleeding or loss of sensation.',
        'Dizziness, confusion, or visual disturbances.',
      ],
      seekHelp: 'Contact your campus medical dispensary or call 112 if symptoms escalate or if you feel uncertain about your safety.',
      emergency: false,
      isDemo: true,
    },
    hi: {
      title: 'सामान्य प्राथमिक चिकित्सा व सुरक्षा मूल्यांकन',
      severity: 'medium',
      summary: 'आपकी बताई गई स्थिति के आधार पर प्रारंभिक सुरक्षा मार्गदर्शन। सुरक्षित स्थान पर रहें और लक्षणों पर ध्यान दें।',
      steps: [
        'सुनिश्चित करें कि आसपास का वातावरण सुरक्षित है।',
        'आरामदायक स्थिति में बैठें या लेटें और अनावश्यक हलचल से बचें।',
        'घाव या सूजन की स्थिति को ध्यान से देखें।',
        'घाव को साफ रखें और प्राथमिक उपचार अपनाएं।',
        'अपनी स्थिति के बारे में किसी साथी या कैंपस स्टाफ को सूचित रखें।',
      ],
      dontDo: [
        'लगातार बढ़ते लक्षणों को नजरअंदाज न करें।',
        'डॉक्टर की सलाह के बिना कोई भी दवा न लें।',
        'तकलीफ होने पर कठिन कार्य जारी न रखें।',
      ],
      warningSigns: [
        'सांस लेने में तकलीफ या सीने में भारीपन।',
        'लगातार खून बहना या अंग का सुन्न होना।',
        'अचानक भ्रम, चक्कर या धुंधला दिखाई देना।',
      ],
      seekHelp: 'यदि स्थिति गंभीर लगे या सुधार न हो तो तुरंत कैंपस मेडिकल सेंटर या 112 पर संपर्क करें।',
      emergency: false,
      isDemo: true,
    },
    hinglish: {
      title: 'General First-Aid & Safety Assessment',
      severity: 'medium',
      summary: 'Aapki situation ke according initial safety guidance. Safe position me rest karein aur monitor karein.',
      steps: [
        'Make sure karein ki aas-paas ka area safe hai.',
        'Comfortable position me rest karein aur heavy physical activity avoid karein.',
        'Wound ya pain point ko check karein aur clean rakhein.',
        'Basic first-aid follow karein.',
        'Kisi friend ya campus warden/staff ko apni situation inform karein.',
      ],
      dontDo: [
        'Worsening symptoms ko ignore na karein.',
        'Doctor consult kiye bina unknown medicines na lein.',
        'Stressful situations me panic na karein.',
      ],
      warningSigns: [
        'Breathing difficulty ya severe chest pain.',
        'Uncontrolled bleeding ya extreme pain.',
        'Dizziness, fainting ya severe weakness.',
      ],
      seekHelp: 'Agar discomfort badhe toh campus medical room visit karein ya 112 emergency call karein.',
      emergency: false,
      isDemo: true,
    },
  },
};

export function getDemoResponse(text: string, language: SupportedLanguage): SafetyGuidanceResponse {
  const query = (text || '').toLowerCase();
  
  const matchesKeyword = (keywords: string[]) => {
    return keywords.some(kw => {
      if (kw.length <= 3) {
        // Use word boundary for short keywords like tea, cut, etc.
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        return regex.test(query);
      }
      return query.includes(kw.toLowerCase());
    });
  };

  if (matchesKeyword(['burn', 'burning', 'jal gaya', 'jalna', 'fire', 'hot water', 'tea', 'scald', 'blister'])) {
    return DEMO_DATA.burn[language] || DEMO_DATA.burn.en;
  }
  
  if (matchesKeyword(['cut', 'finger', 'bleeding', 'bleed', 'glass', 'wound', 'chira', 'laceration', 'blood'])) {
    return DEMO_DATA.cut[language] || DEMO_DATA.cut.en;
  }
  
  if (matchesKeyword(['dizzy', 'dizziness', 'chakkar', 'faint', 'fainting', 'unsteady', 'lightheaded', 'headache', 'giddiness', 'woozy'])) {
    return DEMO_DATA.dizzy[language] || DEMO_DATA.dizzy.en;
  }
  
  if (matchesKeyword(['wire', 'electric', 'shock', 'current', 'taar', 'bijli', 'hazard', 'exposed', 'breaker', 'spark'])) {
    return DEMO_DATA.wire[language] || DEMO_DATA.wire.en;
  }
  
  return DEMO_DATA.generic[language] || DEMO_DATA.generic.en;
}

