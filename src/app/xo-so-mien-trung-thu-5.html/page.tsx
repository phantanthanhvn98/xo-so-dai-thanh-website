import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền trung Thứ 5 - XSMT Thứ 5 - Xổ Số MT Thứ 5 - KQXS MT Thứ 5",
  description: "Cập Nhật KQXS Miền trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Trung",
  keywords:[
    'trực tiếp XSMT thu 5', 'trực tiếp xổ số miền trung thu 5', 'xổ số miền trung thu 5', 'kết quả xổ số miền trung thu 5', 'xo so mien trung thu 5','xosomientrung thu 5', 'XSMT thu 5', 'xs mien trung thu 5', 'xo so mt thu 5', 'kqxs mt thu 5', 'kqXSMT thu 5', 'XSMT hom nay thu 5', 'xs mt hom nay thu 5'
  ]
};

const XoSoMienTrungThu5Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(4, 7)
    const data = (await contentService.getKetQuaNgays("Miền Trung", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={4} ketqua={data} vung="Miền Trung" code="MT"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienTrungThu5Page;