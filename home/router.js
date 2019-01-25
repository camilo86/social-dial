const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getHome);
router.get('/login', controller.getLogin);

module.exports = router;
