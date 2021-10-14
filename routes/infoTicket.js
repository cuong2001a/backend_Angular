import express from 'express'
const router = express.Router();

import { create, edit, findOne, list, remove, search } from '../controller/infoTicket';
router.post('/infoTicket/create',create );
router.put("/infoTicket/edit/:infoTicketId", edit);
router.delete('/infoTicket/:infoTicketId', remove);
router.get('/infoTicket',list);
router.get('/infoTicket/:infoTicketId',findOne);
router.get('/infoTicket/search',search);
module.exports = router;