import Link from "next/link";

const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col w-full gap-3 bg-[#fff] rounded-[8px]">
                <div className="flex items-center justify-center rounded-t-[8px] text-[13px] font-[700] text-center bg-[#ec222c] text-[#fff] p-2">
                    Thông Tin
                </div>
                <div className="flex flex-col gap-2 font-[700] text-[13px] p-2">
                    <Link href="/lich-quay-thuong" prefetch={false}>
                        <div className="flex items-center">
                            { `>> Lịch Quay Thưởng` }
                        </div>
                    </Link>
                    <Link href="/gioi-thieu" prefetch={false}>
                        <div className="flex items-center">
                            { `>> Giới Thiệu` }
                        </div>
                    </Link>
                    <Link href="/chinh-sach-bao-mat" prefetch={false}>
                        <div className="flex">
                            { `>> Chính Sách Bảo Mật`}
                        </div>
                    </Link>
                    <Link href="/lien-he" prefetch={false}>
                        <div className="flex">
                            { `>>  Liên Hệ`}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;