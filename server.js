const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoose = require('mongoose');  // Import Mongoose 

const Events = require('./Shared/event');  // Importing EventSchema
const eventRouter = require('./API/eventRouter');  // Importing Event Route

//Connection to mongodb
const url = 'mongodb://localhost:27017/Solide';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

});


//Express
app.prepare().then(() => {
    const server = express();

    server.use('/events', eventRouter);  // Event Route

    server.all('*', (req, res) => {
        return handle(req, res)
    });


    //Server
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`);
    });
})