import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-600">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
