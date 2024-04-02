import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Bag from './routes/Bag/Bag'
import Home from './routes/Home/Home';


const router = createBrowserRouter([
  {path: "/",
   element: <App/>,
    children: [
      {path: "/", element: <Home />},
      {path: "/Bag", element: <Bag/>},
      {}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
