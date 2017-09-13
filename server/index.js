const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  res.send(
    {
      hi: 'there',
      omg: 'totally',
      good: 'i guess'
    }
  );
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
  console.log("Express server running on port " + PORT);
});
