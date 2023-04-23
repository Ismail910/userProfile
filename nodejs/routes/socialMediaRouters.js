const express =  require('express');
const router = express.Router();



const Authorization= require('../services/Authorization');

const socialMedia = require('../controllers/business&socialMedia/socialMediaControlar');

router.post('/',  socialMedia.create);

router.get('/:userID',   socialMedia.getAccounts)

router.delete('/:id', socialMedia.deleteAccount)

module.exports = router;