import React from 'react'
import NewChat from './NewChat'
import { IoSunny } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col h-screen relative p-2.5">
        <div className="flex items-center gap-1">
            <button 
                className="p-1.5 md:p-2 border border-gray-600 hover:border-white/50 hover:bg-white/30 rounded-lg duration-300">
                    <IoSunny size={20}/>
            </button>
            <NewChat />
        </div>
    </div>
  )
}

export default Sidebar
