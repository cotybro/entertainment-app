import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import tvIcon from '../../assets/icon-nav-tv-series.svg'
import movieIcon from '../../assets/icon-nav-movies.svg'
import homeIcon from '../../assets/icon-nav-home.svg'
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg'
import avatar from '../../assets/image-avatar.png'
function Navbar({ page, setPage }) {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <Link to='/'>
          <img
            src={logoImg}
            alt='logo'
            className='logo-img'
            onClick={() => setPage('home')}
          />
        </Link>
      </div>
      <div className='navbar-center'>
        <ul>
          <li>
            <Link to='/'>
              <img
                src={homeIcon}
                alt='home'
                className={page === 'home' ? 'active' : ''}
                onClick={() => setPage('home')}
              />
            </Link>
          </li>
          <li>
            <Link to='/movies'>
              <img
                src={movieIcon}
                alt='movies'
                className={page === 'movies' ? 'active' : ''}
                onClick={() => setPage('movies')}
              />
            </Link>
          </li>
          <li>
            <Link to='/tv'>
              <img
                src={tvIcon}
                alt='tv'
                className={page === 'tv' ? 'active' : ''}
                onClick={() => setPage('tv')}
              />
            </Link>
          </li>
          <li>
            <Link to='/bookmarks'>
              <img
                src={bookmarkIcon}
                alt='bookmark'
                className={page === 'bookmarks' ? 'active' : ''}
                onClick={() => setPage('bookmarks')}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={avatar} alt='avatar' className='avatar-img' />
      </div>
    </div>
  )
}

export default Navbar
