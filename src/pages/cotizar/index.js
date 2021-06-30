import React, { useState } from 'react';
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
  const [showCovertura, setShowCovertura] = useState(false);  
  const [finalAmount, setFinalAmount] = useState(105);  

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
            setShowCovertura={setShowCovertura}
          />
          <Coverage 
            showCovertura={showCovertura}
            finalAmount={finalAmount}
            setFinalAmount={setFinalAmount}
          />
        </Col>
        <Col xs={24} md={10}>
          <FinalAmount 
            finalAmount={finalAmount}
          />
        </Col>
      </Row>
    </div>
  )
};

export default Cotizar;