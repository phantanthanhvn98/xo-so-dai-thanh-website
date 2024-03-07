import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/login/store/StoreProvider";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xổ Số Đại Thành - Kết Quả Xổ Số 3 Miến - Kết quả Xổ Số Miền Bắc - Kết quả Xổ Số Miền Trung - Kết quả Xổ Số Miền Nam - Kết Quả Xổ Số Hôm Nay",
  description: "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="vi">
        <body className={lexend.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
