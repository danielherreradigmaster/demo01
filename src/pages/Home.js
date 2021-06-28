import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';

const { Option } = Select;

const Inicio = () => {

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const selectBefore = (
    <Select defaultValue="DNI">
      <Option value="DNI">DNI</Option>
      <Option value="CE">CE</Option>
    </Select>
  );

  return (
    <div>
      <h1>Déjanos tus datos</h1>
      <Form>
        <Form.Item>
          <Input addonBefore={selectBefore} placeholder="Nro. de doc" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Celular" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Placa" />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onChange}>Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary">cotízalo</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export  default Inicio;