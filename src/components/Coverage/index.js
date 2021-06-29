import React from 'react';
import { Tabs } from 'antd';
import { Collapse } from 'antd';
import { Switch } from 'antd';
import { Avatar } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import './styles.scss';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Coverage = () => {

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  
  function callback(key) {
    console.log(key);
  }
  
  const text = `
    He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis.
  `;

  const PanelHeader = ({title, img}) => (
    <div className='coverage__panel-header'>
      <Avatar shape="square"  src={img}/>
      <div className='coverage__see-more'>
        <span className='coverage__see-more-title'>{title}</span>
        <span className='coverage__see-more-icon'>ver más <DownOutlined /></span>
      </div>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );

  return (
    <div className='coverage'>
        <h1 className='coverage__title'>Agrega o quita coberturas</h1>
        <Tabs defaultActiveKey="1" onChange={callback} size={'small'}>
          <TabPane tab="PROTEGE A TU AUTO" key="1">
            <Collapse ghost>
              <Panel header={<PanelHeader title='Llanta robada' img='https://image.flaticon.com/icons/png/512/2696/2696115.png' />} key="1" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader title='Choque y/o pasarte la luz roja' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_zjw0tUB3fIZqF5mtJSqUMOyvoniAQcadtpJyf1ByJ9xmVpnwh6CVavGFT2rJh5oEeg&usqp=CAU' />} key="2" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader title='Atropello en la vía Evitamiento' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU3Xx7xO52qr1ChS4hvjd-5HqUMSaHlYrzd5cG_QHFsz3MiXOiAEOMumXOcTtxzX7JW8&usqp=CAU' />} key="3" showArrow={false}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </TabPane>
          <TabPane tab="PROTEGE A LOS QUE TE RODEAN" key="2">
            <Collapse ghost>
              <Panel header={<PanelHeader title='Llanta robadx' img='https://image.flaticon.com/icons/png/512/2696/2696115.png' />} key="1" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader title='Choque y/o pasarte la luz roja' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_zjw0tUB3fIZqF5mtJSqUMOyvoniAQcadtpJyf1ByJ9xmVpnwh6CVavGFT2rJh5oEeg&usqp=CAU' />} key="2" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader title='Atropello en la vía Evitamiento' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU3Xx7xO52qr1ChS4hvjd-5HqUMSaHlYrzd5cG_QHFsz3MiXOiAEOMumXOcTtxzX7JW8&usqp=CAU' />} key="3" showArrow={false}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </TabPane>
          <TabPane tab="MEJORA TU PLAN" key="3">
            <Collapse ghost>
              <Panel header={<PanelHeader title='Llanta robadz' img='https://image.flaticon.com/icons/png/512/2696/2696115.png' />} key="1" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader title='Choque y/o pasarte la luz roja' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_zjw0tUB3fIZqF5mtJSqUMOyvoniAQcadtpJyf1ByJ9xmVpnwh6CVavGFT2rJh5oEeg&usqp=CAU' />} key="2" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader title='Atropello en la vía Evitamiento' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU3Xx7xO52qr1ChS4hvjd-5HqUMSaHlYrzd5cG_QHFsz3MiXOiAEOMumXOcTtxzX7JW8&usqp=CAU' />} key="3" showArrow={false}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </TabPane>
        </Tabs>
      </div>
  )
};

export default Coverage;