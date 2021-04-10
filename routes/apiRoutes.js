
const notes = require('../db/db.json');


// ROUTING

module.exports = (app) => {
  //Get Request

  app.get('/api/notes', (req, res) => res.json(notes));

 

  //Post Request
  
  app.post('/api/notes', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    
     noteData.push(req.body);
      res.json({ok: true});
    }) 

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    noteData.length = 0;
   

    res.json({ ok: true });
  });
};
