import {NavLink} from "react-router-dom"
import facebook from '../assets/facebook.svg'
import telegram from '../assets/telegram.svg'
import discord from '../assets/discord.svg'
import github from '../assets/github.svg'
import "../css/Navbar.css"
import laravelLogo from '../assets/laravel.svg'
import { useState } from "react"
import { useGlobalContext } from "../Context"
import { Spin as Hamburger } from 'hamburger-react'
import {motion} from 'framer-motion'

const Navbar = () => {
    const {show,setShow} = useGlobalContext();
    const handleMenu = () => {
        console.log('hi')
        setShow(!show)
    }
    console.log(show)
    return (
        <nav className="sidebar">
            <h3 style={{marginTop: "3rem", color: "white"}}>tyt</h3>
            
            <div className="nav-links">
                <NavLink to="/home" end>Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="social-icons">
                <img src={facebook}/>
                <img src={discord}/>
                <img src={telegram}/>
                <img src={github}/>
            </div>
            <div className="menu-container" >
                <h4 className="logo-text">TYT</h4>
                <Hamburger className="humburger" toggled={show} toggle={setShow} direction="left" color="#212121" size={40} rounded/>
            </div>
        </nav>
        
    )
}

export default Navbar;