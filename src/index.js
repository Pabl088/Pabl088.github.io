import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

const root = ReactDOM.createRoot(document.getElementById('root'));

const setOnFocusTitle = document.title;
const setOnBlurTitle = 'Hope you back soon! | Pablo Albin';

window.onblur = () => {
  document.title = setOnBlurTitle;
};

window.onfocus = () => {
  document.title = setOnFocusTitle;
};

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
