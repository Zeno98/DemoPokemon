import React from 'react'
import {ContextAllData} from '../../Context/ContextData'
import "./SinglePage.css"
import {Link} from "react-router-dom";

const SinglePage = ({data}) => {

    const {setModalId,pageNumber,showPerPage,search}=React.useContext(ContextAllData)

    console.log(showPerPage)

    const handleModal=(id)=>{
        setModalId(id)
    }

  return (
    <div className='singlePage'>
        <>
        {
  (

   search.length > 0 ?
     (
     <>
       {
         data && data.filter((ele) => {
           return ele.name.toLowerCase().includes(search.toLowerCase());
         }).map((ele) => {
           return (
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
         })
       }

     </>
     ):
     ( 
     <>
     {
        data ? data.slice(pageNumber.start,pageNumber.end).map((ele)=>{
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
                        })
       :"loading..."

     }
     </>
     ))
     }

       
        </>
    </div>
    
  )
}

export default SinglePage


















    