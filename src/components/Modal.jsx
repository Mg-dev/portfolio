
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
            <svg className='cancel' onClick={handleCancel} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" fill='white' width={65} strokeMiterlimit={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>    
            <ul className='modal-links'>
                <li onClick={handleHomeClick}>Home</li>
                <li onClick={handleAboutClick}>About</li>
                <li onClick={handleContactClick}>Contact</li>
            </ul>
        </div>
    )
}

export default Modal;