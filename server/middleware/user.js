const Jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

function verifyToken(req, res, next) {
    let token = req.headers('authorization')
    if (token) {
        token = token.split(' ')[1];
        Jwt.verify(token, process.env.JWT_KEY, (err, valid) => {
            if (err) {
                res.status(401).send({ result: " Please provide valid token" })
            } else {
                next()
            }
        })
    } else {
        res.status(403).send({ message: " Please add token with header" })
    }
    console.warn("middleware called")
    next();
}