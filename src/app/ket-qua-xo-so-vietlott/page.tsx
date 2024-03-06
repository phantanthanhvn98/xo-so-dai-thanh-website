'use client'
import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import Mega645 from '@/components/result/vietlott/mega645/mega645'
import Mega655 from '@/components/result/vietlott/mega655/mega655'
import Max3D from '@/components/result/vietlott/max3d/max3d'

const vietlott  = [
  {
    name: "Vietlott",
    uri: ""
  },
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

const XoSoVietlott = () => {
  const [tab, setTab] = useState(0)
  return (
    <Layout>
      <div className='flex flex-col gap-8'>
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
        <Mega645 />
        <Mega655 />
        <Max3D />
      </div>
    </Layout>
  );
};

export default XoSoVietlott;