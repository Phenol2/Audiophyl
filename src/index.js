import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "./store/Storectx"
import { store } from "./reduxStore/store"
import { Provider } from "react-redux"
import { AuthContextProvider } from "./store/AuthContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <StoreProvider>
  <React.StrictMode>
   <BrowserRouter basename = "/">
    <Provider store = {store}>
     <App />
     </Provider>
   </BrowserRouter>
  </React.StrictMode>
  </StoreProvider>
  </AuthContextProvider>
);


