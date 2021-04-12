// DEPENDENCIES
const express = require('express');

// EXPRESS CONFIGURATION
const app = express();
app.use(express.static("public"))

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER

require('./public/routes/apiRoutes')(app);
require('./public/routes/htmlRoutes')(app);

// LISTENER

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
