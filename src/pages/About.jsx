import PageContainer from '../components/PageContainer';

export default function About() {
  return (
    <PageContainer
      title="About This Project"
      subtitle="QSkill Front-End Development Internship • Slab 1"
    >
      {/* Project Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This comprehensive project is submitted as the QSkill Front-End Development Internship,
            Slab 1 task. It demonstrates professional React development practices, modern CSS
            frameworks, API integration, and responsive design principles.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The application serves as a portfolio piece showcasing the ability to build scalable,
            maintainable, and user-friendly web applications. It implements three distinct,
            fully-functional tools within a single, cohesive React application with client-side
            routing and professional UI/UX design.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All code follows modern React best practices, including functional components, proper
            hook usage, component composition, error handling, and accessibility standards.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">📊 Project Stats</h3>
          <div className="space-y-3 text-blue-800">
            <div>
              <p className="text-sm font-medium">Components</p>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
            <div>
              <p className="text-sm font-medium">Pages</p>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
            <div>
              <p className="text-sm font-medium">Routes</p>
              <p className="text-2xl font-bold text-blue-600">6</p>
            </div>
            <div>
              <p className="text-sm font-medium">Technologies</p>
              <p className="text-2xl font-bold text-blue-600">5+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slab 1 Requirements */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">QSkill Slab 1 Requirements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Task 1 */}
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Task 1: Text Translator</h3>
            <p className="text-gray-600 mb-4">
              A functional text translation application using React and Tailwind CSS with RapidAPI
              integration for real-time language translation.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
              <p className="font-semibold mb-2">Features Implemented:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>English text input</li>
                <li>Multi-language selection (15+ languages)</li>
                <li>Real-time API translation</li>
                <li>API loading/error states</li>
                <li>Input validation</li>
                <li>Copy-to-clipboard</li>
                <li>Clear/reset functionality</li>
                <li>Environment-based configuration</li>
              </ul>
            </div>
          </div>

          {/* Task 2 */}
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Task 2: Random String Generator</h3>
            <p className="text-gray-600 mb-4">
              A random string generation tool demonstrating advanced React hooks (useState,
              useCallback, useEffect) with customizable length and character types.
            </p>
            <div className="bg-green-50 rounded-lg p-4 text-sm text-green-800">
              <p className="font-semibold mb-2">Features Implemented:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Customizable string length (1-1000)</li>
                <li>Character type options</li>
                <li>Crypto-based randomness</li>
                <li>Copy-to-clipboard</li>
                <li>useState usage</li>
                <li>useCallback for generation</li>
                <li>useEffect for initialization</li>
                <li>Error validation</li>
              </ul>
            </div>
          </div>

          {/* Task 3 */}
          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Task 3: Client-Side Routing</h3>
            <p className="text-gray-600 mb-4">
              Implemented using React Router DOM for seamless navigation between pages without
              full-page reloads, with a professional navigation bar and active route highlighting.
            </p>
            <div className="bg-purple-50 rounded-lg p-4 text-sm text-purple-800">
              <p className="font-semibold mb-2">Features Implemented:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>React Router DOM setup</li>
                <li>6 main routes</li>
                <li>Responsive navbar</li>
                <li>Active route highlighting</li>
                <li>404 Not Found page</li>
                <li>Navigation links</li>
                <li>No page reloads</li>
                <li>Mobile support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Technologies Used</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl mr-3">⚛️</span>
              <div>
                <p className="font-bold text-gray-900">React 18+</p>
                <p className="text-sm text-gray-600">Functional components with modern hooks</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-3">🎨</span>
              <div>
                <p className="font-bold text-gray-900">Tailwind CSS</p>
                <p className="text-sm text-gray-600">Utility-first CSS framework</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-3">🌐</span>
              <div>
                <p className="font-bold text-gray-900">React Router DOM v6</p>
                <p className="text-sm text-gray-600">Client-side routing solution</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-3">⚡</span>
              <div>
                <p className="font-bold text-gray-900">Vite</p>
                <p className="text-sm text-gray-600">Fast build tool and dev server</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-3">🔌</span>
              <div>
                <p className="font-bold text-gray-900">RapidAPI</p>
                <p className="text-sm text-gray-600">Translation API integration</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-3">📦</span>
              <div>
                <p className="font-bold text-gray-900">npm</p>
                <p className="text-sm text-gray-600">Package management</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">✨ React Best Practices</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Functional components throughout</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Meaningful hooks usage (useState, useCallback, useEffect)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Component composition and reusability</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Proper error handling and user feedback</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Service layer for API communication</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Environment variable management</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Accessibility standards (ARIA, semantic HTML)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>Responsive mobile-first design</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
              <span>No hardcoded API keys in source</span>
            </div>
          </div>
        </div>
      </div>

      {/* Routes */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🗺️ Application Routes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-mono font-bold text-blue-600 mb-2">/</p>
            <p className="text-gray-700 text-sm">Home page with project overview and tool cards</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-mono font-bold text-blue-600 mb-2">/translator</p>
            <p className="text-gray-700 text-sm">Text translator with RapidAPI integration</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-mono font-bold text-blue-600 mb-2">/random-string</p>
            <p className="text-gray-700 text-sm">Random string generator with custom options</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-mono font-bold text-blue-600 mb-2">/about</p>
            <p className="text-gray-700 text-sm">About page with project information</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-mono font-bold text-blue-600 mb-2">/not-found</p>
            <p className="text-gray-700 text-sm">404 error page for invalid routes</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-mono font-bold text-blue-600 mb-2">*</p>
            <p className="text-gray-700 text-sm">Catch-all route redirecting to Not Found</p>
          </div>
        </div>
      </div>

      {/* Code Quality */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📝 Code Quality Standards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">✓ Implementation Quality</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• All requirements fully implemented</li>
              <li>• No placeholder functionality</li>
              <li>• Proper error handling</li>
              <li>• Loading states managed</li>
              <li>• Input validation applied</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">✓ Code Standards</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• No console errors/warnings</li>
              <li>• Meaningful variable names</li>
              <li>• Proper component sizing</li>
              <li>• No unused imports</li>
              <li>• Clean code structure</li>
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
