import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ResizeObserver fires benign "loop" notifications during layout — suppress them
const _err = window.onerror;
window.onerror = (msg, ...args) => {
  if (typeof msg === 'string' && msg.includes('ResizeObserver loop')) return true;
  return _err?.(...args);
};
window.addEventListener('error', (e) => {
  if (e.message?.includes('ResizeObserver loop')) e.stopImmediatePropagation();
}, true);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
