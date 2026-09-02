import { NextRequest, NextResponse } from 'next/server';
import { analyzeWithGemini } from '@/lib/gemini';
import { getDemoResponse } from '@/lib/demo';
import { SupportedLanguage } from '@/types/safety';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text = '', image = null, language = 'en' } = body;

    const selectedLang: SupportedLanguage = ['en', 'hi', 'hinglish'].includes(language)
      ? language
      : 'en';

    // Validate that at least text or image is supplied
    const trimmedText = typeof text === 'string' ? text.trim() : '';
    if (!trimmedText && (!image || !image.data)) {
      return NextResponse.json(
        { error: 'Please provide a text description or an image of the situation.' },
        { status: 400 }
      );
    }

    // Validate image format if provided
    if (image && image.data) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (image.mimeType && !allowedTypes.includes(image.mimeType.toLowerCase())) {
        return NextResponse.json(
          { error: 'Unsupported image format. Please use JPG, PNG, or WEBP.' },
          { status: 400 }
        );
      }
      
      // Check approximate base64 size (5MB ~ 6.7MB base64 string)
      if (typeof image.data === 'string' && image.data.length > 7 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Image is too large. Maximum allowed size is 5MB.' },
          { status: 400 }
        );
      }
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If API key is missing or blank, use DEMO MODE automatically
    if (!apiKey || apiKey.trim() === '' || apiKey === 'your_gemini_api_key_here') {
      console.log('No valid GEMINI_API_KEY detected. Serving safety guidance via Demo Mode.');
      const demoResult = getDemoResponse(trimmedText, selectedLang);
      return NextResponse.json(demoResult);
    }

    try {
      const geminiResult = await analyzeWithGemini(trimmedText, image, selectedLang);
      return NextResponse.json(geminiResult);
    } catch (geminiError: any) {
      console.warn('Gemini call encountered error, providing verified demo fallback:', geminiError?.message || geminiError);
      
      // Fall back to safe verified response
      const fallbackResult = getDemoResponse(trimmedText, selectedLang);
      return NextResponse.json({
        ...fallbackResult,
        isDemo: true,
      });
    }
  } catch (err: any) {
    console.error('API /api/analyze error:', err);
    return NextResponse.json(
      {
        error: "We couldn't analyze this right now. If this is an emergency, contact emergency services directly at 112.",
      },
      { status: 500 }
    );
  }
}
