import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Xổ Số Miền Trung Thứ 6 - XSMT Thứ 6 - Xổ Số MN Thứ 6 - KQXS MN Thứ 6",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Trung",
  keywords:[
    'trực tiếp XSMT thu 6', 'trực tiếp xổ số miền Trung thu 6', 'xổ số miền Trung thu 6', 'kết quả xổ số miền Trung thu 6', 'xo so mien Trung thu 6','xosomienTrung thu 6', 'XSMT thu 6', 'xs mien Trung thu 6', 'xo so mn thu 6', 'kqxs mn thu 6', 'kqXSMT thu 6', 'XSMT hom nay thu 6', 'xs mn hom nay thu 6'
  ]
};

const XoSoMienTrungThu6Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(5, 7)
    const data = (await contentService.getKetQuaNgays("Miền Trung", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={5} ketqua={data} vung="Miền Trung" code="MT"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienTrungThu6Page;