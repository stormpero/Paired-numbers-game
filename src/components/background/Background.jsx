import React from 'react';

import "./Background.css"

const Background = ({children}) => {
  return (
    <div className="background">
      {[...new Array(9)].map((el,index) => <div key={index} className={`light x${index + 1}`}/>)}
      {children}
    </div>
  );
};

export default Background;