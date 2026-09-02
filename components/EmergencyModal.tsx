'use client';

import React, { useEffect } from 'react';
import { PhoneCall, AlertTriangle, Shield, HeartPulse, X, ExternalLink } from 'lucide-react';
import { EMERGENCY_CONFIG } from '@/lib/config';
import { SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: SupportedLanguage;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = translations[language] || translations.en;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="emergency-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden animate-slide-up">
        {/* Red Warning Banner Header */}
        <div className="bg-red-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-700/80 rounded-full">
              <AlertTriangle className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 id="emergency-modal-title" className="font-bold text-lg leading-tight">
                {t.emergencyModalTitle}
              </h2>
              <p className="text-xs text-red-100 uppercase tracking-wider font-medium">
                Immediate Action Required
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-red-100 hover:text-white p-1.5 hover:bg-red-700/60 rounded-lg transition-colors"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-950 text-sm leading-relaxed font-medium">
            {t.emergencyModalWarning}
          </div>

          {/* Primary Action Button: 112 */}
          <div>
            <a
              href={`tel:${EMERGENCY_CONFIG.emergencyNumber}`}
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-red-600/30 transition-all duration-200 animate-emergency-glow"
            >
              <PhoneCall className="w-6 h-6 animate-pulse" />
              <span>{t.callEmergencyBtn}</span>
            </a>
            <p className="text-center text-xs text-slate-500 mt-2">
              National Universal Emergency Services (Police • Fire • Ambulance)
            </p>
          </div>

          {/* Campus & Secondary Helplines */}
          <div className="border-t border-slate-200 pt-5">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              {t.campusContactsTitle}
            </h3>
            <div className="space-y-2.5">
              {EMERGENCY_CONFIG.nationalHelplines.map((contact, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm text-slate-700">
                      {contact.label.includes('Campus') ? (
                        <Shield className="w-4 h-4 text-brand-600" />
                      ) : (
                        <HeartPulse className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{contact.label}</p>
                      <p className="text-xs text-slate-500">{contact.description}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${contact.number}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white hover:bg-brand-700 text-xs font-semibold rounded-lg shadow-sm transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{contact.number}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
