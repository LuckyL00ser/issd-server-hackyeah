import express from 'express';
import deviceRoutes from './deviceRoutes'
import measureRoutes from './measureRoutes'
const router = express.Router({mergeParams:true});

router.use('/devices',deviceRoutes)
router.use('/devices/:deviceID/measures',measureRoutes)

export default  router;
