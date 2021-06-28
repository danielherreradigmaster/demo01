import React from 'react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';

import './styles.scss';
import hombreDonando from '../../assets/img/hombre-donando-recortado.png';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => ( 
  <Layout  className='main-layout'>
    <Header>Header</Header>
    <Layout>
      <Row>
        <Col xs={24} sm={9} md={9}>
          <Sider>
            <div className='main-layout__sider-content'>
              <h6 className='main-layout__sub-title'>¡NUEVO!</h6>
              <h1 className='main-layout__title'>Seguro Vehicular Tracking</h1>
              <p className='main-layout__text'>Cuentanos donde le haras seguimiento a tu seguro</p>
            </div>
            <img className='main-layout__sider-img' src={hombreDonando} alt='' />
          </Sider>
        </Col>
        <Col xs={24} sm={15} md={15}>
          <Content>{children}</Content>
        </Col>
      </Row>
    </Layout>
  </Layout>
);

export default MainLayout;