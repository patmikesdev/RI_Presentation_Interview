import MovieController from '../controllers/movie_controller.js'
import {Router} from 'express'

const {getOne, getMany, getOneByID} = MovieController; 
const MovieRouter = Router();

//ROUTING STILL NEEDS TO IMPLEMENTED FOR FULL EDITING, AND SUBMITTING FUNCTIONALITY

MovieRouter
    .route("/edit/:id")
        .get(getOneByID)

MovieRouter
    .route('/search')
        .get(getMany)
        .post(getOne)


export default MovieRouter

