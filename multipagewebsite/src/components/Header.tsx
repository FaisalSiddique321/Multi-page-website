import React from 'react'
import Link from 'next/link'



const Header = () => {
  return (
   <header className='header'>
    <h1 className='logo'>Glasses Shop</h1>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/glasses">Glasses</Link>
        <Link href="/contact">Contact</Link>
        
    </nav>
   </header>
  )
}

export default Header
