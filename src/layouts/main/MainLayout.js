import React from 'react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';

import Headboard from '../../components/Headboard';
import './styles.scss';
import hombreDonandoRecortado from '../../assets/img/hombre-donando-recortado.png';
import hombreDonando from '../../assets/img/hombre-donando.png';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => ( 
  <Layout  className='main-layout'>
    <Header>
      <Headboard />
    </Header>
    <Layout>
      <Row>
        <Col xs={24} md={10}>
          <Sider>
            <div className='main-layout__sider-container'>
              <img className='main-layout__sider-img-big' src={hombreDonando} alt='' />
              <div className='main-layout__sider-content'>
                <h6 className='main-layout__sub-title'>¡NUEVO!</h6>
                <h1 className='main-layout__title'>Seguro Vehicular Tracking</h1>
                <p className='main-layout__text'>Cuentanos donde le haras seguimiento a tu seguro</p>
              </div>
            </div>
            <img className='main-layout__sider-img-small' src={hombreDonandoRecortado} alt='' />
          </Sider>
        </Col>
        <Col xs={24} md={14}>
          <Content>{children}</Content>
        </Col>
      </Row>
    </Layout>
  </Layout>
);

export default MainLayout;