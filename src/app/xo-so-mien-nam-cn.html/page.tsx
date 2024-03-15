import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Nam Chủ Nhật - XSMN Chủ Nhật - Xổ Số MN Chủ Nhật - KQXS MN Chủ Nhật",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn chu nhat', 'trực tiếp xổ số miền nam cn', 'xổ số miền nam chu nhat', 'kết quả xổ số miền nam cn', 'xo so mien nam chu nhat','xosomiennam cn', 'xsmn chu nhat', 'xs mien nam cn', 'xo so mn chu nhat', 'kqxs mn cn', 'kqxsmn cn', 'xsmn hom nay chu nhat', 'xs mn hom nay chu nhat'
  ]
};

const XoSoMienNamCnPage = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(0, 7)
    const data = (await contentService.getKetQuaNgays("Miền Nam", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={7} ketqua={data} vung="Miền Nam" code="MN"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienNamCnPage;