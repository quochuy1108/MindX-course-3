const logger = (req, res, next) => {
    console.log('New rq at ' + new Date());
    next()
}

module.exports = logger