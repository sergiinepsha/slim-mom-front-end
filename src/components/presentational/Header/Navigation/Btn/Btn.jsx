import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './Btn.module.css';

const Btn = ({ setWatcher }) => {
   const [bars, setBars] = useState(false);
   const [btn, setBtn] = useState('');
   const btnStyle = cn('styles.button', { 'styles.show': bars });

   useEffect(() => {
      if (bars) {
         setBtn(`${styles.button}`);
         setWatcher(`${styles.nav} `);
         return;
      }

      setBtn(`${styles.button} ${styles.show}`);
      setWatcher(`${styles.head} ${styles.nav}`);
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
