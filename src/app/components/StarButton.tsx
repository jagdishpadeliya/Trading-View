import React from 'react'

const StarButton = () => {
    return (
        <div className='w-28 bg-slate-800 rounded-md overflow-hidden flex items-center'>
            <div className='w-1/2 bg-gray-500 px-2'>
                <span className='text-gray-200'>Star</span>
            </div>
            <span className='text-gray-200 text-sm px-2'>6,669</span>
        </div>
    )
}

export default StarButton