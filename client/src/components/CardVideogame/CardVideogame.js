import React from 'react';
import style from './CardVideogame.module.css';
import {Link} from 'react-router-dom';

function CardVideogame({id, name, backgroundImage, genres}) {
    return (
      <Link to={`/home/detailgame/${id}`}>
      <div className={style.card}>
          <h1>{name}</h1>
          {
            genres.map ((genre)=> <h2>{genre.name}</h2>)
          }
          <img className={style.img}src={backgroundImage}/>    
      </div>
      </Link>
    );
  };

  export default CardVideogame;