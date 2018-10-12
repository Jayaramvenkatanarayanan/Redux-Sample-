import Axios from 'axios'
import common from './common'
export const Postcall = (url,data,callback)=>{
    Axios.post(url,data, {headers: {
        'x-auth': common.token
    }})
    .then(function (response) {
        callback(response)
     })
     .catch(function (err) {
        callback(err.response.data)
     });
}