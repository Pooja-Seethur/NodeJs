const express = require('express');
const router = express.Router();
const { check } = require('express-validator')

//include controllers file where function logic is written
const placeControllers = require('../controllers/placesController');

//handle routes by specifying paths 
//note: multiple middlewares can be added to the route handling function, executes from left to right

router.get('/byPlaceId', placeControllers.placeById)

//validation of incoming request. check express https://express-validator.github.io/docs/guides/getting-started

router.post('/byUserName',
    [
        check('title').isEmpty(),
        check('description').isLength({ max: 120, min: 5 })
    ],
    placeControllers.userByName
)

router.patch('/signUp',
    [
        check('emailId').notEmpty().normalizeEmail().isEmail(),
        check('password').notEmpty().isLength({ min:4}),
        check('userName').notEmpty()
    ], 
    placeControllers.signUp
)
router.post('/login',
    [
        check('emailId').notEmpty().isEmail(),
        check('password').notEmpty()
    ],
    placeControllers.login
)

//make sure to export the router
module.exports = router;