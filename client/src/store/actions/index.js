const axios  = require('axios');
export const GET_ALL_GAMES = "GET_ALL_GAMES";


export function getAllGames (){
        return function (dispatch){
                fetch("http://localhost:3001/videogames")
              .then((response) => response.json())
              .then((data) => {
                dispatch({ type: GET_ALL_GAMES, payload: data });
                }) 
        }
/*
        return axios("http://localhost:3001/videogames")
        .then ((response) => {
                dispatch ({type: GET_ALL_GAMES , payload: response.data});
        }) */
}