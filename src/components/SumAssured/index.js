import React from 'react';
import { Divider } from 'antd';
import InputNumber from '../InputNumber';

import './styles.scss';

const SumAssured = ({ user }) => {
  return (
    <div className='sum-assured'>
      <div className='sum-assured__container'>
        <div className='sum-assured__range'>
          <h1 className='sum-assured__range-title'>Indica la suma asegurada</h1>
          <span className='sum-assured__range-value'>MIN ${user.minimo_valor}  <Divider type="vertical" /> MAX ${user.maximo_valor}</span>
        </div>
        <InputNumber 
          aument={100}
          minimoValor={user.minimo_valor}
          maximoValor={user.maximo_valor}
        />
      </div>
      <Divider/>
    </div>
  )
};

export default SumAssured;