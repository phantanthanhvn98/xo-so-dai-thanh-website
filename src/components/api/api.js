import axios from 'axios'

export class API {
    constructor(){
        this.baseUrl = "http://localhost:8764"
    }

    call(uri, method, data) {
        let config = {
            method: method,
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/${uri}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify(data)
          };
          
        return axios.request(config)
    }
}