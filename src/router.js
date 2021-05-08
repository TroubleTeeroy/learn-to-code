const router = async (req, res) => {
    let body
    let code

    if ('/ping' === req.url) {
        body = {status: 'healthy'}
        code = 200
    } else {
        body = {error: 'Resource not found'}
        code = 404
    }

    res.setHeader('Content-Type', 'application/json')
    res.writeHead(code)
    res.end(JSON.stringify(body))
}

module.exports = router