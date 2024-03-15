import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Bắc Thứ 3 - XSMB Thứ 3 - Xổ Số MB Thứ 3 - KQXS MB Thứ 3",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Bắc",
  keywords:[
    'trực tiếp xsmb thu 3', 'trực tiếp xổ số miền Bắc thu 3', 'xổ số miền bắc thu 3', 'kết quả xổ số miền bắc thu 3', 'xo so mien Bắc thu 3','xosomienbac thu 3', 'xsmb thu 3', 'xs mien bac thu 3', 'xo so mb thu 3', 'kqxs mb thu 3', 'kqxsmb thu 3', 'xsmb hom nay thu 3', 'xs mb hom nay thu 3'
  ]
};

const XoSoMienBắcThu3Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(2, 7)
    const data = (await contentService.getKetQuaNgays("Miền Bắc", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={2} ketqua={data} vung="Miền Bắc" code="MB"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienBắcThu3Page;