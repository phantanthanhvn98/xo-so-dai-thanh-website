import React from "react";

const ketqua = [
    20, 22, 24, 26, 28, 37
]

const Mega655 = () => {
    return (
        <div className="bg-[#fff]">
                    <div className=''>
          <div className='bg-[#f1bd2166]'>
            <div className='flex items-center justify-center text-[20px] text-[#ec222c] font-[500]'>
              Xổ Số Mega 5/55 Ngày 01/03/2024
            </div>
            <div className='flex items-center justify-center text[16px] text-[#0073ea] font-[300]'>
              XS Mega / XS Mega Thứ 6 / XS Mega 01/03/2024
            </div>
          </div>
          <div className='flex flex-col gap-6 pt-6'>
            <div className='flex items-center justify-center text-[16px] font-[300]'>
              Jackpot Mega 6/55 ước tính
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center pl-3 pr-3 pt-2.5 pb-2.5 bg-[#ec222c] text-[20px] text-[#fff] font-[500] rounded-[5rem]'>
                13.505.728.500 đồng
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center pl-3 pr-3 pt-2.5 pb-2.5 bg-[#ec222c] text-[20px] text-[#fff] font-[500] rounded-[5rem]'>
                13.505.728.500 đồng
              </div>
            </div>
            <div className=' flex items-center justify-center text-[14px] font-[300]'>
              Kỳ quay thưởng: 
              <div className='flex font-[700]'>
                #01166
              </div>
            </div>
            <div className='flex itemsc-center justify-center'>
                <div className='flex gap-2.5'>
                  {
                    ketqua.map((item, index) => {
                    return (
                      <div className='flex items-center justify-center w-16 h-16 rounded-full border-[1px] border-[#e6e6e6] text-[26px] text-[#ec222c] font-[500]' key={index}>
                        {
                          item
                        }
                      </div>
                    )})
                  }
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Mega655;