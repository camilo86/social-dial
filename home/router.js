const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getHome);

module.exports = router;
