import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

export default function Home() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-blue-100 rounded-full px-4 py-2 mb-4">
          <span className="text-blue-600 font-semibold text-sm">QSkill Internship</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          QSkill Developer Tools
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A comprehensive front-end development project built with React, Tailwind CSS, and modern JavaScript. This project demonstrates professional development practices and responsive design principles.
        </p>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Completed as part of the QSkill Front-End Development Internship • Slab 1
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Text Translator Card */}
        <Link to="/translator">
          <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-smooth overflow-hidden cursor-pointer group">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-smooth">
              <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Text Translator</h2>
              <p className="text-gray-600 mb-4">
                Translate English text to multiple languages using AI-powered translation API. Supports 15+ languages with real-time translation and copy-to-clipboard functionality.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-smooth">
                Start Translating
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* Random String Generator Card */}
        <Link to="/random-string">
          <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-smooth overflow-hidden cursor-pointer group">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:from-green-600 group-hover:to-green-700 transition-smooth">
              <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Random String Generator</h2>
              <p className="text-gray-600 mb-4">
                Generate random strings with customizable length and character types (uppercase, lowercase, numbers, special characters). Perfect for creating passwords and test data.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-smooth">
                Generate Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Technologies Section */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies & Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">React Hooks</h3>
            <p className="text-sm text-gray-600">useState, useEffect, useCallback</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-600">Responsive design system</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">React Router</h3>
            <p className="text-sm text-gray-600">Client-side routing</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔌</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">RapidAPI</h3>
            <p className="text-sm text-gray-600">Translation API integration</p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Key Features</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <span>Professional, responsive UI design</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <span>Real-time API translation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <span>Client-side routing without page reloads</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <span>Copy-to-clipboard functionality</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <span>Comprehensive error handling</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <span>Mobile-first responsive design</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Project Structure</h3>
          <div className="space-y-2 text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <div>src/</div>
            <div className="ml-4">├── components/</div>
            <div className="ml-8">├── Navbar.jsx</div>
            <div className="ml-8">├── Footer.jsx</div>
            <div className="ml-8">└── Button.jsx</div>
            <div className="ml-4">├── pages/</div>
            <div className="ml-8">├── Home.jsx</div>
            <div className="ml-8">├── Translator.jsx</div>
            <div className="ml-8">├── RandomString.jsx</div>
            <div className="ml-8">├── About.jsx</div>
            <div className="ml-8">└── NotFound.jsx</div>
            <div className="ml-4">├── services/</div>
            <div className="ml-8">└── translationService.js</div>
            <div className="ml-4">└── App.jsx</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
