import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://www.linkedin.com/in/ryan-hatamosa/'
        target='_blank'
        rel='noreferrer'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href='https://github.com/PinoyColada'
        target='_blank'
        rel='noreferrer'>
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href='https://leetcode.com/hatamosa/'
        target='_blank'
        rel='noreferrer'>
        <div>
          <SiLeetcode />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
