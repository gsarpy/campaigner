// production keys
module.exports = {
  // oAuth keys
  googleClientID    : process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

  // mongodb
  mongoURI          : process.env.MONGO_URI,

  // cookie session
  cookieKey         : process.env.COOKIE_KEY
};