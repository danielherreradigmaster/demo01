import React from 'react';
import { useNavigate } from "react-router-dom";

import { Form, Input, Button, Checkbox, Select } from 'antd';

import './styles.scss';

const { Option } = Select;

const Inicio = () => {
  let navigate = useNavigate();

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const goPage = (e) => {
    e.preventDefault();
    navigate(`/dashboard`);
  };

  const selectBefore = (
    <Select defaultValue="DNI">
      <Option value="DNI">DNI</Option>
      <Option value="CE">CE</Option>
    </Select>
  );

  return (
    <div className='home-container'>
      <h1 className='home-container__title'>Déjanos tus datos</h1>
      <Form className=''>
        <Form.Item>
          <Input size="large" addonBefore={selectBefore} placeholder="Nro. de doc" />
        </Form.Item>
        <Form.Item>
          <Input size="large" placeholder="Celular" />
        </Form.Item>
        <Form.Item>
          <Input size="large" placeholder="Placa" />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onChange} className='home-container__politics'>Acepto la <a>Política de Protecciòn de Datos Personales</a> y los <a>Términos y Condiciones.</a> </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button onClick={goPage} className='home-container__button' type="primary" danger>COTÍZALO</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export  default Inicio;