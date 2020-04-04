import Measure from '../models/measure'

const get = function (req, res,next) {
    Measure.findOne({_id:req.params.id},(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    })

};
const index = function (req, res,next) {
    const yesterday24H = new Date(new Date()-24*60*60*1000);   //24h ago

    Measure.find({device:req.params.deviceID, time: { $gt: yesterday24H}},null,{sort: {time:-1}},(err,result)=>{
        if(err) next(err);
        else
            res.send(result);
    });
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
