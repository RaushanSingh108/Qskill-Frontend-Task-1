import { useState } from 'react';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import { translateText, getLanguageOptions } from '../services/translationService';

export default function Translator() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const languageOptions = getLanguageOptions();

  const handleTranslate = async () => {
    try {
      // Clear previous messages
      setError('');
      setSuccess('');
      setCopySuccess('');

      // Validate input
      if (!inputText.trim()) {
        setError('Please enter text to translate');
        return;
      }

      if (!targetLanguage) {
        setError('Please select a target language');
        return;
      }

      setLoading(true);
      const result = await translateText(inputText, targetLanguage);
      setTranslatedText(result);
      setSuccess('Translation completed successfully!');
    } catch (err) {
      setError(err.message || 'Translation failed. Please try again.');
      setTranslatedText('');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyTranslation = async () => {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(translatedText);
      setCopySuccess('Translation copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  const handleCopyInput = async () => {
    if (!inputText) return;

    try {
      await navigator.clipboard.writeText(inputText);
      setCopySuccess('Text copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  const handleClear = () => {
    setInputText('');
    setTranslatedText('');
    setError('');
    setSuccess('');
    setCopySuccess('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleTranslate();
    }
  };

  return (
    <PageContainer
      title="Text Translator"
      subtitle="Translate English text to multiple languages using AI-powered translation. Configure your RapidAPI credentials in .env to enable translations."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">English Text</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Text to Translate
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter English text here... (Ctrl+Enter to translate)"
              className="input-base h-48 resize-none"
              aria-label="Text to translate"
            />
            <p className="text-xs text-gray-500 mt-2">
              {inputText.length} characters
            </p>
          </div>

          {inputText && (
            <div className="flex gap-2 mb-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleCopyInput}
              >
                📋 Copy Text
              </Button>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-2">
              Target Language
            </label>
            <select
              id="language-select"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="input-base"
              aria-label="Target language for translation"
            >
              <option value="">-- Select Language --</option>
              {languageOptions.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <Button
              variant="primary"
              onClick={handleTranslate}
              disabled={loading || !inputText.trim() || !targetLanguage}
              className="w-full"
            >
              {loading ? (
                <>
                  <span className="inline-block animate-spin mr-2">⟳</span>
                  Translating...
                </>
              ) : (
                '🌐 Translate'
              )}
            </Button>

            {inputText && (
              <Button
                variant="secondary"
                onClick={handleClear}
                className="w-full"
              >
                🔄 Clear
              </Button>
            )}
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Translated Text</h2>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                <span className="font-semibold">Error:</span> {error}
              </p>
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                <span className="font-semibold">✓</span> {success}
              </p>
            </div>
          )}

          {copySuccess && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">✓</span> {copySuccess}
              </p>
            </div>
          )}

          <div className="mb-4">
            {translatedText ? (
              <div className="bg-gray-50 rounded-lg p-4 min-h-48 border border-gray-200">
                <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                  {translatedText}
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 min-h-48 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  {loading ? 'Translating...' : 'Translation will appear here'}
                </p>
              </div>
            )}
          </div>

          {translatedText && (
            <Button
              variant="success"
              onClick={handleCopyTranslation}
              className="w-full"
            >
              📋 Copy Translation
            </Button>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12 bg-blue-50 rounded-xl border border-blue-200 p-8">
        <h3 className="text-lg font-bold text-blue-900 mb-3">ℹ️ Configuration Information</h3>
        <p className="text-blue-800 mb-3">
          This translator uses the RapidAPI Translation service. To enable translations:
        </p>
        <ol className="text-blue-800 space-y-2 list-decimal list-inside">
          <li>Sign up at <a href="https://rapidapi.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">rapidapi.com</a></li>
          <li>Subscribe to a translation API (e.g., Google Translate API)</li>
          <li>Create a <code className="bg-white px-2 py-1 rounded">.env</code> file in the project root</li>
          <li>Copy values from <code className="bg-white px-2 py-1 rounded">.env.example</code> and add your API credentials</li>
          <li>Restart the development server</li>
        </ol>
      </div>
    </PageContainer>
  );
}
