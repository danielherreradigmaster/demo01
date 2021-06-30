import React from 'react';

import './styles.scss';
import doctor from '../../assets/img/doctor.png'

const ClientData = ({ user }) => {
  return (
    <div className='client-data'>
      <h1 className='client-data__title'>¡Hola, <span style={{"color": "red"}}>{user.primer_nombre}!</span></h1>
      <h4 className='client-data__sub-title'>Conoce las coberturas para tu plan</h4>
      <div className='client-data__car-info'>
        <p className='client-data__placa'>Placa: {user.placa_vehiculo}</p>
        <p className='client-data__modelo'>{user.modelo_vehiculo}</p>
        <img src={doctor} className='client-data__img' alt=''/>
      </div>
    </div>
  );
};

export default ClientData;