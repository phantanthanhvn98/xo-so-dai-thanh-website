import { calendar } from "@/assets/utils/calendar"
import { formatDateToDDMMYYYY, parseDayofWeek, tinhToUrl } from "@/components/utils/utils"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import Link from "next/link"

const DaiYesterDay = (props: any) => {
    props.date.setDate(props.date.getDate() -1)
    const dayOfWeek = format(props.date, 'EEEE', { locale: enUS})

    const dataRule = calendar[parseDayofWeek(dayOfWeek)]
    return (
        <div className="flex flex-col gap-3 rounded-[8px] bg-[#fff]">
            <div className="bg-[#ec222c] flex items-center justify-center text-center text-[#fff] p-2 rounded-t-[8px]">
                {`Xổ Số Hôm Qua ${formatDateToDDMMYYYY(props.date)}`}
            </div>
            <div className="flex gap-3 flex-col p-2">
                <Link href={"/ket-qua-xo-so-mien-nam.html"} prefetch={false}>
                    <div className="text-[15px] font-[700]">
                        { `>> Xổ số miền Nam`}
                    </div>
                </Link>
                <Link href={"/ket-qua-xo-so-mien-trung.html"} prefetch={false}>
                    <div className="text-[15px] font-[700]">
                        { `>> Xổ số miền Trung`}
                    </div>
                </Link>
                <Link href={"/ket-qua-xo-so-mien-bac.html"} prefetch={false}> 
                    <div className="text-[15px] font-[700]">
                        {`>> Xổ số miền Bắc`}
                    </div>
                </Link>
                {
                    dataRule.nam.tinh.map((item: any, index: number) => {
                    return (
                        <Link href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl(item)}.html`} key={index}>
                        <div className="flex cursor-pointer items-center text-[15px] font-[700]" key={index}>
                            {
                                `>> Xổ số ${item.ten}`
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
                        <div className="flex cursor-pointer items-center text-[15px] font-[700]" key={index}>
                            {
                                `>> Xổ số ${item.ten}`
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

export default DaiYesterDay