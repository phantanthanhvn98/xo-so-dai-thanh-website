import { Content } from '@/components/api/content/content';
import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image'
import ComponentLive from '@/components/component/live/component';
import logo from "@/assets/images/logo.png"

const Stream = async ({params}: any) => {
    noStore();
    const contentService = new Content()
    let vung, code
    if(params.dai === '0'){
        vung ="Miền Nam"
        code = "MN"
    }
    else if(params.dai === '1'){
        vung ="Miền Trung"
        code = "MT"
    }else{
        vung ="Miền Bắc"
        code = "MB"
    }
    const data = (await contentService.getKetQuaMien(vung, "latest", 1)).data
    return (
          <div className='flex flex-col gap-4 pl-4 pr-4'>
            <div className='flex items-center justify-between'>
                <div className="flex gap-8 items-center">
                    <Image src={logo} alt="" className='h-[90px] w-[150px] items-center'/>
                    <div className="text-[70px] font-[700] text-[#ec222c]">
                        Xổ Số Đại Thành
                    </div>
                </div>
                <div className='text-[80px]'>
                    {`Bảng KQXS ${vung} Ngày ${Object.keys(data)[0]}`}
                </div>
            </div>
            <ComponentLive ketqua={data} vung={vung} code={code}/>
          </div>
    );
}

export default Stream