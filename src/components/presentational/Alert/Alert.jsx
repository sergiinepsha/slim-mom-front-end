import { useSelector } from 'react-redux';

import s from './Alert.module.css';

function Alert({ children }) {
   const errorText = useSelector(state => state.isError.error);
   return (
      <>
         {errorText && (
            <div className={s.container}>
               <span className={s.text}>{errorText}</span>
            </div>
         )}
         {children}
      </>
   );
}

export default Alert;
