'use client'
import React
, { useEffect,
useState } from "react";
import { Content } from "../../api/content/content";
import XoSoMienBacLive from "@/components/live/live/xosomienbac";
import XoSoMienLive from "@/components/live/live/xosomien";

const ComponentLive = (props: any) => {
    const contentService = new Content("https://api.xosodaithanh.vn")
    const [ketqua, setKetQua] = useState<any>(props.ketqua)
    const [id, setId] = useState<any>()
    const code = props.code
    const vung = props.vung

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
        contentService.getKetQuaMien(vung, "latest", 1).then((item: any) =>{
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
            {code ==="MB"?
                Object.keys(ketqua).map((item, index) => {
                    return <XoSoMienBacLive vung="Miền Bắc" code="MB" ketqua={ketqua[item]} key={index}/>
                })
                :<></>
            }
            {
                code !== "MB" ?
                Object.keys(ketqua).map((item, index) => {
                return <XoSoMienLive vung={vung}code={code} ketqua={ketqua[item]} key={index}/>
                })
                : <></>
            }
        </div>
    )
}

export default ComponentLive;