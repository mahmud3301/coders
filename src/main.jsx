import React from 'react'
import ReactDOM from 'react-dom/client'
import Statistics from './assets/Components/Statistics/Statistics';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './assets/Components/HomePage/HomePage';
import Jobs from './assets/Components/Jobs/Jobs';
import Blogs from './assets/Components/Blogs/Blogs';
import Error from './assets/Components/Error/Error';
import JobDetails from './assets/Components/JobDetails/JobDetails';
import Layout from './assets/Components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
        loader: () => fetch(`Card.json`),
      },
      {
        path: "/jobdetails/:detailsId",
        element: <JobDetails/>,
        loader: () => fetch(`Job.json`),
      },
      {
        path: "/Statistics",
        element: <Statistics/>
      },
      {
        path: "/Jobs",
        element: <Jobs/>
      },
      {
        path: "/Blogs",
        element: <Blogs/>
      }
    ]
  },
  {
    path: "/Statistics",
    element: <Statistics/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
