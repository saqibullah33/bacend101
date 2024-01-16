// authMiddleware.js
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      return next();
    }
    res.status(403).send({ message: 'Unauthorized' });
  };
  
  export { isAdmin };
  