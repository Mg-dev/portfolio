
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context'
import '../css/Modal.css'
const Modal = () => {
    const navigate = useNavigate()
    const {handleCancel,setShow} = useGlobalContext();
    const handleHomeClick = () => {
        setShow(false)
        navigate('/home')
    }
    const handleAboutClick = () => {
        setShow(false)
        navigate('/about')
    }
    const handleContactClick = () => {
        setShow(false)
        navigate('/contact')
    }
    return (
        <div className='modal-container'>
             
            <ul className='modal-links'>
                <li onClick={handleHomeClick}>Home</li>
                <li onClick={handleAboutClick}>About</li>
                <li onClick={handleContactClick}>Contact</li>
            </ul>
        </div>
    )
}

export default Modal;