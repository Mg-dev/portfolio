import myFoto from "../assets/Foto.png"
import laravelLogo from '../assets/laravel.svg'
import '../css/About.css'
import {motion} from 'framer-motion'
const About = () => {
    const skills = [
        "Html/css"
        ,"JavaScript"
        ,"Php"
        ,"MySQL"
        ,"Laravel"
        ,"React"
        ,"Figma"
        ,"Github"
    ];
    const image = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          ease: "easeIn",
          transition: {
            duration: 2,
          },
          scale: 1
        }
      }
    return (
        <div className="about">
            <div className="text-container">
                <motion.div animate={{opacity:1}} className="sub-text-container">
                    <h3>
                        Education Background
                    </h3>
                    <p>
                    I'm a final year Electronic Engineering Student, have about one year of web development field and have been coding some laravel experience on real world projects with team and now I am ready to build modern Web Pages and Web App for clients.
                    </p>
                </motion.div>
                <div className="sub-text-container-reverse">
                    <h3>
                        Experience
                    </h3>
                    <p>
                    Actually,I am a final year Electronics Engineering student but after two years of self-study in web development through resources like freecodecamp
                    and have been working as a volunteer in a local tech organization, I am now confident in my abilities to work on projects as a freelancer. I have developed a deep understanding of Laravel, a popular PHP framework for building back-end web applications, and have gained significant experience building complex and scalable applications using it. Additionally, my studies in React have given me a strong foundation in building dynamic user interfaces. With this knowledge and experience, I am confident in my ability to take on new and exciting projects as a freelancer and deliver high-quality work to my clients.
                    </p>
                </div>
                <div className="sub-text-container">
                    <h3>
                        Skills
                    </h3>
                    <ul>
                        {
                            skills.map((skill)=><li>{skill}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="about-img-container">
                <img class="laravelLogo" src={laravelLogo}/>
                <motion.img variants={image} initial="hidden" animate="show"  class="myFoto" src={myFoto}/>
            </div>
        </div>
    )
}

export default About;