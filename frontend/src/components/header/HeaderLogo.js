import React from 'react'
import Logo from './Logo'
import '../../styles/font/lexend.css'

const HeaderLogo = () => {
  return (
    <header className='w-fit h-fit flex items-center justify-center mx-12 py-5 pl-8'>
      <Logo/>
      <h1 className=' ml-2 lexend-bold text-2xl text-white'>Archipelago Website</h1>
    </header>
  )
}

export default HeaderLogo