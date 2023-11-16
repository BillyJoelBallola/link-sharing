import React, { useEffect, useState } from 'react'
import { GiPlatform } from 'react-icons/gi'
import { BsLink45Deg } from 'react-icons/bs'
import { getLinkData, addLinkData } from '../hooks/useData';

const LinksEditor = () => {
  const [links, setLinks] = useState([]);
  const formData = {
    platform: "Github",
    link: "www.example.com/username"
  };

  useEffect(() => {
    const data = getLinkData()
    setLinks(data ? data : [])
  }, [])

  const handleSelectPlatform = (e, idx) => {
    const updatedLinks = links?.map((link, i) =>
      i === idx ? { ...link, platform: e.target.value } : link
    );
    setLinks(updatedLinks);
    addLinkData(updatedLinks)
  }

  const removeLink = (idx) => {
    const currentLinksData = [...links];
    currentLinksData.splice(idx, 1);
    setLinks(currentLinksData);
    addLinkData(currentLinksData)
  }

  const handleInputData = (e, idx) => {
    const updatedLinks = links?.map((link, i) =>
      i === idx ? { ...link, link: e.target.value } : link
    );
    setLinks(updatedLinks);
    addLinkData(updatedLinks)
  }

  const addNewLink = () => {
    setLinks([...links, { ...formData }]);
  };

  return (
    <div>
      <div className='grid gap-6'>
        <div>
          <h2 className='text-xl font-bold'>Customize your links</h2>
          <p className='text-xs text-gray-400'>Add/edit/remove links below and share all your profiles with the world!</p>
        </div>
        <button onClick={addNewLink} className='w-full py-2 text-center border border-purple-500 bg-transparent text-purple-600 rounded-md text-sm'>Add new link [{links?.length}]</button>
      </div>
      <div className='grid gap-4 mt-6 overflow-y-scroll max-h-[360px] relative'>
        {
          links?.length > 0 ?
          links.map((links, idx) => (
            <div className='bg-gray-100 w-full p-4 rounded-md text-sm text-gray-500' key={idx}>
              <div className='flex items-center justify-between'>
                <span className='font-semibold text-gray-600'>Link #{idx + 1}</span>
                <button className='text-xs' onClick={() => removeLink(idx)}>Remove</button>
              </div>
              <div className='mt-3 grid gap-2'>
                <div className='grid gap-1'>
                  <label htmlFor="platform" className='text-xs font-semibold flex items-center gap-1'>
                    <GiPlatform  className='text-lg'/>
                    <span>Platform</span>
                  </label>
                  <select name="" id="platform" value={links?.platform} onChange={(e) => handleSelectPlatform(e, idx)} className='bg-white border border-gray-300 p-2 rounded-md flex items-center gap-2'>
                    <option value="Github">Github</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Linkedin">Linkedin</option>
                  </select>
                </div>
                <div className='grid gap-1'>
                  <label htmlFor="link" className='text-xs font-semibold flex items-center gap-1'>
                    <BsLink45Deg  className='text-lg'/>
                    <span>Link</span>
                  </label>
                  <input required type='text' value={links?.link} onChange={(e) => handleInputData(e, idx)} id="link" placeholder="www.example.com" className='bg-white border border-gray-300 py-2 px-4 rounded-md flex items-center gap-2'/>
                </div>
              </div>
            </div>
          )) :
          <div>
            No links yet. Click the button to add link information. 
          </div>
        }
        {/* <div className="absolute w-full h-20 bottom-0 bg-gradient-to-t from-white to-transparent">Gradient</div> */}
      </div>
    </div>
  )
}

export default LinksEditor