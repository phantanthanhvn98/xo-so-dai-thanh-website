import Layout from "@/components/layout/layout";
import XoSoMienBac from "@/components/result/xosomienbac/xosomienbac"
import XoSoMien from "@/components/result/xosomien/xosomien"
import { Content } from "@/components/api/content/content";

export default async function XoSoHomNayPage() {
  const contentService = new Content()
  const dataDate = (await contentService.getKetQuaNgay('latest'))?.data


  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <XoSoMien code="MN" vung={"Miền Nam"} ketqua={dataDate["Miền Nam"] as any}/>
        <XoSoMienBac code="MB" vung={"Miền Bắc"} ketqua={dataDate["Miền Bắc"] as any} />
        <XoSoMien code="MT" vung={"Miền Trung"} ketqua={dataDate["Miền Trung"] as any}/>
      </div>
    </Layout>
  );
}

