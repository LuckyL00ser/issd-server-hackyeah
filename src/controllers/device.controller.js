import Device from '../models/device'
import Measure from "../models/measure";

const get = function (req, res,next) {
    Device.findOne({_id:req.params.id},(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    })
};
const getNearbyDevices = function (req, res,next) {
    Device.find({ location: {
                        $near: {
                            $geometry: {type:'Point',coordinates: req.body.coordinates},
                            $maxDistance: 1000
                        }
    }},(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    })
};
const index =  function (req, res,next) {
    let query = {}
    if(req.query.name)
        query['name'] =new RegExp(`${req.query.name}`,"i")

    Device.find(query,(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    })
};
const create = function (req, res, next) {

    let drink = new Device(req.body);
    drink.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(drink)
    })
};
const update = function (req, res,next) {
    Device.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,result)=>{
        if(err) next(err);
        else{
            res.send(result);
        }
    })
};
const remove = function (req, res,next) {
    Device.deleteOne({_id:req.params.id},(err,result)=>{
        if(err)next(err);
        else{
            Measure.deleteMany({device:req.params.id},(err,resultMeasure)=>{
                res.send(resultMeasure)
            })
        }
    })
};

export {get,index,create,update,remove,getNearbyDevices}
