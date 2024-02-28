import React from "react"
import { format } from 'date-fns';
import {vi} from 'date-fns/locale'

import logo from "../../assets/logo.png"
import Link from "next/link";

const headers = [
    {
        name: "TRANG CHỦ",
        uri: ""
    },
    {
        name: "XS MIỀN BẮC",
        uri: ""
    },
    {
        name: "XS MIỀN TRUNG",
        uri: ""
    },
    {
        name: "XS MIỀN NAM",
        uri: ""
    },
    {
        name: "VIETLOTT",
        uri: ""
    },
    {
        name: "DỰ DOÁN",
        uri: ""
    },
    {
        name: "PHÂN TÍCH",
        uri: ""
    },
]

const Header = () => {
    const today = new Date();

    const formattedDate = format(today, 'dd/MM/yyyy', { locale: vi});

    const dayOfWeek = format(today, 'EEEE', { locale: vi});

    return (
        <header className="">
            <div className="flex justify-between  p-3">
                <div className="flex gap-8 items-center">
                    <img className="w-24 h-12" src={logo.src} alt=""/>
                    Hôm nay: {dayOfWeek}, {formattedDate}
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center justify-center">
                        Đăng Kí
                    </div>
                    <div className="flex items-center justify-center">
                        Đăng Nhập
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-center bg-[#c80505]">
                <div className="flex gap-5 items-center text-[#fff] font-bold text-sm">
                    {
                        headers.map((item: any, index: number) => {
                            return (
                                <Link href={item.uri} key={index}>
                                    <div className="flex items-center justify-center p-2">
                                        {item.name}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;