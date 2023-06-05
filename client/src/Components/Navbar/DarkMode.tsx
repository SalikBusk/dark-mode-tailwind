import React, { useEffect, useState } from 'react'

const DarkMode = () => {
    const [theme, setTheme] = useState('light');

    useEffect (() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const handleThemeSwitcher = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  return (
    <div className='flex flex-row items-center gap-3'>
        <div className={`p-2 rounded-full cursor-pointer ${theme === 'dark' ? 'bg-[#fff]' : 'bg-[#333]'}`} onClick={handleThemeSwitcher}>
        </div>
        <span className='text-[#222] dark:text-[#f8f8f8]'>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </div>
  )
}

export default DarkMode