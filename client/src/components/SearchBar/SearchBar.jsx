import React from 'react';
import { getGameByName , definePage } from '../../store/actions';
import {useDispatch} from 'react-redux';
import style from './SearchBar.module.css'
import {Link} from 'react-router-dom';

function SearchBar() {
  const [state , changeState] = React.useState ('');

  function handlerInput (event) {
    changeState(event.target.value);
  }

  const dispatch = useDispatch();
  function handlerFindGame (e) {
    e.preventDefault();
    if (state !== '') {
      dispatch(getGameByName(state));
      changeState('');
      dispatch(definePage(1)); //modifique esta linea estaba en 0
    }
  }
  
  return (
    <div className={style.div}>
       <form onClick={(e)=> handlerFindGame(e)}>
           <input value={state}onChange={handlerInput} placeholder="Ingrese el juego a buscar"
           className={style.input}></input>
           <Link  to='/home/videogames'>
           <button className={style.btn}>Buscar</button>
           </Link>
       </form>
    </div>
  );
};

export default SearchBar;