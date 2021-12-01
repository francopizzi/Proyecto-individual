import {
            DEFINE_PAGE, GET_ALL_GAMES , GET_ALL_GENRES , GET_GAMESXPAGE ,GET_GAME_BY_NAME, GET_GAME_DETAIL,
            ORDER_VIDEOGAMES, ORDER_GAMES_RATING , DELETE_FILTERS, CREATED_TYPE,GENRE_FILTER , CREATE_GAME
        }  from '../actions';

const initialState = {
    videogames: [],
    genres: [],
    videogamesXpage: [],
    number:0,
    gameDetail: {},
    flagFilter: true,
    originalvideogames:[],
    //videogamesByName: [],
};

const reducer = (state=initialState , action) => {
    switch (action.type){
        case GET_ALL_GAMES:
            return {...state, videogames: action.payload , originalvideogames: JSON.stringify(action.payload)};
        case GET_ALL_GENRES:
            return {...state , genres:action.payload};
        case DEFINE_PAGE:
            return {...state , number: action.payload};
            case CREATE_GAME:
                return {...state , flagFilter: !state.flagFilter, number:1,
                videogames: action.payload? state.videogames = [action.payload, ...JSON.parse(state.originalvideogames)] 
                : state.videogames = JSON.parse(state.originalvideogames),
                originalvideogames: action.payload? JSON.stringify([action.payload, ...JSON.parse(state.originalvideogames)])
                : JSON.stringify(JSON.parse(state.originalvideogames))}
        case GET_GAMESXPAGE:
            return {...state , 
                videogamesXpage: action.payload?state.videogames.slice(15*(action.payload-1) , 15*action.payload)
            :state.videogamesXpage}
        case GET_GAME_BY_NAME:
            return {...state , flagFilter: !state.flagFilter, videogames: action.payload};//videogamesXpage: action.payload };
        case GET_GAME_DETAIL:
            return {...state , gameDetail: action.payload};
        case ORDER_VIDEOGAMES:
            return {...state, flagFilter: !state.flagFilter, number:1,
                videogames: action.payload === "Ascendente"? state.videogames.sort(orderAlf)
            :state.videogames.sort(orderAlf).reverse()}
        case DELETE_FILTERS:
            return {...state, flagFilter: !state.flagFilter, number:1, videogames: JSON.parse(state.originalvideogames)};
        case CREATED_TYPE:
            return {...state , flagFilter: !state.flagFilter,  number:1,
                videogames: typeOfCreation(action.payload, state.videogames,state.originalvideogames)};
        case ORDER_GAMES_RATING:
            return {...state ,  flagFilter: !state.flagFilter, number:1,
                videogames: action.payload}
        case GENRE_FILTER:
            return {...state ,  flagFilter: !state.flagFilter, number:1,
                videogames: action.payload}
        default: return state;
    }
}

function orderAlf (a,b) {
    if ( a.name.toUpperCase() < b.name.toUpperCase() ){
        console.log(a.name.toUpperCase(), b.name.toUpperCase())
        return -1;
    }
    if ( a.name.toUpperCase() > b.name.toUpperCase() ){
        console.log(a.name.toUpperCase(), b.name.toUpperCase())
        return 1;
    }
      return 0;    
}

function typeOfCreation (payload , videogames , originalvideogames) {
    if (payload==="API"){
        console.log("API")
        let games = videogames.filter((element) =>  typeof element.id === 'number' )
        //console.log("games:",games);
        if (games.length) return games;
        else {
            videogames =JSON.parse(originalvideogames)
            let games = videogames.filter((element) =>  typeof element.id === 'number' )
            return games
        }
    }
    else {
        let games = videogames.filter((element) => typeof element.id === 'string')
        console.log(games)
        if (games.length) return games;
        else {
            videogames =JSON.parse(originalvideogames)
            let games = videogames.filter((element) =>  typeof element.id === 'string' )
            return games
        }
    }
}


export default reducer;