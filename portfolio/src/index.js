import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

//CSS//
import './styles/index.scss'

//redux
import { Provider } from 'react-redux';
import store from "./redux/Store/Store";

ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>,

  document.getElementById('root')
);


reportWebVitals();
