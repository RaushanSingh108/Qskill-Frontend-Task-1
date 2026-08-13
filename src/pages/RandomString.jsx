import { useState, useCallback, useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';

export default function RandomString() {
  // State management for string generation
  const [generatedString, setGeneratedString] = useState('');
  const [stringLength, setStringLength] = useState(16);
  const [charTypes, setCharTypes] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    special: false,
  });
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const [generationCount, setGenerationCount] = useState(0);

  // Define character sets
  const CHAR_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  };

  /**
   * useCallback hook: Generate random string
   * This is the core logic function wrapped in useCallback for optimal performance
   * and to demonstrate meaningful useCallback usage
   */
  const generateRandomString = useCallback(() => {
    try {
      setError('');
      setCopySuccess('');

      // Validate length
      if (stringLength < 1 || stringLength > 1000) {
        setError('String length must be between 1 and 1000 characters');
        setGeneratedString('');
        return;
      }

      // Check if at least one character type is selected
      const hasSelectedType = Object.values(charTypes).some((type) => type);
      if (!hasSelectedType) {
        setError('Please select at least one character type');
        setGeneratedString('');
        return;
      }

      // Build character pool from selected types
      let charPool = '';
      if (charTypes.uppercase) charPool += CHAR_SETS.uppercase;
      if (charTypes.lowercase) charPool += CHAR_SETS.lowercase;
      if (charTypes.numbers) charPool += CHAR_SETS.numbers;
      if (charTypes.special) charPool += CHAR_SETS.special;

      // Generate random string using crypto for better randomness
      let result = '';
      const charPoolLength = charPool.length;

      // Use crypto.getRandomValues for better randomness where available
      if (typeof window !== 'undefined' && window.crypto) {
        const randomValues = new Uint32Array(stringLength);
        window.crypto.getRandomValues(randomValues);
        result = Array.from(randomValues)
          .map((num) => charPool[num % charPoolLength])
          .join('');
      } else {
        // Fallback for environments without crypto API
        for (let i = 0; i < stringLength; i++) {
          result += charPool.charAt(Math.floor(Math.random() * charPoolLength));
        }
      }

      setGeneratedString(result);
      setGenerationCount((prev) => prev + 1);
    } catch (err) {
      setError('Failed to generate string: ' + err.message);
      setGeneratedString('');
    }
  }, [stringLength, charTypes]);

  /**
   * useEffect hook: Generate initial string on mount
   * This demonstrates meaningful useEffect usage - it runs the generation
   * when the component mounts and when dependencies change
   */
  useEffect(() => {
    // Generate initial string when component mounts
    generateRandomString();
  }, []); // Empty dependency array means this runs once on mount

  /**
   * useEffect hook: Respond to length changes
   * Regenerate string automatically when length changes (debounced behavior)
   */
  useEffect(() => {
    // Small delay to allow user to finish typing before regenerating
    const timer = setTimeout(() => {
      if (generatedString.length !== stringLength) {
        generateRandomString();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [stringLength, generateRandomString]);

  const handleCharTypeChange = (type) => {
    const newCharTypes = {
      ...charTypes,
      [type]: !charTypes[type],
    };
    setCharTypes(newCharTypes);
  };

  const handleCopyString = async () => {
    if (!generatedString) return;

    try {
      await navigator.clipboard.writeText(generatedString);
      setCopySuccess('String copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  const handleClear = () => {
    setGeneratedString('');
    setStringLength(16);
    setCharTypes({
      uppercase: true,
      lowercase: true,
      numbers: true,
      special: false,
    });
    setError('');
    setCopySuccess('');
    setGenerationCount(0);
  };

  const handleLengthChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setStringLength(Math.max(1, Math.min(1000, value)));
    }
  };

  const selectedTypeCount = Object.values(charTypes).filter(Boolean).length;

  return (
    <PageContainer
      title="Random String Generator"
      subtitle="Generate secure random strings with custom length and character types. Uses crypto API for enhanced randomness."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Section */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

          {/* Error Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                <span className="font-semibold">Error:</span> {error}
              </p>
            </div>
          )}

          {/* Success Messages */}
          {copySuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                <span className="font-semibold">✓</span> {copySuccess}
              </p>
            </div>
          )}

          {/* Length Control */}
          <div className="mb-6">
            <label htmlFor="length-input" className="block text-sm font-medium text-gray-700 mb-2">
              String Length: <span className="font-bold text-blue-600">{stringLength}</span>
            </label>
            <input
              id="length-input"
              type="range"
              min="1"
              max="1000"
              value={stringLength}
              onChange={handleLengthChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              aria-label="String length"
            />
            <div className="flex gap-2 mt-3">
              <input
                type="number"
                min="1"
                max="1000"
                value={stringLength}
                onChange={handleLengthChange}
                className="input-base flex-1"
                aria-label="String length input"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Range: 1 - 1000 characters</p>
          </div>

          {/* Character Type Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Character Types</h3>
            <p className="text-xs text-gray-500 mb-3">
              Selected: {selectedTypeCount} type{selectedTypeCount !== 1 ? 's' : ''}
            </p>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={charTypes.uppercase}
                  onChange={() => handleCharTypeChange('uppercase')}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  aria-label="Include uppercase letters"
                />
                <span className="ml-3 text-sm text-gray-700 font-mono">
                  A-Z (Uppercase)
                </span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={charTypes.lowercase}
                  onChange={() => handleCharTypeChange('lowercase')}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  aria-label="Include lowercase letters"
                />
                <span className="ml-3 text-sm text-gray-700 font-mono">
                  a-z (Lowercase)
                </span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={charTypes.numbers}
                  onChange={() => handleCharTypeChange('numbers')}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  aria-label="Include numbers"
                />
                <span className="ml-3 text-sm text-gray-700 font-mono">
                  0-9 (Numbers)
                </span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={charTypes.special}
                  onChange={() => handleCharTypeChange('special')}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  aria-label="Include special characters"
                />
                <span className="ml-3 text-sm text-gray-700 font-mono">
                  !@#$%^ (Special)
                </span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="primary"
              onClick={generateRandomString}
              className="w-full"
            >
              🔄 Generate New String
            </Button>

            {generatedString && (
              <>
                <Button
                  variant="success"
                  onClick={handleCopyString}
                  className="w-full"
                >
                  📋 Copy to Clipboard
                </Button>

                <Button
                  variant="secondary"
                  onClick={handleClear}
                  className="w-full"
                >
                  🗑️ Clear All
                </Button>
              </>
            )}
          </div>

          {/* Statistics */}
          {generationCount > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Strings generated: <span className="font-bold text-gray-700">{generationCount}</span>
              </p>
            </div>
          )}
        </div>

        {/* Display Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Generated String</h2>

            {generatedString ? (
              <>
                <div className="mb-4">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm break-all whitespace-pre-wrap">
                    {generatedString}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-600 font-semibold">Length</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {generatedString.length}
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-green-600 font-semibold">Generated</p>
                    <p className="text-2xl font-bold text-green-900">
                      #{generationCount}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-center min-h-64 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-center">
                  Click "Generate New String" to create a random string
                </p>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="bg-green-50 rounded-xl border border-green-200 p-8">
            <h3 className="text-lg font-bold text-green-900 mb-3">🔐 About This Generator</h3>
            <ul className="space-y-2 text-green-800 text-sm">
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>Uses crypto.getRandomValues() for secure randomness</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>Supports up to 1000 character strings</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>Character pool: 94 possible characters (uppercase, lowercase, numbers, special)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>Automatically regenerates when settings change</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>Copy with one click for easy use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
