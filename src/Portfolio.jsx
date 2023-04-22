
import {Outlet, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar';
import "./css/Portfolio.css"
import Modal from  "./components/Modal"
import { useGlobalContext } from './Context';
const Portfolio = () => {
    const {show} = useGlobalContext();
    return (
        <div className='container'>
            <Navbar className="navbar"/>
            <Outlet/>
        </div>
    )
}

export default Portfolio;