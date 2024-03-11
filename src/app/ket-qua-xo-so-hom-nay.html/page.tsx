import Layout from "@/components/layout/layout";
import HomePage from '@/components/home/home'
import { Content } from "@/components/api/content/content";
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
  noStore();
  const contentService = new Content()
  const dataDate = (await contentService.getKetQuaNgay('latest')).data 
  return (
    <Layout>
        <HomePage ketqua={dataDate}/>
    </Layout>
  );
}