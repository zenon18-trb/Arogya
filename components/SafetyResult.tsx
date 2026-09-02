'use client';

import React from 'react';
import { SafetyGuidanceResponse, SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';
import { SeverityBanner } from './SeverityBanner';
import { StepCard } from './StepCard';
import {
  AlertOctagon,
  Eye,
  Stethoscope,
  RotateCcw,
  PhoneCall,
  ShieldCheck,
  XCircle,
  Sparkles,
} from 'lucide-react';

interface SafetyResultProps {
  guidance: SafetyGuidanceResponse;
  language: SupportedLanguage;
  onNewAssessment: () => void;
  onOpenEmergency: () => void;
}

export const SafetyResult: React.FC<SafetyResultProps> = ({
  guidance,
  language,
  onNewAssessment,
  onOpenEmergency,
}) => {
  const t = translations[language] || translations.en;

  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      {/* Result Container Card with colorful ambient aura */}
      <div className="relative group">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 rounded-3xl blur-md opacity-35"></div>

        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-teal-100 shadow-2xl p-6 sm:p-9 space-y-7">
          {/* Header Title & Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-100 pb-4">
              <span className="text-xs font-black tracking-wider text-teal-800 uppercase flex items-center gap-2 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>{t.safetyGuidanceTitle}</span>
              </span>
              {guidance.isDemo && (
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 border border-amber-300 flex items-center gap-1.5 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.demoModeBadge}</span>
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-slate-900 via-teal-950 to-indigo-950 bg-clip-text text-transparent leading-tight">
              {guidance.title}
            </h2>

            <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              {guidance.summary}
            </p>
          </div>

          {/* Severity Banner */}
          <SeverityBanner
            severity={guidance.severity}
            language={language}
            emergency={guidance.emergency}
          />

          {/* Section: Here's what to do now */}
          <div className="space-y-3.5 pt-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-xs" />
              <span>{t.whatToDoTitle}</span>
            </h3>

            <div className="space-y-3">
              {guidance.steps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={index + 1}
                  instruction={step}
                />
              ))}
            </div>
          </div>

          {/* Section: DON'T DO THIS */}
          {guidance.dontDo && guidance.dontDo.length > 0 && (
            <div className="space-y-3.5 pt-2">
              <h3 className="text-base sm:text-lg font-black text-red-600 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <span>{t.dontDoTitle}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {guidance.dontDo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-red-50/90 to-rose-50/90 border-2 border-red-200 text-red-950 text-sm font-bold leading-relaxed shadow-2xs hover:border-red-300 transition-all"
                  >
                    <AlertOctagon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: WATCH FOR THESE SIGNS */}
          {guidance.warningSigns && guidance.warningSigns.length > 0 && (
            <div className="space-y-3.5 pt-2">
              <h3 className="text-base sm:text-lg font-black text-amber-800 flex items-center gap-2">
                <Eye className="w-5 h-5 text-amber-600" />
                <span>{t.watchSignsTitle}</span>
              </h3>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/70 border-2 border-amber-300 text-amber-950 text-sm space-y-2.5 shadow-2xs">
                <ul className="space-y-2.5">
                  {guidance.warningSigns.map((sign, idx) => (
                    <li key={idx} className="font-bold leading-relaxed flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Section: WHEN TO GET MEDICAL HELP */}
          {guidance.seekHelp && (
            <div className="space-y-3.5 pt-2">
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-indigo-600" />
                <span>{t.whenToSeekHelpTitle}</span>
              </h3>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-sky-50/60 to-teal-50/80 border-2 border-indigo-200 text-slate-900 text-sm sm:text-base font-bold leading-relaxed shadow-2xs">
                {guidance.seekHelp}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={onNewAssessment}
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-slate-800 bg-white hover:bg-slate-100 border-2 border-slate-200 shadow-md transition-all active:scale-95 cursor-pointer hover:-translate-y-0.5"
        >
          <RotateCcw className="w-4 h-4 text-teal-600" />
          <span>{t.newAssessmentBtn}</span>
        </button>

        <button
          type="button"
          onClick={onOpenEmergency}
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 shadow-xl shadow-red-600/30 transition-all active:scale-95 cursor-pointer border border-red-400/30 animate-emergency-glow hover:-translate-y-0.5"
        >
          <PhoneCall className="w-4 h-4 animate-bounce" />
          <span>{t.emergencyHelpBtn}</span>
        </button>
      </div>
    </div>
  );
};
