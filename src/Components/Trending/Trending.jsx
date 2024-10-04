import React, { useRef } from 'react'
import './Trending.css'

// Images
import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../../assets/icon-bookmark-full.svg'
import movieCategory from '../../assets/icon-category-movie.svg'
import tvCategory from '../../assets/icon-category-tv.svg'

import dataInfo from '../../data.json'

function Trending({ bookmark }) {
  return (
    <div className='trending-wrapper'>
      {dataInfo.map((item) => {
        if (item.isTrending) {
          return (
            <div key={item.title} className='trending-item'>
              <div
                className='trending-container'
                style={{
                  backgroundImage: `url(${item.thumbnail.trending.small})`,
                }}
              >
                <div className='trending-info-container'>
                  <div
                    className='bookmark'
                    onClick={() => {
                      bookmark(item)
                    }}
                  >
                    <img
                      src={item.isBookmarked ? bookmarkFull : bookmarkEmpty}
                      alt={item.isBookmarked ? 'Bookmarked' : 'Not Bookmarked'}
                      className='bookmark-img'
                    />
                  </div>
                  <div className=''></div>
                  <div className='trending-info'>
                    <div className='trending-info-top'>
                      <p className='trending-info-text'>{item.year}</p>
                      <p className='trending-info-text'>&#x2022;</p>
                      <img
                        src={
                          item.category === 'Movie' ? movieCategory : tvCategory
                        }
                        alt={item.category === 'Movie' ? 'Movie' : 'Tv Series'}
                      />
                      <p className='trending-info-text'>
                        {item.category === 'Movie' ? 'Movie' : 'Tv Series'}
                      </p>
                      <p className='trending-info-text'>&#x2022;</p>
                      <p className='trending-info-text'>{item.rating}</p>
                    </div>
                    <div className='trending-info-bottom'>
                      <p className='trending-title'>{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default Trending
