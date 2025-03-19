import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css';   // Optional: For global styles or CSS resets

// Mount the app inside the #root element in index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
