import React from 'react'
import {getDayOfWeekVN, parseDateFromDDMMYYYY, parseLive} from '@/components/utils/utils'

const XoSoMienBacLive = (props:any) => {
    const ketqua = props.ketqua[0]

    return (
        <div className='bg-[#fff]'>
            <div className='bg-[#ec222c]'>
                <div className='flex items-center justify-center text-[38px] text-[#ffec43] font-[500]'>
                    {`KQXS Miền Bắc -  KQXS ${ketqua.Tinh} ${ketqua.Ngay.replaceAll("-", "/")}`}
                </div>
                {/* <div className='flex items-center justify-center text[16px] max-[400px]:text-[13px] text-[#0073ea] font-[300]'>
                    {`XSMB / XSMB ${getDayOfWeekVN(parseDateFromDDMMYYYY(ketqua.Ngay))} / XSMB ${ketqua.Ngay.replaceAll("-", "/")}`}
                </div> */}
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    ĐB
                </div>
                <div className='flex w-full text-[85px] font-[500] min-h-20 items-center justify-center text-[#ec222c] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        parseLive(ketqua.KetQua["Giải đặc biệt"][0], ketqua.KetQua["Giải đặc biệt"], ketqua.KetQua["Giải nhất"])
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    1
                </div>
                <div className='flex w-full items-center justify-center text-[55px] font-[500] min-h-20 border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhất"].map((item:any, index:number) => {
                            return (
                                <div className='flex items-center justify-center' key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải nhất"], ketqua.KetQua["Giải nhì"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    2
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-between text-[55px] font-[500] min-h-20  border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhì"].map((item:any, index:number)=> {
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
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    3
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[55px] font-[500] min-h-20  border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải ba"].map((item:any, index:number)=> {
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
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    4
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-between text-[55px] font-[500] min-h-20  border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải tư"].map((item:any, index:number)=> {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải tư"], ketqua.KetQua["Giải năm"])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    5
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[55px] font-[500] min-h-20  border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải năm"].map((item:any, index:number)=> {
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
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    6
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[55px] font-[500] min-h-20  border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải sáu"].map((item:any, index:number)=> {
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
                <div className='flex w-10 items-center justify-center min-w-32 text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    7
                </div>
                <div className='grid grid-cols-4 w-full items-center justify-between text-[55px] font-[500] min-h-20  border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải bảy"].map((item:any, index:number)=> {
                            return (
                                <div className={`flex items-center justify-center text-[#ec222c]`} key={index}>
                                    {parseLive(item, ketqua.KetQua["Giải bảy"], ['gia-dau'])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default XoSoMienBacLive;