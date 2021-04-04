const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

//-------------------------------------SIGN UP---------------------------------------
// POST /signup
//Using promise chain
//get the password -> hash it -> store the hashed password in the database
router.post("/signup", (req, res, next) => {
	if(req.body.thirdPartyId){
		bcrypt
      .hash(req.body.password, 10)
      // return a new object with the email and hashed password
      .then((hash) =>
        // when returning an object with fat arrow syntax, we
        // need to wrap the object in parentheses so JS doesn't
        // read the object curly braces as the function block
        ({
          email: req.body.email,
          password: hash,
          userName: req.body.userName,
		  thirdPartyId: req.body.thirdPartyId
        })
      )
      // create user with provided email and hashed password
      .then((user) => User.create(user))
      // send the new user object back with status 201, but hashedPassword
      // won't be sent because of the transform in the User model
      .then((user) => res.status(201).json(user))
      // pass any errors along to the error handler
      .catch(next);
	} else {
		 bcrypt
    .hash(req.body.password, 10)
    // return a new object with the email and hashed password
    .then((hash) =>
      // when returning an object with fat arrow syntax, we
      // need to wrap the object in parentheses so JS doesn't
      // read the object curly braces as the function block
      ({
        email: req.body.email,
        password: hash,
        userName: req.body.userName,
      })
    )
    // create user with provided email and hashed password
    .then((user) => User.create(user))
    // send the new user object back with status 201, but hashedPassword
    // won't be sent because of the transform in the User model
    .then((user) => res.status(201).json(user))
    // pass any errors along to the error handler
    .catch(next);
	}





 
});

// ------------------------------------SIGN IN---------------------------------------
// Require the createUserToken method
const { createUserToken } = require('../middleware/auth');

// POST /signin
router.post('/signin', (req, res, next) => {
	User.findOne({ email: req.body.email })
		// Pass the user and the request to createUserToken
		.then((user) => createUserToken(req, user))
		// createUserToken will either throw an error that
		// will be caught by our error handler or send back
		// a token that we'll in turn send to the client.
		.then((tokenData) => {
			return res.json(tokenData);
		}) 
		.catch(next);
});

//GET User, after they signed in
router.get('/user/:userID', (req, res, next) => {
	User.findById(req.params.userID)
		.then((user) => {
			if(User){
				res.json(user)	
			} else {
				res.json({isUser: false})
			}
		})
});

//Get user by thirdPartyId
router.get("/thirdPartyUser/:thirdPartyId", (req, res, next) => {
  User.findOne({"thirdPartyId": req.params.thirdPartyId}).then((user) => {
	  return res.json(user)
  }).catch(next)
})
module.exports = router;
