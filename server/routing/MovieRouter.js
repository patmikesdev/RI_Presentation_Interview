import MovieController from '../controllers/movie_controller.js'
import {Router} from 'express'

const {getOne, getMany, createOne, getOneBYID} = MovieController; 
const MovieRouter = Router();


MovieRouter
.route('/search/:id')
.get(getOne)
// .delete(removeOne)
// .put(parseInputData, updateOne)

MovieRouter
    .route('/search')
        .get(getMany)
        .post(getOne)

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

