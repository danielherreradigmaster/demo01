import React, { useRef, useEffect, useState } from "react";

import './styles.scss';

const InputNumber = ({
  aument= 0,
  minimoValor= 0,
  maximoValor= 0
}) => {
  const [suma, setSuma] = useState(minimoValor);

  const decrement = () => {
    if((suma - aument) > minimoValor) {
      const total = suma - aument;
      setSuma(total);
    }
  };

  const increment = () => {
    if((suma + aument) < maximoValor) {
      const total = suma + aument;
      setSuma(total);
    }
  };
  
  return (
    <div className='input-number-container'>
      <span onClick={decrement} className="input-number-decrement">–</span>
      <input readonly className="input-number" type="number" value={suma} onChange={f=>f} />
      <span onClick={increment} className="input-number-increment">+</span>
    </div>
  )
};

export default InputNumber;