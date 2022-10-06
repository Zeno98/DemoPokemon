import React from 'react'
import {ContextAllData} from '../../Context/ContextData'
import "./SinglePage.css"
import {Link} from "react-router-dom";

const SinglePage = ({data}) => {

    const {setModalId}=React.useContext(ContextAllData)

    const handleModal=(id)=>{
        setModalId(id)
    }

  return (
    <div className='singlePage'>
        {
            data ? data.map((ele)=>{
                return(
                    <div>
                        
                        
                        <Link to="/pokemon-info">
                        <img src={ele.sprites.front_default} alt=""
                        onClick={()=>{handleModal(ele.id)}}
                        />
                        </Link>
                       
                    
                    
                    <div className='pokemonId'>
                        <span># {ele.id}</span>
                    </div>

                    <div className='pokemonName'>
                    <span>{ele.name}</span>
                    </div>
    
                    </div>
                )
            }):"loading......."
        }
    </div>
    
  )
}

export default SinglePage