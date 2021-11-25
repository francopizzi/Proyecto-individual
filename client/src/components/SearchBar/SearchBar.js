import React from 'react';
import { getGameByName , definePage } from '../../store/actions';
import {useDispatch} from 'react-redux';

function SearchBar() {
  const [state , changeState] = React.useState ('');

  function handlerInput (event) {
    changeState(event.target.value);
  }

  const dispatch = useDispatch();
  function handlerFindGame (e) {
    e.preventDefault();
    dispatch(getGameByName(state));
    changeState('');
    dispatch(definePage(0));
  }
  
  return (
    <div>
       <form onClick={(e)=> handlerFindGame(e)}>
           <input value={state}onChange={handlerInput} placeholder="Ingrese el juego a buscar"></input>
           <button>Buscar</button>
       </form>
    </div>
  );
};

export default SearchBar;