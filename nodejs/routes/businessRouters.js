const express =  require('express');
const router = express.Router();



const Authorization= require('../services/Authorization');

const businessMedia = require('../controllers/business&socialMedia/businessController');

router.post('/',  businessMedia.create);

router.get('/:userID', businessMedia.get);

router.put('/id', businessMedia.update)

router.delete('/:id', businessMedia.delete);

module.exports = router;