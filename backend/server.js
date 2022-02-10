const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()


// creating express server
const app = express();
const port = process.env.PORT || 5000; 
//In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.
//process.env.PORT || 5000 means whatever is in the environment variable PORT, or 5000 if there's nothing there.

// cors middleware
app.use(cors());
// our server will be sending and recieving json
app.use(express.json());

const uri = process.env.ATLAS_URI; //database uri
mongoose.connect(uri, { useNewUrlParser: true }
);

const connection = mongoose.connection;
// once connection is open, print this
connection.once('open', () => {
    console.log("MongoDB database connection is established succesfully")
});

//Setting the routers
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});