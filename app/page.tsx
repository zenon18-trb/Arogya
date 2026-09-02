'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { AssessmentInput } from '@/components/AssessmentInput';
import { LoadingState } from '@/components/LoadingState';
import { SafetyResult } from '@/components/SafetyResult';
import { EmergencyModal } from '@/components/EmergencyModal';
import { HowItWorks } from '@/components/HowItWorks';
import { Disclaimer } from '@/components/Disclaimer';
import { SupportedLanguage, SafetyGuidanceResponse } from '@/types/safety';
import { translations } from '@/lib/translations';
import { Sparkles, HeartPulse, Shield, Zap } from 'lucide-react';

interface AttachedImage {
  data: string;
  mimeType: string;
  name?: string;
  size?: number;
}

export default function Home() {
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [text, setText] = useState('');
  const [image, setImage] = useState<AttachedImage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [guidanceResult, setGuidanceResult] = useState<SafetyGuidanceResponse | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const t = translations[language] || translations.en;

  const handleAnalyze = async () => {
    if (!text.trim() && !image) {
      setErrorMessage(t.errorEmptyInput);
      return;
    }

    setErrorMessage(null);
    setIsLoading(true);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text.trim(),
          image: image
            ? {
                data: image.data,
                mimeType: image.mimeType,
              }
            : null,
          language: language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.errorDefault);
      }

      setGuidanceResult(data);
      if (data.isDemo) {
        setIsDemoMode(true);
      }
    } catch (err: any) {
      console.error('Analysis failed:', err);
      setErrorMessage(err.message || t.errorDefault);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewAssessment = () => {
    setGuidanceResult(null);
    setText('');
    setImage(null);
    setErrorMessage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Background colorful ambient glow orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-300/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <Header
        currentLanguage={language}
        onLanguageChange={(newLang) => setLanguage(newLang)}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        isDemoMode={isDemoMode || guidanceResult?.isDemo}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
        {/* If Not Viewing Result & Not Loading, Show Hero */}
        {!guidanceResult && !isLoading && (
          <div className="text-center space-y-5 max-w-3xl mx-auto pt-2 sm:pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/15 via-cyan-500/15 to-indigo-500/15 border-2 border-teal-300/80 text-teal-900 text-xs sm:text-sm font-extrabold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-teal-600 animate-pulse" />
              <span>{t.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.15]">
              <span className="bg-gradient-to-r from-slate-900 via-teal-950 to-indigo-950 bg-clip-text text-transparent">
                {t.heroTitle}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-2xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        )}

        {/* Dynamic State Rendering */}
        {isLoading ? (
          <LoadingState language={language} />
        ) : guidanceResult ? (
          <SafetyResult
            guidance={guidanceResult}
            language={language}
            onNewAssessment={handleNewAssessment}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        ) : (
          <div className="max-w-2xl mx-auto">
            <AssessmentInput
              text={text}
              onTextChange={setText}
              image={image}
              onImageChange={setImage}
              onSubmit={handleAnalyze}
              isLoading={isLoading}
              language={language}
              errorMessage={errorMessage}
              onClearError={() => setErrorMessage(null)}
              onError={(msg) => setErrorMessage(msg)}
            />
          </div>
        )}

        {/* How It Works Section */}
        {!guidanceResult && !isLoading && (
          <HowItWorks language={language} />
        )}

        {/* Disclaimer Footer */}
        <Disclaimer language={language} />
      </main>

      {/* Emergency Modal */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        language={language}
      />
    </div>
  );
}
