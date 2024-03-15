import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Bắc Thứ 7 - XSMB Thứ 7 - Xổ Số MB Thứ 7 - KQXS MB Thứ 7",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Bắc",
  keywords:[
    'trực tiếp xsMB thu 7', 'trực tiếp xổ số miền Bắc thu 7', 'xổ số miền Bắc thu 7', 'kết quả xổ số miền Bắc thu 7', 'xo so mien Bắc thu 7','xosomienBắc thu 7', 'xsMB thu 7', 'xs mien Bắc thu 7', 'xo so MB thu 7', 'kqxs MB thu 7', 'kqxsMB thu 7', 'xsMB hom nay thu 7', 'xs MB hom nay thu 7'
  ]
};

const XoSoMienBắcThu7Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(6, 7)
    const data = (await contentService.getKetQuaNgays("Miền Bắc", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={6} ketqua={data} vung="Miền Bắc" code="MB"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienBắcThu7Page;