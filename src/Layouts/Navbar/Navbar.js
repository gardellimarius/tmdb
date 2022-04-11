import React from 'react'
import Genres from '../../Components/Genres/Genres'
import './Navbar.scss'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function Navbar () {

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })

  const toggle = () => {
    document.querySelector('.navbar-mobile .genres').classList.toggle('show')
  }
  return (
    <>
      { isDesktop &&
        <div className='navbar-desktop'>
          <Link to={'/'}> <div className='home'></div> </Link>
          <Genres />
        </div>
      }
      { isMobile &&
        <div className='navbar-mobile'>
          <div className='nav-mobile-mb'>
            <Link to={'/'}>  <div className='home'></div> </Link>
            <div className='button-genres' onClick={toggle}></div>
          </div>
          <Genres />
        </div>
      }
    </>
  )
}

export default Navbar;
