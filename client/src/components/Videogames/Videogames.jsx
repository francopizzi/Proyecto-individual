import React from 'react';
import { connect , useDispatch} from 'react-redux';
import { getGamesxPage , getAllGames} from '../../store/actions';
import CardVideogame from '../CardVideogame/CardVideogame.jsx';
import Filters from '../Filters/Filters';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Videogames.module.css';

    
function Videogames() {
  let {videogamesXpage , number , flagFilter} = useSelector ((state)=> state)
  const dispatch = useDispatch();
  React.useEffect(() => {
      console.log(number);
      console.log("Estoy aca")
      dispatch(getGamesxPage(number))
    },[number,flagFilter /*, videogamesXpage.length*/]); 

  return (
    <div className={style.grid}>
        <Filters className={style.filters}/>
       <div className={style.conteiner}>
      {
        videogamesXpage.length && videogamesXpage.map ( (element) =>(
            <CardVideogame
            key = {element.id}
            id={element.id}
            name = {element.name}
            backgroundImage = {element.background_image}
            genres = {element.genres}
            />   
        ))
        //: <h1>Loading...</h1>
        }
        </div>
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