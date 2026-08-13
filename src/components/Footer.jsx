export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">QSkill Tools</h3>
            <p className="text-sm leading-relaxed">
              A professional front-end development project showcasing modern React practices, Tailwind CSS design, and API integration.
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Features</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/translator" className="hover:text-white transition-smooth">
                  Text Translator
                </a>
              </li>
              <li>
                <a href="/random-string" className="hover:text-white transition-smooth">
                  Random String Generator
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-smooth">
                  Learn More
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Technologies</h3>
            <ul className="text-sm space-y-2">
              <li>React with Hooks</li>
              <li>React Router DOM</li>
              <li>Tailwind CSS</li>
              <li>RapidAPI Integration</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              QSkill Front-End Development Internship • Slab 1
            </p>
            <p className="text-sm text-gray-400 mt-4 sm:mt-0">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
