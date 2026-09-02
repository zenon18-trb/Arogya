export const EMERGENCY_CONFIG = {
  appName: 'AAROGYA',
  tagline: 'Smart guidance when every second matters.',
  supportingLine: 'Your AI-powered health & safety companion.',
  emergencyNumber: '112',
  campusSecurityNumber: '1800-011-2345', // Configurable campus security helpline
  campusMedicalNumber: '1800-011-7890',   // Configurable campus medical center
  nationalHelplines: [
    { label: 'National Emergency (All-in-one)', number: '112', description: 'Immediate police, fire, or ambulance dispatch' },
    { label: 'Ambulance', number: '108', description: 'National ambulance emergency services' },
    { label: 'Campus Security Desk', number: '1800-011-2345', description: 'Campus main gate / control room safety dispatch' },
    { label: 'Campus Health & Medical Centre', number: '1800-011-7890', description: 'On-campus first-aid clinic & medical staff' },
  ],
  maxImageSizeMB: 5,
  allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
};

export const DEMO_TRIGGERS = [
  'small burn',
  'cut on my finger',
  'feeling dizzy',
  'unsafe electrical wire',
];
