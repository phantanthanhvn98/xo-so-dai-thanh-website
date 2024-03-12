import Layout from "@/components/layout/layout";
import Image from 'next/image'

import banner from '@/assets/images/banner.webp'

export const metadata: Metadata = {
    metadataBase: new URL('https://xosodaithanh.vn/'),
    title: "Xổ Số Đại Thành - Giới Thiệu",
    description: "Cập Nhật KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  };

const content = [
    {
        title: "Xổ Số Đại Thành - Kết Quả Nhanh và Chính Xác",
        content: banner,
        type: "image"
    },
    {
        title: "Giới Thiệu Về Website Đại Thành",
        content: ["Chào mừng đến với Đại Thành, nơi bạn có thể trải nghiệm kết quả xổ số nhanh chóng và chính xác nhất. Chúng tôi không chỉ là một trang web xổ số thông thường, mà còn là đối tác đáng tin cậy của những người yêu thích thử vận may. Với sứ mệnh cung cấp thông tin chính xác và dịch vụ uy tín, chúng tôi tự hào là địa điểm tin cậy cho cộng đồng xổ số trực tuyến."]
    }, 
    {
        title: "Kết Quả Xổ Số Nhanh Chóng và Chính Xác",
        content: ["Đại Thành cam kết mang đến kết quả xổ số ngay sau khi bộ số được quay. Không còn cần phải đợi đến tận cuối ngày, bạn có thể tra cứu kết quả mọi lúc, mọi nơi. Sự nhanh chóng và chính xác của thông tin là điểm mạnh hàng đầu của chúng tôi."]
    },
    {
        title: "Đặc Điểm Nổi Bật",
        content: [
            "Chúng tôi tối ưu hóa nhất để có thể cung cấp tất cả kết quả xổ số 3 miền nhanh và chính xác nhất. XSMN, XSMB, XSMT sẽ đồng hành cùng chúng tôi trong toàn bộ thời gian chương trình trực tiếp",
            "Trực tiếp kết quả quay thưởng hằng ngày trên website và kênh youtube chính thức của công ty. Chúng tôi muốn mang đến trải nghiệm mượt mà và nhanh nhất cho quý khán giả. Xổ Số miền Nam( XSMN) sẽ được phát sáng vào luc lúc 16h15 đến 16h40. Xổ Số Miền Trung( XSMT) sẽ được trực tiếp vào lúc 17h10 đến 17h30 và Xổ số miền Bắc (XSMB) sẽ được lên sóng vào lúc 18h đến 18h20",
            "Đại Thành với sự thấu hiểu đã có ra các bảng kết qua ả xổ số nhanh và chính xác đặc biệt là gọn gàng. Xổ Số 3 Miền sé có bẳng màu trắng ngà đẹp đẽ với niềm tin là mang đến sự thoải mái và hi hy vọng, niềm vui và cảm xúc khác nhau đối với hàng triệu người chơi. Trong không khí hứng khởi của sự đánh đề và dự đoán, trang web xổ số Đại Thành là địa điểm tin cậy để cập nhật ngay lập tức với kết quả xổ số miền Nam mỗi ngày."
        ]
    },
    {
        title:"Lịch Trực Tiếp Xổ Số Miền Nam",
        content: [
            "♦️ Thứ 2: TP. HCM (xshcm), Đồng Tháp (xsdt), Cà Mau (xscm)",
            "♦️ Thứ 3: Bến Tre (xsbt), Vũng Tàu (xsvt), Bạc Liêu (xsbl)",
            "♦️ Thứ 4: Đồng Nai (xsdn), Cần Thơ (xsct), Sóc Trăng (xsst)",
            "♦️ Thứ 5: Tây Ninh (xstn), An Giang (xsag), Bình Thuận (xsbth)",
            "♦️ Thứ 6: Vĩnh Long (xsvl), Bình Dương (xsbd), Trà Vinh (xstv)",
            "♦️ Thứ 7: TP. HCM (xshcm), Long An (xsla), Bình Phước (xsbp), Hậu Giang (xshg)",
            "♦️ Chủ Nhật: Tiền Giang (xstg), Kiên Giang (xskg), Đà Lạt (xsdl)"

        ]
    },
    {
        title:"Lịch Trực Tiếp Xổ Số Miền Trung XSMT KQXS Miền Trung",
        content: [
            "Thứ 2: Thừa T. Huế (XSTTH), Phú Yên (XSPY)",
            "Thứ 3: Đắk Lắk (XSDLK), Quảng Nam (XSQNM)", 
            "Thứ 4: Đà Nẵng (XSDNG), Khánh Hòa (XSKH)",
            "Thứ 5: Bình Định (XSBDI), Quảng Trị (XSQT), Quảng Bình (XSQB)",
            "Thứ 6: Gia Lai (XSGL), Ninh Thuận (XSNT)",
            "Thứ 7: Đà Nẵng (XSDNG), Quảng Ngãi (XSQNG), Đắk Nông (XSDNO)",
            "Chủ Nhật:  Thừa T. Huế (XSTTH),   Khánh Hòa (XSKH), Kon Tum (XSKT)"
        ]
    }
]
const GioiThieu = () => {
    return (
        <Layout>
            <div className="">
                {
                    content.map((item:any, index:number) => {
                        return (
                            <div className="flex flex-col gap-4" key={index}>
                                <div className="flex items-center justify-center text-center text-[24px] font-[500]">
                                    {item.title}
                                </div>
                                {
                                    item.type === 'image' ?
                                    <Image className='' src={banner} alt="banner xổ số đại thành, xổ số miền nam, bắc trung"/>
                                    : 
                                    <div className="flex flex-col gap-2">
                                        { item.content.map((co:any, i:number) =>{
                                            return (
                                                <div className="text-[16px] font-[300] flex items-start text-left" key={i}>
                                                    {co}
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default GioiThieu;