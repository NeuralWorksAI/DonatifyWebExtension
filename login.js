import axios from "axios";

export default login = async loginUser(user) =>{
    const data
        {action : "login" ,
        "username" : "blah blah",
        "password" : "adasdasdasd"
        }
    }
    try{
        const response = await axios.post("https://us-central1-aiot-fit-xlab.cloudfunctions.net/donatify", loginUser);
        return response.data;
        alert("Login Successful");
        alert("Welcome " + response.data.username);

    }catch(err){
        alert('Something went wrong!!')
        alert('Forgiveness Bro!!')
    }
};