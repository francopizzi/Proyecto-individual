import React from 'react';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import { useSelector } from 'react-redux';

function Filtersbar() {
    const videogames = useSelector ((state)=> state.videogames)
    let numberPages = [];
    for (let i=0; i <Math.ceil(videogames.length/15); i++){
        numberPages[i]=i+1;
    }
    return (
    <div>
       {
           numberPages.map((page)=> <ButtonNavigation number={page}/>)
        }
    </div>
  );
};

export default Filtersbar;