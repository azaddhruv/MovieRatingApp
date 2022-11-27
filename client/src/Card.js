import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='card'>
      <div className='card__cover__left'></div>
      <div className='card__cover__right'></div>
      <img
        className='card__img'
        src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg'
        alt=''
      />
      <div className='card__content'>
        <h3 className='card__title'>Name of Movie</h3>
        <p className='card__rating'>4.2</p>
      </div>
    </div>
  )
}

export default Card
