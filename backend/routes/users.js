const router = require('express').Router();
let User = require('../models/user.model'); //mongoose model that we created

router.route('/').get((req, res) => {
    User.find() //get the list of all users in mongoDB
    .then(users => res.json(users)) //return in json format
    .catch(err => res.status(400).json('Error: ' + err)); //if there is an error
});

router.route('/add').post((req, res) => {
    const username = req.body.username; 
    const newUser = new User({username}); //create a new instance for the username

    newUser.save() // saved to the database
    .then(() => res.json('User added!')) 
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;