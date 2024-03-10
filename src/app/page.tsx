import Layout from "@/components/layout/layout";
import HomePage from '@/components/home/home'
import { Content } from "@/components/api/content/content";

export default async function Home() {
  const contentService = new Content()
  const dataDate = (await contentService.getKetQuaNgay('latest')).data 
  return (
    <Layout>
        <HomePage ketqua={dataDate}/>
    </Layout>
  );
}

