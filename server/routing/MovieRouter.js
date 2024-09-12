import MovieController from '../controllers/movie_controller.js'
import {Router} from 'express'

const {getOne, getMany, getOneBYID} = MovieController; 
const MovieRouter = Router();


MovieRouter
.route('/search/:id')
.get(getOne)

MovieRouter
    .route('/search')
        .get(getMany)
        .post(getOne)

// MovieRouter
//     .route('/submit')
//         .post(createOne)
//make some changes

export default MovieRouter

