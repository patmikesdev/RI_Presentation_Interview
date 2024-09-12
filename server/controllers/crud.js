// ATTRIBUTION Crud Model/view/controller code structure WITH CLOSURES adapted from Scott Moss, Front End Masters course on API Design, Curriculum Week ~8

import mongoose from 'mongoose'
const genID = mongoose.Types.ObjectId
//Generic CRUD controllers

export const getOneByID = model => async (req, res) => {
model.findById(req.params.id)
    .then(result => {
      if (result) {
        res.status(200).json({ data: result })
      }
      else{
        res.status(404).json({ data: `Could not find movie matching query: {_id: ${req.params.id}}`})
      }
    })
    .catch(err => {
      res.status(500).json({ data: `Server Error in trying to retrieve results for query {_id: ${req.params.id}}:\n ${err}` })
    })
}

export const getOne = model => async (req, res) => {
  model.findOne(req.body).lean() //lean query returns plain JS object, not wrapped as Mongoose Document
    .then(result => {
      if (result) {
        res.status(200).json({ data: result })
      }
      else{
        res.status(404).json({ data: `Could not find movie matching query: ${JSON.stringify(req.body)}`})
      }
    })
    .catch(err => {
      res.status(500).json({ data: `Error in trying to retrieve results for query ${JSON.stringify(req.body)}:\n ${err}` })
  })
}

export const getMany = model => async (req, res) => {
  //make sure no empty strings are getting passed as part of query; 
  !req.body.title && delete req.body.title; 
  !req.body.year && delete req.body.year; 
  !req.body.description && delete req.body.description; 

  model.find(req.body).lean() //lean query returns plain JS object, not wrapped as Mongoose Document
    .then(result => {
      // if nothing found, returns an empty array, not a 404 error
      if (result.length > 0) {
        res.status(200).json({ data: result })
      }
      else{
        res.status(404).json({ data: `Could not find movie matching query: ${JSON.stringify(req.body)}`})
      }
    })
    .catch(err => {
      res.status(500).json({ data: `Error in trying to retrieve results for query ${JSON.stringify(req.body)}:\n ${err}` })
  })
}


// export const createOne = model => async (req, res) => {
  // LEFT FOR EXERCISE!
// }

// export const updateOne = model => async (req, res) =>{
  // LEFT FOR EXERCISE!
// }

export const crudControllers = model => ({
  // removeOne: removeOne(model),
  // updateOne: updateOne(model),
  // createOne: createOne(model)
  getMany: getMany(model),
  getOne: getOne(model),
  getOneByID: getOneByID(model),
})
