import React from "react"

// const ketqua = {
//   ketqua: [20, 22, 24, 26, 28, 37],
//   giatri: "13.505.728.500 đồng",
//   kyquaythuong: "#01166"
// }

const Mega645 = (props) => {
  const ketqua = props.ketqua
  return (
      <div className='bg-[#fff] shadow-[0px_0px_10px_0px_#d9d9d9]'>
        <div className='bg-[#f1bd2166]'>
          <div className='flex items-center justify-center text-[20px] max-[500px]:text-[16px] text-[#ec222c] font-[500]'>
            {`Xổ Số Mega 6/45 Ngày ${ketqua.Ngay}`}
          </div>
          <div className='flex items-center justify-center text[16px] max-[500px]:text-[14px] text-[#0073ea] font-[300]'>
            {`XS Mega / XS Mega Thứ 6 / XS Mega ${ketqua.Ngay}`}
          </div>
        </div>
        <div className='flex flex-col gap-6 pt-6'>
          <div className='flex items-center justify-center text-[18px] font-[300]'>
            Jackpot Mega 6/45 ước tính
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center pl-3 pr-3 pt-2.5 pb-2.5 bg-[#ec222c] text-[24px] text-[#fff] font-[500] rounded-[5rem]'>
              {
                ketqua.GiaTri
              }
            </div>
          </div>
          <div className=' flex items-center justify-center text-[14px] font-[300]'>
            Kỳ quay thưởng: 
            <div className='flex font-[700]'>
              {
                ketqua.KyQuayThuong
              }
            </div>
          </div>
          <div className='flex itemsc-center justify-center'>
              <div className='flex gap-2.5 max-[500px]:gap-1'>
                {
                  ketqua.KetQua.map((item, index) => {
                  return (
                    <div className='flex items-center justify-center w-16 h-16 max-[500px]:h-11 max-[500px]:w-11 rounded-full border-[1px] border-[#e6e6e6] text-[24px] text-[#ec222c] font-[500]' key={index}>
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
  )
}

export default Mega645;