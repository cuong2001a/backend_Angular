import express from 'express'
const router = express.Router();

import { create,edit,remove } from '../controller/typeTicket';
router.post('/typeTicket/create',create );
router.put("/typeTicket/edit/:typeTicketId", edit);
router.delete('/typeTicket/:typeTicketId', remove);
module.exports = router;