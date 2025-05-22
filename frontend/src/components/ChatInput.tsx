"use client";
import React, {useState} from 'react'
import { IoSend } from "react-icons/io5";
import { TbPaperclip } from 'react-icons/tb'

const ChatInput = () => {
    const [prompt, setPrompt] = useState("")
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-3xl mx-auto pt-3 px-4">
        <form className="bg-white/10 rounded-full flex items-center px-4 py-2.5 w-full">
            <TbPaperclip className="text-2xl text-white"/>
            <input 
                type="text" 
                placeholder="Message RR-AI" 
                onChange={(e)=>setPrompt(e.target.value)}
                value={prompt}
                className="bg-transparent text-white placeholder:text-gray-400 text-medium tracking-wide px-3 outline-none w-full"
            />
            <button 
                disabled={!prompt}
                className="p-2.5 rounded-full text-black bg-white disabled:bg-white/30"
            >
                <IoSend className="text-black/80" />
            </button>
        </form>
        <p className="text-xs mt-2 text-white/40 tracking-wide">
            Make sure to sign in to get accurate information according to your role.
        </p>
        {/* ModelSelection */}
    </div>
  )
}

export default ChatInput