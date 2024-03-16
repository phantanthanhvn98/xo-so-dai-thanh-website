import { calendar } from "@/assets/utils/calendar"
import { parseDayofWeek, tinhToUrl } from "@/components/utils/utils"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import Link from "next/link"

import "./xosotoday.css"

const XoSoToDay = (props: any) => {
    const dayOfWeek = format(props.date, 'EEEE', { locale: enUS})
    const dataRule = calendar[parseDayofWeek(dayOfWeek)]
    return (
        <div className="rounded-t-[4px] shadow-[0px_0px_10px_0px_#d9d9d9]">
            <div className="rounded-t-[4px] flex justify-center text-center items-center bg-[#ec222c] text-[20px] max-[400px]:text-[16px] font-bold text-[#fff]">
                Kết Quả Xổ Số Hôm Nay - Kết Quả Xổ Số 3 Miền
            </div>
            <div className="grid-xs-hom-nay grid grid-cols-3 bg-[#fff]">
            <Link href={'/ket-qua-xo-so-hom-nay.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500]">
                XS Hôm Nay
                </div>
            </Link>
            <Link href={'/ket-qua-xo-so-mien-bac.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500]">
                XS Miền Bắc
                </div>
            </Link>
            <Link href={'/ket-qua-xo-so-mien-nam.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500]">
                XS Miền Nam
                </div>
            </Link>
            <Link href={'/ket-qua-xo-so-mien-trung.html'}  prefetch={false}>
                <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500]">
                XS Miền Trung
                </div>
            </Link>
            {
                dataRule.nam.tinh.map((item: any, index: number) => {
                return (
                    <Link href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl(item)}.html`} key={index}>
                    <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad] font-[500]" key={index}>
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
                    <div className="flex cursor-pointer items-center pl-3 text-[16px] max-[400px]:text-[14px] text-[#0029ad]  font-[500]" key={index}>
                        {
                            item.ten
                        }
                    </div>
                    </Link>
                )
                })
            }
            </div>
        </div>
    )
}

export default XoSoToDay;