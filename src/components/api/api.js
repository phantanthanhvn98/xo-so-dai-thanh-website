import { unstable_noStore as noStore } from 'next/cache';
import axios from 'axios'
// import {
//   selectUserName,
//   selectPassword,
// } from "@/components/login/store/lib/counterSlice";

// import {useAppSelector } from "@/components/login/store/lib/hooks";
export class API {
    constructor(url="http://localhost:8764"){
        // this.baseUrl = "http://localhost:8764"
        this.baseUrl = url
        // this.username = useAppSelector(selectUserName);
        // this.password = useAppSelector(selectPassword);
    }

    call(uri, method, data) {
        noStore();
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