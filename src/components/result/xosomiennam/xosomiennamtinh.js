import React from 'react'

import { parseLive, getDayOfWeekVN, parseDateFromDDMMYYYY } from '@/components/utils/utils' 

const XoSoMienNamTinh = (props) => {
    const ketqua = props.ketqua
    const date = getDayOfWeekVN(parseDateFromDDMMYYYY(ketqua.Ngay))
    return (
        <div className='bg-[#fff] shadow-[0px_0px_10px_0px_#d9d9d9]'>
            <div className='bg-[#f1bd2166]'>
                <h1 className='flex items-center justify-center text-[20px] text-[#ec222c] font-[500]'>
                    { `KQXS ${ketqua.Tinh} ( KQXS MN)` }
                </h1>
                <h2 className='flex items-center justify-center text[16px] text-[#0073ea] font-[300]'>
                    { `XS ${ketqua.Tinh} / Xổ Số ${ketqua.Tinh} ${date} / XS ${ketqua.Vung} ${ketqua.Ngay.replaceAll("-", "/")}`} 
                </h2>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    ĐB
                </div>
                <div className='flex w-full items-center justify-center text-[32px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        parseLive(ketqua.KetQua["Giải đặc biệt"][0], ketqua.KetQua["Giải đặc biệt"], ketqua.KetQua["Giải nhất"])
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    1
                </div>
                <div className='flex w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhất"].map((item, index) => {
                            return (
                                <div className='flex items-center justify-center' key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải nhất"], ketqua.KetQua['Giải nhì'])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    2
                </div>
                <div className='flex w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhì"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải nhì"], ketqua.KetQua["Giải ba"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    3
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-between text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải ba"].map((item, index) => {
                            return (
                                <div className={`flex w-full items-center justify-center`} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải ba"], ketqua.KetQua["Giải tư"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    4
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải tư"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`}  style={index == 6 ? {gridColumn: "1/4"} : {}} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải tư"], ketqua.KetQua["Giải năm"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    5
                </div>
                <div className='flex w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải năm"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải năm"], ketqua.KetQua["Giải sáu"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    6
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải sáu"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải sáu"], ketqua.KetQua["Giải bảy"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    7
                </div>
                <div className='flex w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải bảy"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải bảy"], ketqua.KetQua["Giải tám"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    8
                </div>
                <div className='flex w-full items-center justify-center text-[32px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        parseLive(ketqua.KetQua["Giải tám"][0], ketqua.KetQua["Giải tám"], [''])
                    }
                </div>
            </div>
        </div>
    )
}

export default XoSoMienNamTinh;