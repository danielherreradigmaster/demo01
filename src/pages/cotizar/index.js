import React from 'react';
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';

import './styles.scss';
import ClientData from '../../components/ClientData';
import SumAssured from '../../components/SumAssured';
import Coverage from '../../components/Coverage';
import FinalAmount from '../../components/FinalAmount';

const Cotizar = () => {
  const { user } = useSelector(state => state.cotizar);
  console.log(user);

  return (
    <div className='cotizar'>
      <Row>
        <Col xs={24} md={14}>
          <span className='cotizar__volver'><LeftCircleOutlined /> VOLVER</span>
          <ClientData 
            user={user}
          />
          <SumAssured 
            user={user}
          />
          <Coverage />
        </Col>
        <Col xs={24} md={10}>
          <FinalAmount />
        </Col>
      </Row>
    </div>
  )
};

export default Cotizar;