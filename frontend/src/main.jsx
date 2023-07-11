import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import router from './routes/routes.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index.js';
import { ConfigProvider } from 'antd';
import { theme } from './utils/theme.js';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <ConfigProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </PersistGate>
    </ConfigProvider>
    {/* </React.StrictMode> */}
  </Provider>
);
