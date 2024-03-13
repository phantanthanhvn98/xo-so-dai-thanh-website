import React from 'react'
import Image from 'next/image'

import logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <div className='flex justify-between bg-[#cae5ff66] p-8 max-[400px]:p-4 max-[500px]:flex-col max-[500px]:gap-4'>
            <div className='flex justify-center'>
                <Image className='w-[103px] h-[60px]' src={logo} alt="Xổ số Đại Thành logo"/>
            </div>
            <div className='flex justify-between gap-10 '>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-center text-[16px] font-[500]'>
                        Trang chủ
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center text-[18px]'>
                            XSMB
                        </div>
                        <div className='flex items-center text-[18px]'>
                            XSMT
                        </div>
                        <div className='flex items-center text-[18px]'>
                            XSMN
                        </div>
                        <div className='flex items-center text-[18px]'>
                            Viettlot
                        </div>  
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-center text-[16px] font-[500]'>
                        Tin tức
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center text-[18px]'>
                            Phân Tích
                        </div>
                        <div className='flex items-center text-[18px]'>
                            Thống Kê
                        </div>
                        <div className='flex items-center text-[18px]'>
                            Tin Xổ Số
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-center text-[16px] font-[500]'>
                        Mạng Xã Hội
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center text-[18px]'>
                            Facebook
                        </div>
                        <div className='flex items-center text-[18px]'>
                            Youtube
                        </div>
                        <div className='flex items-center text-[18px]'>
                            Tiktok
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;