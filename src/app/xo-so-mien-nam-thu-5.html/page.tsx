import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Nam Thứ 5 - XSMN Thứ 5 - Xổ Số MN Thứ 5 - KQXS MN Thứ 5",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn thu 5', 'trực tiếp xổ số miền nam thu 5', 'xổ số miền nam thu 5', 'kết quả xổ số miền nam thu 5', 'xo so mien nam thu 5','xosomiennam thu 5', 'xsmn thu 5', 'xs mien nam thu 5', 'xo so mn thu 5', 'kqxs mn thu 5', 'kqxsmn thu 5', 'xsmn hom nay thu 5', 'xs mn hom nay thu 5'
  ]
};

const XoSoMienNamThu5Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(4, 7)
    const data = (await contentService.getKetQuaNgays("Miền Nam", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={4} ketqua={data} vung="Miền Nam" code="MN"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienNamThu5Page;