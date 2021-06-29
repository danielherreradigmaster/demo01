import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard/DashboardLayout';
import MainLayout from '../layouts/main/MainLayout';
import Cotizar from '../pages/cotizar';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const dasboardPages = [
  {
    path: '/',
    element: <Cotizar />,
  },
];

const mainPages = [
  {
    path: '/',
    element: <Home />,
  },
];

const getPages = (routes, Layout) => {
  return (
    <Layout>
      <Routes>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Routes>
    </Layout>
  )
};

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={getPages(mainPages, MainLayout)} />
        <Route path="dashboard/*" element={getPages(dasboardPages, DashboardLayout)} />
        <Route path="*" element={<Error404 />} />
      </Routes>  
    </Router>
  );
};
