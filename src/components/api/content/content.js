import { API } from '../api'
export class Content {
    constructor(){
        this.api = new API()
    }

    /////////////////////////// GETTER //////////////////////////
    getKetQua (date){

    }

    getKetQuaMien (date){

    }

    getKetQuaTinh (date){

    }

    getKetQuaVietlott (date){

    }

    getKetQuaVietlottTinh (date){

    }

    /////////////////////////// SETTER //////////////////////////

    insert(data){
        return this.api.call(
            'ketquaxoso',
            "post",
            data
        )
    }
} 