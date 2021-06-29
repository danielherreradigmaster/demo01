import React from 'react';
import { Divider } from 'antd';
import InputNumber from '../InputNumber';

import './styles.scss';

const SumAssured = () => {
  return (
    <div className='sum-assured'>
      <div className='sum-assured__container'>
        <div className='sum-assured__range'>
          <h1 className='sum-assured__range-title'>Indica la suma asegurada</h1>
          <span className='sum-assured__range-value'>MIN $12.500  <Divider type="vertical" /> MAX $16,500</span>
        </div>
        <InputNumber />
      </div>
      <Divider/>
    </div>
  )
};

export default SumAssured;