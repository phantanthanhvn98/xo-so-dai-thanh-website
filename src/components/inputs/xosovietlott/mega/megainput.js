import React from "react";
import { useState, useEffect } from "react";

import { Content } from '@/components/api/content/content'
  
const MegaInput = (props) => {
    const [ketqua, setKetQua] = useState(props.ketqua)
    const contentService = new Content("https://api.xosodaithanh.vn")

    useEffect(() => {
        getKetqua()
    }, [])

    useEffect(() => {
        setKetQua(props.ketqua)
        getKetqua()
    }, [props])

    const getKetqua = () => {
        contentService.getKetQuaTinh(props.ketqua.Vung, props.ketqua.Tinh, props.ketqua.Ngay, 0).then((item) => {
            if(item.data.length > 0)
                setKetQua(item.data[0])
        })
    }

    const onChangeKetQua = (index, id) => {
        const newKetQua = {...ketqua}
        newKetQua.KetQua[index] = document.getElementById(id).value
        setKetQua(newKetQua)
    }

    const onChangeGiaTriQuayThuong = (id) => {
        const newKetQua = {...ketqua}
        newKetQua.Giatri = document.getElementById(id).value
        setKetQua(newKetQua)
    }

    const onChangeKyQuayThuong = (id) => {
        const newKetQua = {...ketqua}
        newKetQua.Kyquaythuong = document.getElementById(id).value
        setKetQua(newKetQua)
    }

    return (
        <div className="">
            <div className='bg-[#fff]'>
                <div className='bg-[#f1bd2166]'>
                    <div className='flex items-center justify-center text-[20px] max-[500px]:text-[16px] text-[#ec222c] font-[500]'>
                        {`Xổ Số ${ketqua.Tinh.replaceAll("-", '/')} Ngày ${ketqua.Ngay}`}
                    </div>
                    <div className='flex items-center justify-center text[16px] max-[500px]:text-[14px] text-[#0073ea] font-[300]'>
                        {`XS ${ketqua.Vung} / XS ${ketqua.Tinh.replaceAll("-", '/')} ${ketqua.Thu}/ XS ${ketqua.Tinh.replaceAll("-", '/')} ${ketqua.Ngay}`}
                    </div>
                </div>
                <div className='flex flex-col gap-6 pt-6'>
                    <div className='flex items-center justify-center text-[18px] font-[300]'>
                        {`Jackpot ${ketqua.Tinh.replaceAll("-", '/')} ước tính`}
                    </div>
                    <div className='flex items-center justify-center'>
                        <input id="gia-tri-quay-thuong" onInput={() => onChangeGiaTriQuayThuong("gia-tri-quay-thuong" )} defaultValue={ketqua.Giatri} className='flex items-center text-center focus:outline-none justify-center pl-3 pr-3 pt-2.5 pb-2.5 bg-[#ec222c] text-[24px] text-[#fff] font-[500] rounded-[5rem]' />
                    </div>
                    <div className=' flex items-center justify-center text-[14px] font-[300]'>
                        Kỳ quay thưởng: 
                        <input id='ky-quay-thuong' onInput={() => onChangeKyQuayThuong('ky-quay-thuong')} defaultValue={ketqua.Kyquaythuong} className='flex font-[700] text-center focus:outline-none border-[1px] border-[#e6e6e6] '/>
                    </div>
                    <div className='flex itemsc-center justify-center'>
                        <div className='flex gap-2.5 max-[500px]:gap-1'>
                        {
                            ketqua["KetQua"].map((item, index) => {
                                return (
                                    <input id={`ket-qua-${index}`} onInput={() => onChangeKetQua(index, `ket-qua-${index}`)} defaultValue={item} className='flex text-center focus:outline-none items-center justify-center w-16 h-16 max-[500px]:h-11 max-[500px]:w-11 rounded-full border-[1px] border-[#e6e6e6] text-[24px] text-[#ec222c] font-[500]' key={index}/>
                            )})
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 p-4 rounded-full w-full flex items-center justify-center text-[#fff] bg-[#ec222c] cursor-pointer' onClick={() => contentService.insert([ketqua])}>
                Save
            </div>
        </div>
    )
}

export default MegaInput;