import Axios from 'axios'
export function fetchGames(){
    return dispatch =>{
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}