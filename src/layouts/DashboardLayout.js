import React from 'react';
import MiParrafo from '../components/MiParrafo';

const DashboardLayout = ({ children }) => {
  <>
    <MiParrafo />
      {children}
    <MiParrafo />
  </>
};

export default DashboardLayout;