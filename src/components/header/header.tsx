'use client'
import React, { useState } from "react"
import Link from "next/link";
import Image from 'next/image'

import logo from "../../assets/images/logo.png"
import calendarLogo from "../../assets/images/calendar.svg"
import Login from "../../components/login/login"
import { useAppSelector } from "../login/store/lib/hooks";
import { selectRole } from "../login/store/lib/counterSlice";
// import { useAppSelector } from "../login/store/lib/hooks";
// import { selectUserName } from "../login/store/lib/counterSlice";

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

const Header = (props:any) => {
    const login = props.login

    // const username = useAppSelector(selectUserName);
    // const password_ = useAppSelector(selectPassword);
    const role = useAppSelector(selectRole);
    const[open, setOpen] = useState(false || (role.length === 0 && login))
    // const isOn = useAppSelector(selectIsOn)
    return (
        <header className="flex flex-col w-full items-center justify-between">
            <div className="flex max-[1090px]:flex-col w-full items-center justify-between">
                <div className="flex max-[1090px]:w-full justify-between pl-8 pr-8 pt-4 pb-4 max-[400px]:pl-4 max-[400px]:pr-4">
                    <div className=" flex items-center min-[1090px]:hidden cursor-pointer">
                        <Image className="max-[400px]:w-5 max-[400px]:h-5" src={calendarLogo} alt="kết quả xổ số hôm nay"/>
                    </div>
                    <Link href={"/"} prefetch={false}>
                        <div className="flex gap-8 items-center">
                            <Image className="w-24 max-[400px]:w-16 h-12 max-[400px]:h-9" src={logo} alt="xổ số hôm nay xổ số miền bắc xổ số miền nam xổ số miền trunvg"/>
                        </div>
                    </Link>
                    <div className="flex items-center" onClick={() => setOpen(!open)}>
                        <div className={`${login ? "" : "hidden"} min-[1090px]:hidden flex items-center justify-center border-[#c80505] border-[1px] pt-2.5 pb-2.5 pl-4 pr-4 rounded-[2rem] text-[14px] max-[400px]:text-[10px] text-[#f04d3e] font-[500] cursor-pointer`}>
                            Đăng Nhập
                        </div>
                    </div>  
                </div>
                <div className="flex max-[1090px]:w-full justify-between text-center overflow-x-scroll no-scrollbar text-[#fff] bg-[#ec222c] pt-3 pb-3 pl-4 pr-4 rounded-[2rem] max-[1090px]:pl-2 max-[1090px]:pr-2 max-[1090px]:rounded-none">
                    {
                        headers.map((item: any, index: number) => {
                            return (
                                <Link href={item.uri} key={index} prefetch={false}>
                                    <div className="flex max-[1090px]:min-w-[105px] items-center justify-center max-md:p-0 pl-2 pr-2 text-[16px] font-[500]">
                                        {item.name}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="max-[1090px]:hidden w-[150px] flex items-center cursor-pointer" onClick={() => setOpen(!open)}>
                    <div className={`${login ? "" : "hidden"} flex items-center justify-center border-[#c80505] border-[1px] pt-2.5 pb-2.5 pl-4 pr-4 rounded-[2rem] text-[14px] text-[#f04d3e] font-[500] cursor-pointer`}>
                        Đăng Nhập
                    </div>
                </div>
            </div>
            <Login open={open} setOpen={setOpen}/>
        </header>
    )
}

export default Header;