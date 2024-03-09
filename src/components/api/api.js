import axios from 'axios'
// import {
//   selectUserName,
//   selectPassword,
// } from "@/components/login/store/lib/counterSlice";

// import {useAppSelector } from "@/components/login/store/lib/hooks";
export class API {
    constructor(){
        this.baseUrl = "http://localhost:8764"
        // this.username = useAppSelector(selectUserName);
        // this.password = useAppSelector(selectPassword);
    }

    call(uri, method, data) {
        let config = {
            method: method,
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/${uri}`,
            headers: { 
              'Content-Type': 'application/json',
            },
            data : JSON.stringify(data)
          };
          
        return axios.request(config)
    }
    callSave(uri, method, data) {
      let config = {
          method: method,
          maxBodyLength: Infinity,
          url: `${this.baseUrl}/${uri}`,
          headers: { 
            'Content-Type': 'application/json',
            'username': localStorage.getItem("USERNAME"),
            'password': localStorage.getItem("PASSWORD")
          },
          data : JSON.stringify(data)
        };
        
      return axios.request(config)
  }
}