const http = require('http')

const host = process.env.APP_HOST || 'localhost'
const port = process.env.APP_PORT || 8080

const server = http.createServer(router)

server.on('listening', () => {
    console.log(`Server listening at http://${host}:${port}`)
})

if (require.main === module) {
    try {
        server.listen(port, host)
    } catch(err) {
        console.error(err, 'Error starting server')
    }
}
