import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './style/globalStyle';
import ResetStyle from './style/resetStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
