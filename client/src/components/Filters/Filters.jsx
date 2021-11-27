import React from 'react-redux';
import EachFilter from '../EachFilter/EachFilter'

export default function Filters () {

    return (
        <div>
            <ul>
                <li>Filtros</li>
                <ul>
                <EachFilter name="Quitar filtros"/>
                <EachFilter name="Alfabetico" lista={["Ascendente","Descendente"]}/>
                <EachFilter name="Rating" lista={["Ascendente","Descendente"]} />
                <EachFilter name="Genero"/>
                <EachFilter name="¿Donde se creo?" lista={["Base de datos","API"]}/>
                </ul>
            </ul>
        </div>
    )
}