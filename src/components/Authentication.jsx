import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import AuthSuccess from "./AuthSuccess";

function Home() {
  const [authSuccess, setAuthSuccess] = useState(false);
  const location = useLocation();
  const [msUserId, setMsUserId] = useState(null);

  // Extract msUserId from query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const userId = searchParams.get("msUserId");
    console.log("userId___", userId);
    setMsUserId(userId);
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Ethara - Tune One Drive Authentication</h1>
      {!authSuccess ? (
        <Login setAuthSuccess={setAuthSuccess} msUserId={msUserId} />
      ) : (
        <AuthSuccess />
      )}
    </div>
  );
}

export default Home;