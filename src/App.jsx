import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './app.css'
import dataBase from './data.json'
// Components
import Navbar from './Components/Navbar/Navbar'

// Pages
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Tv from './Pages/Tv'
import Bookmarks from './Pages/Bookmarks'

function App() {
  const [page, setPage] = useState('home')
  const [data, setData] = useState(dataBase)

  function bookmark(itemId) {
    setData((prevState) => {
      const newData = prevState.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            isBookmarked: !item.isBookmarked,
          }
        }
        return item
      })
      return newData
    })
  }

  return (
    <div className='app-container'>
      <Navbar page={page} setPage={setPage} />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home bookmark={bookmark} />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
