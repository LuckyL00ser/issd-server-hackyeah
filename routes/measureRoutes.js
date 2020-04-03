import express from 'express';

const router = express.Router({mergeParams:true});

import * as measure_controller from '../controllers/measure.controller'

router.get('/',  measure_controller.index); //get all
router.get('/:id',  measure_controller.get);    //get one
router.post('/',  measure_controller.create);

export default  router;
