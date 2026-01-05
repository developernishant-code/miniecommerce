import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center">
        
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
