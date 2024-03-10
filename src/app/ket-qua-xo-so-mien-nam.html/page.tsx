import Layout from '@/components/layout/layout';
import XoSoMien from '@/components/result/xosomien/xosomien';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Kết quả Xổ Số Miền Nam - Xổ Số Miền Nam - XSMN - Xổ Số MN - KQXS MN",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
};

const XoSoMienNamPage = async () => {
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Nam", "latest", 3)).data
  return (
    <Layout>
      {
        <div className='flex flex-col gap-4'>
          <Component ketqua={data} vung="Miền Nam" code="MN"/>
          {/* {
            Object.keys(data).map((item, index) => {
              return <XoSoMien vung="Miền Nam" code="MN" ketqua={data[item]} key={index}/>
            })
          } */}
        </div>
      }
    </Layout>
  );
};

export default XoSoMienNamPage;