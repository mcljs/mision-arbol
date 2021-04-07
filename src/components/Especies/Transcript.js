import * as React from 'react'
import {css} from 'styled-components'

function Transcript({children}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <div
        css={css({
          maxHeight: isOpen ? '100%' : 270,
          overflow: 'hidden',
          position: 'relative',
          zIndex: 5,
        })}
      >
        <div>{children}</div>
       
      </div>
      <button className="flex sm:items-center justify-between  justify-center pt-6 text-green-800  py-2.5 px-5 rounded-md focus:outline-none hover:underline-lg mx-auto "
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
     
      >
        {isOpen ? <>Ver Menos Texto <svg class="ml-1" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7z" fill="currentColor"></path></g></svg></> : <>Expandir Texto <svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11a1 1 0 1 0-2 0v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7z" fill="currentColor"></path></g></svg></>}  
      </button>
    </>
  )
}

export default Transcript
