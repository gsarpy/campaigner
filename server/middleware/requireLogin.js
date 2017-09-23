// Use in places where you need to check if user is logged in.

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must be logged in.' });
  }

  next();
};
