import React from "react";
  
const MegaInput = (props) => {
    const ketqua = props.ketqua[0]
    return (
        <div className="">
            <div className='bg-[#fff]'>
                <div className='bg-[#f1bd2166]'>
                    <div className='flex items-center justify-center text-[20px] max-[500px]:text-[16px] text-[#ec222c] font-[500]'>
                        {`Xổ Số ${ketqua.Tinh} Ngày ${ketqua.ngay}`}
                    </div>
                    <div className='flex items-center justify-center text[16px] max-[500px]:text-[14px] text-[#0073ea] font-[300]'>
                        {`XS ${ketqua.Vung} / XS ${ketqua.Tinh} ${ketqua.Thu}/ XS ${ketqua.Tinh} ${ketqua.Ngay}`}
                    </div>
                </div>
                <div className='flex flex-col gap-6 pt-6'>
                    <div className='flex items-center justify-center text-[18px] font-[300]'>
                        {`Jackpot ${ketqua.Tinh} ước tính`}
                    </div>
                    <div className='flex items-center justify-center'>
                        <input defaultValue={ketqua.Giatri} className='flex items-center text-center focus:outline-none justify-center pl-3 pr-3 pt-2.5 pb-2.5 bg-[#ec222c] text-[24px] text-[#fff] font-[500] rounded-[5rem]' />
                    </div>
                    <div className=' flex items-center justify-center text-[14px] font-[300]'>
                        Kỳ quay thưởng: 
                        <input defaultValue={ketqua.Kyquaythuong} className='flex font-[700] text-center focus:outline-none border-[1px] border-[#e6e6e6] '/>
                    </div>
                    <div className='flex itemsc-center justify-center'>
                        <div className='flex gap-2.5 max-[500px]:gap-1'>
                        {
                            ketqua["KetQua"].map((item, index) => {
                                return (
                                    <input defaultValue={item} className='flex text-center focus:outline-none items-center justify-center w-16 h-16 max-[500px]:h-11 max-[500px]:w-11 rounded-full border-[1px] border-[#e6e6e6] text-[24px] text-[#ec222c] font-[500]' key={index}/>
                            )})
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaInput;