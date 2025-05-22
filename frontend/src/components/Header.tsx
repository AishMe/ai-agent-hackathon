import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex items-center justify-between m-2.5 h-10 absolute w-full top-0 left-0 pl-2 pr-12">
        <Link href={"/home"} className="flex items-center gap-1 bg-[#2f2f2f] hover:bg-black font-semibold tracking-wide px-3 py-2 rounded-lg duration-300">
            RR-AI
        </Link>
        <Link href={"/signin"} className="flex items-center gap-1 bg-[#2f2f2f] hover:bg-black font-semibold tracking-wide px-3 py-2 rounded-lg duration-300">
            Sign In
        </Link>
    </div>
  )
}

export default Header