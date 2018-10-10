import Axios from 'axios'
export function fetchEmployee() {
    return dispatch => {
        Axios
            .get('api/getEmploee')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}