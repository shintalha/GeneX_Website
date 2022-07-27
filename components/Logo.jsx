
import ReactTypingEffect from "react-typing-effect";
export const Logo = () => {
  return (
    <div className='logo'>
      <div id="logo">
        <ReactTypingEffect
          cursorRenderer={cursor => <h1>{cursor}</h1>}
          text={["GENEX  PROJECT"]}
          typingDelay={500}
        />
      </div>
    </div>
  )
}
