import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';

import './styles.scss';

const ProcessFinished = () => {
  return (
    <div className='process-finished'>
      <span className='process-finished__primero'>¡Te damos la bienvenida!</span>
      <span className='process-finished__segundo'>Cuenta con nosotros para proteger tu vehículo</span>
      <span className='process-finished__tercero'>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</span>
      <span className='process-finished__cuarto'>joel.sanchez@gmail.com</span>
      <Button className='process-finished__button' type="primary" danger>CÓMO USAR MI SEGURO</Button>
    </div>
  )
};

export default ProcessFinished;