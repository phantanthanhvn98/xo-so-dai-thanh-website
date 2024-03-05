import React from 'react';
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
    name: "Mega 4/45",
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
  return (
    <Layout>
      <div className='flex flex-col gap-8'>
        <div className='flex w-full items-center justify-between'>
          {
            vietlott.map((item, index) => {
              return (
                <div className='flex w-full items-center justify-center text-[18px] text-[#fff] bg-[#ec222c]' key={index}>
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