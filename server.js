const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/config');
const { createUsers, findAllUsers, findUsersbyEmail, updateUsers, deleteUsers } = require('./controllers/userController')
const {createCustomer} = require('./controllers/customerController')


app.use(express.json());
app.use(bodyParser.json());

//create table if not exists
db.sequelize.sync();


//defining user routes
app.get(('/'), (req, res) => {
    res.send('api is working')
})
app.post(('/user/new'), (req, res) => {
    createUsers(req, res)
})
app.get(('/users'), (req, res) => {
    findAllUsers(req, res)
})
app.get(('/user/:email'), (req, res) => {
    findUsersbyEmail(req, res)
})
app.put(("/user/update"), (req, res) => {
    updateUsers(req, res)
})
app.delete(('/user/delete'), (req, res) => {
    deleteUsers(req, res)
})


//defining customer routes

app.post(('/customer/new'),(req,res)=>{
    createCustomer(req,res)
})


app.listen(4000, () => {
    console.log('Server is active')
})




