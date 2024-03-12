import Link from "next/link"
import { getStatus } from "../utils/utils"
import { getStatusByTime } from "./today/utils"

const LiveAnnouncement = () => {
    const date =  new Date ()
    const startMienNam = new Date()
    startMienNam.setHours(16, 5, 0)
    const endMienNam = new Date()
    endMienNam.setHours(16, 45, 0)

    const startMienTrung = new Date()
    startMienTrung.setHours(17, 5, 0)
    const endMienTrung = new Date()
    endMienTrung.setHours(17, 45, 0)

    const startMienBac = new Date()
    startMienBac.setHours(18, 5, 0)
    const endMienBac = new Date()
    endMienBac.setHours(18, 30, 0)

    return (
        <div className="flex flex-col w-full gap-3 bg-[#fff] rounded-[8px]">
            <div className="flex items-center justify-center rounded-t-[8px] text-[13px] font-[700] text-center bg-[#ec222c] text-[#fff] p-2">
                Tường Thuật Trực Tiếp Xổ Số
            </div>
            <div className="flex flex-col gap-2 font-[700] text-[13px] p-2">
                <Link href={"/ket-qua-xo-so-mien-nam.html"} prefetch={false}>
                    <div className="flex justify-between">
                        { `>> Trực Tiếp Xổ Số Miền Nam` }
                        <div>
                            {
                                getStatusByTime(startMienNam, endMienNam)
                            }
                        </div>
                    </div>
                </Link>
                <Link href={"/ket-qua-xo-so-mien-trung.html"} prefetch={false}>
                    <div className="flex justify-between">
                        { `>> Trực Tiếp Xổ Số Miền Trung`}
                        <div>
                            {
                                getStatusByTime(startMienTrung, endMienTrung)
                            }
                        </div>
                    </div>
                </Link>
                <Link href={"/ket-qua-xo-so-mien-bac.html"} prefetch={false}>
                    <div className="flex justify-between">
                        { `>>  Trực Tiếp Xổ Số Miền Bắc `}
                        <div>
                            {
                                getStatusByTime(startMienTrung, endMienTrung)
                            }
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex justify-between font-[300] text-[12px] p-2">
                <div className="flex gap-1 items-center">
                    Chờ
                    <div>
                        { getStatus(0)}
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    Đang xổ                    <div>
                        { getStatus(1)}
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    Mới
                    <div>
                        { getStatus(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveAnnouncement;