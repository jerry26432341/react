import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  const pathname = props.location.pathname

  const pathnames = ['/product-detail', '/product']
  const pathnameTexts = ['產品詳細', '產品總覽']

  const pathnameIndex = (pathname) => {
    const index = pathnames.findIndex((v, i) => {
      return pathname.includes(v)
    })

    console.log(index)
    return index
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {pathnameTexts[pathnameIndex(pathname)]}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default withRouter(Breadcrumb)
