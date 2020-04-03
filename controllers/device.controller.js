import Device from '../models/device'

const get = function (req, res,next) {
    Device.findOne({_id:req.params.id},(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    })

};
const index = function (req, res,next) {
    Device.find({},(err,result)=>{
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
    Device.findOneAndUpdate({_id:req.params.id},req.body,(err,result)=>{
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
            res.send(result)
        }
    })
};

export {get,index,create,update,remove}
