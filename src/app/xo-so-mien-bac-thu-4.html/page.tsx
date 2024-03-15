import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Bắc Thứ 4 - XSMB Thứ 4 - Xổ Số MB Thứ 4 - KQXS MB Thứ 4",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Bắc",
  keywords:[
    'trực tiếp xsMB thu 4', 'trực tiếp xổ số miền Bắc thu 4', 'xổ số miền Bắc thu 4', 'kết quả xổ số miền Bắc thu 4', 'xo so mien Bắc thu 4','xosomienBắc thu 4', 'xsMB thu 4', 'xs mien Bắc thu 4', 'xo so MB thu 4', 'kqxs MB thu 4', 'kqxsMB thu 4', 'xsMB hom nay thu 4', 'xs MB hom nay thu 4'
  ]
};

const XoSoMienBắcThu4Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(3, 7)
    const data = (await contentService.getKetQuaNgays("Miền Bắc", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={3} ketqua={data} vung="Miền Bắc" code="MB"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienBắcThu4Page;