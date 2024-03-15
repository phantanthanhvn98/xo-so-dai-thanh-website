import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Bắc Thứ 2 - XSMB Thứ 2 - Xổ Số MB Thứ 2 - KQXS MB Thứ 2",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Bắc",
  keywords:[
    'trực tiếp XSMB thu 2', 'trực tiếp xổ số miền Bắc thu 2', 'xổ số miền Bắc thu 2', 'kết quả xổ số miền Bắc thu 2', 'xo so mien Bắc thu 2','xosomienbac thu 2', 'XSMB thu 2', 'xs mien Bắc thu 2', 'xo so mn thu 2', 'kqxs mn thu 2', 'kqXSMB thu 2', 'XSMB hom nay thu 2', 'xs mn hom nay thu 2'
  ]
};

const XoSoMienBắcThu2Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(1, 7)
    const data = (await contentService.getKetQuaNgays("Miền Bắc", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={1} ketqua={data} vung="Miền Bắc" code="MB"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienBắcThu2Page;