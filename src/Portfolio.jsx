
import {Outlet, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./css/Portfolio.css"
import Modal from  "./components/Modal"
import { useGlobalContext } from './Context';
const Portfolio = () => {
    const {show} = useGlobalContext();
    return (
        <div className='container'>
            <Navbar className="navbar"/>
            {show && <Outlet/>}
        </div>
    )
}

export default Portfolio;