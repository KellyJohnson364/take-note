
const notes = require('../../db/db.json');


// ROUTING

module.exports = (app) => {
  //Get Request

  app.get('/api/notes', (req, res) => res.json(notes));

 

  //Post Request
  
  app.post('/api/notes', (req, res) => {
  
    
     notes.push(req.body);
      res.json({ok: true});
    }) 



  app.delete(`/api/notes/`, (req, res) => {
    
   
   

    res.json({ ok: true });
  });
};
