import '../css/AnimatedLetter.css'
import {motion} from 'framer-motion'
const AnimatedLetters = ({idx,letterClass,strArray }) => {
    return (
        <span>
        {strArray.map((char, i) => (
          <span  className={`text-animated_${i}`}>
            {char}
          </span>
        ))}
      </span>
    )
}
export default AnimatedLetters;