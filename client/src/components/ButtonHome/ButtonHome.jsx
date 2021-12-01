import React from 'react';
import style from './ButtonHome.module.css';


function ButtonHome() {
  return (
    <div className={style.videogames}>
       <button className={style.btn}>Videogames</button>
    </div>
  );
};

export default ButtonHome;