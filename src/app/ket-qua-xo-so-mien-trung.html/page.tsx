import Layout from '@/components/layout/layout';
import XoSoMien from '@/components/result/xosomien/xosomien';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Kết quả Xổ Số Miền Trung - Xổ Số Miền Trung - XSMT - Xổ Số MT - KQXS MT",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
};

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