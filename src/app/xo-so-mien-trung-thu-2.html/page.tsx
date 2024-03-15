import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Trung Thứ 2 - XSMT Thứ 2 - Xổ Số MT Thứ 2 - KQXS MT Thứ 2",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Trung",
  keywords:[
    'trực tiếp xsmt thu 2', 'trực tiếp xổ số miền Trung thu 2', 'xổ số miền trung thu 2', 'kết quả xổ số miền trung thu 2', 'xo so mien trung thu 2','xosomientrung thu 2', 'xsmn thu 2', 'xs mien trung thu 2', 'xo so mt thu 2', 'kqxs mt thu 2', 'kqxsmt thu 2', 'xsmt hom nay thu 2', 'xs mt hom nay thu 2'
  ]
};

const XoSoMienTrungThu2Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(1, 7)
    const data = (await contentService.getKetQuaNgays("Miền Trung", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={1} ketqua={data} vung="Miền Trung" code="MT"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienTrungThu2Page;