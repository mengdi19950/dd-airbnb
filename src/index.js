import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider,StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'

import App from '@/App.jsx';
import 'normalize.css'
import '@/assets/css/index.css'
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Suspense fallback="loading">
    <Provider store={store}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </StyleSheetManager>
    </Provider>
);

