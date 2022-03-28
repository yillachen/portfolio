import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss'
import App from './client/App';

ReactDOM.render(
  <React.StrictMode>
    <App name={'App'} />
  </React.StrictMode>,
  document.getElementById('root')
);

