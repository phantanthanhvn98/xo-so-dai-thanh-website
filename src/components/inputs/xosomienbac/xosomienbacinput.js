import React from 'react'
import { useState, useEffect } from 'react'
import { Content } from '@/components/api/content/content'

const XoSoMienBacInput = (props) => {
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
        contentService.getKetQuaMien(props.ketqua.Vung, props.ketqua.Ngay, 0).then((item) => {
            if(item.data[props.ketqua.Ngay].length > 0)
                setKetQua(item.data[props.ketqua.Ngay][0])
        })
    }

    const onChangeInput = (giai, index, id) => {
        const newKetQua = {...ketqua}
        newKetQua.KetQua[giai][index] = document.getElementById(id).value
        setKetQua(newKetQua)
    }

    return (
        <div className='bg-[#fff]'>
            <div className='bg-[#f1bd2166]'>
                <div className='flex items-center justify-center text-[20px] max-[400px]:text-[16px] text-[#ec222c] font-[500]'>
                    KQXS Miền Bắc ( KQXS MB)
                </div>
                <div className='flex items-center justify-center text[16px] max-[400px]:text-[13px] text-[#0073ea] font-[300]'>
                    {`XSMB / XSMB ${ketqua.Thu} / XSMB ${ketqua.Ngay}`}
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    ĐB
                </div>
                {/* <div className='flex w-full items-center justify-center text-[32px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải đặc biệt"][0]
                    }
                </div> */}
                <input id={`giat-db-0`} onChange={() => onChangeInput('Giải đặc biệt', 0, `giat-db-0`)} type='text' defaultValue={ketqua.KetQua["Giải đặc biệt"][0]} className='text-center flex focus:outline-none w-full items-center justify-center text-[32px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'/>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    1
                </div>
                <div className='flex w-full items-center justify-center text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhất"].map((item, index) => {
                            return (
                                // <div className='flex items-center justify-center' key={index}>
                                //     {item}
                                // </div>
                                <input id={`giat-nhat-${index}`} onChange={() => onChangeInput('Giải nhất', index, `giat-nhat-${index}`)} type='text' defaultValue={item} className='bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center' key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    2
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhì"].map((item, index) => {
                            return (
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input id={`giat-nhi-${index}`} onChange={() => onChangeInput('Giải nhì', index, `giat-nhi-${index}`)} type='text' defaultValue={item} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 1 ? "0px" : "1px"}] border-[#0000001a]`} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    3
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải ba"].map((item, index) => {
                            return (
                                // <div className={`flex w-full items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input id={`giat-ba-${index}`} onChange={() => onChangeInput('Giải ba', index, `giat-ba-${index}`)} type='text' defaultValue={item} className={`flex w-full bg-[#e7f5f2] focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 2 || index ===5 ? "0px" : "1px"}] border-b-[${index < 3? "1px": "0px"}] border-[#0000001a]`}  key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    4
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải tư"].map((item, index) => {
                            return (
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input id={`giat-tu-${index}`} onChange={() => onChangeInput('Giải tư', index, `giat-tu-${index}`)} type='text' defaultValue={item} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 1 || index === 3 ? "0px" : "1px"}] border-b-[${index < 2? "1px": "0px"}] border-[#0000001a]`} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    5
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải năm"].map((item, index) => {
                            return (
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input  id={`giat-nam-${index}`} onChange={() => onChangeInput('Giải năm', index, `giat-nam-${index}`)} type='text' defaultValue={item} className={`flex w-full bg-[#e7f5f2] focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 2 || index ===5 ? "0px" : "1px"}] border-b-[${index < 3? "1px": "0px"}] border-[#0000001a]`} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    6
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải sáu"].map((item, index) => {
                            return (
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input id={`giat-sau-${index}`} onChange={() => onChangeInput('Giải sáu', index, `giat-sau-${index}`)} type='text' defaultValue={item} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[${ index < 2 ? "1px" : "0px"}] border-[#0000001a]`} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    7
                </div>
                <div className='grid grid-cols-4 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải bảy"].map((item, index) => {
                            return (
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input id={`giat-bay-${index}`} onChange={() => onChangeInput('Giải bảy', index, `giat-bay-${index}`)} type='text' defaultValue={item} className='flex w-full bg-[#e7f5f2] focus:outline-none text-center items-center justify-center border-r-[1px] border-b-[#0000001a]' key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-8 p-4 rounded-full w-full flex items-center justify-center text-[#fff] bg-[#ec222c] cursor-pointer' onClick={() => contentService.insert([ketqua])}>
                Save
            </div>
        </div>
    )
}

export default XoSoMienBacInput;