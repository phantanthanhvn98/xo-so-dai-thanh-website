import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Kết quả Xổ Số Miền Trung - Xổ Số Miền Trung - XSMT - Xổ Số MT - KQXS MT",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
};

const XoSoMienTrungPage = async () => {
  noStore();
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Trung", "latest", 3)).data
  return (
    <Layout>
      {
        <div className='flex flex-col gap-4'>
          {/* {
            Object.keys(data).map((item, index) => {
              return <XoSoMien vung="Miền Trung" code="MT" ketqua={data[item]} key={index}/>
            })
          } */}
          <Component ketqua={data} vung="Miền Trung" code="MT"/>
        </div>
      }
    </Layout>
  );
};

export default XoSoMienTrungPage;