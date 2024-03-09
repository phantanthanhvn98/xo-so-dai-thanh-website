import { Content } from '@/components/api/content/content';
import Layout from '@/components/layout/layout';
import XoSoMienBac from '@/components/result/xosomienbac/xosomienbac';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Kết quả Xổ Số Miền Bắc - Xổ Số Miền Bắc - XSMB - Xổ Số MB - KQXS MB",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
};

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