import Link from "next/link"
import Image from 'next/image'
import { getStatus } from "../utils/utils"
import { getStatusByTime } from "./today/utils"
import liveIcon from "@/assets/images/live.svg"
import triangle from '@/assets/images/triangle.svg'

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
                        <div className="flex gap-1 items-center">
                            <Image src={liveIcon} alt={`Icon trực tiếp xổ số miền nam`}/>
                            { `Trực Tiếp Xổ Số Miền Nam` }
                        </div>
                        <div>
                            {
                                getStatusByTime(startMienNam, endMienNam)
                            }
                        </div>
                    </div>
                </Link>
                <Link href={"/ket-qua-xo-so-mien-trung.html"} prefetch={false}>
                    <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                            <Image src={liveIcon} alt={`Icon trực tiếp xổ số miền trung`}/>
                            { `Trực Tiếp Xổ Số Miền Trung`}
                        </div>
                        <div>
                            {
                                getStatusByTime(startMienTrung, endMienTrung)
                            }
                        </div>
                    </div>
                </Link>
                <Link href={"/ket-qua-xo-so-mien-bac.html"} prefetch={false}>
                    <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                            <Image src={liveIcon} alt={`Icon trực tiếp xổ số miền bắc`}/>
                            { `Trực Tiếp Xổ Số Miền Bắc `}
                        </div>
                        <div>
                            {
                                getStatusByTime(startMienBac, endMienBac)
                            }
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex justify-between pl-2 pr-2">
                <div className="flex items-center text-[13px] font-[500]">
                    Trực Tiếp Trên Youtube
                </div>
                <Link href={'https://www.youtube.com/@xosodaithanh'} target="_blank"  rel="noopener noreferrer" >
                    <div className="flex items-center justify-center p-[6px] bg-[#ec222c] text-[#fff] text-[12px] rounded-[30px]">
                        Xem Ngay
                    </div>
                </Link>
            </div>
            {/* <div className="flex justify-between font-[300] text-[12px] p-2">
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
            </div> */}
        </div>
    )
}

export default LiveAnnouncement;