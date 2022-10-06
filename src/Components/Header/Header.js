import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-main-div'>
        <div className='header-content-div'>
        <li>
            <header className='heading-pokemon'>Pokemon</header>
        </li>
        <li>
            <input className='' type="search" placeholder='search pokemon.....' />
        </li>

        </div>
        
    </div>
  )
}

export default Header