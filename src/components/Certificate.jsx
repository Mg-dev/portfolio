
import {useGlobalContext} from '../Context'

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from 'react'
import '../css/certiModal.css'

const Certificate = () => {

  const {isOpen,setIsOpen,toggleModal} = useGlobalContext();

  return (
    <div className="certificate">
      <a href='#'>👉  <strong style={{animation:"glow 2500ms linear infinite 2000ms", color: "#212121"}} onClick={toggleModal}>My Certificates</strong></a>
    </div>
  )

}

export default Certificate