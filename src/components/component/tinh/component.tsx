'use client'
import { Content } from "@/components/api/content/content"
import XoSoMienBac from "@/components/result/xosomienbac/xosomienbac"
import XoSoMienNamTinh from "@/components/result/xosomiennam/xosomiennamtinh"
import React, { useEffect, useState } from "react"

const ComponentTinh = (props: any) => {
    const vung = props.vung
    const tinh = props.tinh
    const contentService = new Content()
    const [ketqua, setKetQua] = useState<any>(props.ketqua)
    const [id, setId] = useState<any>()
    useEffect(() => {
      localStorage.setItem("DATA", ketqua)
      const mien = ketqua[0].KetQua["Giải đặc biệt"][0] === ""
      if(mien)
          setId(setInterval(interVal, 15000))
  }, [])

  useEffect(() => {
    const mien = ketqua[0].KetQua["Giải đặc biệt"][0] === ""
      if(!mien){
          clearInterval(id);
      }
  }, [ketqua])


  const interVal = () => {
    contentService.getKetQuaTinh(vung, tinh, "09-03-2024", 7).then((item: any) =>{
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
        <div>
        {
            ["Miền Nam", "Miền Trung"].includes(vung) ?
            <div className="flex flex-col gap-4">
              {
                ketqua.map((item: any, index: number) =>{
                  return <XoSoMienNamTinh ketqua={item} key={index}/>
                })
              }
            </div>
            : <></>
          }
        {
        vung === "Miền Bắc" ?
        ketqua.map((item: any, index: number) =>{
            return <XoSoMienBac ketqua={[ item ]} key={index}/>
        })
        :<></>
        }
        </div>
    )
}

export default ComponentTinh;