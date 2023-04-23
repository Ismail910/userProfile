const {body } = require("express-validator");

module.exports.loginValidations = [
   
    body('email').isEmail().normalizeEmail().trim().withMessage('email is required'),
    body('password').not().isEmpty().withMessage('passored is required')
];


module.exports.createUserValidations = [
   
    body('email').isEmail().normalizeEmail().trim().withMessage('email is required'),
    body('password').not().isEmpty().withMessage('passored is required'),
    body('name').not().isEmpty().withMessage('name is required') ,
    body('phoneNumber').not().isEmpty().withMessage('phone number is required'),
    body('linke').not().isEmpty().withMessage('linke is required') , 
];