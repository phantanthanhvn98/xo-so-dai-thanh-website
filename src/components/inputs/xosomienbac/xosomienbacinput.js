import React from 'react'


const XoSoMienBacInput = (props) => {
    const ketqua = props.ketqua
    return (
        <div className='bg-[#fff]'>
            <div className='bg-[#f1bd2166]'>
                <div className='flex items-center justify-center text-[20px] max-[400px]:text-[16px] text-[#ec222c] font-[500]'>
                    KQXS Miền Bắc ( KQXS MB)
                </div>
                <div className='flex items-center justify-center text[16px] max-[400px]:text-[13px] text-[#0073ea] font-[300]'>
                    {`XSMB / XSMB ${ketqua.Thu} / XSMB ${ketqua.Ngay}`}
                </div>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    ĐB
                </div>
                {/* <div className='flex w-full items-center justify-center text-[32px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải đặc biệt"][0]
                    }
                </div> */}
                <input type='text' defaultValue={ketqua.KetQua["Giải đặc biệt"][0]} className='text-center flex focus:outline-none w-full items-center justify-center text-[32px] text-[#ec222c] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'/>
            </div>
            <div className='flex justify-between border-solid border-b-[1px] border-b-[#0000001a] bg-[#e7f5f2]'>
                <div className='flex w-10 items-center justify-center text-[16px] text-[#000] font-[300] border-l-[1px] border-b-[#0000001a]'>
                    1
                </div>
                <div className='flex w-full items-center justify-center text-[26px] max-[400px]:text-[24px] text-[#000] font-[500] border-l-[1px] border-r-[1px] border-b-[#0000001a]'>
                    {
                        ketqua.KetQua["Giải nhất"].map((item, index) => {
                            return (
                                // <div className='flex items-center justify-center' key={index}>
                                //     {item}
                                // </div>
                                <input  type='text' defaultValue={item} className='bg-[#e7f5f2] flex w-full focus:outline-none text-center items-center justify-center' key={index}/>
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
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input  type='text' defaultValue={item} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 1 ? "0px" : "1px"}] border-[#0000001a]`} key={index}/>
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
                                // <div className={`flex w-full items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input  type='text' defaultValue={item} className={`flex w-full bg-[#e7f5f2] focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 2 || index ===5 ? "0px" : "1px"}] border-b-[${index < 3? "1px": "0px"}] border-[#0000001a]`}  key={index}/>
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
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input  type='text' defaultValue={item} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 1 || index === 3 ? "0px" : "1px"}] border-b-[${index < 2? "1px": "0px"}] border-[#0000001a]`} key={index}/>
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
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input  type='text' defaultValue={item} className={`flex w-full bg-[#e7f5f2] focus:outline-none text-center items-center justify-center border-solid border-r-[${ index === 2 || index ===5 ? "0px" : "1px"}] border-b-[${index < 3? "1px": "0px"}] border-[#0000001a]`} key={index}/>
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
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input  type='text' defaultValue={item} className={`flex w-full focus:outline-none text-center items-center justify-center border-solid border-r-[${ index < 2 ? "1px" : "0px"}] border-[#0000001a]`} key={index}/>
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
                                // <div className={`flex items-center justify-center`} key={index}>
                                //     {item}
                                // </div>
                                <input  type='text' defaultValue={item} className='flex w-full bg-[#e7f5f2] focus:outline-none text-center items-center justify-center' key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default XoSoMienBacInput;