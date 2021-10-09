export const debug = true
// 測試開發/營運網址
export const devUrl = 'http://localhost:3000'
export const prodUrl = 'http://www.abc.com'

export const imgUrl = debug ? devUrl : prodUrl

export const pathnameList = [
  '/about',
  '/login',
  '/product',
  '/product/product-detail',
]

export const pathnameTextList = [
  '/關於我們',
  '/會員登入',
  '/產品總覽',
  '/產品總覽/產品詳細',
]
