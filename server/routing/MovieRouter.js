import MovieController from '../controllers/movie_controller.js'
import {Router} from 'express'

const {getOne, getMany, createOne} = MovieController; 
const MovieRouter = Router();


MovieRouter
.route('/search/:id')
.get(getOne)
// .delete(removeOne)
// .put(parseInputData, updateOne)

MovieRouter
    .route('/search')
        .get(getMany)

MovieRouter
    .route('/submit')
        .post(createOne)

export default MovieRouter


// function sortByName(req, res, next){
//     req.body = {
//         options: {
//             sort : 'name'
//         }
//     }
//     next()
// }

