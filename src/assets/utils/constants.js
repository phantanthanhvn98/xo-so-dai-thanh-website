export const serviceUrl = "http://localhost:8764"
export const socials = {
    youtube: "",
    facebook: "",
    tiktok: ""
}

export const codeTinh = {
    "11": "Cao Bằng",
    "12": "Lạng Sơn",
    "14": "Quảng Ninh",
    "17": "Thái Bình",
    "18": "Nam Định",
    "19": "Phú Thọ",
    "20": "Thái Nguyên",
    "21": "Yên Bái",
    "22": "Tuyên Quang",
    "23": "Hà Giang",
    "24": "Lào Cai",
    "25": "Lai Châu",
    "26": "Sơn La",
    "27": "Điện Biên",
    "28": "Hoà Bình",
    "34": "Hải Dương",
    "35": "Ninh Bình",
    "36": "Thanh Hoá",
    "37": "Nghệ An",
    "38": "Hà Tĩnh",
    "43": "TP. Đà Nẵng",
    "47": "Đắk Lắk",
    "48": "Đắk Nông",
    "49": "Lâm Đồng",
    "61": "Bình Dương",
    "62": "Long An",
    "63": "Tiền Giang",
    "64": "Vĩnh Long",
    "15": "Hải Phòng",
    "40": "Hà Nội",
    "50": "Tp HCM",
    "60": "Đồng Nai",
    '65': 'Cần Thơ',
    '66': 'Đồng Tháp',
    '67': 'An Giang',
    '68': 'Kiên Giang',
    '69': 'Cà Mau',
    '70': 'Tây Ninh',
    '71': 'Bến Tre',
    '72': 'Vũng Tàu',
    '73': 'Quảng Bình',
    '74': 'Quảng Trị',
    '75': 'Thừa Thiên Huế',
    '76': 'Quảng Ngãi',
    '77': 'Bình Định',
    '78': 'Phú Yên',
    '79': 'Khánh Hoà',
    '81': 'Gia Lai',
    '82': 'Kon Tum',
    '83': 'Sóc Trăng',
    '84': 'Trà Vinh',
    '85': 'Ninh Thuận',
    '86': 'Bình Thuận',
    '88': 'Vĩnh Phúc',
    '89': 'Hưng Yên',
    '90': 'Hà Nam',
    '92': 'Quảng Nam',
    '93': 'Bình Phước',
    '94': 'Bạc Liêu',
    '95': 'Hậu Giang',
    '97': 'Bắc Kạn',
    '98': 'Bắc Giang',
    '99': 'Bắc Ninh'
}

export const codeByTinh = Object.fromEntries(Object.entries(codeTinh).map(a => a.reverse()))

export const mienByTinh = {
    "Hà Nội": {
        "Vung": "Miền Bắc",
        "uri": "mien-bac"
    },
    "Thừa Thiên Huế": {
        "Vung": "Miền Trung",
        "uri": "thua-thien-hue"
    },
    "Phú Yên": {
        "Vung": "Miền Trung",
        "uri": "phu-yen"
    },
    "Tp HCM": {
        "Vung": "Miền Nam",
        "uri": "tp-hcm"
    },
    "Đồng Tháp": {
        "Vung": "Miền Nam",
        "uri": "dong-thap"
    },
    "Cà Mau": {
        "Vung": "Miền Nam",
        "uri": "ca-mau"
    },
    "Quảng Ninh": {
        "Vung": "Miền Bắc",
        "uri": "mien-bac"
    },
    "Quảng Nam": {
        "Vung": "Miền Trung",
        "uri": "quang-nam"
    },
    "Đắk Lắk": {
        "Vung": "Miền Trung",
        "uri": "dak-lak"
    },
    "Bến Tre": {
        "Vung": "Miền Nam",
        "uri": "ben-tre"
    },
    "Vũng Tàu": {
        "Vung": "Miền Nam",
        "uri": "vung-tau"
    },
    "Bạc Liêu": {
        "Vung": "Miền Nam",
        "uri": "bac-lieu"
    },
    "Bắc Ninh": {
        "Vung": "Miền Bắc",
        "uri": "mien-bac"
    },
    "Đồng Nai": {
        "Vung": "Miền Nam",
        "uri": "dong-nan"
    },
    "Cần Thơ": {
        "Vung": "Miền Nam",
        "uri": "can-tho"
    },
    "Sóc Trăng": {
        "Vung": "Miền Nam",
        "uri": "soc-trang"
    },
    "Bình Định": {
        "Vung": "Miền Trung",
        "uri": "binh-dinh"
    },
    "Quảng Bình": {
        "Vung": "Miền Trung",
        "uri": "quang-binh"
    },
    "Quảng Trị": {
        "Vung": "Miền Trung",
        "uri": "quang-tri"
    },
    "Tây Ninh": {
        "Vung": "Miền Nam",
        "uri": "tay-ninh"
    },
    "An Giang": {
        "Vung": "Miền Nam",
        "uri": "an-giang"
    },
    "Bình Thuận": {
        "Vung": "Miền Nam",
        "uri": "binh-thuan"
    },
    "Hải Phòng": {
        "Vung": "Miền Bắc",
        "uri": "mien-bac"
    },
    "Gia Lai": {
        "Vung": "Miền Trung",
        "uri": "gia-lai"
    },
    "Ninh Thuận": {
        "Vung": "Miền Trung",
        "uri": "ninh-thuan"
    },
    "Vĩnh Long": {
        "Vung": "Miền Nam",
        "uri": "vinh-long"
    },
    "Bình Dương": {
        "Vung": "Miền Nam",
        "uri": "binh-duong"
    },
    "Trà Vinh": {
        "Vung": "Miền Nam",
        "uri": "tra-vinh"
    },
    "Nam Định": {
        "Vung": "Miền Bắc",
        "uri": "mien-bac"
    },
    "Đà Nẵng": {
        "Vung": "Miền Trung",
        "uri": "da-nang"
    },
    "Quảng Ngãi": {
        "Vung": "Miền Trung",
        "uri": "quang-ngai"
    },
    "Đắk Nông": {
        "Vung": "Miền Trung",
        "uri": "dak-nong"
    },
    "Long An": {
        "Vung": "Miền Nam",
        "uri": "long-an"
    },
    "Hậu Giang": {
        "Vung": "Miền Nam",
        "uri": "hau-giang"
    },
    "Bình Phước": {
        "Vung": "Miền Nam",
        "uri": "binh-phuoc"
    },
    "Thái Bình": {
        "Vung": "Miền Bắc",
        "uri": "mien-bac"
    },
    "Khánh Hòa": {
        "Vung": "Miền Trung",
        "uri": "khanh-hoa"
    },
    "Kon Tum": {
        "Vung": "Miền Trung",
        "uri": "kon-tum"
    },
    "Tiền Giang": {
        "Vung": "Miền Nam",
        "uri": "tien-giang"
    },
    "Kiên Giang": {
        "Vung": "Miền Nam",
        "uri": "kien-giang"
    },
    "Đà Lạt": {
        "Vung": "Miền Nam",
        "uri": "da-lat"
    }
}