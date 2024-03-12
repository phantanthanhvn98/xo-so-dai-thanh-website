import Layout from "@/components/layout/layout";
import type { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache';
import { codeTinh, mienByTinh } from '@/assets/utils/constants'
import { redirect } from 'next/navigation'
import { Content } from "@/components/api/content/content";
import ComponentTinh from "@/components/component/tinh/component";
import { formatDateToDDMMYYYY } from "@/components/utils/utils";
 
type Props = {
  params: { tinh: string }
}
 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const splits= params.tinh.split("-")
  const code = splits[splits.length -1].split(".")[0]
  const tinh = (codeTinh as any)[code]
  const tinhEn = tinh.replaceAll(" ", "").toLowerCase()
              .normalize("NFD")
              .replaceAll(/[\u0300-\u036f]/g, "")
  const tinhEn_ = tinh.toLowerCase()
  .normalize("NFD")
  .replaceAll(/[\u0300-\u036f]/g, "")
  return {
    title: `Xổ Số Đại Thành - Xổ Số ${tinh} - XS ${tinh} - KQXS ${tinh}`,
    description: `Cập Nhật KQXS ${tinh}, XS ${tinh}, XS ${tinh},  Xổ Số ${tinh} Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số ${tinh} Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam`,
    keywords:[
      `xo so ${tinhEn}`,`xo so ${tinhEn_}`, `xoso ${tinhEn}`, `xoso${tinhEn}`, `xs${tinhEn}`, `kqxs ${tinhEn}`, `xo so ${tinhEn} hom nay`
    ]
  };
}

export default async function KetQuaTinh ( { params } : any){
  noStore();
  const splits= params.tinh.split("-")
  const code = splits[splits.length -1].split(".")[0]
  const tinh = (codeTinh as any)[code]
  const vung = (mienByTinh as any)[tinh].Vung
  if(!vung)
    redirect('/')
  const contentService = new Content()
  const dataDate = (await contentService.getKetQuaTinh(vung, tinh, formatDateToDDMMYYYY(new Date()), 7)).data
  
  return (
    <Layout>
      <ComponentTinh ketqua={dataDate} code={code} vung={vung} tinh={tinh}/>
    </Layout>
  );
};
