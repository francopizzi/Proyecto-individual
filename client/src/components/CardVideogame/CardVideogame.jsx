import React from 'react';
import style from './CardVideogame.module.css';
import {Link} from 'react-router-dom';

function CardVideogame({id, name, backgroundImage, genres}) {
    return (
      <Link to={`/home/detailgame/${id}`} className={style.deco}>
      <div className={style.card}>
          <div className={style.nameGenres}>
            <h1 className={style.name}>{name}</h1>
            <p className={style.titleGenre}>Generos:</p>
            <div className={style.genres}>    
            {
              genres.map ((genre)=> <h2 className={style.genre}>{genre.name}</h2>)
            }
          </div>
          </div>
          <img className={style.img}src={backgroundImage}/>
      </div>
      </Link>
    );
  };

  export default CardVideogame;