// DEPENDENCIES
const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
};
