import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserLocationProvider }  from './Context/UserCoordContext';
import './index.css';
import { UserAuthProvider } from './Context/userAuthContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthProvider>
      <UserLocationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserLocationProvider>
    </UserAuthProvider>
  </React.StrictMode>
);
