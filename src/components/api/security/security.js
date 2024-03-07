import { API } from "../api"

export class Security {
    constructor(){
        this.api = new API()
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