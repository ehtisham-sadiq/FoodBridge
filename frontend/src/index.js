import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div><h5>Something went wrong!</h5><h6>Go to <a href="/">Home</a> page</h6></div>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);