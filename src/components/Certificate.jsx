
import {useGlobalContext} from '../Context'

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from 'react'
import '../css/certiModal.css'

const Certificate = () => {

  const {isOpen,setIsOpen,toggleModal} = useGlobalContext();

  return (
    <div className="certificate">
      <a href='#'>👉  <strong style={{ color: '#212121' }} onClick={toggleModal}>My Certificates</strong></a>
    </div>
  )

}

export default Certificate