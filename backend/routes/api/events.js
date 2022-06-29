const express = require('express');
const asyncHandler = require('express-async-handler');

const { Event } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateEvent = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ max: 250 })
        .withMessage("Please provide a valid title"),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a description"),
    check('img_url')
        .exists({ checkFalsy: true })
        .withMessage("Please provide an image"),
    check('img_url_two')
        .exists({ checkFalsy: true })
        .withMessage('Please provide another image'),
    check('location')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a location"),
    check('time')
        .exists({ checkFalsy: true })
        .isDate()
        .withMessage("Please provide a valid date"),
    handleValidationErrors
];

//return a list of event object
router.get('/', asyncHandler(async (req, res) => {
    const events = await Event.findAll();
    return res.json(events);
}));

//return a single object
router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    const eventId = req.params.id;
    const event = await Event.findByPk(eventId);
    return res.json(event);
}));

//post a new event, locate user in frontend
router.post('/', requireAuth, validateEvent, asyncHandler(async (req, res) => {
    const { title, description, img_url, img_url_two, location, time } = req.body;
    const newEvent = await Event.create({
        title,
        description,
        img_url,
        img_url_two,
        location,
        user_id:req.user.id,
        time
    });
    return res.json(newEvent);
}))

//update a new event, locate user in frontend
router.put(`/:id(\\d+)`, requireAuth, validateEvent, asyncHandler(async (req, res) => {
    const eventId = req.params.id;
    const { title, description, img_url, img_url_two, location, time } = req.body;
    const event = await Event.findByPk(eventId);

    event.title = title;
    event.description = description;
    event.img_url = img_url;
    event.img_url_two = img_url_two;
    event.location = location;
    event.time = time;

    await event.save()
    return res.json(event);
}));

//delete a event, locate user in frontend
router.delete(`/:id(\\d+)`, requireAuth, asyncHandler(async (req, res) => {
    const eventId = req.params.id;
    const event = await Event.findByPk(eventId);
    if(event) {
        await event.destroy();
        res.send({message: 'it is deleted'})
    }
}))


module.exports = router;