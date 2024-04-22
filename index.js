const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controllers/userControllers');


require('dotenv').config();
const port = process.env.PORT;


//App
const app = express();
//Middleware
app.use(bodyParser.json());

// connecting mongodb
mongoose.connect('mongodb://localhost:27017/gl-mern-1');
const db = mongoose.connection;
db.on('error', (err) => {
    console.log("MongoDB Connection Error:", err);
});


// Routes 
app.post('/user',userController.newUser);
app.get('/users',userController.allUsers);
app.get('/usersbyage/:age',userController.byUserAge);
app.get('/usersaboveage/:age',userController.getUsersAboveAge);
app.get('/users/name/:name', userController.getUsersByName);
app.get('/users/orderByName',userController.getUsersOrderByName)
app.put('/users/:id',userController.updateUser);
app.delete('/users/:id',userController.deleteUserById);
app.delete('/users/email/:email',userController.deleteUsersByEmail);

// Start the server
const server = app.listen(port, function () {
    console.log(`Server listening to port ${port}.....!`);
})