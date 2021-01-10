import React from 'react';
import cn from 'classnames';

import styles from './Btn.module.css';
import { useNav } from '../NavContext/NavContext';

const Btn = () => {
   const { btn, handlerButton } = useNav();
   const btnStyle = cn(styles.button, { [styles.show]: !btn });

   return (
      <>
         <button onClick={() => handlerButton()} className={btnStyle}></button>
      </>
   );
};

export default Btn;
