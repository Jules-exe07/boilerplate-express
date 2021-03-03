var express = require('express');
var app = express();

app.get('/json', (req, res) => {
 const message = (process.env.MESSAGE_STYLE === 'uppercase') ? 'HELLO JSON' : 'Hello json';
 res.json({'message':'hello json'});
});

































 module.exports = app;
