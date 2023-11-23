/**
 * auth service.js
 * author: Pooja Seethur
 */

/**
 * Install following npm modules
 * express
 * express-validator
 * body-parser
 * mongoose
 * bcrypt
 * jsonwebtoken
 * cookies
 */

const express = require('express');
const { body, query } = require('express-validator');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/users');

/**
 * use following middlwares
 */

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Create two apis
 * Register
 * Login
 * Logout
 */

//create validation chains
const userNameValidation = () => body('userName').trim().notEmpty();
const passwordValidation = () =>
  body('password').trim().isLength({ min: 6, max: 8 });
const emailValidation = () =>
  body('emailId').trim().isEmail().withMessage('Not a valid email address');

app.post(
  '/register',
  userNameValidation,
  passwordValidation,
  emailValidation,
  async (req, res) => {
    console.log(req.body);

    bcrypt.hash(req.body.password, 10, async (err, hashedPass) => {
      console.log(hashedPass);

      const newUser = User({
        userName: req.body.userName,
        emailId: req.body.emailId,
        password: hashedPass,
      });
      await newUser.save();

      res.status(200).send({
        responseCode: 200,
        responseDescription: 'User added successfully',
      });
    });
  }
);

/**
 * Register:
 * create user using username, password, emailId
 * validate fields
 * hash password
 * encrypt data and send response
 * strore user document in mongodb
 */

/**
 * Login:
 * compare incoming password and hashed password stored in db
 * if success issue jwt token
 */

/**
 * create a middleware to authorize the user
 * compare incoming token and secret key using jwt.verify function
 */
