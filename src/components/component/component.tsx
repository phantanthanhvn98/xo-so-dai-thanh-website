'use client'
import React
, { useEffect,
useState } from "react";
import { Content } from "../api/content/content";
import XoSoMienBac from "../result/xosomienbac/xosomienbac";
import XoSoMien from "../result/xosomien/xosomien";
import Link from "next/link";
import { convertToSlug } from "../utils/utils";

const Component = (props: any) => {
    const contentService = new Content("https://api.xosodaithanh.vn")
    const [ketqua, setKetQua] = useState<any>(props.ketqua)
    const [id, setId] = useState<any>()
    const code = props.code
    const vung = props.vung
    const [tab, setTab] = useState(props.dayOfWeek)

    const daysOfWeek = [
        {
            dayOfWeek: vung,
            uri: `/ket-qua-xo-so-mien-nam.html`
        },
        {
            dayOfWeek: "Thứ 2",
            uri: `/xo-so-${convertToSlug(vung)}-thu-2.html`
        },
        {
            dayOfWeek: "Thứ 3",
            uri: `/xo-so-${convertToSlug(vung)}-thu-3.html`
        },
        {
            dayOfWeek: "Thứ 4",
            uri: `/xo-so-${convertToSlug(vung)}-thu-4.html`
        },
        {
            dayOfWeek: "Thứ 5",
            uri: `/xo-so-${convertToSlug(vung)}-thu-5.html`
        },
        {
            dayOfWeek: "Thứ 6",
            uri: `/xo-so-${convertToSlug(vung)}-thu-6.html`
        },
        {
            dayOfWeek: "Thứ 7",
            uri: `/xo-so-${convertToSlug(vung)}-thu-7.html`
        },
        {
            dayOfWeek: "Chủ Nhật",
            uri: `/xo-so-${convertToSlug(vung)}-cn.html`
        },
    ]

    useEffect(() => {
        localStorage.setItem("DATA", ketqua)
        const mien = ketqua[Object.keys(ketqua)[0]].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        if(mien.includes(true))
            setId(setInterval(interVal, 5000))
    }, [])

    useEffect(() => {
        const mien = ketqua[Object.keys(ketqua)[0]].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        if(!mien.includes(true)){
            clearInterval(id);
        }
    }, [ketqua])


    const interVal = () => {
        contentService.getKetQuaMien(vung, "latest", 3).then((item: any) =>{
            if(localStorage.getItem("DATA") !== JSON.stringify(item.data)){
                const audio = new Audio("ten.m4a")
                audio.volume = 0.5
                audio.play()
                setKetQua(item.data)
                localStorage.setItem("DATA", JSON.stringify(item.data))
            }
        })
    }
    
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex w-full justify-between items-center bg-[#fff]">
                { 
                    daysOfWeek.map((item: any, index: number) => {
                        return (
                            <Link href={item.uri} prefetch={false} key={index}>
                                <div className={`flex p-2 rounded-[4px] justify-center text-center max-[1200px]:text-[14px] ${index === tab ? 'bg-[#ec222c] text-[#fff]' : 'text-[#000]'}`} onClick={() => setTab(index)}>
                                    {item.dayOfWeek}
                                </div>
                            </Link>
                            
                        )
                    })
                }
            </div>
            {code ==="MB"?
                Object.keys(ketqua).map((item, index) => {
                    return <XoSoMienBac vung="Miền Bắc" code="MB" ketqua={ketqua[item]} key={index}/>
                })
                :<></>
            }
            {
                code !== "MB" ?
                Object.keys(ketqua).map((item, index) => {
                return <XoSoMien vung={vung}code={code} ketqua={ketqua[item]} key={index}/>
                })
                : <></>
            }
        </div>
    )
}

export default Component;