import express from 'express'
const router = express.Router();

import { create, edit } from '../controller/infoUser';
router.post('/infoUser/create',create );
router.put("/infoUser/edit/:userId", edit);
module.exports = router;