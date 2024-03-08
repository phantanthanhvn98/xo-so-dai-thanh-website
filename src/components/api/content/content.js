import { toast } from 'react-toastify'
import { API } from '../api'
export class Content {
    constructor(){
        this.api = new API()
    }

    /////////////////////////// GETTER //////////////////////////
    getKetQua (date){

    }

    getKetQuaMien(vung, date, page){
        return this.api.call(
            `ketquaxoso/${vung}/${date}?page=${page}`,
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
            if(item.status === 200)
                toast("Cập nhất dữ liệu thành công")
            else if(item.status === 401)
                toast("Không có quyền cập nhật dữ liệu")
            else
                toast("Liên hện admin để được hỗ trợ")
        }).catch(function (error) {
            toast(`${error.toJSON()}`)
          });
        return ketqua
    }
} 