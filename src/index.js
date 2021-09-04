import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import App from "./routes/App";
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers, // Reducers
	{}, // Estado inicial
  composeEnhancers(),
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("app")
);
