import React from 'react'

const ketqua = {
    "_id": {
      "$oid": "65e042cfd4ea4048eee03bbc"
    },
    "Ngay": "03-01-2024",
    "Tinh": "Bắc Ninh",
    "Vung": "Miền Bắc",
    "KetQua": {
      "Giải bảy": [
        "61",
        "14",
        "85",
        "25"
      ],
      "Giải sáu": [
        "920",
        "945",
        "848"
      ],
      "Giải năm": [
        "1198",
        "2132",
        "6734",
        "7342",
        "0172",
        "3018"
      ],
      "Giải tư": [
        "7275",
        "3934",
        "7969",
        "3310"
      ],
      "Giải ba": [
        "81244",
        "41936",
        "65835",
        "18119",
        "78762",
        "30466"
      ],
      "Giải nhì": [
        "88825",
        "25631"
      ],
      "Giải nhất": [
        "61083"
      ],
      "Giải đặc biệt": [
        "62495"
      ]
    },
    "createdAt": {
      "$date": "2024-01-02T17:00:00.000Z"
    }
  }

const XoSoMienBac = (props) => {
    return (
        <div className='bg-[#fff]'>
            <div className='bg-[#f1bd2166]'>
                <div className='flex items-center justify-center text-[20px] max-[400px]:text-[16px] text-[#ec222c] font-[500]'>
                    KQXS Miền Bắc ( KQXS MB)
                </div>
                <div className='flex items-center justify-center text[16px] max-[400px]:text-[13px] text-[#0073ea] font-[300]'>
                    XSMB / XSMB Thứ 4 / XSMB 28/02/2024
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    ĐB
                </div>
                <div className='flex w-full items-center justify-center text-[32px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải đặc biệt"][0]
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    1
                </div>
                <div className='flex w-full items-center justify-center text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhất"].map((item, index) => {
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
                    2
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhì"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    3
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải ba"].map((item, index) => {
                            return (
                                <div className={`flex w-full items-center justify-center`} key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    4
                </div>
                <div className='grid grid-cols-2 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải tư"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    5
                </div>
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải năm"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
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
                <div className='grid grid-cols-3 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải sáu"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
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
                <div className='grid grid-cols-4 w-full items-center justify-between text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải bảy"].map((item, index) => {
                            return (
                                <div className={`flex items-center justify-center`} key={index}>
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

export default XoSoMienBac;