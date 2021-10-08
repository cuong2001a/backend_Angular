import express from 'express'
const router = express.Router();

import { create, edit, remove } from '../controller/infoTicket';
router.post('/infoTicket/create',create );
router.put("/infoTicket/edit/:infoTicketId", edit);
router.delete('/infoTicket/:infoTicketId', remove);
module.exports = router;