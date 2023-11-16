import React, { useEffect, useState } from 'react'
import { addPersonalData, getPersonalData, addPersonalImage, getPersonalImage } from '../hooks/useData'

const ProfileEditor = () => {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
  })
  const [personalImage, setPersonalImage] = useState(null);
  const [action, setAction] = useState(null);

  const fetchData = async () => {
    const data = await getPersonalData();
    setPersonalData(data);
  }

  const fetchImage = () => {
    const image = getPersonalImage();
    setPersonalImage(image);
  }

  useEffect(() => { 
    fetchData();
    fetchImage();
  }, [])

  useEffect(() => {
    if(action){
      fetchImage();
      setAction(null);
    }
  }, [action])

  const handleInputData = (e) => {
    setPersonalData(currentData => ({...currentData, [e.target.name]: e.target.value}))
  }

  useEffect(() => {
    if(personalData?.firstName !== "" || personalData?.lastName !== "" || personalData?.emailAddress !== "") addPersonalData(personalData);
  }, [personalData])

  const handleUpdaloadImage = (e) => {
    const file = e.target.files[0];
    if(!file) return;
    addPersonalImage(file);
    setAction("upload");
  }

  return (
    <div>
      <div>
        <h2 className='text-xl font-bold'>Profile Details</h2>
        <p className='text-xs text-gray-400'>Add your details to create your personal touch to your profile.</p>
      </div>
      <div className='w-full mt-6 text-sm text-gray-500 grid gap-4'>
        <div className='bg-gray-100 grid gap-2 md:grid-cols-[200px_1fr] items-center rounded-md p-4'>
          <span>Profile picture</span>
          <div className='flex items-center gap-4'>
            <input type="file" name="image" onChange={handleUpdaloadImage} id='profileImage' className='hidden'/>
            <label htmlFor="profileImage" className='overflow-hidden bg-white min-w-32 w-32 aspect-square rounded-md flex justify-center border hover:bg-black/30 duration-150 cursor-pointer'>
              <img src={personalImage ? personalImage : ""} alt={personalImage ? "personal-image" : ""} className='object-contain self-center'/>
            </label>
            <span className='text-xs'>image must be below 1024x1024px.<br />use PNG, JPG, and JPEG format.</span>
          </div>
        </div>
        <div className='bg-gray-100 rounded-md p-4 grid gap-4'>
          <div className='grid gap-2 md:grid-cols-[200px_1fr] items-center'>
            <span>First name*</span>
            <input value={personalData?.firstName} onChange={handleInputData} name="firstName" type="text" placeholder='John' className='border border-gray-400 rounded-md py-2 px-4' required/>
          </div>
          <div className='grid gap-2 md:grid-cols-[200px_1fr] items-center'>
            <span>Last name*</span>
            <input value={personalData?.lastName} onChange={handleInputData} name="lastName" type="text" placeholder='Doe' className='border border-gray-400 rounded-md py-2 px-4' required/>
          </div>
          <div className='grid gap-2 md:grid-cols-[200px_1fr] items-center'>
            <span>Email*</span>
            <input value={personalData?.emailAddress} onChange={handleInputData} name="emailAddress" type="email" placeholder='john.doe@example.com' className='border border-gray-400 rounded-md py-2 px-4' required/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEditor