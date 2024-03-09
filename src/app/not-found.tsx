// import Header from '@/components/header/header';
import Layout from '@/components/layout/layout';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <Layout>
        <div className='flex w-full h-[70vh] items-center justify-center'>
          <Link href='/' prefetch={false}>
            <div className='rounded-[8px] bg-[#ec222c] pl-8 pr-8 pt-4 pb-4 cursor-pointer text-[#fff] font-[700]'>
              {`Đường Dẫn Không Tồn Tại >> Về Lại Trang Chủ`}
            </div>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;