const { Router } = require('express');
const {Genre}= require('../db');
const axios  = require('axios');
const router = Router();

const {
    API_KEY
  } = process.env;

router.get('/' , async (req,res,next) => {
    try {
        let genresAPI = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        genresAPI = genresAPI.data.results;
        for (let i = 0; i< genresAPI.length; i++){
            const newGenre = await Genre.create({
                id: genresAPI[i].id,
                name: genresAPI[i].name
            })
        }
        res.send(genresAPI);
    }
    catch (error) {
        next (error)
    }
    /*axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )
      .then(r => r.data)
      .then(({results}) => {
        res.send(results);
      })
      .catch (error => next(error));
    */
    //res.send("soy get de genres");
});


module.exports = router;