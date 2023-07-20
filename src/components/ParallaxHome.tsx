'use client'
import { motion } from 'framer-motion'
import React from 'react'

const ParallaxHome = () => {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{ repeat: 3, delay: 2, duration: 1.5 }}
        className='rounded-full w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500'
      />
    </>
  )
}

export default ParallaxHome
