import Layout from "@/components/layout/layout";
import { format } from "date-fns";
import { enUS, vi } from "date-fns/locale";
import { useAppSelector } from "@/components/login/store/lib/hooks";
import { selectDay } from "@/components/login/store/lib/counterSlice";

import { serviceUrl } from "../assets/utils/constants"
import { parseDateFromDDMMYYYY, parseDayofWeek } from "../components/utils/utils"
import { calendar } from "../assets/utils/calendar"
import XoSoMienBac from "../components/result/xosomienbac/xosomienbac"
import XoSoMien from "../components/result/xosomien/xosomien"
import { Content } from "@/components/api/content/content";

export default async function Home() {
  const contentService = new Content()
  // const selectedDate= useAppSelector(selectDay)
  // const dayNow = parseDateFromDDMMYYYY(selectedDate)
  const dataDate = (await contentService.getKetQuaNgay('latest'))?.data
  const dayOfWeek = format(new Date(), 'EEEE', { locale: enUS})
  const dataRule = calendar[parseDayofWeek(dayOfWeek)]


  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="border-l-0 border-b-0 border-[1px] border-solid border-[#b9b9b9]">
          <div className="flex justify-center text-center items-center pl-4 pr-4 border-solid border-[#b9b9b9] bg-[#ec222c] text-[20px] max-[400px]:text-[16px] font-bold text-[#fff]">
              Xổ Số - Kết Quả Xổ Số Hôm Nay - Kết Quả Xổ Số 3 Miền
          </div>
          <div className="grid grid-cols-3 grid-rows-4 bg-[#fff]">
            <div className="flex items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]">
              XS Miền Bắc
            </div>
            <div className="flex items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]">
              XS Miền Nam
            </div>
            <div className="flex items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]">
              XS Miền Trung
            </div>
            {
              dataRule.nam.tinh.map((item: any, index: number) => {
                return (
                  <div className="flex items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]" key={index}>
                    {
                      item.ten
                    }
                  </div>
                )
              })
            }
            {
              dataRule.trung.tinh.map((item: any, index: number) => {
                return (
                  <div className="flex items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]" key={index}>
                    {
                      item.ten
                    }
                  </div>
                )
              })
            }
            <div className="flex w-full items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0  border-solid border-[#b9b9b9]">
            </div>
            <div className="flex items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]">
            </div>
            <div className="flex items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]">
            </div>
            <div className="flex items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0 order-solid border-[#b9b9b9]">
            </div>
          </div>
        </div>
        <XoSoMien code="MN" vung={"Miền Nam"} ketqua={dataDate["Miền Nam"] as any}/>
        <XoSoMienBac code="MB" vung={"Miền Bắc"} ketqua={dataDate["Miền Bắc"] as any} />
        <XoSoMien code="MT" vung={"Miền Trung"} ketqua={dataDate["Miền Trung"] as any}/>
      </div>
    </Layout>
  );
}

