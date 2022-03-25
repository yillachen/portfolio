import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App name={'App'} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
