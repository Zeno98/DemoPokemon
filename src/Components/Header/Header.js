import React from 'react'
import "./Header.css"
import { ContextAllData } from '../../Context/ContextData'

const Header = () => {

    const{search,setSearch,handleSearch}=React.useContext(ContextAllData);

  return (
    <div className='header-main-div'>
        <div className='header-content-div'>
        <div>
            <header className='heading-pokemon'>Pokemon</header>
        </div>
        <div>
            <input className='search-bar' type="search" placeholder='search pokemon.....'
            onChange={(e)=>{handleSearch(e.target.value)}} />
        </div>

        </div>
        
    </div>
  )
}

export default Header