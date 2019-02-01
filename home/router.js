const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getHome);
router.get('/login', controller.getLogin);
router.get('/register', controller.getRegister);

router.post('/register', controller.postRegister);

module.exports = router;
