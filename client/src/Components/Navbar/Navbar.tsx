import React from 'react'
import Container from '../Container'
import DarkMode from './DarkMode'
import Logo from './Logo'
import Manu from './Manu'

const Navbar = () => {
  return (
    <div className='dark:bg-[#222] w-full z-10 bg-[#f8f8f8] sticky top-0 py-2 sm:py-2 md:py-0 transition-all duration-300 ease-in-out'>
        <Container>
            <div className={`flex flex-row items-center justify-between gap-3 md:gap-0`}>
                <DarkMode/>
                <Logo/>
                <Manu/>
            </div>
        </Container>
    </div>
  )
}

export default Navbar