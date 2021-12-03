import React from 'react-redux';
import EachFilter from '../EachFilter/EachFilter';
import style from './Filters.module.css'

export default function Filters () {

    return (
        <div>
            <ul className={style.filters}>
                <li className={style.li}><button className={style.btn}>Filtros</button>
                    <ul>
                        <EachFilter key={1} name="Quitar filtros"/>
                        <EachFilter key={2} name="Alfabetico" lista={["Ascendente","Descendente"]}/>
                        <EachFilter key={3} name="Rating" lista={["Ascendente","Descendente"]} />
                        <EachFilter key={4} name="¿Donde se creo?" lista={["Base de datos","API"]}/>
                        <EachFilter key={5} name="Genero"/>
                    </ul>
                </li>
            </ul>
        </div>
    )
}