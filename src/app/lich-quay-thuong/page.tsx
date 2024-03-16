import Layout from "@/components/layout/layout"
import './lichquaythuong.css'
import Link from "next/link"
import { tinhToUrl } from "@/components/utils/utils"
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://xosodaithanh.vn/'),
    title: "Lịch Xổ Số  - Lịch Quay Thưởng",
    description: "Cập Nhật Lịch Quay Thưởng KQXS Miền Nam, XSMN, Xổ Số Miền Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
    keywords:["xosodaithanh", 'xsmn', 'xsmt', 'xsmb', 'xosomn', 'xosomientrung', 'xosomienbac', 'xosohomnay', 'xosotructiep', 'kqxs', 'ketquaxoso',
    "xổ số", "xo so", "kết quả xổ số", "ket qua xo so", "xổ số miền nam", "xo so mien nam", "xs mn", "xổ số miền bắc", "xổ số trực tiếp", "xo so truc tiep", "xổ số miền trung"
    ]
  };
  
const lichQuayThuong = [
    ["Khu vực", "Miền Nam", "Miền Trung", 'Miền Bắc'],
    ["Giờ Xổ số ", "16h15'>16h35'", "17h15'>17h35'", "18h15'>18h35'"],
    [
        "Thứ 2", [
            "Xổ số Tp HCM",
            "Xổ số Đồng Tháp",
            "Xổ số Cà Mau"
        ],
        "Xổ số Thủ Đô",
        [
            "Xổ số Thừa T. Huế",
            "Xổ số Phú Yên"
        ]
    ],
    [
        "Thứ 3", [
            "Xổ số Bến Tre",
            "Xổ số Vũng Tàu",
            "Xổ số Bạc Liêu"
        ],
        "Xổ số Thủ Đô",
        [
            "Xổ số Quảng Nam",
            "Xổ số Đắk Lắk"
        ]
    ],
    [
        "Thứ 4", [
            "Xổ số Đồng Nai",
            "Xổ số Cần Thơ",
            "Xổ số Sóc Trăng"
        ],
        "Xổ số Thủ Đô",
        [
            "Xổ số Đà Nẵng",
            "Xổ số Khánh Hòa",
        ]
    ],
    [
        "Thứ 5", [
            "Xổ số Tây Ninh",
            "Xổ số An Giang",
            "Xổ số Bình Thuận"
        ],
        "Xổ số Thủ Đô",
        [
            "Xổ số Bình Định",
            "Xổ số Quảng Bình",
            "Xổ số Quảng Trị"
        ]
    ],
    [
        "Thứ 6", [
            "Xổ số Vĩnh Long",
            "Xổ số Bình Dương",
            "Xổ số Trà Vinh"
        ],
        "Xổ số Thủ Đô",
        [
            "Xổ số Gia Lai",
            "Xổ số Ninh Thuận"
        ]
    ],
    [
        "Thứ 7", [
            "Xổ số Tp. HCM",
            "Xổ số Long An",
            "Xổ số Hậu Giang",
            "Xổ số Bình Phước"
        ],
        "Xổ số Thủ Đô",
        [
            "Xổ số Đà Nẵng",
            "Xổ số Quảng Ngãi",
            "Xổ số Đắc Nông"
        ]
    ],
    [
        "Chủ nhật", [
            "Xổ số Tiền Giang",
            "Xổ số Kiên Giang",
            "Xổ số Đà Lạt"
        ],
        "Xổ số Thủ Đô",
        [
            "Xổ số Khánh Hòa",
            "Xổ số Kon Tum",
        ]
    ]
]

const LichQuayThuong = () => {
    return (
        <Layout>
            <h1 className="text-[24px] font-[500] flex items-center justify-center">
                Lịch Quay Thưởng
            </h1>
            <div className="lich-quay-thuong grid grid-cols-4 text-[13px]">
                {
                    lichQuayThuong.map((item: any, index: number) => {
                        return (
                            item.map((item2: any, index2: number) => {
                                if(typeof item2 === 'string'){
                                    if(item2 === "Xổ số Thủ Đô")
                                        return (
                                            <Link className="border border-[#000]" href={`/ket-qua-xo-so-mien-bac.html`} key={index2}>
                                                <div key={index2}>
                                                    {item2}
                                                </div>
                                            </Link>
                                    )
                                    return (
                                        <Link key={index2} className="border border-[#000]" href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl({ten: item2.replaceAll("Xổ số ", "")})}.html`}>
                                            <div key={index2} className={`${index === 0 ? 'font-[700]' : ''} pl-4`}>
                                                {item2}
                                            </div>
                                        </Link>
                                )}
                                return <div className="border border-[#000] pl-4" key={index2}>
                                        {item2.map((item3: any, index3: number) =>{
                                        return (
                                            <Link key={index3} className="" href={`/ket-qua-xo-so/ket-qua-xo-so-${tinhToUrl({ten: item3.replaceAll("Xổ số ", "")})}.html`}>
                                                <div key={index3}>
                                                    {item3}
                                                </div>
                                            </Link>)
                                        })}
                                    </div>
                            })
                        )
                    })
                }
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-[24px] font-[500] flex items-center justify-center">
                    Qui Định Về Vé Số Trúng Giải
                </h2>
                <div className="text-[14px]">
                    1. Vé số trúng giải là những vé có dãy số dự thưởng trùng với các con số trên bảng kết quả theo thứ tự hàng, vé sai một số so với giải Đặc Biệt (vé số Miền Nam và Miền Trung), vé có 2 số cuối trùng với 2 số cuối giải Đặc Biệt đối với vé số Miền Bắc.
                </div>
                <div className="text-[14px]">
                    2. Vé số trúng phải còn nguyên hình, nguyên số, không rách rời và không cạo sửa.
                </div>
                <div className="text-[14px]">
                    3. Vé số trúng có giá trị lãnh thưởng trong thời hạn trả thưởng qui định. (30 ngày)
                </div>
            </div>
        </Layout>
    )
}

export default LichQuayThuong;