import React from 'react'

// Components
import Searchbar from '../Components/Searchbar/Searchbar'
import Trending from '../Components/Trending/Trending'
import Recommended from '../Components/Recommended/Recommended'
function Home({ bookmark }) {
  return (
    <>
      <div>
        <Searchbar />
        <Trending bookmark={bookmark} />
        <Recommended />
      </div>
    </>
  )
}

export default Home
