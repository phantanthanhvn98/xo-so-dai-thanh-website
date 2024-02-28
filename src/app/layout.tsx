import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xổ Số Đại Thành - Kết Quả Xổ Số 3 Miến - Kết quả Xổ Số Miền Bắc - Kết quả Xổ Số Miền Trung - Kết quả Xổ Số Miền Nam - Kết Quả Xổ Số Hôm Nay",
  description: "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
