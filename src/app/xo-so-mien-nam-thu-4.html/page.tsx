import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Nam Thứ 4 - XSMN Thứ 4 - Xổ Số MN Thứ 4 - KQXS MN Thứ 4",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn thu 4', 'trực tiếp xổ số miền nam thu 4', 'xổ số miền nam thu 4', 'kết quả xổ số miền nam thu 4', 'xo so mien nam thu 4','xosomiennam thu 4', 'xsmn thu 4', 'xs mien nam thu 4', 'xo so mn thu 4', 'kqxs mn thu 4', 'kqxsmn thu 4', 'xsmn hom nay thu 4', 'xs mn hom nay thu 4'
  ]
};

const XoSoMienNamThu4Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(3, 7)
    const data = (await contentService.getKetQuaNgays("Miền Nam", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={3} ketqua={data} vung="Miền Nam" code="MN"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienNamThu4Page;