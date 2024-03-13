'use client'
import React
, { useEffect,
useState } from "react";
import { Content } from "../../api/content/content";
import XoSoMienBacLive from "@/components/live/live/xosomienbac";
import XoSoMienLive from "@/components/live/live/xosomien";
import { formatDateToDDMMYYYY } from "@/components/utils/utils";

const displayBanner = (code: string) => {
    const now = new Date()
    const end = new Date()
    if(code === "MN"){
        end.setHours(16, 10)
    }else if(code === 'MT'){
        end.setHours(17, 10)
    }
    else
        end.setHours(18, 10)
    return end.getTime()- now.getTime() > 0 ? true: false

}

const ComponentLive = (props: any) => {
    const contentService = new Content("https://api.xosodaithanh.vn")
    const [ketqua, setKetQua] = useState<any>(props.ketqua)
    const [id, setId] = useState<any>()
    const code = props.code
    const vung = props.vung

    const [ob, setOb] = useState(displayBanner(code))

    const displayBanner2 = (code: string) => {
        const now = new Date()
        const end = new Date()
        if(code === "MN"){
            end.setHours(16, 10)
        }else if(code === 'MT'){
            end.setHours(17, 10)
        }
        else
            end.setHours(18, 10)
        const status =  end.getTime()- now.getTime() > 0 ? true: false
        if(status !== ob)
            setOb(status)
    
    }

    useEffect(() => {
        localStorage.setItem("DATA", ketqua)
        const mien = ketqua[Object.keys(ketqua)[0]].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        if(mien.includes(true))
            setId(setInterval(interVal, 1000))
            setId(setInterval(() => displayBanner2(code), 1000))
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
        contentService.getKetQuaMien(vung, "latest", 0).then((item: any) =>{
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
        <div className='relative'>
            <div className="flex flex-col gap-4">
                {code ==="MB"?
                    <div>
                        {
                            Object.keys(ketqua).map((item, index) => {
                                return <XoSoMienBacLive vung="Miền Bắc" code="MB" ketqua={ketqua[item]} key={index}/>
                            })
                        }
                        <div>
                            <div>
                                {`TRỰC TIẾP XỔ SỐ NGÀY ${formatDateToDDMMYYYY(new Date).replaceAll("-", "/")}`}
                            </div>
                            <div>
                                Dang chờ giờ quay kết quả
                            </div>
                            <div>
                                16h15
                            </div>
                        </div>
                    </div>
                    :<></>
                }
                {
                    code !== "MB" ?
                    <div className="relative">
                        {
                            Object.keys(ketqua).map((item, index) => {
                                return <XoSoMienLive vung={vung}code={code} ketqua={ketqua[item]} key={index}/>
                            })
                        }

                    </div>
                    : <></>
                }
            </div>
            {
                displayBanner(code) ?
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-10">
                    <div className="text-[96px] text-[#ec222c] font-[700]">
                        {`TRỰC TIẾP XỔ SỐ NGÀY ${formatDateToDDMMYYYY(new Date).replaceAll("-", "/")}`}
                    </div>
                    <div className="text-[80px] text-[#1ea699] font-[500]">
                        Đang chờ giờ đến giờ quay kết quả
                    </div>
                    <div className="text-[112px] text-[#0029ff] font-[500]">
                        {
                            code === "MN"?  "16h15" : ( code==="MT" ? "17h15" : '18h15')
                        
                        }
                    </div>
                </div>
                : <></>
            }
        </div>
    )
}

export default ComponentLive;