import Calendar from "../calendar/calendar";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout ({children}: any) {
    return (
      <div>
        <Header />
        <main className="flex w-full p-8">
          <div className="flex w-full justify-center">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 max-md:col-span-3">
                {children}
              </div>
              <div className="col-span-1 max-md:hidden">
                <div className="flex items-center justify-center text-[19px] font-[500] text-[#fff] pt-3 pb-3 bg-[#1ea699] rounded-t-[4px]">
                    Kết Quả Theo Ngày
                </div>
                <Calendar />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
}