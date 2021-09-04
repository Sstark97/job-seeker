import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import App from "./routes/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';

const store = createStore(
	reducers, // Reducers
	{}, // Estado inicial
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("app")
);
