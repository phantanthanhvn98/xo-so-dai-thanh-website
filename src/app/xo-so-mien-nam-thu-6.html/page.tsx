import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Nam Thứ 6 - XSMN Thứ 6 - Xổ Số MN Thứ 6 - KQXS MN Thứ 6",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn thu 6', 'trực tiếp xổ số miền nam thu 6', 'xổ số miền nam thu 6', 'kết quả xổ số miền nam thu 6', 'xo so mien nam thu 6','xosomiennam thu 6', 'xsmn thu 6', 'xs mien nam thu 6', 'xo so mn thu 6', 'kqxs mn thu 6', 'kqxsmn thu 6', 'xsmn hom nay thu 6', 'xs mn hom nay thu 6'
  ]
};

const XoSoMienNamThu6Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(5, 7)
    const data = (await contentService.getKetQuaNgays("Miền Nam", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={5} ketqua={data} vung="Miền Nam" code="MN"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienNamThu6Page;