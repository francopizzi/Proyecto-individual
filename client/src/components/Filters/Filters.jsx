import React from 'react-redux';
import EachFilter from '../EachFilter/EachFilter';
import style from './Filters.module.css'

export default function Filters () {

    return (
        <div>
            <ul className={style.filters}>
                <li className={style.li}><button className={style.btn}>Filtros</button>
                    <ul>
                        <EachFilter name="Quitar filtros"/>
                        <EachFilter name="Alfabetico" lista={["Ascendente","Descendente"]}/>
                        <EachFilter name="Rating" lista={["Ascendente","Descendente"]} />
                        <EachFilter name="¿Donde se creo?" lista={["Base de datos","API"]}/>
                        <EachFilter name="Genero"/>
                    </ul>
                </li>
            </ul>
        </div>
    )
}