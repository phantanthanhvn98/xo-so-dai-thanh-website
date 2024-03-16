import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Content } from '@/components/api/content/content';
import { Metadata } from 'next';
import Component from '@/components/component/component';
import seoData from '@/assets/seo/xo-so-mien-trung/xo-so-mien-trung.json'

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Trung - XSMT - Xổ Số MT - KQXS MT",
  description: "Cập Nhật KQXS Miền Trung, XSMT, Xổ Số Miền Trung Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmt', 'trực tiếp xổ số miền trung', 'xổ số miền trung', 'kết quả xổ số miền trung', 'xo so mien trung', 'xosomientrung', 'xsmt', 'xs mien trung', 'xo so mt', 'kqxs mt', 'kqxsmt', 'xsmt hom nay', 'xs mt hom nay'
  ]
};

const XoSoMienTrungPage = async () => {
  noStore();
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Trung", "latest", 3)).data
  return (
    <Layout>
      {
        <div className='flex flex-col gap-4'>
          <Component dayOfWeek={0} ketqua={data} vung="Miền Trung" code="MT"/>
        </div>
      }
      <div className='flex flex-col gap-4'>
        {
            seoData.content.map((item: any, index: number) => {
                let textFont = ""
                if(item.font === "h1")
                    textFont = 'text-[24px] font-[700]'
                else if(item.font === 'h2')
                    textFont = 'text-[20px] font-[500]'
                else
                    textFont = 'text-[14px] font-[300]'
                if (item.type === "text")
                    return (
                        <div className={`${textFont}`} key={index}>
                            {item.value}
                        </div>
                    )
            })
        }
      </div>
    </Layout>
  );
};

export default XoSoMienTrungPage;