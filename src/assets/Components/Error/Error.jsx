import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">404</h1><br />
            <p className="text-2xl font-medium bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">
                Oops! The page you're looking for does not exist.
            </p><br />
            <Link
                to="/"
                className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-btn from-indigo-500 to-purple-600 text-white py-2 px-4 rounded"
            >
                Go back home
            </Link>
        </div>
    );
}

export default Error404;