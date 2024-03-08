import React, { useEffect, useState } from "react";

import { Content } from '@/components/api/content/content'
import { useAppSelector } from '@/components/login/store/lib/hooks'
import { selectDay } from '@/components/login/store/lib/counterSlice'
import { getDayOfWeekVN, parseDateFromDDMMYYYY } from '@/components/utils/utils'

const XoSoMienInput = (props) => {
    const [ketqua, setKetQua] = useState(props.ketqua)
    // console.log("set new", ketqua, props.ketqua)
    // const ketqua = props.ketqua

    const contentService = new Content()
    // const selectedDate= useAppSelector(selectDay)

    useEffect(() => {
        getKetqua()
    }, [])

    useEffect(() => {
        setKetQua(props.ketqua)
        getKetqua()
    }, [props])

    const getKetqua = () => {
        contentService.getKetQuaMien(props.ketqua[0].Vung, props.ketqua[0].Ngay, 0).then((item) => {
            const tinhs = item.data.map((item) => item.Tinh)
            const newketqua = item.data.concat(props.ketqua.filter((item2) => !tinhs.includes(item2.Tinh))).sort((a, b) => a.Tinh.localeCompare(b.Tinh))
            setKetQua(newketqua)
        })
    }

    const onChangeInput = (giai, index, index2, id) => {
        const newKetQua = [...ketqua]
        newKetQua[index].KetQua[giai][index2] = document.getElementById(id).value
        setKetQua(newKetQua)
    }

    return (
        <div className="bg-[#fff] w-full">
            <div className='bg-[#f1bd2166]'>
                <div className='flex items-center justify-center text-[20px] max-md:text-[16px] text-[#ec222c] font-[500]'>
                    {`KQXS Miền Nam ( KQXS MN)`}
                </div>
                <div className='flex items-center justify-center text[16px] max-md:text-[13px] text-[#0073ea] font-[300]'>
                    {`XSMN / XSMN ${getDayOfWeekVN(parseDateFromDDMMYYYY(ketqua[0].Ngay))} / XSMB ${ketqua[0].Ngay}`}
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    Giải
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className='flex items-center justify-center border-l-[1px] border-b-[#0000001a] underline text-[#0029ad] max-[400px]:text-[13px]' key={index}>
                                    {item.Tinh}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    8
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải tám"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center text-[#ec222c] max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input id={`giam-tam-${index}-${index2}`} onChange={() => onChangeInput("Giải tám", index, index2, `giam-tam-${index}-${index2}`)} type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    7
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải bảy"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  id={`giam-bay-${index}-${index2}`} onChange={() => onChangeInput("Giải bảy", index, index2, `giam-bay-${index}-${index2}`)}  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    6
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải sáu"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input id={`giam-sau-${index}-${index2}`} onChange={() => onChangeInput("Giải sáu", index, index2, `giam-sau-${index}-${index2}`)}  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-b-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    5
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải năm"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  id={`giam-nam-${index}-${index2}`} onChange={() => onChangeInput("Giải năm", index, index2, `giam-nam-${index}-${index2}`)}  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    4
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải tư"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input id={`giam-tu-${index}-${index2}`} onChange={() => onChangeInput("Giải tư", index, index2, `giam-tu-${index}-${index2}`)}  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-b-[1px] border-[#0000001a]`} key={index2}/>
                                                
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    3
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải ba"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input id={`giam-ba-${index}-${index2}`} onChange={() => onChangeInput("Giải ba", index, index2, `giam-ba-${index}-${index2}`)}  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-b-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    2
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải nhì"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input id={`giam-nhi-${index}-${index2}`} onChange={() => onChangeInput("Giải nhì", index, index2, `giam-nhi-${index}-${index2}`)}  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    1
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải nhất"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input id={`giam-nhat-${index}-${index2}`} onChange={() => onChangeInput("Giải nhất", index, index2, `giam-nhat-${index}-${index2}`)}  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    ĐB
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải đặc biệt"].map((item2, index2 ) => {
                                            return (
                                                // <div className="flex w-full items-center justify-center text-[#ec222c] max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input id={`giam-dac-biet-${index}-${index2}`} onChange={() => onChangeInput("Giải đặc biệt", index, index2, `giam-dac-biet-${index}-${index2}`)}  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-8 p-4 rounded-full w-full flex items-center justify-center text-[#fff] bg-[#ec222c] cursor-pointer' onClick={() => contentService.insert(ketqua)}>
                Save
            </div>
        </div>
    )
}

export default XoSoMienInput;