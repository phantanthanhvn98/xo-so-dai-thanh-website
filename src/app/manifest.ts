import { MetadataRoute } from 'next'

import logo192 from '@/assets/images/logo-192.png'
import logo512 from "@/assets/images/logo-512.png"
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "Xổ Số Đại Thành",
    "short_name": "Xổ Số Đại Thành",
    "description": "Xổ Số Đại Thành, Cập Nhật KQXS 3 Miền Bắc, Trung, Nam Nhanh Chính Xác Và Miễn Phí, Tường thuật Kết Quả Xổ Số Hôm Nay Trực Tiếp Tại Trường Quay, Xổ Số Kiến Thiết Việt Nam",
    "icons": [
      {
        "src": logo192.src,
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": logo512.src,
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    "theme_color": "#1A94FF",
    "background_color": "#1A94FF",
    "start_url": "/",
    "display": "standalone",
    "orientation": "portrait",
    "related_applications": [
    //   {
    //     "platform": "play",
    //     "url": "https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid",
    //     "id": "vn.tiki.app.tikiandroid"
    //   },
    //   {
    //     "platform": "itunes",
    //     "url": "https://apps.apple.com/vn/app/tiki-shopping-fast-shipping/id958100553"
    //   },
      {
        "platform": "webapp",
        "url": "https://xosodaithanh.vn/manifest.json"
      }
    ],
    "scope": "/"
  }
}

