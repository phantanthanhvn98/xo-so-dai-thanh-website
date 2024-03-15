import { calendar } from "@/assets/utils/calendar"
import { formatDateToDDMMYYYY, parseDayofWeek, tinhToUrl } from "@/components/utils/utils"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import Link from "next/link"

const TinhMien = (props: any) => {

    const dataRule:any = Object.keys(calendar).map((item:any, index:number) => {
        return (calendar as any)[item][props.code].tinh
    }).flat().sort((a, b) => a.ten.localeCompare(b.Tinh))

    return (
        <div className="flex flex-col gap-3 rounded-[8px] bg-[#fff]">
            <div className="bg-[#ec222c] flex items-center justify-center text-center text-[#fff] p-2 rounded-t-[8px]">
                {`Xổ Số ${props.vung}`}
            </div>
            <div className="flex gap-3 flex-col p-2">
                {
                    dataRule.map((item: any, index: number) => {
                    return (
                        <Link href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl(item)}.html`} key={index}>
                        <div className="flex cursor-pointer items-center text-[15px] font-[700] gap-2" key={index}>
                            <div className="rounded w-[5px] h-[5px] bg-[#000]" />
                            {
                                `Xổ số ${item.ten}`
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

export default TinhMien