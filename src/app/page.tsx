import Image from 'next/image'
import Header from './components/Header'
import { Aclonica, Yuji_Boku } from 'next/font/google'
import LinkButton from './components/LinkButton'
import SubHeading from './components/SubHeading'
import Features from './components/Features'
import SuperCompact from './components/SuperCompact'
import OpenSource from './components/OpenSource'
import StarButton from './components/StarButton'
import Pulse from './components/Pulse'
import { createChart, ColorType } from 'lightweight-charts'


const aclonica = Yuji_Boku({
  subsets: ["latin", 'cyrillic',],
  weight: ['400',]
})

const featuresData = [
  {
    title: 'Super compact',
    subtitle: 'HTML5 Canvas technology no larger than a standard GIF file.',
    img: true,
    video: false,
    imgSrc: <SuperCompact />,
    button: true,
    buttonText: 'Get library'
  },
  {
    title: 'Streaming updates for custom data',
    subtitle: 'Most recent data is displayed in real-time without having to reload the page.',
    img: false,
    video: true,
    imgSrc: '',
    button: false,
    buttonText: '',
    videoSrc: './streaming-updates.mp4'
  },
  {
    title: 'Open-source',
    subtitle: 'Maintained by TradingView. Hosted on GitHub. Licensed under the Apache License, Version 2.0. Contributions welcome!',
    img: true,
    video: false,
    imgSrc: <OpenSource />,
    button: true,
    buttonText: <StarButton />,
    videoSrc: ''
  },
  {
    title: 'Integrating any data is easy',
    subtitle: 'Built for developers, by developers. Feature-rich and easy to integrate Charts.',
    img: false,
    video: true,
    imgSrc: '',
    button: false,
    buttonText: '',
    videoSrc: './integrating-any-data.mp4'
  },
  {
    title: 'Interactive, responsive and mobile-friendly',
    subtitle: 'Charts are carefully engineered for best interactivity, both for powerful desktops with a mouse, and touch-optimized for tablets and phones.',
    img: true,
    video: false,
    imgSrc: <Pulse />,
    button: false,
    buttonText: '',
    videoSrc: ''
  },
  {
    title: 'High-performance',
    subtitle: 'Our charting solutions were engineered from the start to work with huge data arrays. Charts stay responsive and nimble even with thousands of bars even with updates multiple times per second with new ticks.',
    img: false,
    video: true,
    imgSrc: '',
    button: false,
    buttonText: '',
    videoSrc: './high-performance.mp4'
  },
  {
    title: 'Flexible styling',
    subtitle: 'Change the standard look & feel to match your style with perfection. There are many premade examples that you can copy & paste.',
    img: false,
    video: true,
    imgSrc: '',
    button: false,
    buttonText: '',
    videoSrc: './flexible-styling.mp4'
  }
]
export default function Home() {
  return (
    <main className='container'>
      <Header />
      <section className='pt-10'>
        <div className='flex flex-col items-center'>
          <p className='text-7xl sm:text-8xl md:text-9xl font-bold'>Lightweight</p>
          <p className='text-7xl sm:text-8xl md:text-9xl font-bold mt-2'>Charts
            <sup className='text-4xl sm:text-5xl md:text-6xl font-bold'>TM</sup>
          </p>
          <p className={`mt-5 text-2xl text-zinc-200 ${aclonica.className}`}>Stunning usability at just 45 kB</p>
        </div>
        <div className='flex justify-center gap-5 mt-10'>
          <LinkButton title='Github' subtitle='Get the library' />
          <LinkButton title='Documentation' subtitle='Start the integration' />
        </div>
        <div className='mt-10'>
          <video autoPlay loop>
            <source src={"./lightweight-charts-video.mp4"} />
          </video>
        </div>
        <div className='mt-32'>
          <SubHeading title='Free, open-source and feature-rich'
            subtitle='Your dream of tiny, yet mighty, interactive charts is now a reality.'
          />
          <div className='grid grid-cols-2 gap-10 mt-10'>
            {
              featuresData.map((feature, index) => {
                return (
                  <Features key={index} {...feature} />
                )
              })
            }

          </div>
        </div>
        {/* <ChartComponent /> */}
      </section>
    </main>
  )
}
