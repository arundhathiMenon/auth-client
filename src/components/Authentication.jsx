import React from "react";
import { useState } from "react";
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
     Ethara authentication
      </h1>

      {!accessToken ? (
        <Login onSuccess={handleLoginSuccess} setAccessToken={setAccessToken} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Authentication successful! You can close this window
          </h1>
        </>
      )}
    </div>
  );
}
