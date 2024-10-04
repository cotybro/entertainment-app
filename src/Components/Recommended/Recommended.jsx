import React from 'react'
import './Recommended.css'
import data from '../../data.json'

// Images
import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../../assets/icon-bookmark-full.svg'
import movieCategory from '../../assets/icon-category-movie.svg'
import tvCategory from '../../assets/icon-category-tv.svg'

function Recommended() {
  return (
    <div className='recommended'>
      <p className='recommended-title'>Recommended for you</p>

      <div className='recommended-wrapper'>
        {data.map((item) => {
          if (!item.isTrending) {
            return (
              <div key={item.title} className='recommended-item'>
                <div
                  className='recommended-container'
                  style={{
                    backgroundImage: `url(${item.thumbnail.regular.small})`,
                  }}
                >
                  <div className='recommended-info-container'>
                    <div className='bookmark'>
                      <img
                        src={item.isBookmarked ? bookmarkFull : bookmarkEmpty}
                        alt={
                          item.isBookmarked ? 'Bookmarked' : 'Not Bookmarked'
                        }
                        className='bookmark-img'
                      />
                    </div>
                  </div>
                </div>
                <div className='recommended-info'>
                  <div className='recommended-info-top'>
                    <p className='recommended-info-text'>{item.year}</p>
                    <p className='recommended-info-text'>&#x2022;</p>
                    <img
                      src={
                        item.category === 'Movie' ? movieCategory : tvCategory
                      }
                      alt={item.category === 'Movie' ? 'Movie' : 'Tv Series'}
                    />
                    <p className='recommended-info-text'>
                      {item.category === 'Movie' ? 'Movie' : 'Tv Series'}
                    </p>
                    <p className='recommended-info-text'>&#x2022;</p>
                    <p className='recommended-info-text'>{item.rating}</p>
                  </div>
                  <div className='recommended-info-bottom'>
                    <p className='recommended-info-title'>{item.title}</p>
                  </div>
                </div>
              </div>
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default Recommended
