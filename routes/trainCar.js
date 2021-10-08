import express from 'express'
const router = express.Router();

import { create, list,edit,remove } from '../controller/trainCar';
router.post('/trainCar/create',create );
router.get('/trainCar/list',list)
router.put("/trainCar/edit/:trainCarId", edit);
router.delete('/trainCar/:trainCarId', remove);
module.exports = router;