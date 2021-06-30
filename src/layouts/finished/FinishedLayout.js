import React from 'react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';

import Headboard from '../../components/Headboard';
import './styles.scss';
import hombreDonandoRecortado from '../../assets/img/hombre-donando-recortado.png';
import hombreDonando from '../../assets/img/hombre-donando.png';

const { Header, Sider, Content } = Layout;

const FinishedLayout = ({ children }) => ( 
  <Layout  className='finished-layout'>
    <Header>
      <Headboard />
    </Header>
    <Layout>
      <Row>
        <Col xs={24} md={10}>
          <Sider>
            <div className='finished-layout__sider-container'>
              <img className='finished-layout__sider-img-big' src={hombreDonando} alt='' />
              <img className='finished-layout__sider-img-small' src={hombreDonandoRecortado} alt='' />
            </div>
          </Sider>
        </Col>
        <Col xs={24} md={14}>
          <Content>{children}</Content>
        </Col>
      </Row>
    </Layout>
  </Layout>
);

export default FinishedLayout;