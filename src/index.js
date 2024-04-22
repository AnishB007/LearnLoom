import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/ContactForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Register } from './components/Register';
import { Login } from './components/LoginPage';
import Material from './components/Material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Home",
    element: <App/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Register",
    element: <Register/>,
  },
  {
    path: "Material",
    element: <Material/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
