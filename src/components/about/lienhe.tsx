import Link from "next/link";

const thongtin = [
    {
        key: "Trụ Sở Công Ty",
        value: "Cty TNHH Đại Thành, Thoại Ngọc Hầu, Tân Phú, Hồ Chí Minh"
    },
    {
        key: "Email",
        value: "xosodaithanh@gmail.com"
    },
    {
        key: "SDT",
        value: "0972247195"
    },
    {
        key: "Youtube",
        value: <Link href="https://www.youtube.com/@xosodaithanh" rel="noopener noreferrer" target="_blank" passHref>https://www.youtube.com/@xosodaithanh</Link>
    },
    {
        key: "Facebook",
        value: <Link href="https://www.facebook.com/xosodaithanh" rel="noopener noreferrer" target="_blank" passHref>https://www.facebook.com/xosodaithanh</Link> 
    },
    {
        key: "Tiktok",
        value: <Link href="https://www.tiktok.com/@xosodaithanh" rel="noopener noreferrer" target="_blank" passHref>https://www.tiktok.com/@xosodaithanh</Link> 
    }
]

const LienHe = () => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                {
                    thongtin.map((item: any, index: number) => {
                        return (
                            <div className="grid grid-cols-4" key={index}>
                                <div className="font-[500] col-span-1 flex items-center">
                                    {item.key}
                                </div>
                                <div className="flex justify-start col-span-3 flex items-center">
                                    {item.value}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LienHe;
