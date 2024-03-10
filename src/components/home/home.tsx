'use client';
import { useEffect, useState } from "react";
import XoSoMien from "@/components/result/xosomien/xosomien";
import XoSoMienBac from "@/components/result/xosomienbac/xosomienbac";
import { Content } from "@/components/api/content/content";


const HomePage = (props:any) => {
    const contentService = new Content("https://api.xosodaithanh.vn")
    const [ketqua, setKetQua] = useState<any>(props.ketqua)
    const [id, setId] = useState<any>()

    useEffect(() => {
        localStorage.setItem("DATA", ketqua)
        const nam = ketqua["Miền Nam"].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        const trung = ketqua["Miền Trung"].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        const bac = ketqua["Miền Bắc"].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        if(nam.includes(true) || trung.includes(true) || bac.includes(true))
            setId(setInterval(interVal, 15000))
    }, [])

    useEffect(() => {
        const nam = ketqua["Miền Nam"].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        const trung = ketqua["Miền Trung"].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        const bac = ketqua["Miền Bắc"].map((item: any) => {
            return item.KetQua["Giải đặc biệt"][0] === ""
        })
        
        if(!(nam.includes(true) || trung.includes(true) || bac.includes(true))){
            clearInterval(id);
        }
    }, [ketqua])


    const interVal = () => {
        contentService.getKetQuaNgay('latest').then((item: any) =>{
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
        <div className="flex flex-col gap-4">
            <XoSoMien code="MN" vung={"Miền Nam"} ketqua={ketqua["Miền Nam"] as any}/>
            <XoSoMienBac code="MB" vung={"Miền Bắc"} ketqua={ketqua["Miền Bắc"] as any} />
            <XoSoMien code="MT" vung={"Miền Trung"} ketqua={ketqua["Miền Trung"] as any}/>
      </div>
    )
}

export default HomePage;