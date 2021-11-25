import React from 'react';
import { connect , useDispatch} from 'react-redux';
import { getGamesxPage } from '../../store/actions';
import CardVideogame from '../CardVideogame/CardVideogame.js'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

    
function Videogames() {
  const reduxState = useSelector ((state)=> state)
  let {videogamesXpage , number , flagFilter} = reduxState;  // ESTO LO PUEDO UNIR TODO EN LA MISMA LINEA
  const dispatch = useDispatch();
  //let videogamesRender = [];
  React.useEffect(() => {
    console.log("Estoy aca")
      dispatch(getGamesxPage(number))
      //videogamesRender = videogames.slice (15*(number-1) , 15*number);  
      //console.log(videogamesRender , number)
    },[number,flagFilter]); 

  /*
    React.useEffect(() => {
    console.log("Los valores son", videogames, number)
    videogames = videogames.splice (15*(number-1) , 15*number);
  },number)*/
  return (
    <div>
       <h1>Estos son los juegos:</h1>
      {
        videogamesXpage? videogamesXpage.map ( (element) =>(
            <CardVideogame
            key = {element.id}
            id={element.id}
            name = {element.name}
            backgroundImage = {element.background_image}
            genres = {element.genres}
            />   
        ))
        : <h1>Loading...</h1>
        }
    </div>
  );
};


/*
export const mapStateToProps = function(state){
  return {
  videogames: state.videogames
};
}


export const mapDispatchToProps = function (dispatch){
 return{
    getAllGames: () => dispatch(getAllGames())
 };
}

export default  connect(mapStateToProps, mapDispatchToProps)(Videogames);
*/
export default Videogames;