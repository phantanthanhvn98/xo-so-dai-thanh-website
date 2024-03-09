import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./globals.css";
import { StoreProvider } from "@/components/login/store/StoreProvider";
import logo from "@/assets/images/logo.png"
import Script from "next/script";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://xosodaithanh.vn/'),
  title: "Xổ Số Đại Thành - Kết Quả Xổ Số 3 Miến - Kết quả Xổ Số Miền Bắc - Kết quả Xổ Số Miền Trung - Kết quả Xổ Số Miền Nam - Kết Quả Xổ Số Hôm Nay",
  description: "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  authors: [{
    url: 'https://xosodaithanh.vn',
    name: "Xổ Số Đại Thành"
    }
  ],
  openGraph: {
    title: "Xổ Số Đại Thành - Kết Quả Xổ Số 3 Miến - Kết quả Xổ Số Miền Bắc - Kết quả Xổ Số Miền Trung - Kết quả Xổ Số Miền Nam - Kết Quả Xổ Số Hôm Nay",
    description: "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
    type: 'website',
    images: [logo.src],
    countryName: "Việt Nam",

  }
};

const script1 = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Xổ Số Đại Thành",
  "image": {
      "@type": "ImageObject",
      "url": logo.src,
      "width": 600,
      "height": 600
  },
  "telephone": "19006035",
  "url": "https://xosodaithanh.vn/",
  "address": {
      "@type": "PostalAddress",
      "streetAddress": "83 Thoai Ngoc Hau, Hoa Thanh, Ward, Tan Phu District, Ho Chi Minh City",
      "addressLocality": "Ho Chi Minh",
      "postalCode": "700000",
      "addressRegion": "Ho Chi Minh",
      "addressCountry": "VN"
  },
  "priceRange": "1000 - 1000000000",
  "openingHoursSpecification": [
      {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
          ],
          "opens": "05:00",
          "closes": "23:00"
      }
  ],
  "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.79664498748942",
      "longitude": "106.65856519879867"
  }
}

const script2 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  "serviceType": "Ecommerce",
  "image": {
      "@type": "ImageObject",
      "url": logo.src,
      "width": 600,
      "height": 600
  }
}

const script3 = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://xosodaithanh.vn/#organization",
  "name": "Xổ Số Đại Thành",
  "url": "https://xosodaithanh.vn/",
  "sameAs": [
      "https://www.facebook.com/xosodaithanh",
      "https://www.youtube.com/@xosodaithanh",
      ""
  ],
  "logo": {
      "@type": "ImageObject",
      "inLanguage": "vi",
      "url": logo.src,
      "contentUrl": logo.src,
      "width": 600,
      "height": 600,
      "caption": "Xổ Số Đại Thành"
  },
}
const script4 = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "@id": "https://xosodaithanh.vn/#website",
  "url": "https://xosodaithanh.vn/",
  "name": "Xổ Số Đại Thành",
  "description": "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  // "potentialAction": [
  //     {
  //         "@type": "SearchAction",
  //         "target": {
  //             "@type": "EntryPoint",
  //             "urlTemplate": "https://xosodaithanh.vn/search?q={search_term_string}"
  //         },
  //         "query-input": "required name=search_term_string"
  //     }
  // ],
  "inLanguage": "vi"
}

const script5 = {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
      {
          "@type": "ListItem",
          "position": 1,
          "name": "Home"
      }
  ]
}
const script6 = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "url": "https://xosodaithanh.vn/",
  "@id": "https://xosodaithanh.vn/",
  "logo": logo.src,
  "image": logo.src,
  "slogan": "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
  "priceRange": "1000 - 1000000000",
  "telephone": "19006035",
  "name": "Công ty TNHH Xổ Số Đại Thành",
  "brand": "Xổ Số Đại Thành",
  "openingHours": "Mo-Su 08:00-21:00",
  "sameAs": [
    "https://www.facebook.com/xosodaithanh",
    "https://www.youtube.com/@xosodaithanh",
  ],
  "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thoai Ngoc Hau, Hoa Thanh Ward, Tan Phu District, Ho Chi Minh City",
      "addressLocality": "Ho Chi Minh"
  },
  "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "19006035",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": "VN",
      "availableLanguage": "vi"
  },
  "alternateName": "xosodaithanh.vn",
  "email": "xosodaithanh@gmail.com",
  "foundingDate": "01/03/2034",
  "founder": [
      {
          "@type": "Person",
          "name": "Phan Tấn Thành",
          "url": "https://www.facebook.com/phantanthanh.tn.1998",
          "@id": "https://www.facebook.com/phantanthanh.tn.1998"
      }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="vi">
        <meta name="theme-color" content="#fff" />
        <body className={lexend.className}>
          {children}
          <ToastContainer theme="dark"/>
        </body>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script1) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script2) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script3) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script4) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script5) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script6) }}
        />
      </html>
    </StoreProvider>
  );
}
