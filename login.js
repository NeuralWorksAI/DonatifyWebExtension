import axios from "axios";

export default function login(username, password) {
    axios.post("https://us-central1-aiot-fit-xlab.cloudfunctions.net/donatify", {
        action: "login",
        username: "blah blah",
    }).then(response => {
        console.log(response.data);
        alert("Login Successful");
    }).catch(err => {
        alert("Something went wrong!!!");
        alert("Forgiveness Bro!!!");
    });
}
