const express = require('express');
const asyncHandler = require('express-async-handler');

const { Ticket } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateTicket = [
    check('phone')
        .exists({ checkFalsy: true })
        .isLength(10)
        .withMessage("Please provide a valid phone number"),
    check('need_parking')
        .isBoolean()
        .withMessage('Please specify if you need parking space'),
    handleValidationErrors
]

//return a list of tickets
router.get(`/:userId(\\d+)/orders`, asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const tickets = await Ticket.findAll({
        include: "Event",
        where: { user_id: userId }
    })
    return res.json(tickets);
}))

//register a ticket
router.post('/', requireAuth, validateTicket, asyncHandler(async (req, res) => {
    const { user_id, event_id, phone, need_parking } = req.body;
    const newTicket = await Ticket.create({
        user_id,
        event_id,
        phone,
        need_parking
    });
    return res.json(newTicket);
}))

//update a ticket
router.put(`/:id(\\d+)`, requireAuth, validateTicket,
    asyncHandler(async (req, res) => {
        const ticketId = req.params.id;
        const { user_id, event_id, phone, need_parking } = req.body;
        const ticket = await Ticket.findByPk(ticketId);

        ticket.user_id = user_id;
        ticket.event_id = event_id;
        ticket.phone = phone;
        ticket.need_parking = need_parking;

        await ticket.save();
        return res.json(ticket);
    })
)

//delete a ticket
router.delete(`/:id(\\d+)`, requireAuth, asyncHandler(async (req, res) => {
    const ticketId = req.params.id;
    await Ticket.destroy({
        where: {
            id: ticketId
        }
    })
    res.send({ message: 'it is deleted' })
}))


module.exports = router;