import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link 
          to="/" 
          className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
