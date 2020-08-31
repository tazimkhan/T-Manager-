const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('./db/mongoose')
const listsController=require('./controllers/lists');
const tasksController=require('./controllers/tasks');
const userController=require('./controllers/users');

//Cors handle

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

app.use('',listsController);
app.use('',tasksController);
app.use('',userController);

app.listen(3000,()=>console.log('Server is running...'))
