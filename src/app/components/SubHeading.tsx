import React from 'react'

type SubHeadingProps = {
    title: string,
    subtitle: string
}

const SubHeading = ({ title, subtitle }: SubHeadingProps) => {
    return (
        <div className='flex flex-col items-center'>
            <span className='block text-6xl font-bold text-center'>
                {title}
            </span>
            <p className='mt-5 text-2xl text-gray-300'>{subtitle}</p>
        </div>
    )
}

export default SubHeading