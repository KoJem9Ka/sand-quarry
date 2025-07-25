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
    },
    "articles": {
      "img1": {
        "webp": {
          "src": "/images/articles/1-450x300.webp",
          "width": 450,
          "height": 300,
          "srcSet": "/images/articles/1-450x300.webp 450w",
          "type": "image/webp"
        },
        "jpeg": {
          "src": "/images/articles/1-450x300.jpg",
          "width": 450,
          "height": 300,
          "srcSet": "/images/articles/1-450x300.jpg 450w",
          "type": "image/jpeg"
        }
      },
      "img2": {
        "webp": {
          "src": "/images/articles/2-450x450.webp",
          "width": 450,
          "height": 450,
          "srcSet": "/images/articles/2-450x450.webp 450w",
          "type": "image/webp"
        },
        "jpeg": {
          "src": "/images/articles/2-450x450.jpg",
          "width": 450,
          "height": 450,
          "srcSet": "/images/articles/2-450x450.jpg 450w",
          "type": "image/jpeg"
        }
      },
      "img3": {
        "webp": {
          "src": "/images/articles/3-450x300.webp",
          "width": 450,
          "height": 300,
          "srcSet": "/images/articles/3-450x300.webp 450w",
          "type": "image/webp"
        },
        "jpeg": {
          "src": "/images/articles/3-450x300.jpg",
          "width": 450,
          "height": 300,
          "srcSet": "/images/articles/3-450x300.jpg 450w",
          "type": "image/jpeg"
        }
      }
    }
  }
}, 'src', 'srcSet');