import React from "react";

const ketqua = {
    "_id": {
      "$oid": "65e042cfd4ea4048eee03bbc"
    },
    "Ngay": "03-01-2024",
    "Tinh": "Max3D",
    "Vung": "Vietlott",
    "KetQua": {
        "Giải tám": [
            "61",
            "14"
            ],
      "Giải bảy": [
        "61",
        "14",
        "85",
        "25"
      ],
      "Giải sáu": [
        "920",
        "945",
        "848",
        "920",
        "945",
        "848"
      ],
      "Giải kk": [
        "1198",
        "2132",
        "6734",
        "7342",
        "0172",
        "3018",
        "7342",
        "0172",
      ],
      
    },
    "createdAt": {
      "$date": "2024-01-02T17:00:00.000Z"
    }
}

const Max3D = () => {
    return (
        <div className="bg-[#fff">
            <div className='bg-[#f1bd2166]'>
                <div className='flex items-center justify-center text-center text-[20px] max-[500px]:text[16px] text-[#ec222c] font-[500]'>
                    Xổ số Max 3D - Kết quả XS Max 3D Vietlott
                </div>
                <div className='flex items-center justify-center text[16px] max-[500px]:text[14px] text-[#0073ea] font-[300]'>
                    XS Max 3D Thứ 6, 01/03/2024
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    8
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải tám"].map((item, index) => {
                            return (
                                <div className='flex items-center justify-center' key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    7
                </div>
                <div className='grid grid-cols-4 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải bảy"].map((item, index) => {
                            return (
                                <div className='flex items-center justify-center' key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    6
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải sáu"].map((item, index) => {
                            return (
                                <div className='flex items-center justify-center' key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    KK
                </div>
                <div className='grid grid-cols-4 w-full items-center justify-center text-[26px] max-[500px]:text[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải kk"].map((item, index) => {
                            return (
                                <div className='flex items-center justify-center' key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Max3D;