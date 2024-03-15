import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Bắc Chủ Nhật - XSMB Chủ Nhật - Xổ Số MB Chủ Nhật - KQXS MB Chủ Nhật",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Bắc",
  keywords:[
    'trực tiếp XSMB chu nhat', 'trực tiếp xổ số miền Bắc cn', 'xổ số miền Bắc chu nhat', 'kết quả xổ số miền Bắc cn', 'xo so mien bac chu nhat','xosomienbac cn', 'XSMB chu nhat', 'xs mien Bắc cn', 'xo so mb chu nhat', 'kqxs mb cn', 'kqXSMB cn', 'XSMB hom nay chu nhat', 'xs mb hom nay chu nhat'
  ]
};

const XoSoMienBắcCnPage = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(0, 7)
    const data = (await contentService.getKetQuaNgays("Miền Bắc", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={7} ketqua={data} vung="Miền Bắc" code="MB"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienBắcCnPage;