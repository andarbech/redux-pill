import React from 'react';
import ReactDOM from 'react-dom';

import Provider from './redux/provider';
import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
