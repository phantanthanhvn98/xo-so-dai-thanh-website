'use client'
import React
, { useEffect,
useState } from "react";
import { Content } from "../api/content/content";
import XoSoMienBac from "../result/xosomienbac/xosomienbac";
import XoSoMien from "../result/xosomien/xosomien";
const Component = (props: any) => {
    const contentService = new Content()
    const [ketqua, setKetQua] = useState<any>(props.ketqua)
    const [id, setId] = useState<any>()
    const code = props.code
    const vung = props.vung

    useEffect(() => {
        const mien = ketqua[Object.keys(ketqua)[0]].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        if(mien.includes(true))
            setId(setInterval(interVal, 15000))
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
            setKetQua(item.data)
        })
    }
    
    return (
        <div className='flex flex-col gap-4'>
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