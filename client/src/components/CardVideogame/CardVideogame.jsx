import React from 'react';
import style from './CardVideogame.module.css';
import {Link} from 'react-router-dom';

function CardVideogame({id, name, backgroundImage, genres}) {
    return (
      <Link to={`/home/detailgame/${id}`} className={style.deco}>
      <div className={style.card}>
          <h1 className={style.name}>{name}</h1>
          <img className={style.img}src={backgroundImage}/>
          <div className={style.genre}>    
          {
            genres.map ((genre)=> <h2>{genre.name}</h2>)
          }
          </div>
      </div>
      </Link>
    );
  };

  export default CardVideogame;