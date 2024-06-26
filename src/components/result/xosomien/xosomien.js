import React from "react"
import Link from "next/link"

import {getDayOfWeekVN, parseDateFromDDMMYYYY, parseLive, tinhToUrl} from '@/components/utils/utils'

const XoSoMien = (props) => {
    const ketqua = props.ketqua
    return (
        <div className="bg-[#fff] w-full shadow-[0px_0px_10px_0px_#d9d9d9]">
            <div className='bg-[#f1bd2166]'>
                <h1 className='flex items-center justify-center text-[20px] max-md:text-[16px] text-[#ec222c] font-[500]'>
                    {`KQXS ${props.vung} ( KQXS ${props.code})`}
                </h1>
                <h2 className='flex items-center justify-center text[16px] max-md:text-[13px] text-[#0073ea] font-[300]'>
                    {`XS${props.code} / XS${props.code} ${getDayOfWeekVN(parseDateFromDDMMYYYY(ketqua[0].Ngay))} / XS${props.code} ${ketqua[0].Ngay.replaceAll("-", "/")}`}
                </h2>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    Giải
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <Link href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl({ten: item.Tinh})}.html`} key={index} prefetch={false}>
                                    <div className='flex items-center justify-center border-l-[1px] border-b-[#0000001a] underline text-[#0029ad] max-[400px]:text-[13px]' key={index}>
                                        {item.Tinh}
                                    </div>
                                </Link>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center text-[#ec222c] max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, [item2], ['giai-dau'])}
                                                    
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải bảy"], item.KetQua["Giải tám"])}
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải sáu"], item.KetQua["Giải bảy"])}
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải năm"], item.KetQua["Giải sáu"])}
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải tư"], item.KetQua["Giải năm"])}
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải ba"], item.KetQua["Giải tư"])}
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải nhì"], item.KetQua["Giải ba"])}
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải nhất"], item.KetQua["Giải nhì"])}
                                                </div>
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
                                                <div className="min-h-[39px] flex w-full items-center justify-center text-[#ec222c] max-[400px]:text-[20px]" key={index2}>
                                                    {parseLive(item2, item.KetQua["Giải đặc biệt"], item.KetQua["Giải nhất"])}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default XoSoMien;