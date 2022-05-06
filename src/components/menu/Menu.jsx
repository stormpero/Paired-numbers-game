import React, {useState} from 'react';

import "./Menu.css"
import HowToPlay from "./menuoptions/HowToPlay";
import Options from "./menuoptions/Options";

const Menu = ({startGame, gameOptions}) => {
  const [showMainBtns, setShowMainBtns] = useState(true);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const goBack = () => {
    setShowHowToPlay(false);
    setShowOptions(false);
    setShowMainBtns(true);
  }

  const onBtnClick = (btnShowFunc) => {
    setShowMainBtns(false);
    btnShowFunc(true);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="menu">
        <div className="text-center game-name">
          <h2>Парные числа</h2>
        </div>
        <div>
          {showMainBtns &&
            <div className="text-center d-flex flex-column menu-btns">
              <button className="menu-btn mt-2" onClick={startGame}>Начать игру</button>
              <button className="menu-btn mt-2" onClick={() => onBtnClick(setShowOptions)}>Настройки</button>
              <button className="menu-btn mt-2" onClick={() => onBtnClick(setShowHowToPlay)}>Правила игры</button>
            </div>
          }
          {showHowToPlay && <HowToPlay goBack={goBack}/>}
          {showOptions && <Options gameOptions={gameOptions} goBack={goBack}/>}
        </div>
      </div>
    </div>
  );
};

export default Menu;