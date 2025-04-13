import { baseUrlDeep } from '@/utils/base-url';


export const PUBLIC = baseUrlDeep({
  "images": {
    "bgMain": {
      "webp": {
        "src": "/images/bg-main-2560x1707.webp",
        "width": 2560,
        "height": 1707,
        "srcSet": "/images/bg-main-2560x1707.webp 2560w, /images/bg-main-1920x1280.webp 1920w, /images/bg-main-1280x853.webp 1280w, /images/bg-main-640x426.webp 640w",
        "type": "image/webp"
      },
      "jpeg": {
        "src": "/images/bg-main-2560x1707.jpg",
        "width": 2560,
        "height": 1707,
        "srcSet": "/images/bg-main-2560x1707.jpg 2560w, /images/bg-main-1920x1280.jpg 1920w, /images/bg-main-1280x853.jpg 1280w, /images/bg-main-640x426.jpg 640w",
        "type": "image/jpeg"
      }
    }
  }
}, 'src', 'srcSet');