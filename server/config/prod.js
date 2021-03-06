// production keys
module.exports = {
  // oAuth keys
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // mongodb
  mongoURI: process.env.MONGO_URI,
  // cookie session
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendgridKey: process.env.SENDGRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
};
