import React from 'react'
import { Link} from 'react-router-dom'
import Menu from './Menu'
import './Header.css'


export default function Header(){
  return <div>
    <div className="header-grid">
      <div className="title">ks</div>
      <div className="nav">
        <div className="dropdown">
          <Menu/>
        </div><div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </div>
  </div>
}