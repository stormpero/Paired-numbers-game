import React, {useEffect} from "react";

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
      <>
        <Background/>
        <Game/>
      </>
    </DevProvider>
  )
}

export default App;
