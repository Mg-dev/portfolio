import "../css/Home.css"
import myFoto from "../assets/Foto.png"
import laravelLogo from '../assets/laravel.svg'
import { useEffect,useRef } from "react"
import {motion} from "framer-motion"
import AnimatedLetters from '../components/AnimatedLetters'
const Home = () => {
    const nameArray = ["I'","m"," ","t","y","t","."];
    const greeting = ["Hello!"];
    console.log(AnimatedLetters)
    
    const downloadPdf = () => {
        fetch('portfolio.pdf').then(response => {
                response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'portfolio.pdf';
                alink.click();
            })
        })
    }
    const image = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,   
          scale: 1.2
        }
      }
      
      
    return (
        <div className="home">
            <div className="text-container">
                <div>
                <h3 className="welcome-text"><AnimatedLetters 
                    strArray={greeting}
                    /><br/> 
                    <AnimatedLetters 
                    strArray={nameArray}
                    />
                </h3>
                <h4>A  freelance  backend  Dev</h4>
                <p className="fake-text">what can I do for you? ;)</p>
                <h5>Download my CV - <a href="#" onClick={downloadPdf}><u style={{animation:"glow 2500ms linear infinite 2000ms"}}>click here!</u></a></h5>
                </div>
            </div>
            <div className="home-img-container">
            
            <img className="laravelLogo" src={laravelLogo}/>
            <motion.img      
            variants={image}
            initial="hidden"
            transition={{ ease: "easeOut", duration: 2 }}
            animate="show" className="myFoto" src={myFoto}/>
            </div>
            <div className="under-myFoto">
                <p className="fake-text">what can I do for you? ;)</p>
                <h5 className="download">Download my CV - <a href="#" onClick={downloadPdf}><u style={{animation:"glow 2500ms linear infinite 2000ms"}}>click here!</u></a></h5>
            </div>
        </div>
    )
}

export default Home;