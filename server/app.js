const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();

//middleware
app.use(express.static('public'));

app.listen(process.env.PORT || 3030, () => {
    console.log('Application is running.');
});


app.get('/location', (req, res) => {

  
})