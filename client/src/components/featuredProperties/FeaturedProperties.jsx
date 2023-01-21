import React from 'react'
import './featuredProperties.css';

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
        alt=''/>
        <span className='fpName'>
            Aparthotel Stare Miasto
        </span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
            <button>8.9</button>
            <span>Excellent</span>
        </div>


    </div>
  )
}

export default FeaturedProperties;