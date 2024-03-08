import { Content } from '@/components/api/content/content';
import Layout from '@/components/layout/layout';
import XoSoMienBac from '@/components/result/xosomienbac/xosomienbac';
import React from 'react';

const XoSoMienBacPage = async () => {
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Bắc", "latest", 3)).data
  return (
    <Layout>
      {
        <div className='flex flex-col gap-4'>
          {
            Object.keys(data).map((item, index) => {
              return <XoSoMienBac vung="Miền Bắc" code="MB" ketqua={data[item]} key={index}/>
            })
          }
        </div>
      }
    </Layout>
  );
};

export default XoSoMienBacPage;