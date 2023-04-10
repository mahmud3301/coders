import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-2xl font-medium text-gray-600 mb-8">
                Oops! The page you're looking for does not exist.
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Go back home
            </Link>
        </div>
    );
}

export default Error404;