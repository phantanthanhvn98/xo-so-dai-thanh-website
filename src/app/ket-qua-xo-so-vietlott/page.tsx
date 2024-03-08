// 'use client'
import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import Mega645 from '@/components/result/vietlott/mega645/mega645'
import Mega655 from '@/components/result/vietlott/mega655/mega655'
import Max3D from '@/components/result/vietlott/max3d/max3d'
import { Content } from '@/components/api/content/content';

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

const XoSoVietlott = async () => {
  // const [tab, setTab] = useState(0)
  const contentService = new Content()
  const dataDate = (await contentService.getKetQuaMien("Vietlott", 'latest', 3)).data
  return (
    <Layout>
      <div className='flex flex-col gap-8'>
        <div className='flex w-full items-center justify-between'>
          {
            vietlott.map((item, index) => {
              return (
                <div key={index} className='flex w-full items-center justify-center pt-2 pb-2 text-[18px] max-[500px]:text-[14px] bg-[#ec222c] text-[#fff] cursor-pointer'>
                  {
                    item.name

                  }
                </div>
              )
            })
          }
        </div>
        {
          Object.keys(dataDate).map((item, index) =>{
            return dataDate[item].map((item2: { Tinh: string; }, index2: any) => {
              if(item2.Tinh === "Max 3D")
                return <Max3D ketqua={item2} key={index2}/>
              else if(item2.Tinh ==="Mege 6/45")
                return <Mega645 ketqua={item2} key={index2}/>
              else
              return <Mega655 ketqua={item2} key={index2}/>
            })
          })
        }
      </div>
    </Layout>
  );
};

export default XoSoVietlott;