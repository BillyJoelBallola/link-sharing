import React, { useEffect, useState } from 'react'
import { AiFillGithub, AiOutlineArrowRight} from "react-icons/ai"
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs"
import { IoReload } from "react-icons/io5";
import { getLinkData, getPersonalData, getPersonalImage } from '../hooks/useData'
import { useLocation } from 'react-router-dom';

const moreLinkInfo = [
  {
    "icon": <AiFillGithub className='text-lg' />,
    "platform": "Github",
    "style": "bg-zinc-900 text-white",
  },
  {
    "icon": <BsFacebook className='text-lg' />,
    "platform": "Facebook",
    "style": "bg-blue-500 text-white",
  },
  {
    "icon": <BsYoutube className='text-lg' />,
    "platform": "Youtube",
    "style": "bg-red-500 text-white",
  },
  {
    "icon": <BsLinkedin className='text-lg' />,
    "platform": "Linkedin",
    "style": "bg-blue-600 text-white",
  },
]

const LinksPreview = () => {
  const location = useLocation().pathname;
  const [links, setLinks] = useState([]);
  const [personalData, setPersonalData] = useState({});
  const [personalImage, setPersonalImage] = useState("");
  const [isReload, setIsReload] = useState(false);

  const fetchData = async () => {
    const dataLinks = await getLinkData();
    const dataPersonal = await getPersonalData();
    const dataPersonalImage = await getPersonalImage();
    setLinks(dataLinks ? dataLinks : []);
    setPersonalData(dataPersonal ? dataPersonal : {});
    setPersonalImage(dataPersonalImage ? dataPersonalImage : null);
  };

  useEffect(() => {
    if(isReload || location.includes("preview")){
      fetchData();
      setIsReload(false);
    }
  }, [isReload])

  return (
    <div className={`bg-white  ${location.includes("preview") ? "py-0 rounded-xl" : "py-20 rounded-md"} w-full h-full grid place-items-center relative`}>
      {
        !location.includes("preview") &&
        <button className='absolute top-4 right-4 bg-gray-200 p-2 rounded-md hover:bg-gray-300 duration-150' onClick={() => setIsReload(true)}>
          <IoReload />
        </button>
      }
      <div className='border border-gray-400 py-10 flex flex-col items-center gap-4 justify-center w-[250px] rounded-xl'>
        <div className='bg-gray-200 rounded-full w-20 aspect-square overflow-hidden'>
          <img src={personalImage ? personalImage : ""} alt={personalImage ? "personal-image" : ""} className='object-fit'/>
        </div>
        <div className={`grid ${personalData?.firstName || personalData?.lastName || personalData?.emailAddress ? "gap-0" : "gap-2"} w-full place-items-center text-center`}>
          <p className={`${personalData?.firstName || personalData?.lastName ? "w-auto p-0" : "p-2 w-1/2 bg-gray-200"} font-semibold rounded-full`}>{`${personalData?.firstName ? personalData?.firstName : ""} ${personalData?.lastName ? personalData?.lastName : ""}`}</p>
          <p className={`${personalData?.emailAddress ? "w-auto p-0" : "p-1 w-1/3 bg-gray-200"} rounded-full text-xs`}>{personalData?.emailAddress ? personalData?.emailAddress : ""}</p>
        </div>
        <div className='flex flex-col items-center gap-2 w-full mt-6 h-[150px] overflow-y-scroll'>
          {
            links.length > 0 ?
            moreLinkInfo.map(info => (
              links.map((link, idx) => (
                link.platform === info.platform &&
                <a href={link.link.startsWith('http') ? link.link : `http://${link.link}`} target='_blank' className={`py-3 px-2 rounded-md text-xs w-3/4 flex items-center justify-between ${info.style}`} key={idx}>
                  <div className='flex items-center gap-2'>
                    {info.icon}
                    <span>{link.platform}</span>
                  </div>
                  <AiOutlineArrowRight />
                </a>
              )).reverse()
            )).reverse()
            :
            <>
              <div className='bg-gray-200 w-3/4 h-10 rounded-md' />
              <div className='bg-gray-200 w-3/4 h-10 rounded-md' />
              <div className='bg-gray-200 w-3/4 h-10 rounded-md' />
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default LinksPreview