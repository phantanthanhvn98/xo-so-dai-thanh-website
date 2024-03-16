import { unstable_noStore as noStore } from 'next/cache';
import Footer from "../footer/footer";
import Header from "../header/header";
import LiveAnnouncement from '../live/component';
import XoSoToDay from '../live/today/xosotoday';
import DaiYesterDay from '../live/yesterday/component';
import AboutUs from '../about/component';
import Calendar from '@/components/calendar/calendar'
import TinhMien from '../xosotinh/tinhmiennam';
import LichQuayThuongCO from '../lichquaythuong/lichquaythuong';

export default function Layout ({children, login}: any) {
    noStore()
    return (
      <div>
        <Header login={login}/>
          <main className="flex w-full p-8 max-md:p-4">
            <div className="flex max-w-[1200px] justify-center mx-auto">
              <div className="self-center grid grid-cols-12 gap-4 max-[400px]:flex w-full">
                <div className='col-span-3 max-md:hidden flex flex-col gap-4'>
                    <LiveAnnouncement />
                    <DaiYesterDay date={new Date()}/>
                    <TinhMien vung="Miền Nam" code ='nam'/>
                    <TinhMien vung="Miền Trung" code ='trung'/>
                </div>
                <div className="col-span-6 max-md:col-span-12 flex w-full flex-col gap-4">
                    <XoSoToDay date={new Date()}/>
                      {children}
                    <LichQuayThuongCO /> 
                </div>
                <div className="col-span-3 max-md:hidden flex flex-col gap-4">
                    <div className=''>
                        <div className="max-w-[307px] flex items-center justify-center text-[19px] font-[500] text-[#fff] pt-3 pb-3 bg-[#1ea699] rounded-t-[4px]">
                            Kết Quả Theo Ngày
                        </div>
                        <Calendar />
                    </div>
                    <AboutUs />
                </div>

              </div>
            </div>
          </main>
        <Footer />
      </div>
    )
}