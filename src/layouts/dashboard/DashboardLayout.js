import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

import Headboard from '../../components/Headboard';
import ShortSteps from '../../components/ShortSteps';
import './styles.scss';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => ( 
  <Layout className='dashboard-layout'>
    <Header>
      <Headboard />
    </Header>
    <Layout>
      <Row>
        <Col xs={24} md={6}>
          <Sider>
            <ShortSteps />
          </Sider>
        </Col>
        <Col xs={24} md={18}>
          <Content>{children}</Content>
        </Col>
      </Row>
    </Layout>
  </Layout>
);

export default DashboardLayout;