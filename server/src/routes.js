let router = require('express').Router();
let userController = require('./controllers/userController');
let catalogController = require('./controllers/catalogController');
let commentController = require('./controllers/commentController');



router.use('/users', userController);
router.use('/data', catalogController, commentController);

module.exports = router