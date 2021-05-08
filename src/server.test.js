const http = require('http')

const router = require('./server')

describe('router', () => {
    let req
    let res

    beforeEach(() => {
        req = new http.IncomingMessage()
        res = new http.ServerResponse(req)
        res.setHeader = jest.fn()
        res.writeHead - jest.fn()
        res.end - jest.fn()        
    })

    test('is a function', () => {
        expect(typeof router === 'function').toBe(true)
    })

    describe('receives a request for an unsupported URL path', () => {
        beforeEach(() => {
            req.url = '/invalid-url-path'
        })

        test('sets Content-Type header', async () => {
            await router (req, res)
            expect(res.setHeader).toHaveBeenCalledWith('Content-type', 'application/json')
        })

        test('responds with 404 status code', async () => {
            await router(req, res)
            expect(res.writeHead).toHaveBeenCalledWith(404)
        })

        test('responds with a JSON string in the body', async () => {
            await router(req, res)
            expect(res.end).toHaveBeenCalledWith(JSON.stringify({error:'Resource not found'}))
        })
    })
    
        describe('receives a request for /ping', () => {
            beforeEach(() => {
            req.url = '/ping'
            })
        
            test('sets Content-Type header', async () => {
            await router(req, res)
            expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json')
            })
        
            test('responds with 200 status code', async () => {
            await router(req, res)
            expect(res.writeHead).toHaveBeenCalledWith(200)
            })
        
            test('responds with a JSON string in the body', async () => {
            await router(req, res)
            expect(res.end).toHaveBeenCalledWith(JSON.stringify({status: 'healthy'}))
            })
        })
})