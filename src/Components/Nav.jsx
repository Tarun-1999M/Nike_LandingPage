import React from 'react'
import {headerLogo} from "../assets/images"
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="py-8 padding-x absolute z-10 w-full">
      <nav className="flex justify-between items-center">
      <a href="/">
        <img src={headerLogo} alt="headerLogo" height="29px" width="130px"/>
      </a>
      <ul className="flex1 flex justify-center
      items-center gap-16 max-lg:hidden">
        {
          navLinks.map((item)=>(
            <li key={item.label}>
              <a href={item.href} 
              className="font-montserrat
              leading-normal text-lg text-slate-gray">
                {item.label}
              </a>

            </li>
          ))

        }
      </ul>
      <div className="lg:hidden">
        <img 
        src={hamburger}
        alt="hamburger"
        width="25px"
        height="25px"
        />
      </div>
      </nav>
    </header>
  )
}

export default Nav
