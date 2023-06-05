import React from 'react'
import useHamburgerSidebar from '../../Hooks/useHamburgerSidebar'

const Manu = () => {
  const Menu = useHamburgerSidebar();
  return (
    <div onClick={Menu.onOpen} className='text-[#222] dark:text-[#f8f8f8] cursor-pointer'>
        Menu
    </div>
  )
}

export default Manu