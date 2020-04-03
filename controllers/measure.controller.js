import Measure from '../models/measure'

const get = function (req, res,next) {
    Measure.findOne({_id:req.params.id},(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    })

};
const index = function (req, res,next) {
    Measure.find({},(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    })
};
const create = function (req, res, next) {

    let drink = new Measure(req.body);
    drink.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(drink)
    })
};
export {get,index,create}
