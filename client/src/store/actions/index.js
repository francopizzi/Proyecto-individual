const axios  = require('axios');
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const DEFINE_PAGE = "DEFINE_PAGE";
export const GET_GAMESXPAGE = "GET_GAMESXPAGE";
export const GET_GAME_BY_NAME = "GET_GAME_BY_NAME";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const ORDER_VIDEOGAMES = "ORDER_VIDEOGAMES";
export const ORDER_GAMES_RATING = "ORDER_GAMES_RATING";
export const DELETE_FILTERS = "DELETE_FILTERS";
export const CREATED_TYPE = "CREATED_TYPE";
export const GENRE_FILTER = "GENRE_FILTER";


export function genreFilter (genre){
        return function (dispatch){
                fetch("http://localhost:3001/videogames/"+genre)
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: GENRE_FILTER, payload: data });
                }) 
        }
}

export function gameByRating (order){
        return function (dispatch){
                fetch("http://localhost:3001/videogames/"+order)
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: ORDER_GAMES_RATING, payload: data });
                }) 
        }
}


export function createdType (type) {
        return function (dispatch){
                dispatch({ type: CREATED_TYPE, payload: type });
        }
}


export function deleteFilters (){
        return function (dispatch) {
                dispatch({type: DELETE_FILTERS})
        }
}

export function orderGamesAlf (tipo , flag) {
        return function (dispatch) {
                dispatch({type: ORDER_VIDEOGAMES , payload: tipo})
        }
}

export function getGameDetail (id){
        return function (dispatch){
                fetch("http://localhost:3001/videogame/"+id)
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: GET_GAME_DETAIL, payload: data });
                }) 
        }
}

export function definePage (pageNumber) {
        return function (dispatch) {
                dispatch({type: DEFINE_PAGE , payload:pageNumber})
        }
}

export function getGamesxPage (pageNumber) {
        return function (dispatch) {
                dispatch({type: GET_GAMESXPAGE , payload:pageNumber})
        }  
}

export function getGameByName (gameName) {
        return function (dispatch){
                fetch("http://localhost:3001/videogames?name="+gameName)
                .then((response) => response.json())
                .then((data) => {
                dispatch({ type: GET_GAME_BY_NAME, payload: data });
                }) 
        }
}

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

export function getAllGenres () {
        return function (dispatch) {
                fetch ("http://localhost:3001/genres")
                .then ((response)=> response.json())
                .then((data)=> {
                        dispatch({type:GET_ALL_GENRES , payload: data})
                })
        }
}