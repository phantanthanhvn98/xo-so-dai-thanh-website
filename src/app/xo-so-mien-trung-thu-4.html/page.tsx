import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Trung Thứ 4 - XSMT Thứ 4 - Xổ Số MT Thứ 4 - KQXS MT Thứ 4",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Trung",
  keywords:[
    'trực tiếp xsmt thu 4', 'trực tiếp xổ số miền trung thu 4', 'xổ số miền trung thu 4', 'kết quả xổ số miền trung thu 4', 'xo so mien trung thu 4','xosomientrung thu 4', 'xsmt thu 4', 'xs mien trung thu 4', 'xo so mt thu 4', 'kqxs mt thu 4', 'kqxsmt thu 4', 'xsmnt hom nay thu 4', 'xs mt hom nay thu 4'
  ]
};

const XoSoMienTrungThu4Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(3, 7)
    const data = (await contentService.getKetQuaNgays("Miền Trung", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={3} ketqua={data} vung="Miền Trung" code="MT"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienTrungThu4Page;