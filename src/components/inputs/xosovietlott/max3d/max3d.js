import React from "react";
import { useState, useEffect } from 'react'
import { Content } from '@/components/api/content/content'

const Max3dInput = (props) => {
    const [ketqua, setKetQua] = useState(props.ketqua)
    const contentService = new Content()

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

    const onChangeInput = (giai, index, id) => {
        const newKetQua = {...ketqua}
        newKetQua.KetQua[giai][index] = document.getElementById(id).value
        setKetQua(newKetQua)
    }
    return (
        <div className="">
            <div className="bg-[#fff]">
                <div className='bg-[#f1bd2166]'>
                    <div className='flex items-center justify-center text-center text-[20px] max-[500px]:text[16px] text-[#ec222c] font-[500]'>
                        Xổ số Max 3D - Kết quả XS Max 3D Vietlott
                    </div>
                    <div className='flex items-center justify-center text[16px] max-[500px]:text[14px] text-[#0073ea] font-[300]'>
                        { `XS Max 3D ${ketqua.Thu} ${ketqua.Ngay}`}
                    </div>
                </div>
                <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                    <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                        ĐB
                    </div>
                    <div className='grid grid-cols-2 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                        {
                            ketqua.KetQua["Giải đặc biệt"].map((item, index) => {
                                return (
                                    // <div className='flex items-center justify-center' key={index}>
                                    //     {item}
                                    // </div>
                                    <input id={`giai-db-${index}`} onInput={() => onChangeInput("Giải đặc biệt", index, `giai-db-${index}`)} defaultValue={item} className='flex font-[700] text-center focus:outline-none border-[1px] border-[#e6e6e6]' key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                    <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                        Nhất
                    </div>
                    <div className='grid grid-cols-4 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                        {
                            ketqua.KetQua["Giải nhất"].map((item, index) => {
                                return (
                                    // <div className='flex items-center justify-center' key={index}>
                                    //     {item}
                                    // </div>
                                    <input id={`giai-nhat-${index}`} onInput={() => onChangeInput("Giải nhất", index, `giai-nhat-${index}`)} defaultValue={item} className='flex font-[700] text-center focus:outline-none border-[1px] border-[#e6e6e6] bg-[#e7f5f2]' key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                    <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                        Nhì
                    </div>
                    <div className='grid grid-cols-3 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                        {
                            ketqua.KetQua["Giải nhì"].map((item, index) => {
                                return (
                                    // <div className='flex items-center justify-center' key={index}>
                                    //     {item}
                                    // </div>
                                    <input id={`giai-nhi-${index}`} onInput={() => onChangeInput("Giải nhì", index, `giai-nhi-${index}`)} defaultValue={item} className='flex font-[700] text-center focus:outline-none border-[1px] border-[#e6e6e6] ' key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                    <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                        Ba
                    </div>
                    <div className='grid grid-cols-4 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                        {
                            ketqua.KetQua["Giải ba"].map((item, index) => {
                                return (
                                    // <div className='flex items-center justify-center' key={index}>
                                    //     {item}
                                    // </div>
                                    <input id={`giai-ba-${index}`} onInput={() => onChangeInput("Giải ba", index, `giai-ba-${index}`)} defaultValue={item} className='flex font-[700] text-center focus:outline-none border-[1px] border-[#e6e6e6] bg-[#e7f5f2]' key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='mt-8 p-4 rounded-full w-full flex items-center justify-center text-[#fff] bg-[#ec222c] cursor-pointer' onClick={() => contentService.insert([ketqua])}>
                Save
            </div>
        </div>
    )
}

export default Max3dInput;