import { GoogleGenerativeAI } from '@google/generative-ai';
import { SafetyGuidanceResponse, SupportedLanguage, SeverityLevel } from '@/types/safety';

const SYSTEM_INSTRUCTION = `
You are AAROGYA, an AI-powered first-aid and safety companion for campus students and individuals facing minor emergencies or physical safety hazards.

YOUR CORE DIRECTIVES:
1. Provide general first-aid and situational safety information ONLY.
2. You do NOT diagnose medical conditions or provide medical prescriptions.
3. Never claim clinical certainty from an image. If image interpretation is uncertain, explicitly state uncertainty.
4. Never provide dangerous or unverified home remedies.
5. Prioritize immediate safety, scene security, and life-preservation first.
6. Clearly identify potentially life-threatening situations (severe bleeding, chest pain, loss of consciousness, anaphylaxis, severe electrical shock).
7. For serious emergencies, set "severity" to "emergency", "emergency": true, and tell the user to contact 112 / emergency services immediately. Never tell a user to wait for Aarogya when emergency care is needed.
8. Keep step-by-step instructions numbered, short, practical, action-oriented, and extremely easy to scan under stress.
9. Include crucial "dontDo" actions (e.g. do not put ice/toothpaste on burns, do not touch exposed live wires, do not move injured spine).
10. Include scannable "warningSigns" indicating when a minor issue is worsening.
11. Include a clear "seekHelp" recommendation specifying when to visit the campus medical centre or emergency clinic.
12. For physical hazards (e.g. electrical wires, fire, chemical leaks, structural hazards), prioritize keeping at least 10 meters distance, alerting bystanders, and calling security/fire department.
13. ALWAYS respond strictly in the requested LANGUAGE (English for 'en', Hindi in Devanagari script for 'hi', and natural Romanized Hindi/English conversational Hinglish for 'hinglish').

OUTPUT FORMAT:
You MUST respond ONLY with valid JSON matching this exact structure:
{
  "title": "Concise situation title",
  "severity": "low" | "medium" | "high" | "emergency",
  "summary": "1-2 sentence scannable overview of the situation and immediate priority",
  "steps": [
    "Clear, immediate action step 1",
    "Clear, immediate action step 2",
    "Clear, immediate action step 3",
    "Clear, immediate action step 4"
  ],
  "dontDo": [
    "Dangerous practice to avoid 1",
    "Dangerous practice to avoid 2"
  ],
  "warningSigns": [
    "Red-flag symptom or progression sign 1",
    "Red-flag symptom or progression sign 2"
  ],
  "seekHelp": "Clear recommendation on when to seek professional medical or security care",
  "emergency": false
}
`;

function parseAndValidateResponse(rawText: string): SafetyGuidanceResponse {
  // Clean markdown code fence if present
  let cleaned = rawText.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }

  const parsed = JSON.parse(cleaned);

  const validSeverities: SeverityLevel[] = ['low', 'medium', 'high', 'emergency'];
  const severity: SeverityLevel = validSeverities.includes(parsed.severity?.toLowerCase())
    ? (parsed.severity.toLowerCase() as SeverityLevel)
    : 'medium';

  return {
    title: typeof parsed.title === 'string' && parsed.title ? parsed.title : 'Safety Guidance Protocol',
    severity: severity,
    summary: typeof parsed.summary === 'string' && parsed.summary ? parsed.summary : 'Follow the safety instructions below.',
    steps: Array.isArray(parsed.steps) && parsed.steps.length > 0
      ? parsed.steps.map((s: unknown) => String(s))
      : ['Ensure immediate safety and rest.', 'Monitor symptoms closely.'],
    dontDo: Array.isArray(parsed.dontDo) ? parsed.dontDo.map((d: unknown) => String(d)) : [],
    warningSigns: Array.isArray(parsed.warningSigns) ? parsed.warningSigns.map((w: unknown) => String(w)) : [],
    seekHelp: typeof parsed.seekHelp === 'string' && parsed.seekHelp ? parsed.seekHelp : 'Contact campus medical services if symptoms persist.',
    emergency: Boolean(parsed.emergency) || severity === 'emergency',
    isDemo: false,
  };
}

export async function analyzeWithGemini(
  text: string,
  image: { data: string; mimeType: string } | null,
  language: SupportedLanguage
): Promise<SafetyGuidanceResponse> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey === 'your_gemini_api_key_here') {
    throw new Error('MISSING_API_KEY');
  }

  const langNames: Record<SupportedLanguage, string> = {
    en: 'English',
    hi: 'Hindi (हिंदी in Devanagari script)',
    hinglish: 'Hinglish (Conversational Romanized Hindi blended with English, commonly used in India)',
  };

  const userPrompt = `
User Situation Report:
${text ? `Description: "${text}"` : 'No text description provided; please analyze the uploaded image carefully.'}
${image ? 'An image of the situation or injury is attached.' : ''}

Target Response Language: ${langNames[language] || 'English'}

Provide structured JSON guidance according to system instructions.
`;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    // Use gemini-1.5-flash as the fast, multimodal model
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const parts: Array<string | { inlineData: { data: string; mimeType: string } }> = [userPrompt];

    if (image && image.data) {
      // Strip data url prefix if present
      const base64Data = image.data.includes('base64,')
        ? image.data.split('base64,')[1]
        : image.data;

      parts.push({
        inlineData: {
          data: base64Data,
          mimeType: image.mimeType || 'image/jpeg',
        },
      });
    }

    const result = await model.generateContent(parts);
    const responseText = result.response.text();
    return parseAndValidateResponse(responseText);
  } catch (sdkError: any) {
    console.warn('Gemini SDK attempt failed or fallback needed:', sdkError?.message || sdkError);
    
    // Fallback: Direct REST API call to Google Generative Language API
    try {
      const restUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      
      const contentsParts: any[] = [{ text: `${SYSTEM_INSTRUCTION}\n\n${userPrompt}` }];
      
      if (image && image.data) {
        const base64Data = image.data.includes('base64,')
          ? image.data.split('base64,')[1]
          : image.data;
        contentsParts.push({
          inline_data: {
            mime_type: image.mimeType || 'image/jpeg',
            data: base64Data,
          },
        });
      }

      const restResponse = await fetch(restUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: contentsParts }],
          generationConfig: {
            temperature: 0.2,
          },
        }),
      });

      if (!restResponse.ok) {
        const errText = await restResponse.text();
        throw new Error(`Gemini REST API error: ${restResponse.status} ${errText}`);
      }

      const restJson = await restResponse.json();
      const rawContent = restJson.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawContent) {
        throw new Error('Empty response from Gemini REST API');
      }

      return parseAndValidateResponse(rawContent);
    } catch (fallbackError) {
      console.error('All Gemini API attempts failed:', fallbackError);
      throw fallbackError;
    }
  }
}
