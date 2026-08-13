import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <PageContainer className="flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-8 max-w-md mx-auto">
          <p className="text-gray-600 mb-4">
            The URL you entered doesn't match any of our available routes.
          </p>
          <p className="text-sm text-gray-500">
            Check the URL and try again, or navigate to one of our main pages.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" size="lg">
              ← Back to Home
            </Button>
          </Link>
          <Link to="/translator">
            <Button variant="secondary" size="lg">
              Text Translator
            </Button>
          </Link>
          <Link to="/random-string">
            <Button variant="secondary" size="lg">
              String Generator
            </Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
