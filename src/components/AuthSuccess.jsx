import React from 'react';

const AuthSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-green-500 rounded-full p-8">
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="text-2xl font-bold ml-4">Authentication Success</div>
      <p className="mt-4">
        You can close this browser window and start uploading RFP document via
        OneDrive folder link.
      </p>
    </div>
  );
};

export default AuthSuccess;