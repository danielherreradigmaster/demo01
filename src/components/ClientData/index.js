import React from 'react';

import './styles.scss';
import doctor from '../../assets/img/doctor.png'

const ClientData = () => {
  return (
    <div className='client-data'>
      <h1 className='client-data__title'>¡Hola, Juan!</h1>
      <h4 className='client-data__sub-title'>Conoce las coberturas para tu plan</h4>
      <div className='client-data__car-info'>
        <p className='client-data__placa'>Placa: C2U-114</p>
        <p className='client-data__modelo'>Wolkswagen 2019 Golf</p>
        <img src={doctor} className='client-data__img' alt=''/>
      </div>
    </div>
  );
};

export default ClientData;