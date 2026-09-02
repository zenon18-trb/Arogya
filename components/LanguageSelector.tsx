'use client';

import React from 'react';
import { SupportedLanguage } from '@/types/safety';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

const languages: { code: SupportedLanguage; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'हिंदी', nativeLabel: 'हिंदी' },
  { code: 'hinglish', label: 'Hinglish', nativeLabel: 'Hinglish' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-1 bg-gradient-to-r from-teal-50 to-indigo-50 p-1.5 rounded-2xl border border-teal-200/80 shadow-inner">
      <div className="pl-2 pr-1 text-teal-700 hidden sm:flex items-center">
        <Globe className="w-4 h-4 text-teal-600" />
      </div>
      <div className="flex gap-1">
        {languages.map((lang) => {
          const isActive = currentLanguage === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => onLanguageChange(lang.code)}
              className={`px-3 sm:px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-700/20 scale-105'
                  : 'text-slate-700 hover:text-teal-900 hover:bg-white/80'
              }`}
              title={lang.nativeLabel}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
