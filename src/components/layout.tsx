import React from "react"
import { Link } from "gatsby"

const Layout: React.FC = ({ children }) => {
    return (
      <div>
          <Link to={`/`}>
              <h3>
                  Pandas Eating Lots
              </h3>
          </Link>
          <Link to={`/about/`}>
              About
          </Link>
          {children}
      </div>
    )
}

export default Layout