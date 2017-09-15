const mongoose   = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// collection name and Schema
mongoose.model('users', userSchema);
