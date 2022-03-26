const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const TicketModel = require('../../Middlewares/Model/schema/ticket.schema')
const { tickets_get, tickets_post, tickets_get_byID, ticket_update } = require('../../Controllers/ticket.controllers')
const userVerification = require('../../Middlewares/access.token')
const like_tickets = require('../../Controllers/like.tickets-controller')

router.get('/', tickets_get);
router.post('/', userVerification, tickets_post);
router.get('/:ticketID', tickets_get_byID);
router.patch('/:ticketId', userVerification, ticket_update);
router.post('/:ticketID/likes',like_tickets )


module.exports = router
