import express from 'express'
const router = express.Router();

import { create, list,edit,remove } from '../controller/typeDesk';
router.post('/typeDesk/create',create );
router.get("/typeDesk/list",list)
router.put("/typeDesk/edit/:typeDeskId", edit);
router.delete('/typeDesk/:typeDeskId', remove);
module.exports = router;