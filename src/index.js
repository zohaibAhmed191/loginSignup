import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';

//  StyleSheets
import 'index.css';
import 'styles/styles.css'
import 'styles/responsive.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);