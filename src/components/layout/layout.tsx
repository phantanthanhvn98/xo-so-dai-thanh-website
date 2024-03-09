import { useEffect, useState } from "react";
import Calendar from "../calendar/calendar";
import Footer from "../footer/footer";
import Header from "../header/header";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { parseDayofWeek } from "../utils/utils";
import { calendar } from "@/assets/utils/calendar";

export default function Layout ({children, login}: any) {
    const dayOfWeek = format(new Date(), 'EEEE', { locale: enUS})
    const dataRule = calendar[parseDayofWeek(dayOfWeek)]
    return (
      <div>
        <Header login={login}/>
        <main className="flex w-full p-8 max-[400px]:p-4">
          <div className="flex max-w-[1200px] justify-center mx-auto">
            <div className="self-center grid grid-cols-3 gap-4 max-[400px]:flex w-full">
              <div className="col-span-2 max-md:col-span-3 flex w-full flex-col gap-4">
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
                {children}
              </div>
              <div className="col-span-1 max-md:hidden">
                <div className="max-w-[307px] flex items-center justify-center text-[19px] font-[500] text-[#fff] pt-3 pb-3 bg-[#1ea699] rounded-t-[4px]">
                    Kết Quả Theo Ngày
                </div>
                <Calendar />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
}