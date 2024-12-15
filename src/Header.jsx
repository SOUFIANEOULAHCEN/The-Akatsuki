import React from 'react'
import { BiSearch } from 'react-icons/bi'
import "./App.css"



function Header() {
    return (
        <header className="w-full border-b border-transparent bar">
            <div className="container flex h-16 items-center justify-between">
                <button className="text-2xl font-bold tracking-wider text-white">
                    <img src="/LOGO.png" alt="" className='w-40'/>
                </button>
                <nav className="flex items-center gap-6">
                    <button
                        className="text-lg text-gray-300 hover:text-white"

                    >
                        About Us
                    </button>
                    <button
                        className="text-lg text-gray-300 hover:text-white"

                    >
                        Services
                    </button>
                    <button
                        className="text-lg border border-red-500 px-10 py-2 text-red-500 hover:bg-red-500 hover:text-white transition-colors"

                    >
                        Contact
                    </button>
                

                <button className="text-gray-300 hover:text-white">
                    <BiSearch className="h-5 w-5" />
                </button>
            </nav>
        </div>
  </header >
  )
}

export default Header
