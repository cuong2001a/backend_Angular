import express from 'express'
const router = express.Router();

import { create,edit,findDeskByTrainCar,findOneDesk,list,remove } from '../controller/desk';
router.post('/desk/create',create );
router.put("/desk/edit/:deskId", edit);
router.delete('/desk/delete/:deskId', remove);
router.get('/desk/:deskId',findOneDesk);
router.get('/desk',list);
router.get('/desk/search',findDeskByTrainCar);
module.exports = router;