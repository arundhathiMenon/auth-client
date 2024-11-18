// components/Login.js
import { useMsal } from "@azure/msal-react";
import axios from 'axios';

const Login = ({ setAuthSuccess, msUserId }) => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup({
            scopes: ["Files.Read.All", "Files.ReadWrite.All"],
        }).then(response => {
            console.log("Response from onedrive: ", response);
            const requestBody = {
                access_token: response.accessToken,
                token_expires_at: new Date(response.expiresOn).toISOString(),
                auth_user_id: response.account.localAccountId,
                ms_user_id: msUserId
            };

            axios.post(`${process.env.ASSISTANT_ENDPOINT}/v1/user/login`, requestBody)
                .then(response => {
                    setAuthSuccess(true);
                })
                .catch(error => {
                    console.error('Login error:', error);
                });
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      );
};

export default Login;
