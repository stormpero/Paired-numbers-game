import React, {useEffect, useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./Game";
import Background from "./background/Background";
import DevProvider from "./usedev/DevProvider";



function App() {
  useEffect(() => {
    document.title = "Парные числа";
  }, []);

  return (
    <DevProvider>
      <div className="h-100">
        <Background>
            <Game/>
        </Background>
      </div>
    </DevProvider>
  )
}

export default App;
