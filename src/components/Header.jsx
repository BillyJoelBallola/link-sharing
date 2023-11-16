import React from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import useActiveLinks from '../hooks/useActiveLinks'

import { IoMdEye } from "react-icons/io";
import { VscLink } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLinkAlt } from 'react-icons/bi'

const Header = () => {
  const activeLink = useActiveLinks();
  const location = useLocation().pathname;

  return (
    <header className='flex items-center flex-wrap justify-between bg-white py-2 px-4 rounded-md'>
      {
        activeLink === undefined &&
        location?.includes("preview") ?
        <>
          <NavLink to={"/links"} className='text-xs font-semibold px-4 py-2 text-violet-600 border border-violet-400 rounded-md'>Back to Editor</NavLink>
          <Link to={"/preview"} className='text-xs font-semibold px-4 py-2 text-white border border-violet-600 bg-violet-600 rounded-md'>Share Link</Link>
        </>
        :
      <>
          <div className='flex gap-2 items-center'>
            <div className='bg-purple-800 p-1 rounded-md'>
              <VscLink className='text-lg text-white'/>
            </div>
            <span className='hidden md:grid text-lg font-bold'>devlinks</span>
          </div>
          <div className='flex items-center gap-2'>
            <NavLink to={"/links"} className={`text-xs font-semibold px-4 py-2 rounded-md ${((activeLink === "links" && !location.includes("preview") || activeLink === undefined)) ? "active" : "text-gray-600"}`}>
              <BiLinkAlt className='flex md:hidden text-lg'/>
              <span className='hidden md:flex'>Links</span>
            </NavLink>
            <NavLink to={"/profile"} className={`text-xs font-semibold px-4 py-2 rounded-md ${activeLink === "profile" ? "active" : "text-gray-600"}`}>
              <FaRegUserCircle className='flex md:hidden text-lg'/>
              <span className='hidden md:flex'>Profile Detail</span>
            </NavLink>
          </div>
          <NavLink to={"/preview"} className='text-xs font-semibold px-2 md:px-4 py-2 text-violet-600 border border-violet-400 rounded-md'>
            <IoMdEye className='flex md:hidden text-lg'/>
            <span className='hidden md:flex'>Preview</span>
          </NavLink>
        </>
      }
    </header>
  )
}

export default Header