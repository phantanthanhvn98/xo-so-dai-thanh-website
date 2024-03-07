import { toast } from 'react-toastify'
import { API } from '../api'
export class Content {
    constructor(){
        this.api = new API()
    }

    /////////////////////////// GETTER //////////////////////////
    getKetQua (date){

    }

    getKetQuaMien(vung, date){
        return this.api.call(
            `ketquaxoso/${vung}/${date}`,
        )
    }

    getKetQuaTinh (date){

    }

    getKetQuaVietlott (date){

    }

    getKetQuaVietlottTinh (date){

    }

    /////////////////////////// SETTER //////////////////////////

    insert(data){
        const ketqua =  this.api.call(
            'ketquaxoso',
            "post",
            data
        )
        ketqua.then((item) => {
            toast("Cập nhất dữ liệu thành công")
        }).catch(function (error) {
            toast(`${error.toJSON()}`)
          });
        return ketqua
    }
} 