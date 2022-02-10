const router = require('express').Router();
let Exercise = require('../models/exercise.model'); //mongoose model that we created

router.route('/').get((req, res) => {
    Exercise.find() //get the list of all users in mongoDB
    .then(exercises => res.json(exercises)) //return in json format
    .catch(err => res.status(400).json('Error: ' + err)); //if there is an error
});

router.route('/add').post((req, res) => {
    const username = req.body.username; 
    const description = req.body.description; 
    const duration = Number(req.body.duration); 
    const date = Date.parse(req.body.date); 
    
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    }); //create a new instance

    newExercise.save() // saved to the database
    .then(() => res.json('Exercise added!')) 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;