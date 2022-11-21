import axios from "axios";

const URLapi= 'http://localhost:8080/';


const loginUsers= (email, password) => {
    return axios.post(URLapi + 'login', {
        email,
        password,
    })
};

export {loginUsers};




// function LoginUsers() {
//     const endPoint = 'http://localhost:8080/login'

//     return fetch(endPoint, {
//         method: "POST",
//         body: JSON.stringify({email: "email", 
//            password: "password"}),
//             headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => res.json())
//         .catch(error => console.error('Error:', error))
//         .then(response => console.log('Success:', response));

// } 
// LoginUsers().then(res => console.log("ultimo", res));

// export {LoginUsers};