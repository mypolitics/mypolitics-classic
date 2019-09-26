import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

import 'normalize.css';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { GA_TRACKING_ID } from './config';

ReactGA.initialize(GA_TRACKING_ID);
ReactGA.pageview(window.location.href.split('#/')[1] || '/');

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
