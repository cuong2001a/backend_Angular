import express from 'express'
const router = express.Router();

import { create,edit,remove } from '../controller/desk';
router.post('/desk/create',create );
router.put("/desk/edit/:deskId", edit);
router.delete('/desk/delete/:deskId', remove);
module.exports = router;