import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
const Header = () => {
    return (
        <div className='py-3 flex justify-between items-center'>
            {/* menu icon */}
            <svg width="36" height="28" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg"><path d="M14 22H7V11H0V4h14v18zM28 22h-8l7.5-18h8L28 22z" fill="currentColor"></path><circle cx="20" cy="8" r="4" fill="currentColor"></circle></svg>
            <div className='flex flex-1 justify-center items-center'>
                {/* SearchBar */}
                <div className='rounded-xl flex items-center bg-gray-600 px-2'>
                    <BsSearch className="text-lg mr-1 text-gray-300" />
                    <input
                        type="text"
                        className='rounded-full px-1 py-1.5 bg-gray-600 outline-none text-gray-300'
                        placeholder='Search(Ctrl+k)' />
                </div>
                <ul className='flex'>
                    <li className='mx-4 font-semibold'>Products</li>
                    <li className='mx-4 font-semibold'>Community</li>
                    <li className='mx-4 font-semibold'>Markets</li>
                    <li className='mx-4 font-semibold'>News</li>
                    <li className='mx-4 font-semibold'>Brokers</li>
                    <li className='font-semibold text-blue-500'>More</li>
                </ul>
            </div>
            <CiUser className="mr-4 text-2xl"/>
            <div className='bg-gradient-to-r from-sky-400 via-blue-400 to-fuchsia-600 rounded-md rounded-ee-3xl px-3 py-1'>
                <span>Get Started</span>
            </div>
        </div>

    )
}

export default Header