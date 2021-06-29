import React from 'react';
import { Progress } from 'antd';
import { Steps } from 'antd';

import { LeftCircleOutlined } from '@ant-design/icons';

import './styles.scss';

const { Step } = Steps;

const ShortSteps = () => {
  return (
    <div className='short-steps'>
      <Steps className='short-steps__big' direction="vertical" size="small" current={0}>
        <Step title="Datos"/>
        <Step title="Arma tu plan"/>
      </Steps>
      <div className='short-steps__small'>
        <LeftCircleOutlined />
        <p className='short-steps__pasos'>Paso 2 de 2</p>
        <Progress className='short-steps__bar' percent={100} size="small" showInfo={false} />
      </div>
    </div>
  );
};

export default ShortSteps;