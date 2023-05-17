import React from 'react'
import ReactIcon from './reactjs-icon.png'
const Project = () => {
  return (
    <div className='content-center'>
    <div className='max-w-lg'>
      <nav className='flex items-center bg-black p-5 '>
        <img src={ReactIcon} alt="vite" />
        <h1 className='text-[#61DAFB] font-bold px-3'>ReactFacts</h1>
      </nav>
      <div className='bg-[#282D35] text-white'>
        <h1 className='font-bold py-6 px-3'>Fun facts about React</h1>
        <ul className='p-2'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
    </div>
  ) 
}

export default Project
