import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title: {type: String, required: true}, 
    description: {type: String, required: true}, 
    year:  {type: Number, required: true},
    id: {type: String, required: true}
})

const Movie = mongoose.model('Movie', schema); 
export default Movie; 