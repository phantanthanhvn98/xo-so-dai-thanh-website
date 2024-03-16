import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Trung Thứ 3 - XSMT Thứ 3 - Xổ Số MN Thứ 3 - KQXS MT Thứ 3",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Trung",
  keywords:[
    'trực tiếp xsmn thu 3', 'trực tiếp xổ số miền trung thu 3', 'xổ số miền trung thu 3', 'kết quả xổ số miền trung thu 3', 'xo so mien trung thu 3','xosomientrung thu 3', 'xsmn thu 3', 'xs mien trung thu 3', 'xo so mt thu 3', 'kqxs mt thu 3', 'kqxsmt thu 3', 'xsmt hom nay thu 3', 'xs mt hom nay thu 3'
  ]
};

const XoSoMienTrungThu3Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(2, 7)
    const data = (await contentService.getKetQuaNgays("Miền Trung", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={2} ketqua={data} vung="Miền Trung" code="MT"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienTrungThu3Page;