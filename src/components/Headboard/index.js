import React from 'react';

import logo from '../../assets/img/logo.png';
import telefono from '../../assets/img/ic_phone.png';
import './styles.scss';

const Headboard = () => ( 
  <div className='headboard'>
    <img className='headboard__logo' src={logo} alt='' />
    <div className='headboard__contact-container'>
      <span className='headboard__doubt'>¿Tienes alguna duda?</span>
      <img className='headboard__phone-icon' src={telefono} alt='' />
      <span className='headboard__call'>Llámanos</span>
      <span className='headboard__phone'>(01) 411 6001</span>
    </div>
  </div>
);

export default Headboard;