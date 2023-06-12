import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
// import App from './state_mnagement/app';
import { Provider } from 'react-redux';
import store from "./state_mnagement/redux_store";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider  store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>

)
