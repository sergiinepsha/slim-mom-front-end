import React from 'react';
import Loader from 'react-loader-spinner';

import { loader } from './Loader.module.css';

const isLoader = () => {
   return (
      <div className={loader}>
         <Loader
            className="louder"
            type="BallTriangle"
            color="#00BFFF"
            height={40}
            width={40}
            timeout={0}
         />
      </div>
   );
};

export default isLoader;
