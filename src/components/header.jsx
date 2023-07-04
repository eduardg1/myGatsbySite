import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </nav>
    </div>
  )
}

export default Header