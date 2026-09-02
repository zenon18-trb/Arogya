'use client';

import React from 'react';
import { SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';
import { FileText, Cpu, CheckCircle, Eye, Languages, ShieldAlert, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  language: SupportedLanguage;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ language }) => {
  const t = translations[language] || translations.en;

  const steps = [
    {
      number: t.howItWorksSteps.step1Num,
      title: t.howItWorksSteps.step1Title,
      desc: t.howItWorksSteps.step1Desc,
      icon: FileText,
      gradient: 'from-teal-500 to-cyan-500',
      bgGlow: 'from-teal-50 to-cyan-50 border-teal-200/90',
      iconColor: 'text-teal-600 bg-teal-100',
    },
    {
      number: t.howItWorksSteps.step2Num,
      title: t.howItWorksSteps.step2Title,
      desc: t.howItWorksSteps.step2Desc,
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600',
      bgGlow: 'from-cyan-50 to-blue-50 border-cyan-200/90',
      iconColor: 'text-cyan-600 bg-cyan-100',
    },
    {
      number: t.howItWorksSteps.step3Num,
      title: t.howItWorksSteps.step3Title,
      desc: t.howItWorksSteps.step3Desc,
      icon: CheckCircle,
      gradient: 'from-indigo-500 to-purple-600',
      bgGlow: 'from-indigo-50 to-purple-50 border-indigo-200/90',
      iconColor: 'text-indigo-600 bg-indigo-100',
    },
  ];

  const features = [
    {
      title: t.features.multimodalTitle,
      desc: t.features.multimodalDesc,
      icon: Eye,
      color: 'text-teal-700 bg-teal-100 border-teal-300',
      cardBg: 'bg-gradient-to-br from-teal-50/90 via-white to-cyan-50/90 border-teal-200/90',
    },
    {
      title: t.features.accessibleTitle,
      desc: t.features.accessibleDesc,
      icon: Languages,
      color: 'text-indigo-700 bg-indigo-100 border-indigo-300',
      cardBg: 'bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/90 border-indigo-200/90',
    },
    {
      title: t.features.safetyFirstTitle,
      desc: t.features.safetyFirstDesc,
      icon: ShieldAlert,
      color: 'text-rose-700 bg-rose-100 border-rose-300',
      cardBg: 'bg-gradient-to-br from-rose-50/90 via-white to-orange-50/90 border-rose-200/90',
    },
  ];

  return (
    <section className="space-y-12 py-10 border-t-2 border-teal-100">
      {/* 3 Step Process Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Simple 3-Step Protocol</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-slate-900 via-teal-950 to-indigo-950 bg-clip-text text-transparent tracking-tight">
          {t.howItWorksTitle}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 font-semibold">
          {t.howItWorksSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br ${s.bgGlow} border-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-4`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-3xl font-black bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}>
                  {s.number}
                </span>
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs ${s.iconColor}`}>
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-black text-base sm:text-lg text-slate-900">
                  {s.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3 Highlight Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border-2 ${f.cardBg} space-y-3.5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${f.color} shadow-xs`}>
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h4 className="font-black text-base sm:text-lg text-slate-900">
                {f.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
