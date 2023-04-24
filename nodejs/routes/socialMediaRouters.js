const express =  require('express');
const router = express.Router();

const { authUser } = require('../middlewares/auth');

const Authorization= require('../services/Authorization');

const socialMedia = require('../controllers/business&socialMedia/socialMediaControlar');

router.post('/:userID',authUser , socialMedia.create);

router.get('/:userID',  socialMedia.getAccounts)

router.delete('/:id/:userID',authUser, socialMedia.deleteAccount)

module.exports = router;