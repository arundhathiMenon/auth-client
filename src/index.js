import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./utility/msalInstance";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MsalProvider instance={msalInstance}>
  <React.StrictMode>
  <Router><App /></Router>
  </React.StrictMode>
</MsalProvider>

);
