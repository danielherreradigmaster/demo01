import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Collapse } from 'antd';
import { Switch } from 'antd';
import { Avatar } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import './styles.scss';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Coverage = ({
  showCovertura= false,
  setFinalAmount=f=>f,
  finalAmount=0,
}) => {

  const [checkedAll, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
  });

  function onChange(checked, monto, typeChecked) {    
    setChecked({
      ...checkedAll,
      [typeChecked]: checked,
    });
    if(checked) {
      const total = finalAmount + monto;
      setFinalAmount(total);
    } else {
      const total = finalAmount - monto;
      setFinalAmount(total);
    }
  }
  
  function callback(key) {
    console.log(key);
  }
  
  const text = `
    He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis.
  `;

  const PanelHeader = ({ title, img, monto, checked, typeChecked }) => (
    <div className='coverage__panel-header'>
      <Avatar shape="square"  src={img}/>
      <div className='coverage__see-more'>
        <span className='coverage__see-more-title'>{title}</span>
        <span className='coverage__see-more-icon'>ver más <DownOutlined /></span>
      </div>
      <Switch checked={checked} onChange={(e) => onChange(e, monto, typeChecked)} />
    </div>
  );

  return (
    <div className='coverage'>
        <h1 className='coverage__title'>Agrega o quita coberturas</h1>
        <Tabs defaultActiveKey="1" onChange={callback} size={'small'}>
          <TabPane tab="PROTEGE A TU AUTO" key="1">
            <Collapse ghost>
              <Panel header={<PanelHeader checked={checkedAll.checked1} typeChecked='checked1' title='Llanta robada' img='https://image.flaticon.com/icons/png/512/2696/2696115.png' monto={15} />} key="1" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel className={showCovertura ? 'show-covertura' : ''} header={<PanelHeader typeChecked='checked2' checked={checkedAll.checked2} monto={20} title='Choque y/o pasarte la luz roja' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_zjw0tUB3fIZqF5mtJSqUMOyvoniAQcadtpJyf1ByJ9xmVpnwh6CVavGFT2rJh5oEeg&usqp=CAU' />} key="2" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader typeChecked='checked3' checked={checkedAll.checked3} monto={50} title='Atropello en la vía Evitamiento' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU3Xx7xO52qr1ChS4hvjd-5HqUMSaHlYrzd5cG_QHFsz3MiXOiAEOMumXOcTtxzX7JW8&usqp=CAU' />} key="3" showArrow={false}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </TabPane>
          <TabPane tab="PROTEGE A LOS QUE TE RODEAN" key="2">
            <Collapse ghost>
              <Panel header={<PanelHeader monto={15} title='Llanta robadx' img='https://image.flaticon.com/icons/png/512/2696/2696115.png' />} key="1" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel className={showCovertura ? 'show-covertura' : ''} header={<PanelHeader monto={20} title='Choque y/o pasarte la luz roja' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_zjw0tUB3fIZqF5mtJSqUMOyvoniAQcadtpJyf1ByJ9xmVpnwh6CVavGFT2rJh5oEeg&usqp=CAU' />} key="2" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader monto={50} title='Atropello en la vía Evitamiento' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU3Xx7xO52qr1ChS4hvjd-5HqUMSaHlYrzd5cG_QHFsz3MiXOiAEOMumXOcTtxzX7JW8&usqp=CAU' />} key="3" showArrow={false}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </TabPane>
          <TabPane tab="MEJORA TU PLAN" key="3">
            <Collapse ghost>
              <Panel header={<PanelHeader monto={15} title='Llanta robadz' img='https://image.flaticon.com/icons/png/512/2696/2696115.png' />} key="1" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel className={showCovertura ? 'show-covertura' : ''} header={<PanelHeader monto={20} title='Choque y/o pasarte la luz roja' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_zjw0tUB3fIZqF5mtJSqUMOyvoniAQcadtpJyf1ByJ9xmVpnwh6CVavGFT2rJh5oEeg&usqp=CAU' />} key="2" showArrow={false}>
                <p>{text}</p>
              </Panel>
              <Panel header={<PanelHeader monto={50} title='Atropello en la vía Evitamiento' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU3Xx7xO52qr1ChS4hvjd-5HqUMSaHlYrzd5cG_QHFsz3MiXOiAEOMumXOcTtxzX7JW8&usqp=CAU' />} key="3" showArrow={false}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </TabPane>
        </Tabs>
      </div>
  )
};

export default Coverage;