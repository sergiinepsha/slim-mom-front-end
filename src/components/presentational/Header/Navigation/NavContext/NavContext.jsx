import React, { useContext, useState } from 'react';

const NavContext = React.createContext();

export const useNav = () => {
   return useContext(NavContext);
};

export const NavProvider = ({ children }) => {
   const [watcher, setWatcher] = useState(false);

   const [bars, setBars] = useState(false);

   function handlerButton() {
      setBars(bar => !bar);
      setWatcher(!bars);
   }
   return (
      <NavContext.Provider value={{ watch: watcher, btn: bars, handlerButton }}>
         {children}
      </NavContext.Provider>
   );
};
