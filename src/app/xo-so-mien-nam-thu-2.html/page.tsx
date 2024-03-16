import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Nam Thứ 2 - XSMN Thứ 2 - Xổ Số MN Thứ 2 - KQXS MN Thứ 2",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn thu 2', 'trực tiếp xổ số miền nam thu 2', 'xổ số miền nam thu 2', 'kết quả xổ số miền nam thu 2', 'xo so mien nam thu 2','xosomiennam thu 2', 'xsmn thu 2', 'xs mien nam thu 2', 'xo so mn thu 2', 'kqxs mn thu 2', 'kqxsmn thu 2', 'xsmn hom nay thu 2', 'xs mn hom nay thu 2'
  ]
};

const XoSoMienNamThu2Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(1, 7)
    const data = (await contentService.getKetQuaNgays("Miền Nam", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={1} ketqua={data} vung="Miền Nam" code="MN"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienNamThu2Page;