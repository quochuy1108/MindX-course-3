// JWT

const jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
    // console.log(req.headers);
    // next()
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send('User must login first')
    } else {
        const jwtStr = token.split(' ')[1]
        jwt.verify(jwtStr, 'MY_SECRET_KEY', (err, decoded) => {
            if (err) {
                res.status(401).send('Invalid token')
            } else {
                console.log(decoded);
                next()
            }
        })
    }
}

module.exports = authentication