import React from "react"
import { format } from 'date-fns';
import {vi} from 'date-fns/locale'
import Link from "next/link";

import logo from "../../assets/images/logo.png"
import calendarLogo from "../../assets/images/calendar.svg"

const headers = [
    {
        name: "Trang chủ",
        uri: "/"
    },
    {
        name: "Miền Nam",
        uri: "/ket-qua-xo-so-mien-nam"
    },
    {
        name: "Miền Trung",
        uri: "/ket-qua-xo-so-mien-trung"
    },
    {
        name: "Miền Bắc",
        uri: "/ket-qua-xo-so-mien-bac"
    },
    {
        name: "Vietlott",
        uri: "/ket-qua-xo-so-vietlott"
    },
    {
        name: "Phân Tích",
        uri: "/phan-tich-ket-qua-xo-so"
    },
    {
        name: "Dự Đoán",
        uri: "/du-doan-ket-qua-xo-so"
    },
    {
        name: "Tin Xổ Số",
        uri: "/tin-xo-so"
    },
]

const Header = () => {
    const today = new Date();

    const formattedDate = format(today, 'dd/MM/yyyy', { locale: vi});

    const dayOfWeek = format(today, 'EEEE', { locale: vi});

    return (
        <header className="flex max-[1050px]:flex-col w-full items-center justify-between">
            <div className="flex max-[1050px]:w-full justify-between pl-8 pr-8 pt-4 pb-4">
                <div className="min-[1050px]:hidden">
                    <img className="" src={calendarLogo.src} alt="kết quả xổ số hôm nay"/>
                </div>
                <Link href={"/"} prefetch={false}>
                    <div className="flex gap-8 items-center">
                        <img className="w-24 h-12" src={logo.src} alt="xổ số hôm nay xổ số miền bắc xổ số miền nam xổ số miền trunvg"/>
                    </div>
                </Link>
                <div className="flex items-center">
                    <div className="min-[1050px]:hidden flex items-center justify-center border-[#c80505] border-[1px] pt-2.5 pb-2.5 pl-4 pr-4 rounded-[2rem] text-[14px] text-[#f04d3e] font-[500] cursor-pointer">
                        Đăng Nhập
                    </div>
                </div>  
            </div>
            <div className="flex w-full justify-center text-center bg-[#ec222c] pt-3 pb-3 pl-4 pr-4 rounded-[2rem] max-[1050px]:pl-2 max-[1050px]:pr-2 max-[1050px]:rounded-none">
                <div className="flex w-full justify-between items-center text-[#fff] font-bold text-sm overflow-x-scroll no-scrollbar">
                    {
                        headers.map((item: any, index: number) => {
                            return (
                                <Link href={item.uri} key={index} prefetch={false}>
                                    <div className="flex min-w-[105px] items-center justify-center max-md:p-0 pl-2 pr-2 text-[16px] font-[500]">
                                        {item.name}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="max-[1050px]:hidden flex items-center">
                <div className="flex items-center justify-center border-[#c80505] border-[1px] pt-2.5 pb-2.5 pl-4 pr-4 rounded-[2rem] text-[14px] text-[#f04d3e] font-[500] cursor-pointer">
                    Đăng Nhập
                </div>
            </div>
        </header>
    )
}

export default Header;