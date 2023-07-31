import React from 'react'
import SuperCompact from './SuperCompact'

type FeaturesProps = {
    title: string,
    subtitle: string,
    img: boolean,
    video: boolean,
    imgSrc?: string | JSX.Element,
    button: boolean,
    buttonText: string | JSX.Element,
    videoSrc?: string
}

const Features = ({ title, subtitle, img, video, imgSrc, button, buttonText, videoSrc }: FeaturesProps) => {
    return (
        <div className='w-full border rounded-3xl h-[28rem] p-6'>
            <div className='w-full h-44 flex justify-center'>
                {
                    img && imgSrc
                }
                {
                    video && <video autoPlay loop className='h-full w-10/12'>
                        <source src={videoSrc} />
                    </video>

                }
            </div>
            <span className='text-3xl font-bold mt-10 inline-block'>{title}</span>
            <p className='text-lg my-5'>
                {subtitle}
            </p>
            {
                button && buttonText
            }
        </div>
    )
}

export default Features