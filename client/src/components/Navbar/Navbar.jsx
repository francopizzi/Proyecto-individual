import React from 'react';
import ButtonAddGame from '../ButtonAddGame/ButtonAddGame';
import ButtonHome from '../ButtonHome/ButtonHome';
import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.grid}>
       <Link to="/home/videogames">
        <ButtonHome className={style.videogames}/>
       </Link>
       <SearchBar className={style.searchBar}/>
       <Link to="/home/addgame">
        <ButtonAddGame className={style.addGame}/>
       </Link>
    </div>
  );
};

export default Navbar;