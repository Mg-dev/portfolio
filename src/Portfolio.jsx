
import {Outlet, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./css/Portfolio.css"
const paths= [
    {
        name: "home",
        value: 1
    },
    {
        name: "about",
        value: 2
    },
    {
        name: "projects",
        value: 3
    },
    {
        name: "contact",
        value: 4
    },
    
]
const Portfolio = () => {
    
    return (
        <div className='container'>
            <Navbar className="navbar"/>
                    
                    <Outlet/>
                    
               
            {/* <Footer /> */}
        </div>
    )
}

export default Portfolio;