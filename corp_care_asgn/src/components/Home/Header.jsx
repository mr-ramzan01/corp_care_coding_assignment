import React from 'react'
import '../../styles/Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='searchbox'>
          <div className='text'>
              <p>Hello, John</p>
              <img src="https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/512/12050-waving-hand-icon.png" alt="" />
          </div>
          <div className='search'></div>
          <div className='searchdiv'></div>
          <img src="/Images/searchIcon.svg" alt="" />
          <p className='searchP'>Search</p>
      </div>
      <div className='icons'>
          <img src="/Images/headerEmail.svg" alt="" />
          <img src="/Images/headerBox.svg" alt="" />
          <img id='user' src="/Images/headerUser.svg" alt="" />
      </div>
    </header>
  )
}
