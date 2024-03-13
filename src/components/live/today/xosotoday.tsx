import { calendar } from "@/assets/utils/calendar"
import { parseDayofWeek, tinhToUrl } from "@/components/utils/utils"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import Link from "next/link"

const XoSoToDay = (props: any) => {
    const dayOfWeek = format(props.date, 'EEEE', { locale: enUS})
    const dataRule = calendar[parseDayofWeek(dayOfWeek)]
    return (
        <div className="border-l-0 border-b-0 border-[1px] border-solid border-[#b9b9b9]">
            <div className="flex justify-center text-center items-center pl-4 pr-4 border-solid border-[#b9b9b9] bg-[#ec222c] text-[20px] max-[400px]:text-[16px] font-bold text-[#fff]">
                Xổ Số - Kết Quả Xổ Số Hôm Nay - Kết Quả Xổ Số 3 Miền
            </div>
            <div className="grid grid-cols-3 bg-[#fff]">
            <Link href={'/ket-qua-xo-so-hom-nay.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500] border-[1px]  border-[#b9b9b9]">
                XS Hôm Nay
                </div>
            </Link>
            <Link href={'/ket-qua-xo-so-mien-bac.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500] border-[1px] border-solid border-[#b9b9b9]">
                XS Miền Bắc
                </div>
            </Link>
            <Link href={'/ket-qua-xo-so-mien-nam.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500] border-[1px] border-solid border-[#b9b9b9]">
                XS Miền Nam
                </div>
            </Link>
            <Link href={'/ket-qua-xo-so-mien-trung.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500] border-[1px] border-solid border-[#b9b9b9]">
                XS Miền Trung
                </div>
            </Link>
            {
                dataRule.nam.tinh.map((item: any, index: number) => {
                return (
                    <Link href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl(item)}.html`} key={index}>
                    <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500] border-[1px] border-solid border-[#b9b9b9]" key={index}>
                        {
                            item.ten
                        }
                    </div>
                    </Link>
                )
                })
            }
            {
                dataRule.trung.tinh.map((item: any, index: number) => {
                return (
                    <Link href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl(item)}.html`} key={index}>
                    <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500] border-[1px] border-solid border-[#b9b9b9]" key={index}>
                        {
                            item.ten
                        }
                    </div>
                    </Link>
                )
                })
            }
            {/* <div className="flex w-full items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0  border-solid border-[#b9b9b9]">
            </div>
            <div className="flex items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]">
            </div>
            <div className="flex items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0 border-solid border-[#b9b9b9]">
            </div>
            <div className="flex items-center pl-3 text-[16px] font-[500] border-[1px] border-t-0 border-r-0 order-solid border-[#b9b9b9]">
            </div> */}
            </div>
        </div>
    )
}

export default XoSoToDay;