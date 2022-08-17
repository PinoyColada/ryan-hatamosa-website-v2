import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

import './Header.scss'

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        className='app__header-intro'
        whileInView={{ opacity: [0, 1], delay: 0.5, staggerChildren: 0.5 }}
        transition={{ delay: 0.5, staggerChildren: 0.5 }}>
        <motion.h2>Hey! I'm <span>Ryan</span>, a full-stack web developer</motion.h2>
        <motion.p>
          From front-end to back-end, my expertise knows no limits. Once a computer engineer
          major, I founded out about coding, and thus submerged myself in the world of programming. 

        </motion.p>
        <motion.p>
          Graduating from Prince George's Community College, I have learned to 
          design algorithms to solve complex mathematical or scientific problems 
          and utilize object-oriented methodology to write efficient code. Onwards, 
          I've graduated from General Assembly's Software Immersive Bootcamp which consisted of
          420+ hours of learning the fundamentals of front-end and back-end web development.
          I am now pursuing on obtaining my Bachelor's degree at University Of Maryland.
        </motion.p>
        <motion.p>
          As a result of these experiences, I had the opportunity to work with a
          variety of developers and teams across several time zones. This has
          allowed me to develop a working style that emphasizes flexibility,
          clarity, and collaboration. Alongside that, my background in management allows
          me to improve my communication and leadership skills to make me an efficient team player.
          </motion.p>
        <motion.p>
          I'm currently looking for a position. You should hire me.
        </motion.p>

        <div className='app__header-cards'>
          <a
            href='https://www.linkedin.com/in/ryan-hatamosa/'
            target='_blank'
            rel='noreferrer'
            className='p-text'>
            <motion.div
              className='app__header-card-linkedin'
              whileHover={{
                scale: 0.98,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 100 }}>
              View Linkedin
            </motion.div>
          </a>
          <a
            href='https://github.com/PinoyColada'
            target='_blank'
            rel='noreferrer'
            className='p-text'>
            <motion.div
              className='app__header-card-github'
              whileHover={{
                scale: 0.98,
                transition: { type: 'spring', stiffness: 150, damping: 10 },
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 100 }}>
              View Github
            </motion.div>
          </a>
        </div>
      </motion.div>
      <motion.div className='app__header-img' whileInView={{ opacity: [0, 1] }}>
        <motion.img
          className='profile-pic'
          src={images.profile}
          alt='my profile'
          style={{ boxShadow: ' 0 0 25px rgba(0, 0, 0, 0.4)' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        />
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
