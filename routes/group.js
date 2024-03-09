const express = require('express');

const router = express.Router();

const groupController = require('../controllers/group');
const userAuthentication = require('../middleware/auth');

router.get('/get-groups',userAuthentication.authenticate, groupController.getgroups);
router.get('/isgroupadmin',userAuthentication.authenticate,userAuthentication.authenticategroup, groupController.isgroupadmin);
router.post('/create-group',userAuthentication.authenticate, groupController.creategroup);


module.exports = router;