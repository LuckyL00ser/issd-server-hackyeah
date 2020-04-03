import express from 'express';

const router = express.Router({mergeParams:true});

import * as device_controller from '../controllers/device.controller'

//
router.get('/',  device_controller.index);
router.get('/:id',  device_controller.get);
router.post('/',  device_controller.create);
router.delete('/:id',  device_controller.remove);
router.patch('/:id',  device_controller.update);


export default  router;
