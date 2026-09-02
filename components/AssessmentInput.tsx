'use client';

import React from 'react';
import { Sparkles, ArrowRight, AlertCircle, Flame, Scissors, Zap, Activity } from 'lucide-react';
import { ImageUploader } from './ImageUploader';
import { SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';

interface AssessmentInputProps {
  text: string;
  onTextChange: (text: string) => void;
  image: { data: string; mimeType: string; name?: string; size?: number } | null;
  onImageChange: (image: { data: string; mimeType: string; name?: string; size?: number } | null) => void;
  onSubmit: () => void;
  isLoading: boolean;
  language: SupportedLanguage;
  errorMessage: string | null;
  onClearError: () => void;
  onError: (msg: string) => void;
}

export const AssessmentInput: React.FC<AssessmentInputProps> = ({
  text,
  onTextChange,
  image,
  onImageChange,
  onSubmit,
  isLoading,
  language,
  errorMessage,
  onClearError,
  onError,
}) => {
  const t = translations[language] || translations.en;

  const quickExamples = [
    {
      key: 'burn',
      label: t.quickExamples.burn,
      text: 'I burned my hand while making hot tea. The skin is red and painful.',
      icon: Flame,
      style: 'bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-900 border-amber-300/80 shadow-xs hover:border-amber-400',
      iconColor: 'text-amber-600',
    },
    {
      key: 'cut',
      label: t.quickExamples.cut,
      text: 'I accidentally cut my finger on a sharp glass edge. It is bleeding slowly.',
      icon: Scissors,
      style: 'bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 text-rose-900 border-rose-300/80 shadow-xs hover:border-rose-400',
      iconColor: 'text-rose-600',
    },
    {
      key: 'dizzy',
      label: t.quickExamples.dizzy,
      text: 'Feeling sudden dizziness, lightheadedness, and slight unsteadiness after playing sports.',
      icon: Activity,
      style: 'bg-gradient-to-r from-sky-50 to-cyan-50 hover:from-sky-100 hover:to-cyan-100 text-sky-900 border-sky-300/80 shadow-xs hover:border-sky-400',
      iconColor: 'text-sky-600',
    },
    {
      key: 'wire',
      label: t.quickExamples.wire,
      text: 'Found an exposed live electrical wire hanging loose near the campus walkway.',
      icon: Zap,
      style: 'bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 text-purple-900 border-purple-300/80 shadow-xs hover:border-purple-400',
      iconColor: 'text-purple-600',
    },
  ];

  const handleExampleClick = (exampleText: string) => {
    onTextChange(exampleText);
    onClearError();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !image) {
      onError(t.errorEmptyInput);
      return;
    }
    onSubmit();
  };

  return (
    <div className="relative group">
      {/* Colorful background glow backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500"></div>

      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-teal-100/90 shadow-2xl p-6 sm:p-9 space-y-7">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Main Textarea */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="situation-input"
                className="block text-sm sm:text-base font-extrabold text-slate-800 flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                <span>{t.heroTitle}</span>
              </label>
              <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                Text or Image
              </span>
            </div>

            <div className="relative">
              <textarea
                id="situation-input"
                rows={4}
                value={text}
                onChange={(e) => {
                  onTextChange(e.target.value);
                  if (errorMessage) onClearError();
                }}
                placeholder={t.inputPlaceholder}
                className="w-full p-4 sm:p-5 rounded-2xl border-2 border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-slate-900 placeholder:text-slate-400 text-base leading-relaxed resize-none transition-all outline-none font-medium shadow-inner"
              />
            </div>
          </div>

          {/* Category-Colored Quick Example Pills */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                {t.quickExamplesLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {quickExamples.map((ex) => {
                const Icon = ex.icon;
                return (
                  <button
                    key={ex.key}
                    type="button"
                    onClick={() => handleExampleClick(ex.text)}
                    className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-200 flex items-center gap-2.5 active:scale-98 text-left hover:-translate-y-0.5 cursor-pointer ${ex.style}`}
                  >
                    <div className="p-1.5 rounded-xl bg-white/90 shadow-2xs">
                      <Icon className={`w-4 h-4 ${ex.iconColor}`} />
                    </div>
                    <span className="flex-1">{ex.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Multimodal Image Input */}
          <ImageUploader
            image={image}
            onImageChange={(img) => {
              onImageChange(img);
              if (errorMessage) onClearError();
            }}
            language={language}
            onError={onError}
          />

          {/* Error Alert Display */}
          {errorMessage && (
            <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl text-red-800 text-sm flex items-start gap-3 animate-fade-in shadow-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
              <div className="flex-1">
                <p className="font-extrabold">{t.errorTitle}</p>
                <p className="text-xs mt-0.5 text-red-700 leading-relaxed font-medium">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Primary Action Button */}
          <button
            type="submit"
            disabled={isLoading || (!text.trim() && !image)}
            className={`w-full py-4 sm:py-4.5 px-6 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer animate-shimmer ${
              isLoading || (!text.trim() && !image)
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 hover:from-teal-700 hover:via-cyan-700 hover:to-indigo-700 active:scale-[0.99] text-white shadow-xl shadow-teal-600/30 hover:shadow-cyan-600/40 border border-teal-400/30'
            }`}
          >
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>{t.getGuidanceBtn}</span>
            <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
};
