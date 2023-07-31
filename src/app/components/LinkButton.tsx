import React from 'react'

type LinkButtonProps = {
    title: string,
    subtitle: string
}

const LinkButton = ({ title, subtitle }: LinkButtonProps) => {
    return (
        <div className='w-60 border rounded-lg border-gray-600 hover:bg-gray-900'>
            <div className='flex flex-col px-3 py-2'>
                <span
                    className='font-semibold text-lg bg-gradient-to-r from-cyan-300 from-5% via-purple-800 via-15% to-blue-500 to-30% text-transparent bg-clip-text'
                >
                    {title}
                </span>
                <span className='font-medium'>{subtitle}</span>
            </div>
        </div>
    )
}

export default LinkButton