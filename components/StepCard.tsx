'use client';

import React from 'react';

interface StepCardProps {
  stepNumber: number;
  instruction: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  instruction,
}) => {
  const formattedNumber = stepNumber < 10 ? `0${stepNumber}` : `${stepNumber}`;

  const colors = [
    'from-teal-600 to-cyan-600 shadow-teal-600/30',
    'from-cyan-600 to-blue-600 shadow-cyan-600/30',
    'from-blue-600 to-indigo-600 shadow-blue-600/30',
    'from-indigo-600 to-purple-600 shadow-indigo-600/30',
    'from-purple-600 to-pink-600 shadow-purple-600/30',
  ];

  const badgeColor = colors[(stepNumber - 1) % colors.length];

  return (
    <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white via-slate-50/50 to-teal-50/20 border-2 border-slate-200/90 shadow-sm hover:border-teal-400 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <div
        className={`flex-shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br ${badgeColor} flex items-center justify-center text-white font-black text-base sm:text-lg shadow-md group-hover:scale-105 transition-transform`}
      >
        {formattedNumber}
      </div>
      <div className="flex-1 pt-1.5 sm:pt-2">
        <p className="text-slate-900 font-bold text-sm sm:text-base leading-relaxed">
          {instruction}
        </p>
      </div>
    </div>
  );
};
