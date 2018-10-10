import {SET_EMPLOYEE} from './actions'
export default(state = [], action = {}) => {
    switch (action.type) {
        case SET_EMPLOYEE:
            return action.employee
        default:
            return state
    }
}