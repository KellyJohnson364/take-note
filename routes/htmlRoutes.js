// DEPENDENCIES
const path = require('path');
var express = require('express');
var app = express();



app.use(express.static('public'));

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join('../notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join('../index.html'));
  });
};
