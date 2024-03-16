import Link from "next/link";

const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col w-full gap-3 bg-[#fff] rounded-[8px] shadow-[0px_0px_10px_0px_#d9d9d9]">
                <div className="flex items-center justify-center rounded-t-[8px] text-[16px] font-[500] text-center bg-[#ec222c] text-[#fff] p-2">
                    Thông Tin
                </div>
                <div className="flex flex-col gap-2 font-[700] text-[14px] p-2">
                    <Link href="/lich-quay-thuong" prefetch={false}>
                        <div className="flex items-center gap-2">
                            <div className="rounded w-[5px] h-[5px] bg-[#000]" />
                            { `Lịch Quay Thưởng` }
                        </div>
                    </Link>
                    <Link href="/gioi-thieu" prefetch={false}>
                        <div className="flex items-center gap-2">
                            <div className="rounded w-[5px] h-[5px] bg-[#000]" />
                            { `Giới Thiệu` }
                        </div>
                    </Link>
                    <Link href="/chinh-sach-bao-mat" prefetch={false}>
                        <div className="flex gap-2 items-center">
                            <div className="rounded w-[5px] h-[5px] bg-[#000]" />
                            { `Chính Sách Bảo Mật`}
                        </div>
                    </Link>
                    <Link href="/lien-he" prefetch={false}>
                        <div className="flex gap-2 items-center">
                            <div className="rounded w-[5px] h-[5px] bg-[#000]" />
                            { `Liên Hệ`}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;