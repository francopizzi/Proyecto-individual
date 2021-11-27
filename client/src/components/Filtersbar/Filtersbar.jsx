import React from 'react';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { definePage} from '../../store/actions';
import style from './Filtersbar.module.css';

function Filtersbar() {
    const {videogames, number} = useSelector ((state)=> state)
    const dispatch = useDispatch();
    let numberPages = [];
    for (let i=0; i <Math.ceil(videogames.length/15); i++){
        numberPages[i]=i+1;
    }


    function handlerPage (e) {
        if(e.target.name === "Siguiente")
            dispatch(definePage(parseInt(number)+1));
        else
            dispatch(definePage(parseInt(number)-1));
    }
      
    return (
    <div className={style.navigation}>
        <div className={style.container}>
        {number>0 && <button name="Anterior" onClick={handlerPage}>Anterior</button>}
       {
           numberPages.map((page)=> <ButtonNavigation number={page}/>)
        }
        {number<Math.ceil(videogames.length/15) && <button name= "Siguiente" onClick={handlerPage}>Siguiente</button>}
        </div>
    </div>
  );
};

export default Filtersbar;