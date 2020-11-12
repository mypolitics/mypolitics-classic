import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import 'normalize.css';
import 'style.scss';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { GA_TRACKING_ID } from './config';

ReactGA.initialize(GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactPixel.init('897359370664007', undefined, {
  autoConfig: true,
  debug: false,
});
ReactPixel.pageView();

const { persistor, store } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
