const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const ticketsRouter = require('./tickets.js')
const likesRouter = require('./likes.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/events', eventsRouter);

router.use('/tickets', ticketsRouter);

router.use('/eventlikes', likesRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body })
});

module.exports = router;