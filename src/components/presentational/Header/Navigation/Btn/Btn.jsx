import React, { useState } from 'react';
import cn from 'classnames';

import styles from './Btn.module.css';

const Btn = ({ setWatcher }) => {
   const [bars, setBars] = useState(false);
   const btnStyle = cn(styles.button, { [styles.show]: !bars });

   function handlerButton() {
      setBars(!bars);
      setWatcher(!bars);
   }

   return (
      <>
         <button onClick={() => handlerButton()} className={btnStyle}></button>
      </>
   );
};

export default Btn;
