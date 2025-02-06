import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element:<HomePage></HomePage>,
      },
      {
        path:'/details/:id',
        element:<DetailsPage></DetailsPage>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
