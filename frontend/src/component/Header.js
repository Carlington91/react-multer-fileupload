import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        Image
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/uploads"> Upload</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
