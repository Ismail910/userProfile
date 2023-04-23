const express =  require('express');
const router = express.Router();

const upload = require("../middlewares/uplode")

const { authUser } = require('../middlewares/auth');

const businessMedia = require('../controllers/business&socialMedia/businessController');

router.post('/',[authUser, upload('business').single('photo')],  businessMedia.create);

router.get('/:userID', businessMedia.get);

router.put('/id',[ authUser , upload('userProfil').single('photo')], businessMedia.update);

router.delete('/:id',authUser , businessMedia.delete);

module.exports = router;