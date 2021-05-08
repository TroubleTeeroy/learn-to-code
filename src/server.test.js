const router = require('./server')

describe('router', () => {
    test('is a function', () => {
        expect(typeof router === 'function').toBe(true)
    })
})