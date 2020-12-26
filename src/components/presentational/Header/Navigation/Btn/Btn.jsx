import React, { useState, useEffect } from 'react';

import s from './Btn.module.css';

const Btn = ({ setWatcher }) => {
   const [bars, setBars] = useState(false);
   const [btn, setBtn] = useState('');

   useEffect(() => {
      if (bars) {
         setBtn(`${s.button}`);
         setWatcher(`${s.nav} `);
         return;
      }

      setBtn(`${s.button} ${s.show}`);
      setWatcher(`${s.head} ${s.nav}`);
      return;
   }, [bars, setWatcher]);

   function handlerButton() {
      setBars(!bars);
   }

   return (
      <>
         <button onClick={() => handlerButton()} className={btn}></button>
      </>
   );
};

export default Btn;
