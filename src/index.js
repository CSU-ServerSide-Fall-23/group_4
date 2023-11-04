import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorNotFound from './components/ErrorNotFound';
import HomePage from './components/HomePage';
import SongPage from './components/SongPage';
import FoodPage from './components/FoodPage';
import DecoPage from './components/DecoPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      { 
        index: true, 
        element: <HomePage />
      },
      {
        path: "/songs",
        element: <SongPage />,
      },
      {
        path: "/foods",
        element: <FoodPage />,
      },
      {
        path: "/decorations",
        element: <DecoPage />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
