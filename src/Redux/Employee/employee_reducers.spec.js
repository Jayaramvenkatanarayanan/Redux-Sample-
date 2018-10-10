import Reducers from './employee_reducers'

describe('Employee Reducer', () => {
    test('return a State of object', () => {
        const result = Reducers(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })
})