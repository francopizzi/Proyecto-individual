import React from 'react';
import style from './ButtonAddGame.module.css'


function ButtonAddGame() {
  return (
    <div>
       <button className={style.btn}>Crear juego</button>
    </div>
  );
};

export default ButtonAddGame;