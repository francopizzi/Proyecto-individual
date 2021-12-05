import React from 'react';
import style from './ButtonHome.module.css';
import {useDispatch} from 'react-redux';
import {getAllGames} from '../../store/actions';


function ButtonHome() {
  const dispatch = useDispatch();
  
  function handleOnClick() {
    dispatch(getAllGames());
  }
  

  return (
    <div className={style.videogames}>
       <button className={style.btn} onClick={handleOnClick}>Juegos</button>
    </div>
  );
};

export default ButtonHome;