const http = require('http')

const host = process.env.APP_HOST || 'localhost'
const port = process.env.APP_PORT || 8080

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

const server = http.createServer(router)

server.on('listening', () => {
    console.log(`Server listening at http://${host}:${port}`)
})

try {
    server.listen(port, host)
} catch(err) {
    console.error(err, 'Error starting server')
}