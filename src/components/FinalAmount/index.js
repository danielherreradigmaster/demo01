import React from 'react';
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

const FinalAmount = () => {
  const goPage = (e) => {
    e.preventDefault();
  };

  return (
    <div className='final-amount'>
      <div className='final-amount__info-monto'>
        <span className='final-amount__monto'>Monto</span>
        <span className='final-amount__precio'>$20.00</span>
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