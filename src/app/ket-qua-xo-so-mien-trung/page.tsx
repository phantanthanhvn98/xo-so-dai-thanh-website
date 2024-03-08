import React from 'react';
import Layout from '@/components/layout/layout';
import XoSoMien from '@/components/result/xosomien/xosomien';
import { Content } from '@/components/api/content/content';

const XoSoMienTrungPage = async () => {
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Trung", "latest", 3)).data
  return (
    <Layout>
      {
        <div className='flex flex-col gap-4'>
          {
            Object.keys(data).map((item, index) => {
              return <XoSoMien vung="Miền Trung" code="MT" ketqua={data[item]} key={index}/>
            })
          }
        </div>
      }
    </Layout>
  );
};

export default XoSoMienTrungPage;