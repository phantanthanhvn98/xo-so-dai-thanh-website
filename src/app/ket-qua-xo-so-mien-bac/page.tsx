import Layout from '@/components/layout/layout';
import XoSoMienBac from '@/components/result/xosomienbac/xosomienbac';
import React from 'react';

const XoSoMienBacPage = () => {
  return (
    <Layout>
      <div className='flex flex-col gap-4'>
        <XoSoMienBac />
        <XoSoMienBac />
        <XoSoMienBac />
      </div>

  </Layout>
  );
};

export default XoSoMienBacPage;