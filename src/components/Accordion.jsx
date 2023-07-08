import responsive from '../assets/images/certificates/responsive.jpg'
import dataStructures from '../assets/images/certificates/data_structures.jpg'
import backendApi from '../assets/images/certificates/backend_api.jpg'
import { useState } from 'react'
import '../css/accordion.css'
const cards = [
    
    {
      header: "Responsive Web Design",
      image: responsive,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {
      header: "Data Structures and Algorithms",
      image: dataStructures,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      header: "Backend development and APIs",
      image: backendApi,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ]
const Accordion = () => {
    const [active, setActive] = useState(0)
    const imageStyle = {
        position: "absolute",
        top:'50%',
        left:'50%',
        translate: "-50% -50%",
        height: "150%",
        filter: "grayscale(0.5)"

    }
    
    return (
        <section>
            {
                cards.map((card,index)=>{
                    return (
                        
                        <article
                            key={card.image}
                            className={
                                active == index ? 'active' : ''
                            }
                            onClick={()=>setActive(index)}
                        >
                            <img src={card.image}  />
                            <div style={{  color: "black" }} className='content'>
                                <div className="">
                                    <h2>{card.header}</h2>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </article>
                    )
                })
            }
            {/* {
                cards.map((card, index) => {
                    // <article
                    //     key={card.image}
                    //     className={
                    //         active === index
                    //         ? "active"
                    //         : ""
                    //     }
                    //     onClick={()=> setActive(index)}
                    // >
                    <div style={{ zIndex: "10000000" }}>
                        <img src={card.image} />
                        <div className="content">
                            <h2>{card.header}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>

                    // </article>
                })
            } */}
        </section>
    )
}

export default Accordion