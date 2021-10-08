import express from 'express'
const router = express.Router();

import { create, edit, listRelated, remove, search } from '../controller/train';
router.post('/train/create',create );
router.get("/train/search",search);
router.put("/train/edit/:trainId", edit);
router.delete('/train/:trainId', remove);
module.exports = router;