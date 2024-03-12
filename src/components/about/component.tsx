
const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col w-full gap-3 bg-[#fff] rounded-[8px]">
                <div className="flex items-center justify-center rounded-t-[8px] text-[13px] font-[700] text-center bg-[#ec222c] text-[#fff] p-2">
                    Thông Tin
                </div>
                <div className="flex flex-col gap-2 font-[700] text-[13px] p-2">
                    <div className="flex items-center">
                        { `>> Giới Thiệu` }
                    </div>
                    <div className="flex">
                        { `>> Chính Sách`}
                    </div>
                    <div className="flex">
                        { `>>  Liên Hệ`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;