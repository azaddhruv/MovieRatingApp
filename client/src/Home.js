import React from 'react'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='header__search'>
          <SearchIcon className='search__icon' />
          <input className='search__input' type='search' />
        </div>
      </div>
      <div className='home__body'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
