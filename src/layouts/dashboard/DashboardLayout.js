import React from 'react';
import { Layout } from 'antd';

import './styles.scss';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => ( 
  <Layout className='dashboard-layout'>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default DashboardLayout;