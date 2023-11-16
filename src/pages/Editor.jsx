import React from 'react'

import LinksPreview from "../components/LinksPreview";
import InfoEditor from "../components/InfoEditor";

const Editor = () => {
  return (
    <div className='pt-4 grid md:grid-cols-[300px_1fr] lg:grid-cols-[450px_1fr] gap-4'>
      <div className='hidden md:flex'>
        <LinksPreview />
      </div>
      <InfoEditor />
    </div>
  )
}

export default Editor