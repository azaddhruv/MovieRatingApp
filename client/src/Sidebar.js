import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar__elements'>
        <NavLink className='sidebar__element__active   sidebar__element' to='/'>
          Home
        </NavLink>
        <li className='sidebar__element'>Trending</li>
        <li className='sidebar__element'>Discussion</li>
      </ul>
    </div>
  )
}

export default Sidebar
