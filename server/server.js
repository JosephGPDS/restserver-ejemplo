require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();


const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/user', (req, res)=>{
    res.json('get User');
});

app.post('/user', (req, res)=>{

    let body = req.body;

    if( body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'the name is necessary'
        });
    } else {
        res.status(201).json({
            ok: true,
            persona: body,
        });
    }
});

//user/:id hace match con req.params.id
//
app.put('/user/:id', (req, res)=>{

    let idx = req.params.id;

    res.json({
        message: "put user "+idx+" is ok"
    });
});

app.delete('/user/:id', (req, res)=>{
    res.json('delete User');
});



app.listen(port, ()=>{
    console.log('Listened in port: ', port);
    
});