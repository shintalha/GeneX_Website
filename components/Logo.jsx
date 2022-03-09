import {ReactChild, useEffect} from 'react'
import ReactTypingEffect from 'react-typing-effect';



export const Logo = () => {
  return (
    <div className='logo'>
      <div id="logo">
      <ReactTypingEffect
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            text={["THE \n GENEX \n PROJECT"]}
            
            
            typingDelay={500}
          />
      
      </div>
    </div>
  )
}
