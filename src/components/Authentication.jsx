import React from "react";
import { useState } from "react";
import ChildrenTable from "./ChildrenTable.jsx";
import Login from "./Login.jsx";

export default function Authentication() {
  const [accessToken, setAccessToken] = useState(
    ""
    // "..-9CAae32Z0Xs2AAZEEIX_EUityfTBEvdkE6EUoV1ZMmcLwF627vz2EumXTvJDOIpzznSMAQOz9RRURS7jD4rpC2YkQlnEkS4fqVtTHRIqlqd9aIybYsGkmHGB3-rgQrjJW4rX7OZBNYa5mLznZ_DbByTaRKszq_G60gAEdcuHE0T9IkhbNToIeQ-M_7Q"
  );
  const [sharedFolderUrl, setSharedFolderUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleLoginSuccess = (token) => {
    setAccessToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUrl(sharedFolderUrl);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        OneDrive Shared Folder Viewer
      </h1>

      {!accessToken ? (
        <Login onSuccess={handleLoginSuccess} setAccessToken={setAccessToken} />
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="mb-6 w-full max-w-md flex flex-col items-center"
          >
            <input
              type="text"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OneDrive Shared Folder URL"
              value={sharedFolderUrl}
              onChange={(e) => setSharedFolderUrl(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit URL
            </button>
          </form>

          {submittedUrl && (
            <ChildrenTable
              accessToken={accessToken}
              sharedFolderUrl={submittedUrl}
            />
          )}
        </>
      )}
    </div>
  );
}
