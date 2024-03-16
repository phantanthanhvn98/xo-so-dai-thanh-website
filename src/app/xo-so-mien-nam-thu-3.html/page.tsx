import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Nam Thứ 3 - XSMN Thứ 3 - Xổ Số MN Thứ 3 - KQXS MN Thứ 3",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn thu 3', 'trực tiếp xổ số miền nam thu 3', 'xổ số miền nam thu 3', 'kết quả xổ số miền nam thu 3', 'xo so mien nam thu 3','xosomiennam thu 3', 'xsmn thu 3', 'xs mien nam thu 3', 'xo so mn thu 3', 'kqxs mn thu 3', 'kqxsmn thu 3', 'xsmn hom nay thu 3', 'xs mn hom nay thu 3'
  ]
};

const XoSoMienNamThu3Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(2, 7)
    const data = (await contentService.getKetQuaNgays("Miền Nam", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={2} ketqua={data} vung="Miền Nam" code="MN"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienNamThu3Page;