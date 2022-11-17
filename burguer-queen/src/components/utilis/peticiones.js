import axios from "axios";

const URLapi= 'http://localhost:8080/';


const loginUsers= (email, password) => {
    return axios.post(URLapi + 'login', {
        email: "email", 
        password: "password"
    })
};

export {loginUsers};




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
