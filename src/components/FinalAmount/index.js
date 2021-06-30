import React from 'react';
import { useNavigate } from "react-router-dom";
import { Divider } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import './styles.scss';

const data = [
  'Llanta de respuesto',
  'Analisis de motor',
  'Aros gratis',
];

const FinalAmount = ({
  finalAmount= 0
}) => {
  let navigate = useNavigate();
  const goPage = () => {   
    navigate(`/finished`);
  };

  return (
    <div className='final-amount'>
      <div className='final-amount__info-monto'>
        <span className='final-amount__monto'>Monto</span>
        <span className='final-amount__precio'>${finalAmount}.00</span>
        <span className='final-amount__date'>MENSUAL</span>
      </div>
      <Divider className='final-amount__dividir' />
      <List
        className='final-amount__list'
        header={<div className='final-amount__list-title'>El precio incluye:</div>}
        dataSource={data}
        renderItem={item => (
          <List.Item className='final-amount__list-item'>
            <CheckOutlined /> {item}
          </List.Item>
        )}
      />
      <Button onClick={goPage} className='final-amount__lo-quiero' type="primary" danger>LO QUIERO</Button>
    </div>
  )
};

export default FinalAmount;