import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import DashboardLayout from '../layouts/DashboardLayout';
import Prueba01 from '../pages/Prueba01';
import Prueba02 from '../pages/Prueba02';
import Prueba03 from '../pages/Prueba03';
import Prueba04 from '../pages/Prueba04';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const dasboardPages = [
  {
    path: '/',
    element: <Prueba01 />,
  },
  {
    path: '/prueba2',
    element: <Prueba02 />,
  },
  {
    path: '/prueba3',
    element: <Prueba03 />,
  },
  {
    path: '/prueba4',
    element: <Prueba04 />,
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
        <Route path="/" element={<Home />} />
        <Route path="dashboard/*" element={getPages(dasboardPages, DashboardLayout)} />
        <Route path="*" element={<Error404 />} />
      </Routes>  
    </Router>
  );
};
