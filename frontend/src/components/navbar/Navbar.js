import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/font/lexend.css' // Font family
import '../../styles/Navbar/navbar.css' // Navbar css

const Navbar = ({ isLoggedIn, setIsLoggedIn, user, setUser }) => {
  const navigate = useNavigate()

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleLoginButtonClick = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    setUser('')
    localStorage.removeItem('token');
    setIsLoggedIn(false);

  };

  return (
    <nav className='border_all fixed flex z-20 top-0 right-0'>
      {/* NAV LIST */}
      {isNavOpen && (
        <div className='w-[300px] bg-primary text-2xl px-12 py-16 lexend-medium'>
          <ul className='flex flex-col gap-2'>
            <li><Link to='/' className='list_hover'>Home</Link></li>
            <li><Link to='/events' className='list_hover'>Events</Link></li>
            <li><Link className='list_hover'>Activities</Link></li>
            <li><Link to='/animals' className='list_hover'>Animals</Link></li>
            <li><Link className='list_hover'>Eat & Drink</Link></li>
          </ul>
        </div>
      )}

      {/* Side Navbar */}
      <div className='border_left pt-5 w-20 min-h-screen bg-primary flex flex-col justify-between'>
        {/* Top section */}
        <section className='flex flex-col items-center justify-between w-auto h-96'>
          <button className='mb-4' onClick={handleOpen}>

            {isNavOpen ?
              (<svg width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              ) : (<svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>)
            }

          </button>
          {/* Link to buy ticket */}
          <Link to='/booking' className='lexend-bold h-max w-max text-5xl  transform rotate-90 inline-block text-black'>
            ORDER TICKET NOW
          </Link>
        </section>

        {/* BUTTONS */}
        <section className='border_top'>
          {isLoggedIn ?
            ( // Logout button
              <button className='w-20 h-20 lexend-bold login_button' onClick={() => handleLogout()}>Logout, {user}</button>
            ) : ( // Login button
              <button className='w-20 h-20 lexend-bold login_button' onClick={() => handleLoginButtonClick()}>Login</button>
            )
          }
        </section>
      </div>
    </nav>
  )
}

export default Navbar