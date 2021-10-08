import express from 'express'
const router = express.Router();

import { create, edit, remove, search } from '../controller/time';
router.post('/time/create',create );
router.get('/time/search',search)
router.put("/time/edit/:timeId", edit);
router.delete('/time/:timeId', remove);
module.exports = router;