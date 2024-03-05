import React from "react"

const ketqua = [
    {
        "_id": {
          "$oid": "65e042cfd4ea4048eee03c61"
        },
        "Ngay": "01-01-2024",
        "Tinh": "Tp HCM",
        "Vung": "Miền Nam",
        "KetQua": {
          "Giải tám": [
            "60"
          ],
          "Giải bảy": [
            "578"
          ],
          "Giải sáu": [
            "6936",
            "6205",
            "0338"
          ],
          "Giải năm": [
            "9709"
          ],
          "Giải tư": [
            "73080",
            "93947",
            "97910",
            "69538",
            "48344",
            "53353",
            "42071"
          ],
          "Giải ba": [
            "13738",
            "83427"
          ],
          "Giải nhì": [
            "27410"
          ],
          "Giải nhất": [
            "95797"
          ],
          "Giải đặc biệt": [
            "822009"
          ]
        },
        "createdAt": {
          "$date": "2023-12-31T17:00:00.000Z"
        }
    },
    {
        "_id": {
          "$oid": "65e042cfd4ea4048eee03c49"
        },
        "Ngay": "03-02-2024",
        "Tinh": "Long An",
        "Vung": "Miền Nam",
        "KetQua": {
          "Giải tám": [
            "57"
          ],
          "Giải bảy": [
            "122"
          ],
          "Giải sáu": [
            "6390",
            "0619",
            "7363"
          ],
          "Giải năm": [
            "7265"
          ],
          "Giải tư": [
            "97088",
            "96388",
            "79310",
            "03293",
            "43435",
            "92070",
            "32246"
          ],
          "Giải ba": [
            "44857",
            "30568"
          ],
          "Giải nhì": [
            "80907"
          ],
          "Giải nhất": [
            "31596"
          ],
          "Giải đặc biệt": [
            "114920"
          ]
        },
        "createdAt": {
          "$date": "2024-02-02T17:00:00.000Z"
        }
    },
    {
        "_id": {
          "$oid": "65e042cfd4ea4048eee03c06"
        },
        "Ngay": "03-02-2024",
        "Tinh": "Bình Phước",
        "Vung": "Miền Nam",
        "KetQua": {
          "Giải tám": [
            "93"
          ],
          "Giải bảy": [
            "454"
          ],
          "Giải sáu": [
            "9220",
            "5968",
            "4125"
          ],
          "Giải năm": [
            "4864"
          ],
          "Giải tư": [
            "42658",
            "94855",
            "80331",
            "25921",
            "24835",
            "13126",
            "03291"
          ],
          "Giải ba": [
            "78156",
            "02480"
          ],
          "Giải nhì": [
            "01077"
          ],
          "Giải nhất": [
            "79309"
          ],
          "Giải đặc biệt": [
            "448719"
          ]
        },
        "createdAt": {
          "$date": "2024-02-02T17:00:00.000Z"
        }
    },
    {
        "_id": {
          "$oid": "65e042cfd4ea4048eee03c39"
        },
        "Ngay": "03-02-2024",
        "Tinh": "Hậu Giang",
        "Vung": "Miền Nam",
        "KetQua": {
          "Giải tám": [
            "88"
          ],
          "Giải bảy": [
            "576"
          ],
          "Giải sáu": [
            "2505",
            "7181",
            "0969"
          ],
          "Giải năm": [
            "3871"
          ],
          "Giải tư": [
            "76921",
            "43240",
            "41790",
            "41574",
            "63085",
            "73980",
            "85045"
          ],
          "Giải ba": [
            "04926",
            "75691"
          ],
          "Giải nhì": [
            "33768"
          ],
          "Giải nhất": [
            "26731"
          ],
          "Giải đặc biệt": [
            "168266"
          ]
        },
        "createdAt": {
          "$date": "2024-02-02T17:00:00.000Z"
        }
    }
]

const XoSoMien = (props) => {
    return (
        <div className="bg-[#fff]">
            <div className='bg-[#f1bd2166]'>
                <div className='flex items-center justify-center text-[20px] max-md:text-[16px] text-[#ec222c] font-[500]'>
                    KQXS Miền Nam ( KQXS MB)
                </div>
                <div className='flex items-center justify-center text[16px] max-md:text=[13px] text-[#0073ea] font-[300]'>
                    XSMB / XSMB Thứ 4 / XSMB 28/02/2024
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    Giải
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className='flex items-center justify-center border-l-[1px] border-b-[#0000001a]' key={index}>
                                    {item.Tinh}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    8
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải tám"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center text-[#ec222c]" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
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
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải bảy"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
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
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải sáu"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
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
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải năm"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
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
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải tư"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
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
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải ba"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
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
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải nhì"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    1
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải nhất"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    ĐB
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[26px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    {
                                        item.KetQua["Giải đặc biệt"].map((item2, index2 ) => {
                                            return (
                                                <div className="flex w-full items-center justify-center text-[#ec222c]" key={index2}>
                                                    {item2}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default XoSoMien;