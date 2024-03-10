import Layout from "@/components/layout/layout";
import type { Metadata } from 'next'

import { codeTinh, mienByTinh } from '@/assets/utils/constants'
import { redirect } from 'next/navigation'
import { Content } from "@/components/api/content/content";
import XoSoMienNamTinh from '@/components/result/xosomiennam/xosomiennamtinh'
import XoSoMienBac from "@/components/result/xosomienbac/xosomienbac";
import ComponentTinh from "@/components/component/tinh/component";
import { formatDateToDDMMYYYY } from "@/components/utils/utils";
 
type Props = {
  params: { tinh: string }
}
 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  //ket-qua-xo-so-tay-ninh-70.html
  const splits= params.tinh.split("-")
  const code = splits[splits.length -1].split(".")[0]
  const tinh = (codeTinh as any)[code]
  return {
    title: `Xổ Số Đại Thành - Kết quả Xổ Số ${tinh} - Xổ Số ${tinh} - XS - Xổ Số ${code} - KQXS ${code}`,
    description: `Cập Nhật KQXS ${tinh}, XS ${tinh}, XS ${tinh},  Xổ Số ${tinh} Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số ${tinh} Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam`,
  };
}

export default async function KetQuaTinh ( { params } : any){
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
