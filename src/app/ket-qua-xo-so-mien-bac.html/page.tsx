import { Content } from '@/components/api/content/content';
import Component from '@/components/component/component';
import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Bắc - XSMB - Xổ Số MB - KQXS MB",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmb', 'trực tiếp xổ số miền bắc', 'xổ số miền bắc', 'kết quả xổ số miền bắc', 'xo so mien bac', 'xosomienbac', 'xsmb', 'xs mien bac', 'xo so mb', 'kqxs mb', 'kqxsmb', 'xsmb hom nay', 'xs mb hom nay'
  ]
};

const XoSoMienBacPage = async () => {
  noStore();
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Bắc", "latest", 3)).data
  return (
    <Layout>
      {/* {
        <div className='flex flex-col gap-4'>
          {
            Object.keys(data).map((item, index) => {
              return <XoSoMienBac vung="Miền Bắc" code="MB" ketqua={data[item]} key={index}/>
            })
          }
        </div>
      } */}
      <Component vung="Miền Bắc" code="MB" ketqua={data}/>
    </Layout>
  );
};

export default XoSoMienBacPage;