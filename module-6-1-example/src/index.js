import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import counterReducer from  './reducers/counterReducer';
import { Provider } from 'react-redux';

/*
* Store - sparar state
* Reducers - Uppdaterar state i store
* Actions - Bestämmer vad som ska uppdateras och med vilken data
*/

//Store - Innehåller vårt state och vår reducer
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }> { /** Gör store tillgänglig för hela React-appen */ }
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
