import React from 'react'
import { ContextAllData } from '../../Context/ContextData'
import "./SinglePage.css"
import { Link } from "react-router-dom";

const SinglePage = ({ data }) => {

  const { setModalId, pageNumber, showPerPage, search } = React.useContext(ContextAllData)

  const handleModal = (id) => {
    setModalId(id)
  }

  return (
    <div className='singlePage row'>
      <>
        {
          (

            search.length > 0 ? // checking search text if text length is greater than 0 then  data && data.filter will run 
              (
                <>
                  {
                    data && data.filter((ele) => {
                      return ele.name.toLowerCase().includes(search.toLowerCase());
                    }).map((ele) => {
                      return (
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pokemon-item" >
                          <div>
                            <Link to="/pokemon-info">
                              <img src={ele.sprites.front_default} alt=""
                              />
                            </Link>

                            <div className='pokemonName'>
                              <span>{ele.name}</span>
                            </div>

                            <div className="pokemonId">
                              {ele.id.toString().length == 1 ? (
                                <span>#00{ele.id}</span>
                              ) : (
                                <span>
                                  {ele.id.toString().length == 2 ? (
                                    <span>#0{ele.id}</span>
                                  ) : (
                                    <span>#{ele.id}</span>
                                  )}
                                </span>
                              )}
                            </div>


                          </div>

                        </div>
                      )
                    })
                  }

                </>
              ) :
              (
                <>
                  { // when page load then this code runs
                    data ? data.slice(pageNumber.start, pageNumber.end).map((ele) => {
                      return (
                      
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pokemon-item"  >
                        <Link to="/pokemon-info" onClick={() => { handleModal(ele.id) }}>
                          <div>
                          
                            <img src={ele.sprites.front_default} alt=""
                              
                            />
                          

                          <div className='pokemonName'>
                              <span>{ele.name}</span>
                            </div>

                            <div className="pokemonId">
                              {ele.id.toString().length == 1 ? (
                                <span>#00{ele.id}</span>
                              ) : (
                                <span>
                                  {ele.id.toString().length == 2 ? (
                                    <span>#0{ele.id}</span>
                                  ) : (
                                    <span>#{ele.id}</span>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                          </Link>
                        </div>
                        
                      )
                    })
                      : "loading..."

                  }
                </>
              ))
        }


      </>
    </div>

  )
}

export default SinglePage


















// onClick={() => { handleModal(ele.id) }}