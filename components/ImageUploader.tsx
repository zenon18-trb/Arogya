'use client';

import React, { useRef, useState, ChangeEvent } from 'react';
import { Camera, Upload, Trash2, RefreshCw, Image as ImageIcon, Sparkles } from 'lucide-react';
import { SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';
import { EMERGENCY_CONFIG } from '@/lib/config';

interface ImageData {
  data: string;
  mimeType: string;
  name?: string;
  size?: number;
}

interface ImageUploaderProps {
  image: ImageData | null;
  onImageChange: (image: ImageData | null) => void;
  language: SupportedLanguage;
  onError: (msg: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  image,
  onImageChange,
  language,
  onError,
}) => {
  const t = translations[language] || translations.en;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    if (!file) return;

    if (!EMERGENCY_CONFIG.allowedMimeTypes.includes(file.type.toLowerCase())) {
      onError(t.errorInvalidFormat);
      return;
    }

    const maxBytes = EMERGENCY_CONFIG.maxImageSizeMB * 1024 * 1024;
    if (file.size > maxBytes) {
      onError(t.errorFileTooLarge);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onImageChange({
          data: result,
          mimeType: file.type || 'image/jpeg',
          name: file.name,
          size: file.size,
        });
      }
    };
    reader.onerror = () => {
      onError(t.errorDefault);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <label className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
          <div className="p-1 rounded-lg bg-teal-100 text-teal-700">
            <ImageIcon className="w-4 h-4" />
          </div>
          <span>{t.imageSectionTitle}</span>
          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
            Vision AI
          </span>
        </label>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/jpg"
        className="hidden"
        onChange={handleFileInput}
      />

      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileInput}
      />

      {!image ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all cursor-pointer ${
            isDragging
              ? 'border-teal-500 bg-teal-50/80 shadow-md'
              : 'border-teal-200/90 hover:border-teal-400 bg-gradient-to-br from-teal-50/40 via-cyan-50/30 to-indigo-50/40 hover:bg-white shadow-xs'
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
              <Upload className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm font-extrabold text-slate-800">
                {t.imageUploadPrompt}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                {t.imageUploadSubtext}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="px-4 py-2 bg-white border border-teal-200 rounded-xl text-xs font-bold text-teal-800 hover:bg-teal-50 shadow-xs flex items-center gap-2 hover:border-teal-300 transition-all cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5 text-teal-600" />
                <span>Upload Image</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  cameraInputRef.current?.click();
                }}
                className="px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 sm:hidden hover:opacity-95 cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Capture Photo</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl border-2 border-teal-200 bg-gradient-to-r from-teal-50/80 via-white to-cyan-50/80 p-3.5 shadow-sm overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-200 border-2 border-teal-300 flex-shrink-0 shadow-md">
              <img
                src={image.data}
                alt="Uploaded situation preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-slate-900 truncate">
                  {image.name || 'Situation Photo Attached'}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Ready
                </span>
              </div>

              <p className="text-xs text-slate-500 font-medium">
                {image.size ? `${(image.size / 1024).toFixed(1)} KB • Verified` : 'Ready for Gemini analysis'}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 bg-white border border-teal-200 px-3 py-1.5 rounded-xl shadow-2xs hover:bg-teal-50 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-teal-600" />
                  <span>{t.imageReplace}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onImageChange(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 border border-red-200 px-3 py-1.5 rounded-xl shadow-2xs hover:bg-red-100 transition-all cursor-pointer"
                >
                  <Trash2 className="w-3 h-3 text-red-500" />
                  <span>{t.imageRemove}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
