const express = require('express');
const router = express.Router();
const signupschemacopy = require('../models/supschema');
const bcrypt = require('bcrypt');


router.post('/login/', async (req, res) => {
    console.log("request success")
    // destructing the content of body of the post request and storing each in the variables
    const { username, password } = req.body;
    console.log( username, password)
  
    // Finding  the user by username
    const user = await signupschemacopy.findOne({ username });
    console.log(user)
    // If user is not found
  
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.json({ username: user.username }); // Send the username in the response
  });

// Endpoint that receives and handles a POST request from the user to register a new account
router.post('/signup', async (request, response) => {
    // After post request is received, create a new instance of the signup
    const signedupUser = new signupschemacopy({
        // Create a new schema and grab the data (fullname, username, email, password) from the body of the 
        // post request and place it in a newly created blank schema
        // NB: The names on the left are references to the fields in our schema
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        password: await bcrypt.hash(request.body.password, 10), // Hash the password
    });

    // Save the newly created data collected from the body
    signedupUser.save()
        .then(data => {
            console.log("New User Created");
            response.json(data);
        })
        .catch(error => {
            console.log(error);
            response.status(500).send(error);
        });
});

module.exports = router;
//exports the router to be used in the server.mjs file