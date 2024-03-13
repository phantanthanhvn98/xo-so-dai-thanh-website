import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Nam - XSMN - Xổ Số MN - KQXS MN",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn', 'trực tiếp xổ số miền nam', 'xổ số miền nam', 'kết quả xổ số miền nam', 'xo so mien nam','xosomiennam', 'xsmn', 'xs mien nam', 'xo so mn', 'kqxs mn', 'kqxsmn', 'xsmn hom nay', 'xs mn hom nay'
  ]
};

const XoSoMienNamPage = async () => {
  noStore();
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Nam", "latest", 3)).data
  return (
    <Layout>
      {
        <div className='flex flex-col gap-4'>
          <Component ketqua={data} vung="Miền Nam" code="MN"/>
        </div>
      }
    </Layout>
  );
};

export default XoSoMienNamPage;