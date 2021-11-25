import React from 'react';

export default function FormAddGame () {
    
    return (
        <div>
            <form>
                <label>Nombre</label>
                <input></input>
                <label>Descripción</label>
                <input></input>
                <label>Fecha de lanzamiento</label>
                <input type="date"></input>
                <label>Rating</label>
                <input></input>
                <label>Géneros</label>
                <input></input>
                <label>Plataformas</label>
                <input></input>
                <button>Crear juego</button>
            </form>
        </div>
    );
}