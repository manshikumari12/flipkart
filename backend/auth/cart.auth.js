// auth.middleware.js
// auth.middleware.js

const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization;
     console.log(token); // Log all headers

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Token verification failed' });
        }

        req.user = decoded;
        next();
    });
};

module.exports = { isAuthenticated };


