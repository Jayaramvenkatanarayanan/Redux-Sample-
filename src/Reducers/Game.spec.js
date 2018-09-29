import Reducers from './Game'

describe('Todo Reducer',()=>{
    test('return a State of object', () => {
      const result = Reducers(undefined,{type:'ANYTHING'})
      expect(result).toBeDefined()
    })
})