const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
  console.log("Express server running on port " + PORT);
});
