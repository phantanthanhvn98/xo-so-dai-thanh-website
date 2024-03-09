import Layout from "@/components/layout/layout";
import type { Metadata, ResolvingMetadata } from 'next'

import { codeTinh } from '@/assets/utils/constants'
 
type Props = {
  params: { tinh: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  //ket-qua-xo-so-tay-ninh-70.html
  const splits= params.tinh.split("-")
  const code = splits[splits.length -1].split(".")[1]
  const tinh = (codeTinh as any)[code]
 
  return {
    title: `Xổ Số Đại Thành - Kết quả Xổ Số ${tinh} - Xổ Số ${tinh} - XS - Xổ Số ${code} - KQXS ${code}`,
    description: `Cập Nhật KQXS ${tinh}, XS${code}, XS ${code},  Xổ Số ${tinh} Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số ${tinh} Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam`,
  };
}

export default function KetQuaTinh ( { params } : any){
  return (
    <Layout>
        {decodeURIComponent(params.tinh)}
    </Layout>
  );
};
