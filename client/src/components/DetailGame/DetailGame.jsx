import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router";
import { getGameDetail } from "../../store/actions";

/// VERIFICAR SI PUEDO MEJORAR ESTA PARTE DEL CODIGO CON RESPECTO A COMO ME LLEGA EL DATO SI VIENE DE LA BASE DE DATOS 
/// O SI VIENE DE LA API
export default function DetailGame () {
    const {gameDetail} = useSelector((state)=> state);
    const {id} = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getGameDetail(id))   
      },[]);
    return (
        <div>
            {
            gameDetail.id === parseInt(id)?
            <div>
            <p>{gameDetail.name}</p>
            <p>{gameDetail.description}</p>    
            <p>{gameDetail.released}</p>
            <p>{gameDetail.rating}</p>
            <ul>
                {/*
                id.length < 10 ?*/
                gameDetail.platforms && gameDetail.platforms.map (element => (                  
                        <li>{element.name}</li>
                ))
                /*:
                gameDetail.platforms && gameDetail.platforms.map (element => (                  
                    <li>{element}</li>
                ))
                */}
            </ul>
            <ol>
                {/*
                id.length < 10 ?*/
                gameDetail.genres && gameDetail.genres.map (element => (
                        <li>{element.name}</li>
                ))
                /*:
                gameDetail.genres && gameDetail.genres.map (element => (
                    <li>{element}</li>
                ))
                */}
            </ol>
            </div>
                : <h1>Cargando...</h1> 
            }
        </div>
    )
}