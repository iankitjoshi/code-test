import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoute from './Routes';
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from './Store';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <SnackbarProvider maxSnack={1} autoHideDuration={1000} preventDuplicate anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </SnackbarProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
