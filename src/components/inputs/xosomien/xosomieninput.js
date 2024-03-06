import React from "react";

const XoSoMienInput = (props) => {
    const ketqua = props.ketqua
    return (
        <div className="bg-[#fff] w-full">
            <div className='bg-[#f1bd2166]'>
                <div className='flex items-center justify-center text-[20px] max-md:text-[16px] text-[#ec222c] font-[500]'>
                    {`KQXS Miền Nam ( KQXS MN)`}
                </div>
                <div className='flex items-center justify-center text[16px] max-md:text-[13px] text-[#0073ea] font-[300]'>
                    {`XSMN / XSMN ${ketqua[0].Thu} / XSMB ${ketqua[0].Ngay}`}
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    Giải
                </div>
                <div className={`grid grid-cols-${ketqua.length} w-full items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-r-[1px] border-b-[#0000001a]`}>
                    {
                        ketqua.map((item, index) => {
                            return (
                                <div className='flex items-center justify-center border-l-[1px] border-b-[#0000001a] underline text-[#0029ad] max-[400px]:text-[13px]' key={index}>
                                    {item.Tinh}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center text-[#ec222c] max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-b-[1px] border-[#0000001a]`} key={index2}/>
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-b-[1px] border-[#0000001a]`} key={index2}/>
                                                
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-b-[1px] border-[#0000001a]`} key={index2}/>
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
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
                <div className='flex w-10 items-center justify-center text-[16px] max-[400px]:text-[14px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
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
                                                // <div className="flex w-full items-center justify-center text-[#ec222c] max-[400px]:text-[20px]" key={index2}>
                                                //     {item2}
                                                // </div>
                                                <input  type='text' defaultValue={item2} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[1px] border-[#0000001a]`} key={index2}/>
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

export default XoSoMienInput;