import axios from "axios";

const URLapi= 'http://localhost:8080/';


const loginUsers= (email, password) => {
    return axios.post(URLapi + 'login', {
        email, 
        password
    })
};

// const getUser = () =>{
//     return JSON.parse(sessionStorage.getItem('user'))
// };

// const getToken =()=>{
//     return getUser().accessToken
// };

// function getListUsers () {
//     return axios.get(URLapi + 'users', {
//         headers: {
//             Authorization: 'Bearer' + getToken
//         }
//     })
// }

const getUser = async (accessToken) => {
    // let users = JSON.parse(sessionStorage.getItem('user'));
    // let getToken = users + (accessToken);
    return await axios({
        method: 'GET',
        url: URLapi + 'users',
        headers:{
            'content-type': 'application/json',
            authorization : `Bearer ${accessToken}`
    }
    })
}


export {loginUsers, getUser};




// function comunicationLogin() {
//     const endPoint = 'http://localhost:8080/login'

//     return fetch(endPoint, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => res.json())
//         .catch(error => console.error('Error:', error))
//         .then(response => console.log('Success:', response));

// } 
// comunicationLogin().then(res => console.log("ultimo", res));
