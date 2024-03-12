import Layout from "@/components/layout/layout";

const thongtin = [
    {
        key: "Trụ Sở Công Ty",
        value: "Cty THHH Đại Thành, Thoại Ngọc Hầu, Tân Phú, Hồ Chí Minh"
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
        value: "https://www.youtube.com/@xosodaithanh" 
    },
    {
        key: "Facebook",
        value: "https://www.facebook.com/xosodaithanh" 
    },
    {
        key: "Tiktok",
        value: "https://www.tiktok.com/@xosodaithanh" 
    }
]
const LienHe = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-4">
                {
                    thongtin.map((item: any, index: number) => {
                        return (
                            <div className="flex items-center justify-between" key={index}>
                                <div className="font-[500]">
                                    {item.key}
                                </div>
                                <div className="flex justify-start">
                                    {item.value}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default LienHe;

