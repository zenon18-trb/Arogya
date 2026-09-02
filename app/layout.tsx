import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AAROGYA — Smart Guidance When Every Second Matters',
  description:
    'AI-powered multimodal first-aid and safety companion using Google Gemini. Rapid, structured, step-by-step guidance for campus safety and minor medical emergencies.',
  keywords: [
    'Aarogya',
    'First Aid AI',
    'Gemini Multimodal',
    'Emergency Safety',
    'Campus Health',
    'First Aid Guidance',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0d9488',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
