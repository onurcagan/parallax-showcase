'use client'

import ParallaxHome from '@/components/ParallaxHome'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <div className='flex flex-col w-[100vw] h-[100vh]'>
      <header className='absolute top-0 flex flex-row justify-center w-full gap-2 mx-auto mt-8'>
        <button className='w-32 p-2 m-2 bg-red-900 rounded-md'>Home</button>
        <button className='w-32 p-2 m-2 bg-red-900 rounded-md'>About</button>
        <button className='w-32 p-2 m-2 bg-red-900 rounded-md'>Projects</button>
        <button className='w-32 p-2 m-2 bg-red-900 rounded-md'>Contact</button>
      </header>
      <main className='flex flex-col items-center justify-center w-full my-auto mt-4 text-center -z-10'>
        <ParallaxHome type={'car'} />
        <ParallaxHome type={'book'} />
        <ParallaxHome type={'hospital'} />
        <ParallaxHome type={'site'} />
        <ParallaxHome type={'farm'} />
        <motion.div className='fixed left-0 right-0 h-[5px] bottom-0 bg-white' style={{ scaleX }} />
      </main>
    </div>
  )
}
