const express = require('express');

const router = express.Router();

const messagesController = require('../controllers/messages');
const authentication = require('../middleware/auth');

router.get('/get-messages',authentication.authenticate,authentication.authenticategroup, messagesController.getmessages);
router.post('/insert-message',authentication.authenticate,authentication.authenticategroup, messagesController.insertmessage);


module.exports = router;