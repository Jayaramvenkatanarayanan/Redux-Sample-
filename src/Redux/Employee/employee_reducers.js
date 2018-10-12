import {SET_EMPLOYEE,SAVE_EMPLOYEE} from './actions'
export default(state = [], action = {}) => {
    switch (action.type) {
        case SET_EMPLOYEE:
            return action.employee
        case SAVE_EMPLOYEE:
            return [...state ,action.employee]
        default:
            return state
    }
}