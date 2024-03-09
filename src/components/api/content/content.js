import { toast } from 'react-toastify'
import { API } from '../api'
export class Content {
    constructor(){
        this.api = new API()
    }

    /////////////////////////// GETTER //////////////////////////
    getKetQuaNgay(date){
        return this.api.call(
            `ketquaxoso/${date}`,
        )
    }

    getKetQuaMien(vung, date, page){
        return this.api.call(
            `ketquaxoso/${vung}/${date}?page=${page}`,
        )
    }

    getKetQuaTinh (vung, tinh, date, page){
        return this.api.call(
            `ketquaxoso/${vung}/${tinh}/${date}?page=${page}`,
        )
    }

    getKetQuaVietlott (date){

    }

    getKetQuaVietlottTinh (date){

    }

    /////////////////////////// SETTER //////////////////////////

    insert(data){
        const ketqua =  this.api.callSave(
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