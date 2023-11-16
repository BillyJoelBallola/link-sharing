import React from 'react'
import useActiveLinks from '../hooks/useActiveLinks'

import LinksEditor from './LinksEditor'
import ProfileEditor from './ProfileEditor'

const InfoEditor = () => {
  const activeLink = useActiveLinks();

  return (
    <div className='w-full bg-white rounded-md px-6 py-8 relative'>
      { activeLink === "links" ? <LinksEditor /> : <ProfileEditor /> }
    </div>
  )
}

export default InfoEditor