const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
  console.log("Express server running on port " + PORT);
});
