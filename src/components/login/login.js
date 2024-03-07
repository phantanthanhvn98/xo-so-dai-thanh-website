'use client'

import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppSelector } from "@/components/login/store";
import { setAuthState } from "@/components/login/store/authSlice";
import { useAppDispatch } from "@/components/login/store";
import {Security} from '@/components/api/security/security'
import closeIcon from "../../assets/images/close.svg"
import "./toggle.css"


const Login = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const security = new Security() 
    const authState = useAppSelector((state) => state.auth.authState)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(props.open){
            document.getElementById('overlay').classList.remove('hidden');
        }else{
            document.getElementById('overlay').classList.add('hidden');
        }
    }, [props])

    useEffect(() => {
        const lastUserName  = localStorage.getItem("USERNAME")
        const lastPassword =  localStorage.getItem("PASSWORD")
        if(lastPassword && lastUserName){
            onClickLogin(        
                lastUserName,
                lastPassword
            )
            setUserName(lastUserName)
            setPassword(lastPassword)
            setRemember(true)
        }

    }, [])

    const onClickLogin = (userName, password) => {
        security.login(
            userName,
            password
        ).then((item) => {
            if(item.data){
                if(remember){
                    localStorage.setItem("USERNAME", userName)
                    localStorage.setItem("PASSWORD", password)
                    localStorage.setItem("ROLE", item.data.role)
                    handleSetData(
                        item.data.username,
                        item.data.password,
                        item.data.role
                    )
                }
                props.setOpen(false)
            }
        })
    }
    const onChangeUserName = () => {
        const userName = document.getElementById("login-username").value
        setUserName(userName)
    }

    const onChangePassword = () => {
        const password = document.getElementById("login-password").value
        setPassword(password)
    }
    const onChangeRememberPassword = () => {
        const toggel = document.getElementById("remember-password").checked
        setRemember(toggel)
    }
    const handleSetData = () => {
        dispatch(setAuthState(true))
    };
    return (
        <div className={`flex relative w-full ${props.open ? "opacity-100 visible" : "invisible opacity-0"} transition-all ease-in duration-100`}>
            <div className="fixed flex w-[500px] flex-col gap-10 top-1/2 left-1/2 bg-[#f6f6f6] p-8 transform -translate-x-1/2 -translate-y-1/2 rounded-[12px] z-20">
                <div className="flex justify-between gap-10">
                    <div className="text-[24px] text-[#000] font-[600]">
                        Đăng Nhập Xổ Số Đại Thành
                    </div>
                    <div className="flex items-center w-10 h-10 justify-center cursor-pointer rounded-full p-2 hover:bg-[#e6e6e6]" onClick={() => props.setOpen(false)}>
                        <Image className="" src={closeIcon} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="text-[16px] font-[500]">
                            Tên Đăng Nhập
                        </div>
                        <input defaultValue={userName} placeholder="Tên Đăng Nhập" className='text-[16px] font-[500] focus:outline-none p-2 rounded-[4px] hover:border-[#000] border-solid border-[1px] border-[#e6e6e6]' id="login-username" onChange={() => onChangeUserName()}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[16px] font-[500]">
                            Mật Khẩu
                        </div>
                        <input defaultValue={password} placeholder="Tên Đăng Nhập" className='text-[16px] font-[500] focus:outline-none p-2 rounded-[4px] hover:border-[#000] border-solid border-[1px] border-[#e6e6e6]' id="login-password" onChange={() => onChangePassword()}/>
                    </div>  
                    <div className='flex gap-3 items-center'>
                        <label className="switch">
                            <input type="checkbox" checked={remember} id="remember-password" onChange={() => onChangeRememberPassword()}/>
                            <span className="slider"></span>
                        </label>
                        <div className='flex items-center'>
                            Ghi nhớ đăng nhập
                        </div>
                    </div>
                </div>
                <div className={`text-[18px] text-[#fff] font-[500] ${ (userName.length > 0 && password.length > 0) ? "bg-[#ec222c]" : "bg-[#D11F28] cursor-not-allowed"} flex items-center justify-center p-3 rounded-[60px] cursor-pointer`} onClick={() => onClickLogin(userName, password)}>
                    Đăng Nhập
                </div>
            </div>
            <div id="overlay" className="hidden fixed inset-0 bg-black bg-opacity-70 z-10"></div>
        </div>
    )
}

export default Login;