import Axios from 'axios'
import common from '../../Common/common'

//get all employee
export const SET_EMPLOYEE = 'SET_EMPLOYEE'

export function setEmployee(employee) {
    return {type: SET_EMPLOYEE, employee}
}

export function fetchEmployee() {
    let url = common.ApiUrl + 'getAllEmp'
    return dispatch => {
        Axios
            .get(url, {
                headers: {
                    'x-auth': common.token
                }
            })
            .then(function (response) {
                dispatch(setEmployee(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//save Employee
//get all employee
export const SAVE_EMPLOYEE = 'SAVE_EMPLOYEE'

export function SaveEmployeeSuccess(employee) {
    return {type: SAVE_EMPLOYEE, employee}
}

export function SaveEmployee() {
    let url = common.ApiUrl + 'getAllEmp'
    return dispatch => {
        Axios
            .get(url, {
                headers: {
                    'x-auth': common.token
                }
            })
            .then(function (response) {
                dispatch(SaveEmployeeSuccess(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

