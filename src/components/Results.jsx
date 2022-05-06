import React from 'react';
import {formatTime} from "../utils/TimeFormat";

const Results = ({gameResult, size, goToMenu}) => {
  const clicks = gameResult.score + gameResult.fails;
  const total = ((gameResult.score/clicks)*100).toFixed();
  return (
    <div className="d-flex justify-content-center">
      <div className="menu d-flex justify-content-center flex-column">
        <div className="game-name">
          <h2>Результаты</h2>
        </div>
        <div className="description">
          <p>Размер игрового поля: {size}x{size}</p>
          <p>Вы справились за {formatTime(gameResult.time)}</p>
          <p>Всего попыток: {clicks}</p>
          <p>Количество неверных попыток: {gameResult.fails}</p>
          <p>Общий результат: {total}%</p>
        </div>
        <button className="menu-btn mt-2" onClick={goToMenu}>Меню</button>
      </div>
    </div>
  );
};

export default Results;