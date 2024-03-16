import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import { getPreviousWeekday } from '@/components/utils/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Trung Thứ 7 - XSMT Thứ 7 - Xổ Số MN Thứ 7 - KQXS MN Thứ 7",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Trung",
  keywords:[
    'trực tiếp XSMT thu 7', 'trực tiếp xổ số miền Trung thu 7', 'xổ số miền Trung thu 7', 'kết quả xổ số miền Trung thu 7', 'xo so mien Trung thu 7','xosomienTrung thu 7', 'XSMT thu 7', 'xs mien Trung thu 7', 'xo so mn thu 7', 'kqxs mn thu 7', 'kqXSMT thu 7', 'XSMT hom nay thu 7', 'xs mn hom nay thu 7'
  ]
};

const XoSoMienTrungThu7Page = async () => {
    noStore();
    const contentService = new Content()
    const dataDate = getPreviousWeekday(6, 7)
    const data = (await contentService.getKetQuaNgays("Miền Trung", dataDate)).data

    return (
        <Layout today={false}>
            {
                <div className='flex flex-col gap-4'>
                    <Component dayOfWeek={6} ketqua={data} vung="Miền Trung" code="MT"/>
                </div>
            }
        </Layout>
    );
};

export default XoSoMienTrungThu7Page;