import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import Root from "./routes/root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
