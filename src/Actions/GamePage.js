import Axios from 'axios'
export function fetchGames(){
    return dispatch =>{
        Axios.get('api/getGames')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}