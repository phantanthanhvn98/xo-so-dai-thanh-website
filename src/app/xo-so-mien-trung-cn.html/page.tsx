import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Trung Chủ Nhật - XSMT Chủ Nhật - Xổ Số MT Chủ Nhật - KQXS MT Chủ Nhật",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Trung",
  keywords:[
    'trực tiếp xsmt chu nhat', 'trực tiếp xổ số miền trung cn', 'xổ số miền trung chu nhat', 'kết quả xổ số miền trung cn', 'xo so mien trung chu nhat','xosomientrung cn', 'xsmn chu nhat', 'xs mien trung cn', 'xo so mt chu nhat', 'kqxs mt cn', 'kqxsmt cn', 'xsmt hom nay chu nhat', 'xs mt hom nay chu nhat'
  ]
};

const XoSoMienTrungCnPage = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(0, 7)
    const data = (await contentService.getKetQuaNgays("Miền Trung", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={7} ketqua={data} vung="Miền Trung" code="MT"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienTrungCnPage;