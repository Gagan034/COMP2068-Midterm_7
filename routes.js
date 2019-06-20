// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const ArcadeGameRoutes = require('./routes/ArcadeGame');
//const pageRoutes = require('./routes/ArcadeGame');

//app.use('/', pageRoutes);
app.use('/ArcadeGame', ArcadeGameRoutes);

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

// Exporting the changes
module.exports = app;