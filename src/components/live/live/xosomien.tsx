import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"

import {parseLive, tinhToUrl} from '@/components/utils/utils'

const XoSoMienLive = (props: any) => {
    const ketqua = props.ketqua
    return (
        <div className="bg-[#fff] w-full ">
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='bg-[#ec222c] font-[500] flex min-w-32 items-center justify-center text-[38px] text-[#fff] border-l-[1px] border-b-[#0000001a]'>
                    Giải
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[40px] bg-[#ec222c] font-[300] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <Link href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl({ten: item.Tinh})}.html`} key={index} prefetch={false}>
                                    <div className='flex items-center justify-center border-l-[1px] border-b-[#0000001a] font-[500] underline text-[#ffec43]' key={index}>
                                        {item.Tinh.toUpperCase()}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex text-[85px] justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] text-[#000] border-l-[1px] border-b-[#0000001a]'>
                    100N
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[85px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải tám"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className="  flex w-full items-center justify-center text-[#ec222c]  min-h-20  text-[55px]" key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] text-[#000] border-l-[1px] border-b-[#0000001a]'>
                    200N
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải bảy"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className="  flex w-full items-center justify-center  min-h-20  text-[55px]" key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    200N
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="grid grid-cols-2 border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải sáu"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className={`${index2 === 0 ? 'col-span-2' : ''}   flex w-full items-center justify-center  min-h-20  text-[55px]`} key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    1TR
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải năm"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className="  flex w-full items-center justify-center  min-h-20  text-[55px]" key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    3TR
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="grid grid-cols-2 border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải tư"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className={`${index2 === 0 ? 'col-span-2': ''}  flex w-full items-center justify-center  min-h-20  text-[55px]`} key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    10TR
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải ba"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className="  flex w-full items-center justify-center  min-h-20  text-[55px]" key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    10TR
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải nhì"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className="  flex w-full items-center justify-center  min-h-20  text-[55px]" key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500] border-l-[1px] border-b-[#0000001a]'>
                    30TR
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải nhất"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className="  flex w-full items-center justify-center  min-h-20  text-[55px]" key={index2}>
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
                <div className='flex min-w-32 items-center justify-center text-[38px] font-[500]  border-l-[1px] border-b-[#0000001a]'>
                    2TỶ
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[85px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item: any, index: number) => {
                            return (
                                <div className="border-solid border-r-[1px] border-[#0000001a]" key={index}>
                                    {
                                        item.KetQua["Giải đặc biệt"].map((item2:any, index2: number ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center text-[#ec222c]  min-h-20  text-[55px]" key={index2}>
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

export default XoSoMienLive;