import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Nam Thứ 7 - XSMN Thứ 7 - Xổ Số MN Thứ 7 - KQXS MN Thứ 7",
  description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmn thu 7', 'trực tiếp xổ số miền nam thu 7', 'xổ số miền nam thu 7', 'kết quả xổ số miền nam thu 7', 'xo so mien nam thu 7','xosomiennam thu 7', 'xsmn thu 7', 'xs mien nam thu 7', 'xo so mn thu 7', 'kqxs mn thu 7', 'kqxsmn thu 7', 'xsmn hom nay thu 7', 'xs mn hom nay thu 7'
  ]
};

const XoSoMienNamThu7Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(6, 7)
    const data = (await contentService.getKetQuaNgays("Miền Nam", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={6} ketqua={data} vung="Miền Nam" code="MN"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienNamThu7Page;