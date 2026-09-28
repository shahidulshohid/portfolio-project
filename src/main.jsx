import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from './context/ThemeContext.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
    <ThemeProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>,
)

