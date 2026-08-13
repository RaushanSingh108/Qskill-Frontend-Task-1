/**
 * Translation Service
 * Handles API calls to RapidAPI for text translation
 * Uses environment variables for API configuration
 */

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const API_ENDPOINT = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

// Supported languages
export const LANGUAGES = {
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  pt: 'Portuguese',
  ru: 'Russian',
  ja: 'Japanese',
  ko: 'Korean',
  zh: 'Chinese (Simplified)',
  ar: 'Arabic',
  hi: 'Hindi',
  nl: 'Dutch',
  pl: 'Polish',
  tr: 'Turkish',
  vi: 'Vietnamese',
};

/**
 * Validate that required environment variables are set
 * @throws {Error} If API credentials are missing
 */
function validateApiConfig() {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    throw new Error(
      'RapidAPI key not configured. Please set VITE_RAPIDAPI_KEY in your .env file.'
    );
  }
  if (!API_HOST) {
    throw new Error(
      'RapidAPI host not configured. Please set VITE_RAPIDAPI_HOST in your .env file.'
    );
  }
}

/**
 * Translate text from English to target language
 * @param {string} text - Text to translate
 * @param {string} targetLanguage - Target language code (e.g., 'es', 'fr')
 * @returns {Promise<string>} - Translated text
 * @throws {Error} - If translation fails
 */
export async function translateText(text, targetLanguage) {
  try {
    // Validate inputs
    if (!text || text.trim() === '') {
      throw new Error('Please enter text to translate');
    }

    if (!targetLanguage) {
      throw new Error('Please select a target language');
    }

    // Validate API configuration
    validateApiConfig();

    // Prepare request
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'en',
        to: targetLanguage,
        text: text,
      }),
    });

    if (!response.ok) {
      let errorDetails = '';
      try {
        const errorData = await response.json();
        errorDetails = JSON.stringify(errorData);
      } catch (e) {
        errorDetails = await response.text();
      }
      
      if (response.status === 401) {
        throw new Error('Invalid API credentials. Please check your .env file.');
      }
      if (response.status === 403) {
        console.error('API 403 Forbidden - Error Details:', errorDetails);
        throw new Error(
          `API access denied (403). The API key may not have access to this endpoint. ` +
          `Please verify your RapidAPI subscription for google-translate113. ` +
          `Details: ${errorDetails || 'No additional error information'}`
        );
      }
      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      if (response.status === 404) {
        throw new Error('API endpoint not found (404). The endpoint path may be incorrect.');
      }
      throw new Error(`API error: ${response.status}${errorDetails ? ` - ${errorDetails}` : ''}`);
    }

    const data = await response.json();

    // Validate response structure
    if (!data || !data.trans) {
      throw new Error('Unexpected API response format');
    }

    const translatedText = data.trans;

    if (!translatedText) {
      throw new Error('No translation returned');
    }

    return translatedText;
  } catch (error) {
    // Re-throw with meaningful message
    if (error instanceof TypeError) {
      throw new Error('Network error. Please check your connection.');
    }
    throw error;
  }
}

/**
 * Get available language options for UI
 * @returns {Array} - Array of {code, name} objects
 */
export function getLanguageOptions() {
  return Object.entries(LANGUAGES).map(([code, name]) => ({
    code,
    name,
  }));
}
