import React from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { orderGamesAlf , deleteFilters , createdType, gameByRating , genreFilter} 
from '../../store/actions';

export default function EachFilter ({name, lista}) {
    const {genres , videogames} = useSelector(state => state);
    const dispatch = useDispatch();
    
    function handlerFilters (e) {
        // despacho un filtro con el nombre
        if (e.target.name === "Alfabetico") {
            console.log(e.target.value)
            dispatch(orderGamesAlf(e.target.value));
        }
        if (e.target.name === "Quitar filtros") {
            console.log(e.target.name)
            dispatch(deleteFilters());
        }
        if (e.target.name === "¿Donde se creo?" ) {
            console.log(e.target.value)
            dispatch(createdType(e.target.value))
        }
        if (e.target.name === "Rating") {
            console.log(e.target.value)
            dispatch(gameByRating(e.target.value , videogames))
        }
        if (e.target.name === "Genero") {
            console.log("Soy e value",e.target.value)
            dispatch(genreFilter(e.target.value , videogames)) //ACA AGREGUE videogames
        }
    }

    return (
        <div>
            <li><button name={name} onClick={handlerFilters}>{name}</button>
                
                <ul>
                {
                    lista && lista.map (element => 
                    <li><button name={name} value={element} onClick={handlerFilters}>{element}</button></li>)
                }
                </ul>
                {
                    name === "Genero" && <ul>{genres.map (element => 
                    <li><button key={element.id} name={name} value={element.name} onClick={handlerFilters}>{element.name}</button></li>)}</ul>
                }
            </li>
        </div>
    )
}