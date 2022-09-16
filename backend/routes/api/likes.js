const express = require('express');
const asyncHandler = require('express-async-handler')

const { Like } = require('../../db/models');
const { Event } = require('../../db/models')
const { requireAuth } = require('../../utils/auth')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const likes = await Like.findAll();
    return res.json(likes)
}))

router.post(`/:id(\\d+)/likes`, requireAuth, asyncHandler(async (req, res, next) => {
    const { user_id } = req.body

    const event_id = req.params.id
    const event = await Event.findByPk(event_id)

    if (!event) {
        return res.status(404).send({ message: "Event cannot be found or has been removed." })
    }
    console.log(event_id)

    let like = await Like.findOne({
        where: { [Op.and]: [{ event_id: req.params.id }, { user_id: user_id }] }
    })

    if (like) {
        await like.destroy()
        return res.send({ message: 'it is deleted' })
    } else {
        let newLike = await Like.create({
            user_id: user_id,
            event_id: event_id
        })
        return res.json(newLike)
    }
}))

module.exports = router