import map from '../assets/map.jpg'
import laravelLogo from '../assets/laravel.svg'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'
import '../css/Contact.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
const Contact = () => {
    return (
        <div className="contact">
            {/* <motion.img className="laravelLogo" src={laravelLogo} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}/> */}

    {/* laravel logo */}
            <div>
                <motion.svg className='laravelLogo' width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg" whileHover={{ scale: 1.4}}>
                <path d="M0.358665 10V6.36364H1.0174V9.4478H2.61896V10H0.358665ZM1.11506 20.055C0.942235 20.055 0.786577 20.0243 0.648082 19.9627C0.510772 19.9 0.40187 19.8076 0.321378 19.6857C0.242069 19.5638 0.202415 19.4135 0.202415 19.2347C0.202415 19.0808 0.230824 18.9536 0.287642 18.853C0.34446 18.7524 0.421993 18.6719 0.520241 18.6115C0.61849 18.5511 0.729167 18.5056 0.852273 18.4748C0.976563 18.4428 1.105 18.4197 1.23757 18.4055C1.39737 18.389 1.52699 18.3742 1.62642 18.3612C1.72585 18.3469 1.79806 18.3256 1.84304 18.2972C1.8892 18.2676 1.91229 18.2221 1.91229 18.1605V18.1499C1.91229 18.0161 1.87263 17.9125 1.79332 17.8391C1.71402 17.7657 1.59979 17.729 1.45064 17.729C1.29321 17.729 1.16832 17.7634 1.07599 17.832C0.984849 17.9007 0.923295 17.9818 0.891335 18.0753L0.291193 17.9901C0.338542 17.8243 0.416667 17.6858 0.525568 17.5746C0.63447 17.4621 0.767637 17.3781 0.925071 17.3224C1.0825 17.2656 1.25651 17.2372 1.44709 17.2372C1.57848 17.2372 1.70928 17.2526 1.83949 17.2834C1.9697 17.3142 2.08866 17.3651 2.19638 17.4361C2.3041 17.5059 2.39051 17.6012 2.45561 17.7219C2.5219 17.8427 2.55504 17.9936 2.55504 18.1747V20H1.93714V19.6254H1.91584C1.87678 19.7011 1.82173 19.7721 1.75071 19.8384C1.68087 19.9035 1.59268 19.9562 1.48615 19.9964C1.3808 20.0355 1.2571 20.055 1.11506 20.055ZM1.28196 19.5827C1.41098 19.5827 1.52285 19.5573 1.61754 19.5064C1.71224 19.4543 1.78504 19.3857 1.83594 19.3004C1.88802 19.2152 1.91406 19.1223 1.91406 19.0217V18.7003C1.89394 18.7169 1.85961 18.7322 1.81108 18.7464C1.76373 18.7607 1.71046 18.7731 1.65128 18.7837C1.59209 18.7944 1.5335 18.8039 1.4755 18.8121C1.4175 18.8204 1.36719 18.8275 1.32457 18.8335C1.22869 18.8465 1.14287 18.8678 1.06712 18.8974C0.991359 18.927 0.931581 18.9684 0.887784 19.0217C0.843987 19.0737 0.822088 19.1412 0.822088 19.2241C0.822088 19.3424 0.865294 19.4318 0.951705 19.4922C1.03812 19.5526 1.1482 19.5827 1.28196 19.5827ZM0.330256 30V27.2727H0.95348V27.7273H0.981889C1.03161 27.5698 1.11683 27.4485 1.23757 27.3633C1.35949 27.2769 1.49858 27.2337 1.65483 27.2337C1.69034 27.2337 1.73 27.2354 1.77379 27.239C1.81877 27.2414 1.85606 27.2455 1.88565 27.2514V27.8427C1.85843 27.8332 1.81522 27.8249 1.75604 27.8178C1.69804 27.8095 1.64181 27.8054 1.58736 27.8054C1.47017 27.8054 1.36482 27.8308 1.27131 27.8817C1.17898 27.9315 1.10618 28.0007 1.05291 28.0895C0.999645 28.1783 0.973011 28.2807 0.973011 28.3967V30H0.330256ZM1.11506 40.055C0.942235 40.055 0.786577 40.0243 0.648082 39.9627C0.510772 39.9 0.40187 39.8076 0.321378 39.6857C0.242069 39.5638 0.202415 39.4135 0.202415 39.2347C0.202415 39.0808 0.230824 38.9536 0.287642 38.853C0.34446 38.7524 0.421993 38.6719 0.520241 38.6115C0.61849 38.5511 0.729167 38.5056 0.852273 38.4748C0.976563 38.4428 1.105 38.4197 1.23757 38.4055C1.39737 38.389 1.52699 38.3742 1.62642 38.3612C1.72585 38.3469 1.79806 38.3256 1.84304 38.2972C1.8892 38.2676 1.91229 38.2221 1.91229 38.1605V38.1499C1.91229 38.0161 1.87263 37.9125 1.79332 37.8391C1.71402 37.7657 1.59979 37.729 1.45064 37.729C1.29321 37.729 1.16832 37.7634 1.07599 37.832C0.984849 37.9007 0.923295 37.9818 0.891335 38.0753L0.291193 37.9901C0.338542 37.8243 0.416667 37.6858 0.525568 37.5746C0.63447 37.4621 0.767637 37.3781 0.925071 37.3224C1.0825 37.2656 1.25651 37.2372 1.44709 37.2372C1.57848 37.2372 1.70928 37.2526 1.83949 37.2834C1.9697 37.3142 2.08866 37.3651 2.19638 37.4361C2.3041 37.5059 2.39051 37.6012 2.45561 37.7219C2.5219 37.8427 2.55504 37.9936 2.55504 38.1747V40H1.93714V39.6254H1.91584C1.87678 39.7011 1.82173 39.7721 1.75071 39.8384C1.68087 39.9035 1.59268 39.9562 1.48615 39.9964C1.3808 40.0355 1.2571 40.055 1.11506 40.055ZM1.28196 39.5827C1.41098 39.5827 1.52285 39.5573 1.61754 39.5064C1.71224 39.4543 1.78504 39.3857 1.83594 39.3004C1.88802 39.2152 1.91406 39.1223 1.91406 39.0217V38.7003C1.89394 38.7169 1.85961 38.7322 1.81108 38.7464C1.76373 38.7607 1.71046 38.7731 1.65128 38.7837C1.59209 38.7944 1.5335 38.8039 1.4755 38.8121C1.4175 38.8204 1.36719 38.8275 1.32457 38.8335C1.22869 38.8465 1.14287 38.8678 1.06712 38.8974C0.991359 38.927 0.931581 38.9684 0.887784 39.0217C0.843987 39.0737 0.822088 39.1412 0.822088 39.2241C0.822088 39.3424 0.865294 39.4318 0.951705 39.4922C1.03812 39.5526 1.1482 39.5827 1.28196 39.5827ZM10.5398 37.2727L9.56854 40H8.85831L7.88707 37.2727H8.57244L9.19922 39.2987H9.22763L9.85618 37.2727H10.5398ZM17.0992 40.0533C16.8257 40.0533 16.5896 39.9964 16.3907 39.8828C16.193 39.768 16.0409 39.6058 15.9344 39.3963C15.8279 39.1856 15.7746 38.9376 15.7746 38.6523C15.7746 38.3718 15.8279 38.1256 15.9344 37.9137C16.0421 37.7006 16.1924 37.5349 16.3854 37.4165C16.5783 37.297 16.805 37.2372 17.0654 37.2372C17.2335 37.2372 17.3921 37.2644 17.5413 37.3189C17.6916 37.3722 17.8242 37.455 17.939 37.5675C18.055 37.6799 18.1462 37.8232 18.2124 37.9972C18.2787 38.17 18.3119 38.3759 18.3119 38.6151V38.8121H16.0764V38.3789H17.6958C17.6946 38.2558 17.6679 38.1463 17.6159 38.0504C17.5638 37.9534 17.491 37.877 17.3975 37.8214C17.3051 37.7657 17.1974 37.7379 17.0743 37.7379C16.9429 37.7379 16.8275 37.7699 16.7281 37.8338C16.6286 37.8965 16.5511 37.9794 16.4955 38.0824C16.441 38.1842 16.4132 38.296 16.412 38.418V38.7962C16.412 38.9548 16.441 39.0909 16.499 39.2045C16.557 39.317 16.6381 39.4034 16.7423 39.4638C16.8464 39.523 16.9684 39.5526 17.108 39.5526C17.2016 39.5526 17.2862 39.5395 17.3619 39.5135C17.4377 39.4863 17.5034 39.4466 17.559 39.3945C17.6147 39.3424 17.6567 39.2779 17.6851 39.201L18.2852 39.2685C18.2474 39.4271 18.1752 39.5656 18.0686 39.6839C17.9633 39.8011 17.8283 39.8923 17.6638 39.9574C17.4993 40.0213 17.311 40.0533 17.0992 40.0533ZM24.4984 36.3636V40H23.8556V36.3636H24.4984Z" fill="black"/>
                <motion.g animate={{opacity:1,rotate:[-90,90, 0], rotateType: "mirror", repeat: 1}} whileHover={{rotate: 360,rotateType: "reverse", repeat:1}} transform={{}} clip-path="url(#clip0_34_165)" style={{textShadow:"1px 1px 1px red"}}
            whileTap={{ scale: 0.9 }}>
                <motion.rect x="4.14966" y="3.14935" width="33" height="29" rx="8" fill="#F90000" />
                <path d="M13.8625 8.51868L19.818 19.9274L13.6833 22.0919L10.3683 9.75158L13.8625 8.51868Z" fill="black"/>
                <path d="M26.2618 27.2298L23.1312 21.2326L30.454 18.6488L33.2462 22.8717L26.2618 27.2298Z" fill="black"/>
                <path d="M32.8374 15.3335L31.3957 15.8422L30.1543 13.9643L31.4929 13.6047L32.8374 15.3335Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1527 6.74753C4.06837 3.52698 6.61078 0.847833 9.83134 0.7635L33.1567 0.152704C36.3772 0.0683716 39.0564 2.61079 39.1407 5.83134L39.7515 29.1567C39.8358 32.3772 37.2934 35.0564 34.0729 35.1407L10.7475 35.7515C7.52698 35.8359 4.84783 33.2934 4.76349 30.0729L4.1527 6.74753ZM15.363 6.59905C15.0899 6.08672 14.4816 5.8532 13.9358 6.05116L8.48565 8.02783C7.91256 8.23568 7.59609 8.84975 7.75939 9.43708L11.8087 24.0028C11.8958 24.3159 12.1095 24.5785 12.3983 24.7274C12.6872 24.8762 13.0251 24.8979 13.3305 24.787L20.9438 22.0258L24.8762 29.4013C25.0291 29.6881 25.2946 29.898 25.6089 29.9808C25.9232 30.0633 26.2577 30.0112 26.5319 29.8369L35.5514 24.0987C35.817 23.9297 36.003 23.6606 36.0673 23.3526C36.1316 23.0445 36.0685 22.7235 35.8927 22.4625L32.7206 17.7545L35.131 16.8803C35.4836 16.7524 35.7531 16.4629 35.8555 16.1022C35.9581 15.7414 35.8807 15.3534 35.648 15.0593L32.8029 11.4659C32.5115 11.0979 32.0279 10.9404 31.5759 11.0661L27.9343 12.0784C27.573 12.1789 27.282 12.4469 27.1522 12.7987C27.0225 13.1506 27.0697 13.5434 27.2793 13.8544L29.1158 16.5799L22.0507 19.1423L15.363 6.59905Z" fill="black"/>
                </motion.g>
                <defs>
                <clipPath id="clip0_34_165">
                <rect width="35" height="35" fill="white" transform="translate(4 0.61084) rotate(-1)"/>
                </clipPath>
                </defs>
                </motion.svg>
            </div>
            <div className='map-container'>
                {/* <motion.img animate={{ scale:[1, 1.1, 1] }} initial="false"
  transition={{ ease: "easeOut", duration: 2 }} className="map" src={map} /> */}
                <LazyLoadImage src={map} effect='opacity' animate={{ scale:[1, 1.1, 1] }} initial="false"
  transition={{ ease: "easeOut", duration: 2 }} className="map"/>
                <div className='map-text'>
                    <motion.h4 
                        animate={{ y:[-100,0] }}
                        transition={{ ease: "easeOut", duration: 2 }}
                     className='where-head'>Where?</motion.h4>
                    <motion.p
                    animate={{ x:[100,0] }}
                    transition={{ ease: "easeOut", duration: 2 }}
                     className='where-text'>Lorem imotion.psum dolor sit amet, consectetur adipiscing elit. Integer non condimentum mauris.</motion.p>
                </div>
            </div>
            <div className='message-container'>
                <h4 className='message-header'>mes<br/>sage<br/>me</h4>
                <div className='message-form'>
                    <form >
                        <div className='input-container'>
                            <input name='message-name' placeholder='Gimme ur name'/>
                        </div>
                        <div  className='input-container'>
                            <input name='message-email' placeholder='email'/>
                        </div>
                        <div  className='input-container'>
                            <input name='message-description' placeholder='write here'/>
                        </div>
                        <motion.div animate={{x:[-100,0], opacity: 1}}transition={{ ease: "easeOut", duration: 1 }} className='btn-container go'>
                            <h3>Go</h3><button className='btn' onClick={(e)=>{e.preventDefault()}}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" ><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></button>
                        </motion.div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;