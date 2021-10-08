import express from 'express'
const router = express.Router();

import { create, edit, remove } from '../controller/address';
router.post('/address/create', create);
router.put("/address/edit/:addressId", edit);
router.delete('/address/:addressId', remove);
module.exports = router;