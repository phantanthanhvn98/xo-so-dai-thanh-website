import React, { useState } from 'react';

import MegaInput from "./mega/megainput"
import Max3dInput from "./max3d/max3d"

const vietlott  = [
    {
      name: "Mega 6/45",
      uri: ""
    },
    {
      name: "Power 6/55",
      uri: ""
    }, 
    {
      name: "Max 3D",
      uri: ""
    }
  ]
const XoSoVietlottInput = (props) => {
    const [tab, setTab] = useState(0)
    const ketqua = props.ketqua
    const filterMega645 = ketqua.filter((item) => item.Tinh === "Mega 6-45")
    const filterMega655 = ketqua.filter((item) => item.Tinh === "Power 6-55")
    const filterMax3D= ketqua.filter((item) => item.Tinh === "Max 3D")
    return (
        <div className='text'>
            <div className='flex w-full flex-col gap-4'>
                <div className='flex w-full items-center justify-between'>
                    {
                        vietlott.map((item, index) => {
                        return (
                            <div className='flex w-full items-center justify-center pt-2 pb-2 text-[18px] max-[500px]:text-[14px] text-[#fff] cursor-pointer'  style={tab===index ? {background: "#ec222c"}: {color: "#000"}} key={index} onClick={() => setTab(index)}>
                            {
                                item.name

                            }
                            </div>
                        )
                        })
                    }
                </div>
                {
                tab === 0 && filterMega645.length > 0 ? 
                <MegaInput ketqua={filterMega645[0]}/>
                : <></>
                }
                {
                tab === 1 && filterMega655.length > 0 ? 
                <MegaInput ketqua={filterMega655[0]}/>
                : <></>
                }
                {   
                    tab === 2 && filterMax3D.length > 0 ? 
                    <Max3dInput ketqua={filterMax3D[0]}/>
                    : <></>
                }
            </div>
        </div>
    )
}

export default XoSoVietlottInput