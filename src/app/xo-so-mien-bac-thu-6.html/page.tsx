import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Bắc Thứ 6 - XSMB Thứ 6 - Xổ Số MB Thứ 6 - KQXS MB Thứ 6",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Bắc",
  keywords:[
    'trực tiếp xsMB thu 6', 'trực tiếp xổ số miền Bắc thu 6', 'xổ số miền Bắc thu 6', 'kết quả xổ số miền Bắc thu 6', 'xo so mien Bắc thu 6','xosomienBắc thu 6', 'xsMB thu 6', 'xs mien Bắc thu 6', 'xo so MB thu 6', 'kqxs MB thu 6', 'kqxsMB thu 6', 'xsMB hom nay thu 6', 'xs MB hom nay thu 6'
  ]
};

const XoSoMienBắcThu6Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(5, 7)
    const data = (await contentService.getKetQuaNgays("Miền Bắc", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={5} ketqua={data} vung="Miền Bắc" code="MB"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienBắcThu6Page;