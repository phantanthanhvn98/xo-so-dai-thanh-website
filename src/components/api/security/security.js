import { API } from "../api"

export class Security {
    constructor(url='http://localhost:8764'){
        this.api = new API(url)
    }

    login(userName, password){
        return this.api.call(
            "login",
            "post",
            {
                username: userName,
                password: password
            }
        )
    }

    signup(userName, password){

    }
} 