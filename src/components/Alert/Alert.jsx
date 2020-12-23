import { useSelector } from 'react-redux';

import s from './Alert.module.css';

function Alert() {
   const errorText = useSelector(state => state.isError.error);
   return (
      <>
         {errorText && (
            <div className={s.container}>
               <span className={s.text}>{errorText}</span>
            </div>
         )}
      </>
   );
}

export default Alert;
