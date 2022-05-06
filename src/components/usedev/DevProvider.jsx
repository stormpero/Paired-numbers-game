import React, {useState} from 'react';
import DevContext from "./DevContext";

const DevProvider = ({children}) => {
  const [dev, setDev] = useState(false);
  return (
    <DevContext.Provider value={{
      dev,
      setDev
    }}>
      {children}
    </DevContext.Provider>
  );
};

export default DevProvider;