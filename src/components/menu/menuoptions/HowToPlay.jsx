import React from 'react';

const HowToPlay = ({goBack}) => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="description">
        <p>Перед вами таблица из клеток. В каждой из них спрятана цифра.
          За один ход вы можете раскрыть две цифры. Если цифры окажутся разными, они снова скроются,
          а если в обеих открытых клетках будет одна и та же цифра, то эти клетки исчезнут.
          Игра будет закончена, когда вы раскроете все клетки. Ваша задача - сделать это как можно быстрее.
          Чем лучше вы будете запоминать, какая цифра прячется в каждой клетке, тем быстрее вы справитесь с задачей.</p>
      </div>
      <button className="menu-btn mt-2" onClick={goBack}>Назад</button>
    </div>
  );
};

export default HowToPlay;