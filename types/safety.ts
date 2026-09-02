export type SeverityLevel = 'low' | 'medium' | 'high' | 'emergency';

export type SupportedLanguage = 'en' | 'hi' | 'hinglish';

export interface SafetyGuidanceResponse {
  title: string;
  severity: SeverityLevel;
  summary: string;
  steps: string[];
  dontDo: string[];
  warningSigns: string[];
  seekHelp: string;
  emergency: boolean;
  isDemo?: boolean;
}

export interface AnalyzeRequestPayload {
  text?: string;
  image?: {
    data: string; // base64 data string (without header) or full data URL
    mimeType: string;
  };
  language: SupportedLanguage;
}

export interface EmergencyContact {
  label: string;
  number: string;
  description: string;
  isPrimary?: boolean;
}
