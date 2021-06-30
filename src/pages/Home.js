import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import MaskInput from 'react-maskinput';

import { getUser, sendUser } from '../store/cotizar';
import './styles.scss';

const { Option } = Select;

const Inicio = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [ user, setUser ] = useState({
    tipo_documento: 'DNI',
    numero_documento: '',
    celular: '',
    placa: '',
  });

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onChangeSelect = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
      numero_documento: '',
    });
  };

  const goPage = () => {   
    navigate(`/dashboard`);
  };

  const sendData = async (e) => {
    try {
      e.preventDefault();
      const values = await form.validateFields();
      if(values) {
        await dispatch(sendUser(user));
        await dispatch(getUser());
        goPage();
      }
    } catch (error) {      
    }
  };

  const selectBefore = (
    <Select 
      defaultValue="DNI" 
      value={user.tipo_documento} 
      onChange={(value) => onChangeSelect({ target: { value, name: 'tipo_documento'}})} 
      name='tipo_documento'>
      <Option value="DNI">DNI</Option>
      <Option value="CE">CE</Option>
    </Select>
  );

  return (
    <div className='home-container'>
      <h1 className='home-container__title'>Déjanos tus datos</h1>
      
      <Form form={form} name="dynamic_rule">
        <Form.Item name="numero_documento" rules={[{ required: true, message: 'campo requerido'}]}>
          <Input 
            name='numero_documento' 
            type='number'
            size="large" 
            addonBefore={selectBefore} 
            placeholder="Nro. de doc"
            value={user.numero_documento}             
            onChange={onChangeInput}/>
        </Form.Item>
        <Form.Item name='celular' rules={[{ required: true, message: 'campo requerido'}]}>
          <Input 
            name='celular' 
            type='number'
            size="large" 
            placeholder="Celular" 
            value={user.celular}
            onChange={onChangeInput}/>
        </Form.Item>
        <Form.Item name='placa' rules={[{ required: true, message: 'campo requerido'}]}>
          {/* <Input 
            name='placa' 
            size="large" 
            placeholder="Placa" 
            value={user.placa}
            onChange={onChangeInput}/>   */}       
            <MaskInput 
              value={user.placa}
              onChange={onChangeInput}
              className='home-container__placa-vehiculo' 
              placeholder='placa' 
              mask="***-***"  
              maskChar="-" /> 
        </Form.Item>
        <Form.Item>
          <Checkbox className='home-container__politics'>Acepto la <a>Política de Protecciòn de Datos Personales</a> y los <a>Términos y Condiciones.</a> </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button 
            onClick={sendData} 
            className='home-container__button' 
            type="primary" danger>COTÍZALO</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export  default Inicio;