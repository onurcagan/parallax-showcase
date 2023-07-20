'use client'

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

interface IParallaxHome {
  type: string
}

const ParallaxHome = ({ type }: IParallaxHome) => {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
  }

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)
  return (
    <>
      {/* <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{ repeat: 3, delay: 2, duration: 1.5 }}
        className='rounded-full w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500'
      /> */}

      <section className='relative w-[100vw] h-[100vh] flex justify-center items-center'>
        <div ref={ref}>
          <Image
            alt={`Background img of ${type} type`}
            src={`https://source.unsplash.com/random/1920x1080/?${type}`}
            width={1920}
            height={1080}
            className='w-[90%] h-[90%]'
          />
        </div>
        <motion.h2 style={{ y }} className='text-red-500 text-7xl'>
          {`#${type.charAt(0).toUpperCase() + type.slice(1)}`}
        </motion.h2>
        <div className='absolute inset-0 bg-black opacity-40' />
      </section>
    </>
  )
}

export default ParallaxHome
