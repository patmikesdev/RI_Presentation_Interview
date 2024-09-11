import MovieController from '../controllers/movie_controller.js'
import {Router} from 'express'

const {getOne, createOne} = MovieController; 
const MovieRouter = Router();

MovieRouter.use(applyReqName)

MovieRouter
    .route('search/:id')
        .get(getOne)
        // .delete(removeOne)
        // .put(parseInputData, updateOne)

MovieRouter
    .route('/submit')
        .post(createOne)

// MovieRouter 
//     .route('')
//         .get(sortByName, getMany)
//         .post(parseInputData, createOne)



export default MovieRouter


// function sortByName(req, res, next){
//     req.body = {
//         options: {
//             sort : 'name'
//         }
//     }
//     next()
// }

