import React, { useRef, useEffect, useState } from "react";

import './styles.scss';

const InputNumber = () => {

  const [min, setMin] = useState(false);
  const [max, setMax] = useState(false);
  const inputNumber = useRef();

  const load = () => {
    setMin(inputNumber.current.getAttribute('min') || false);
    setMax(inputNumber.current.getAttribute('max') || false);
    init();
  };

  const init = () => {
    const dec = inputNumber.current.previousSibling;
    const inc = inputNumber.current.nextSibling;
    dec.addEventListener('click', decrement);
    inc.addEventListener('click', increment);

    function decrement() {
      var value = inputNumber.current.value;
      value--;
      if(!min || value >= min) {
        inputNumber.current.value = value;
      }
    }

    function increment() {
      var value = inputNumber.current.value;
      value++;
      if(!max || value <= max) {
        inputNumber.current.value = value++;
      }
    }
  };

  useEffect(() => {
    load();
  }, []);

  
  return (
    <div className='input-number-container'>
      <span className="input-number-decrement">–</span>
      <input ref={inputNumber} className="input-number" type="number" value="1" min="0" max="5000" onChange={f=>f} />
      <span className="input-number-increment">+</span>
    </div>
  )
};

export default InputNumber;