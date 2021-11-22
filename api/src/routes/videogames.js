const { Router } = require('express');
const { Videogame , Genre }= require('../db');
const {Op} = require('sequelize');
const axios  = require('axios');
const router = Router();

const {
    API_KEY
  } = process.env;

/*
router.get('/' , async (req,res,next) => {
    const {name} = req.query;
    let allGamesAPI = [];
    let auxGamesAPI = [];
    let allGamesDB = [];
    //////////      Obtengo los juegos de la API        //////
    try {
        allGamesAPI = await axios.get(
            `https://api.rawg.io/api/games?key=${API_KEY}`
          );
        allGamesAPI = allGamesAPI.data.results
        // Voy a quedarme con las props que me pide imagen, nombre y genero
        allGamesAPI.forEach(element => {
            auxGamesAPI.push({
                name: element.name,
                background_image: element.background_image,
                genres: element.genres
            })
        }); 
    }
    catch (error) {
        next(error)
    }
    //////////       Obtengo los juegos de la BD    /////
    try {
        allGamesDB = [{name: "Franco", background_image:"no tengo imagen" , genres: "No soy un juego"}];
        //allGamesDB = await Videogame.findAll();
    }
    catch (error) {
        next (error);
    }
    
    // Uno los juegos en un unico array
    let allGames = [...auxGamesAPI , ...allGamesDB];

    if (name) {
        allGames = allGames.filter(element => element.name.includes(name) )
        if (!allGames) return res.sendStatus(404);
        if (allGames.length > 15) allGames = allGames.slice(0,15);
    }
    //res.send(length)
    res.send(allGames);

}); */

router.get('/' , (req,res,next) => {
    const {name} = req.query;


    if (name) {
        let promiseAllGamesDB = Videogame.findAll({
            where: {
               name: {[Op.iLike]: "%" + name + "%"}
            }
        });
        let promiseAllGamesAPI = axios.get(
            `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
        );
        Promise.all([
            promiseAllGamesDB,
            promiseAllGamesAPI
        ])
        .then (response => {
            let [AllGamesDB , AllGamesAPI] = response;
            let allGames = [...AllGamesDB , ...AllGamesAPI.data.results]
            let auxGames = []
            
            if (!allGames.length) return res.status(404).send("No existe ningun juego con el nombre solicitado");
            
            allGames.forEach(element => {
                auxGames.push({
                    name: element.name,
                    background_image: element.background_image,
                    genres: element.genres
                })
            }); 
            if (auxGames.length > 15) auxGames = auxGames.slice(0,15);
            res.send(auxGames);
        })
    } 

    else {
        let allPromises = [];
        allPromises.push(Videogame.findAll({include: Genre}));
        for (let i = 1; i <=5 ; i++){
            allPromises.push(axios.get(
                `https://api.rawg.io/api/games?page=${i}&key=${API_KEY}`  //https://api.rawg.io/api/games?page=1&key=88746d59f283472eafe6adbe231549ca
            ))
        } 
        Promise.all(allPromises)
        .then (response => {
            let [AllGamesDB , ...AllGamesAPIarray] = response;
            let AllGamesAPI = [];
            AllGamesAPIarray.forEach(element => {AllGamesAPI =AllGamesAPI.concat(element.data.results)});
            let allGames = [...AllGamesDB , ...AllGamesAPI]
            let auxGames = []
            
            if (!allGames.length) return res.status(404).send("Ocurrio un error");
            
            allGames.forEach(element => {
                auxGames.push({
                    name: element.name,
                    background_image: element.background_image,
                    genres: element.genres
                })
            }); 
            res.send(auxGames);
        })
    }

});
module.exports = router;