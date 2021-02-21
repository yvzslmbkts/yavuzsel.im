import React from "react"
import { Link } from "gatsby"
import Header from "./header"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
      <Header siteTitle={ title || `Title`} />
    )

  return (
    <div>
    <header className="global-header">{header}</header>
  <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
    </div>
  )
}

export default Layout

