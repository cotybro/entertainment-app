import React from 'react'
import searchImg from '../../assets/icon-search.svg'
import './Searchbar.css'

function Searchbar() {
  return (
    <div className='searchbar-container'>
      <img src={searchImg} alt='search' className='search-img' />
      <input
        type='text'
        name='search bar'
        className='searchbar'
        id='searchbar'
        placeholder='Search for movies or TV series'
      />
    </div>
  )
}

export default Searchbar
