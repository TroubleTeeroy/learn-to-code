const server = require('./server')

describe('server', () => {
    let consoleLog

    beforeEach(() => {
        consoleLog = jest.spyOn(console, 'log')
        consoleLog.mockImplementation(() => {})
    })

    afterEach(() => {
        consoleLog.mockRestore()
    })

    test('logs to the console listening event', (done) => {
        const host = process.env.APP_HOST || 'localhost'
        const port = process.env.APP_PORT || 8080

            server.on('listening', () => {
                expect(consoleLog).toHaveBeenCalledWIth('Server listening at http://${host}:${port}')
                done()
            })
            server.emit('listening')
    })

})