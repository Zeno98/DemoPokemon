import React from 'react'
import { ContextAllData } from '../../Context/ContextData'
import "./SinglePage.css"
import { Link } from "react-router-dom";

const SinglePage = ({ data }) => {

  const { setModalId, pageNumber, showPerPage, search } = React.useContext(ContextAllData)

  console.log(showPerPage)

  const handleModal = (id) => {
    setModalId(id)
  }

  return (
    <div className='singlePage row'>
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
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pokemon-item">
                          <div>
                            <Link to="/pokemon-info">
                              <img src={ele.sprites.front_default} alt=""
                                onClick={() => { handleModal(ele.id) }}
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
                  {
                    data ? data.slice(pageNumber.start, pageNumber.end).map((ele) => {
                      return (
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pokemon-item">

                          <div>
                          <Link to="/pokemon-info">
                            <img src={ele.sprites.front_default} alt=""
                              onClick={() => { handleModal(ele.id) }}
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


















