import { Content } from '@/components/api/content/content';
import Component from '@/components/component/component';
import Layout from '@/components/layout/layout';
import { unstable_noStore as noStore } from 'next/cache';
import { Metadata } from 'next';
import seoData from '@/assets/seo/xo-so-mien-bac/xo-so-mien-bac.json'

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Miền Bắc - XSMB - Xổ Số MB - KQXS MB",
  description: "Cập Nhật KQXS Miền Bắc, XSMB, Xổ Số Miền Bắc Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  keywords:[
    'trực tiếp xsmb', 'trực tiếp xổ số miền bắc', 'xổ số miền bắc', 'kết quả xổ số miền bắc', 'xo so mien bac', 'xosomienbac', 'xsmb', 'xs mien bac', 'xo so mb', 'kqxs mb', 'kqxsmb', 'xsmb hom nay', 'xs mb hom nay'
  ]
};

const XoSoMienBacPage = async () => {
  noStore();
  const contentService = new Content()
  const data = (await contentService.getKetQuaMien("Miền Bắc", "latest", 3)).data
  return (
    <Layout>
      <Component dayOfWeek={0}  vung="Miền Bắc" code="MB" ketqua={data}/>
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

export default XoSoMienBacPage;