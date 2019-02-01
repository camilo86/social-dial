const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getHome);
router.get('/login', controller.getLogin);
router.get('/register', controller.getRegister);

router.post('/login', controller.postLogin);

module.exports = router;
