import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { parseDayofWeek } from "../utils/utils"
import { calendar } from "@/assets/utils/calendar";

const NavH = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const dayOfWeek = format(currentDate, 'EEEE', { locale: enUS})

    const dataRule = calendar[parseDayofWeek(dayOfWeek)]

    return (
        <div className="">
            <div className="">
                <div className="">
                    XỔ SỐ HÔM QUA
                </div>
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
            </div>
        </div>
    )
}

export default NavH;