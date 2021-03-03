var express = require('express');
var app = express();



app.get('/json', (req, res) => {
  const message = (process.env.MESSAGE_STYLE === 'uppercase') ? 'HELLO JSON' : 'hello json';
  res.json ({
    message: 'Hello json'
  )};
)};































 module.exports = app;
