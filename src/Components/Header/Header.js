import React from 'react'
import "./Header.css"
import { ContextAllData } from '../../Context/ContextData'

const Header = () => {

    const{search,setSearch,handleSearch}=React.useContext(ContextAllData);

  return (
    <div className='header-main-div'>
        <div className='header-content-div'>
        <li>
            <header className='heading-pokemon'>Pokemon</header>
        </li>
        <li>
            <input className='search-bar' type="search" placeholder='search pokemon.....'
            onChange={(e)=>{handleSearch(e.target.value)}} />
        </li>

        </div>
        
    </div>
  )
}

export default Header