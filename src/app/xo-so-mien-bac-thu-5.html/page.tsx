import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Bắc Thứ 5 - XSMB Thứ 5 - Xổ Số MB Thứ 5 - KQXS MB Thứ 5",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Bắc",
  keywords:[
    'trực tiếp xsMB thu 5', 'trực tiếp xổ số miền Bắc thu 5', 'xổ số miền Bắc thu 5', 'kết quả xổ số miền Bắc thu 5', 'xo so mien Bắc thu 5','xosomienBắc thu 5', 'xsMB thu 5', 'xs mien Bắc thu 5', 'xo so MB thu 5', 'kqxs MB thu 5', 'kqxsMB thu 5', 'xsMB hom nay thu 5', 'xs MB hom nay thu 5'
  ]
};

const XoSoMienBắcThu5Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(4, 7)
    const data = (await contentService.getKetQuaNgays("Miền Bắc", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={4} ketqua={data} vung="Miền Bắc" code="MB"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienBắcThu5Page;