// ATTRIBUTION Crud Model/view/controller code structure adapted from Scott Moss, Front End Masters course on API Design, Curriculum Week 8
import mongoose from 'mongoose'
const genID = mongoose.Types.ObjectId
//Generic CRUD controllers

export const getOne = model => async (req, res) => {
    let query = model.findOne({_id: req.params.id}); 
    query
    .then(result=>{
      if(result) {
          res.status(200).json({data: result}) 
      }
      else{
        res.status(404).end(); 
      }
    })
    .catch(err =>{
      console.log(err)
      res.status(500).end() 
    })
  }

  // export const getMany = model => async (req, res) => { 
  //     model.find({...req.body.conditions}, req.body.projection, {...req.body.options}) //spreading rather than just passing req.body in case req.body = null, still want to pass an empty object
  //     .then(result =>{
  //       if(result){
  //         //need to differentiate property name by which to send result data 
  //         if(req.name === 'soda'){
  //           res.status(200).json({sodas: result}) 
  //         }
  //         else{
  //           // console.log(result)
  //           res.status(200).json({diners: result}) 
  //         }
  //       }
  //       else{ 
  //         res.status(404).end()
  //       }
  //     })
  //     .catch(err =>{
  //       res.status(500).send(err._message) //Might be _message?
  //     })
  // }

  // export const removeOne = model => async (req, res)=>{
  //     model.findByIdAndRemove(req.params.id)
  //     .then(result =>{
  //       if(result){
  //         res.status(200).json({data: result})
  //       }
  //       else{
  //         res.status(404).end()
  //       }
  //     })
  //     .catch(err =>{
  //       res.status(500).send(err._message) //Might be _message?
  //     })
  // }

  export const createOne = model => async (req, res) => {
    model.create(req.body)
    .then(result =>{
      res.status(201).json({data: result})
    })
    .catch(err =>{
      //differentiate between failed model validation and server failure
      if(err._message.includes('validation failed')){
        res.status(400).send(err._message) //bad request
      }
      else{
        res.status(500).send(err._message)
      }
    })
  }

  // export const updateOne = model => async (req, res) =>{
  //   model.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
  //   .then(result => {
  //     if(result){
  //       if(req.name === 'soda'){
  //         res.status(200).json({serving: result.is_serving.toString()}) 
  //       }
  //       else{
  //         res.status(200).json({diner: result}) 
  //       }
  //     }
  //     else{
  //       res.status(404).end()
  //     }
  //   })
  //   .catch(err=>{
  //     res.status(500).send(err._message)
  //   })
  // }

  export const crudControllers = model => ({
    // removeOne: removeOne(model),
    // updateOne: updateOne(model),
    // getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model)
  })
  