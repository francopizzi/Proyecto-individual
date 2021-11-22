import React from 'react';
import { connect , useDispatch} from 'react-redux';
import { getAllGames } from '../../store/actions';
import CardVideogame from '../CardVideogame/CardVideogame.js'
import { useSelector } from 'react-redux';

    
function Videogames() {
  const videogames = useSelector ((state)=> state.videogames)
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getAllGames())   
    },[]);
  return (
    <div>
       <h1>Estos son los juegos:</h1>
      {
        videogames && videogames.map ( (element) =>(
          <CardVideogame
          //id = {element.id}
          name = {element.name}
          backgroundImage = {element.background_image}
          />
          
        ))
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