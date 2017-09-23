// Check to see if user has enough credits to send survey

module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'You must add additional credits.' });
  }

  next();
};
