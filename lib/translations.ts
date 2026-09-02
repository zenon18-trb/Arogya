import { SupportedLanguage } from '@/types/safety';

export interface TranslationDictionary {
  tagline: string;
  supportingLine: string;
  heroTitle: string;
  heroSubtitle: string;
  inputPlaceholder: string;
  quickExamplesLabel: string;
  quickExamples: {
    burn: string;
    cut: string;
    dizzy: string;
    wire: string;
  };
  imageSectionTitle: string;
  imageUploadPrompt: string;
  imageUploadSubtext: string;
  imageRemove: string;
  imageReplace: string;
  getGuidanceBtn: string;
  loadingTitle: string;
  loadingMessages: string[];
  safetyGuidanceTitle: string;
  severityLabel: string;
  severityLevels: {
    low: string;
    medium: string;
    high: string;
    emergency: string;
  };
  whatToDoTitle: string;
  dontDoTitle: string;
  watchSignsTitle: string;
  whenToSeekHelpTitle: string;
  newAssessmentBtn: string;
  emergencyHelpBtn: string;
  emergencyModalTitle: string;
  emergencyModalWarning: string;
  callEmergencyBtn: string;
  campusContactsTitle: string;
  demoModeBadge: string;
  demoModeDesc: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  howItWorksSteps: {
    step1Num: string;
    step1Title: string;
    step1Desc: string;
    step2Num: string;
    step2Title: string;
    step2Desc: string;
    step3Num: string;
    step3Title: string;
    step3Desc: string;
  };
  features: {
    multimodalTitle: string;
    multimodalDesc: string;
    accessibleTitle: string;
    accessibleDesc: string;
    safetyFirstTitle: string;
    safetyFirstDesc: string;
  };
  disclaimer: string;
  errorTitle: string;
  errorDefault: string;
  errorEmptyInput: string;
  errorFileTooLarge: string;
  errorInvalidFormat: string;
  close: string;
}

export const translations: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    tagline: 'Smart guidance when every second matters.',
    supportingLine: 'Your AI-powered health & safety companion.',
    heroTitle: 'Need help right now?',
    heroSubtitle: 'Describe what happened or show us a picture. Aarogya will guide you through the safest next steps.',
    inputPlaceholder: 'Tell us what happened... (e.g., I spilled hot tea on my forearm, feeling dizzy after sports, cut finger on glass)',
    quickExamplesLabel: 'Quick examples:',
    quickExamples: {
      burn: 'Small burn',
      cut: 'Cut on my finger',
      dizzy: 'Feeling dizzy',
      wire: 'Unsafe electrical wire',
    },
    imageSectionTitle: 'Show us what happened',
    imageUploadPrompt: 'Upload or take a photo of the situation',
    imageUploadSubtext: 'Supported formats: JPG, JPEG, PNG, WEBP (Max 5MB)',
    imageRemove: 'Remove image',
    imageReplace: 'Change image',
    getGuidanceBtn: 'Get Safety Guidance',
    loadingTitle: 'Analyzing your situation...',
    loadingMessages: [
      'Checking the safest next steps...',
      'Preparing clear instructions...',
      'Almost ready...',
    ],
    safetyGuidanceTitle: 'SAFETY GUIDANCE',
    severityLabel: 'Severity Level',
    severityLevels: {
      low: 'LOW SEVERITY',
      medium: 'MODERATE CONCERN',
      high: 'HIGH URGENCY',
      emergency: 'CRITICAL EMERGENCY',
    },
    whatToDoTitle: "Here's what to do now",
    dontDoTitle: "DON'T DO THIS",
    watchSignsTitle: 'WATCH FOR THESE SIGNS',
    whenToSeekHelpTitle: 'WHEN TO GET MEDICAL HELP',
    newAssessmentBtn: 'New Assessment',
    emergencyHelpBtn: 'Emergency Help',
    emergencyModalTitle: 'Is this a serious emergency?',
    emergencyModalWarning: 'If someone is unconscious, having severe difficulty breathing, experiencing severe bleeding, chest pain, or another life-threatening emergency, contact emergency services immediately.',
    callEmergencyBtn: 'Call Emergency Services — 112',
    campusContactsTitle: 'Campus & Designated Emergency Helplines',
    demoModeBadge: 'Demo Mode Active',
    demoModeDesc: 'Running in offline demonstration mode with verified safety protocols.',
    howItWorksTitle: 'How Aarogya works',
    howItWorksSubtitle: 'Fast, structured, and multimodal response designed for high-stress campus situations.',
    howItWorksSteps: {
      step1Num: '01',
      step1Title: 'DESCRIBE',
      step1Desc: 'Tell Aarogya what happened using natural text or upload a clear photo.',
      step2Num: '02',
      step2Title: 'UNDERSTAND',
      step2Desc: 'Gemini multimodal AI analyzes the situation and evaluates immediate risks.',
      step3Num: '03',
      step3Title: 'ACT',
      step3Desc: 'Follow scannable, step-by-step first-aid protocols and escalation alerts.',
    },
    features: {
      multimodalTitle: 'MULTIMODAL',
      multimodalDesc: 'Understand situations accurately through text and live camera/image inputs.',
      accessibleTitle: 'ACCESSIBLE',
      accessibleDesc: 'Get clear, easy-to-read guidance in English, Hindi, or Hinglish.',
      safetyFirstTitle: 'SAFETY-FIRST',
      safetyFirstDesc: 'Strict non-diagnostic boundaries with instant one-tap emergency escalation.',
    },
    disclaimer: 'Aarogya provides general first-aid and safety information. It does not diagnose medical conditions or replace professional medical care or emergency services.',
    errorTitle: 'Unable to Complete Analysis',
    errorDefault: "We couldn't analyze this right now. If this is an emergency, contact emergency services directly.",
    errorEmptyInput: 'Please provide a text description or upload a photo to get guidance.',
    errorFileTooLarge: 'Image is too large. Please upload an image smaller than 5MB.',
    errorInvalidFormat: 'Unsupported format. Please upload JPG, PNG, or WEBP.',
    close: 'Close',
  },
  hi: {
    tagline: 'जब हर एक सेकंड महत्वपूर्ण हो, तब सही मार्गदर्शन।',
    supportingLine: 'आपका एआई-संचालित स्वास्थ्य एवं सुरक्षा साथी।',
    heroTitle: 'क्या आपको अभी मदद चाहिए?',
    heroSubtitle: 'बताएं कि क्या हुआ या तस्वीर दिखाएं। आरोग्य आपको सबसे सुरक्षित अगले कदमों में मार्गदर्शन देगा।',
    inputPlaceholder: 'बताएं क्या हुआ... (जैसे: हाथ पर गर्म चाय गिर गई, चक्कर आ रहे हैं, कांच से उंगली कट गई)',
    quickExamplesLabel: 'त्वरित उदाहरण:',
    quickExamples: {
      burn: 'हल्का जलना',
      cut: 'उंगली पर कट',
      dizzy: 'चक्कर आना',
      wire: 'खुला बिजली का तार',
    },
    imageSectionTitle: 'स्थिति की तस्वीर दिखाएं',
    imageUploadPrompt: 'स्थिति की फ़ोटो अपलोड करें या खींचें',
    imageUploadSubtext: 'समर्थित प्रारूप: JPG, JPEG, PNG, WEBP (अधिकतम 5MB)',
    imageRemove: 'तस्वीर हटाएं',
    imageReplace: 'तस्वीर बदलें',
    getGuidanceBtn: 'सुरक्षा मार्गदर्शन प्राप्त करें',
    loadingTitle: 'आपकी स्थिति का विश्लेषण किया जा रहा है...',
    loadingMessages: [
      'सबसे सुरक्षित कदमों की जांच हो रही है...',
      'स्पष्ट निर्देश तैयार किए जा रहे हैं...',
      'बस कुछ ही क्षणों में तैयार...',
    ],
    safetyGuidanceTitle: 'सुरक्षा मार्गदर्शन (SAFETY GUIDANCE)',
    severityLabel: 'गंभीरता स्तर',
    severityLevels: {
      low: 'कम गंभीरता (LOW)',
      medium: 'मध्यम स्तर (MEDIUM)',
      high: 'उच्च प्राथमिकता (HIGH)',
      emergency: 'गंभीर आपातकाल (EMERGENCY)',
    },
    whatToDoTitle: 'अब आपको क्या करना चाहिए',
    dontDoTitle: 'यह बिल्कुल न करें (DON’T DO THIS)',
    watchSignsTitle: 'इन लक्षणों पर नज़र रखें (WATCH FOR THESE SIGNS)',
    whenToSeekHelpTitle: 'डॉक्टर से संपर्क कब करें (WHEN TO GET MEDICAL HELP)',
    newAssessmentBtn: 'नया मूल्यांकन (New Assessment)',
    emergencyHelpBtn: 'आपातकालीन सहायता (Emergency Help)',
    emergencyModalTitle: 'क्या यह एक गंभीर आपात स्थिति है?',
    emergencyModalWarning: 'यदि कोई व्यक्ति बेहोश है, सांस लेने में अत्यधिक कठिनाई हो रही है, गंभीर रक्तस्राव हो रहा है, या सीने में तेज दर्द है, तो तुरंत आपातकालीन सेवाओं को कॉल करें।',
    callEmergencyBtn: 'आपातकालीन सेवा कॉल करें — 112',
    campusContactsTitle: 'कैंपस व आपातकालीन संपर्क नंबर',
    demoModeBadge: 'डेमो मोड सक्रिय',
    demoModeDesc: 'सत्यापित प्राथमिक चिकित्सा प्रोटोकॉल के साथ ऑफ़लाइन डेमो मोड में चल रहा है।',
    howItWorksTitle: 'आरोग्य कैसे काम करता है',
    howItWorksSubtitle: 'तनावपूर्ण परिस्थितियों में त्वरित, स्पष्ट और मल्टीमॉडल प्राथमिक सहायता।',
    howItWorksSteps: {
      step1Num: '01',
      step1Title: 'बताएं (DESCRIBE)',
      step1Desc: 'आरोग्य को अपनी भाषा में बताएं कि क्या हुआ या स्पष्ट फ़ोटो अपलोड करें।',
      step2Num: '02',
      step2Title: 'समझें (UNDERSTAND)',
      step2Desc: 'जेमिनी मल्टीमॉडल एआई स्थिति और जोखिम का त्वरित विश्लेषण करता है।',
      step3Num: '03',
      step3Title: 'कार्रवाई करें (ACT)',
      step3Desc: 'चरण-दर-चरण सुरक्षा प्रोटोकॉल और डॉक्टर से संपर्क के सुझाव अपनाएं।',
    },
    features: {
      multimodalTitle: 'मल्टीमॉडल (MULTIMODAL)',
      multimodalDesc: 'टेक्स्ट और लाइव कैमरा/फ़ोटो दोनों के माध्यम से स्थिति को समझें।',
      accessibleTitle: 'सुलभ (ACCESSIBLE)',
      accessibleDesc: 'अंग्रेजी, हिंदी और हिंग्लिश में आसान और त्वरित मार्गदर्शन पाएं।',
      safetyFirstTitle: 'सुरक्षा सर्वोपरि (SAFETY-FIRST)',
      safetyFirstDesc: 'सख्त गैर-निदान सीमाएं और एक क्लिक में 112 आपातकालीन कॉलिंग।',
    },
    disclaimer: 'आरोग्य केवल सामान्य प्राथमिक चिकित्सा और सुरक्षा जानकारी प्रदान करता है। यह चिकित्सीय निदान नहीं करता है और न ही पेशेवर चिकित्सा या आपातकालीन सेवाओं का विकल्प है।',
    errorTitle: 'विश्लेषण पूरा नहीं हो सका',
    errorDefault: 'हम अभी इसका विश्लेषण नहीं कर सके। यदि यह आपात स्थिति है, तो कृपया तुरंत आपातकालीन सेवाओं से संपर्क करें।',
    errorEmptyInput: 'कृपया मार्गदर्शन प्राप्त करने के लिए विवरण लिखें या फ़ोटो अपलोड करें।',
    errorFileTooLarge: 'फ़ाइल बहुत बड़ी है। कृपया 5MB से छोटी फ़ोटो चुनें।',
    errorInvalidFormat: 'असमर्थित प्रारूप। कृपया JPG, PNG या WEBP फ़ाइल का उपयोग करें।',
    close: 'बंद करें',
  },
  hinglish: {
    tagline: 'Smart guidance jab har ek second matter kare.',
    supportingLine: 'Aapka AI-powered health & safety companion.',
    heroTitle: 'Kya aapko abhi help chahiye?',
    heroSubtitle: 'Bataiye kya hua ya ek photo upload karein. Aarogya aapko safest next steps me guide karega.',
    inputPlaceholder: 'Bataiye kya hua... (e.g., Haath pe garam chai gir gayi, sports ke baad dizziness ho rahi hai, glass se ungli cut ho gayi)',
    quickExamplesLabel: 'Quick examples:',
    quickExamples: {
      burn: 'Halka burn (Small burn)',
      cut: 'Finger pe cut',
      dizzy: 'Chakkar aana (Dizziness)',
      wire: 'Khula bijli ka taar (Electrical wire)',
    },
    imageSectionTitle: 'Situation ki photo dikhayein',
    imageUploadPrompt: 'Situation ki photo upload karein ya click karein',
    imageUploadSubtext: 'Supported: JPG, JPEG, PNG, WEBP (Max 5MB)',
    imageRemove: 'Photo remove karein',
    imageReplace: 'Photo badlein',
    getGuidanceBtn: 'Safety Guidance Paayein',
    loadingTitle: 'Aapki situation analyze ho rahi hai...',
    loadingMessages: [
      'Safest next steps check kiye ja rahe hain...',
      'Clear step-by-step guidance prepare ho rahi hai...',
      'Bas ready hone wala hai...',
    ],
    safetyGuidanceTitle: 'SAFETY GUIDANCE',
    severityLabel: 'Severity Level',
    severityLevels: {
      low: 'LOW SEVERITY (Halka)',
      medium: 'MODERATE (Dhyaan dein)',
      high: 'HIGH URGENCY (Zaroori)',
      emergency: 'CRITICAL EMERGENCY (Aapaatkaal)',
    },
    whatToDoTitle: "Abhi kya karna hai (Here's what to do)",
    dontDoTitle: 'Yeh galti bilkul na karein (DON’T DO THIS)',
    watchSignsTitle: 'In signs par nazar rakhein (WATCH FOR THESE SIGNS)',
    whenToSeekHelpTitle: 'Doctor ke paas kab jayein (WHEN TO GET MEDICAL HELP)',
    newAssessmentBtn: 'Naya Assessment (New Assessment)',
    emergencyHelpBtn: 'Emergency Help',
    emergencyModalTitle: 'Kya yeh serious emergency hai?',
    emergencyModalWarning: 'Agar koi behosh hai, saans lene me heavy problem ho rahi hai, severe bleeding ho rahi hai ya chest pain hai, toh turant emergency services ko call karein.',
    callEmergencyBtn: 'Emergency Services Call Karein — 112',
    campusContactsTitle: 'Campus & Helplines Emergency Numbers',
    demoModeBadge: 'Demo Mode Active',
    demoModeDesc: 'Verified safety first-aid protocols ke saath offline mode me run ho raha hai.',
    howItWorksTitle: 'Aarogya kaise kaam karta hai',
    howItWorksSubtitle: 'Campus aur emergency situations me fast, clear aur multimodal safety guidance.',
    howItWorksSteps: {
      step1Num: '01',
      step1Title: 'DESCRIBE',
      step1Desc: 'Aarogya ko natural text me bataiye ya situation ki photo upload karein.',
      step2Num: '02',
      step2Title: 'UNDERSTAND',
      step2Desc: 'Gemini multimodal AI situation analyze karke instant safety check karta hai.',
      step3Num: '03',
      step3Title: 'ACT',
      step3Desc: 'Scannable first-aid steps follow karein aur zaroorat padne par doctor ko contact karein.',
    },
    features: {
      multimodalTitle: 'MULTIMODAL',
      multimodalDesc: 'Text aur camera/photo dono se situation ko accurately evaluate karta hai.',
      accessibleTitle: 'ACCESSIBLE',
      accessibleDesc: 'English, Hindi ya Hinglish me aasan aur scannable bhasha me guidance.',
      safetyFirstTitle: 'SAFETY-FIRST',
      safetyFirstDesc: 'Strict safety bounds ke saath direct 112 calling aur medical escalation.',
    },
    disclaimer: 'Aarogya sirf general first-aid aur safety information provide karta hai. Yeh koi medical diagnosis nahi deta aur professional medical care ya emergency services ka replacement nahi hai.',
    errorTitle: 'Analysis complete nahi ho paya',
    errorDefault: 'Hum abhi analyze nahi kar paye. Agar emergency hai toh turant emergency services ko call karein.',
    errorEmptyInput: 'Kripya situation ka description likhein ya photo upload karein.',
    errorFileTooLarge: 'Image size bohot bada hai. 5MB se choti image upload karein.',
    errorInvalidFormat: 'Unsupported format. JPG, PNG ya WEBP use karein.',
    close: 'Close',
  },
};
