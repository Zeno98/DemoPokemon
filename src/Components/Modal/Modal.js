import axios from 'axios'
import React from 'react'
import { ContextAllData } from '../../Context/ContextData'

const Modal = ({id}) => {
    console.log(id)

    const {modalInfo,setModalInfo}=React.useContext(ContextAllData);

    const modalCall=async()=>{
        const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        setModalInfo([data])
        
    }

    React.useEffect(()=>{
        modalCall();

    },[id])

  return (
    <div> 
        {
            modalInfo ? modalInfo.map((ele)=>{
                return(
                    <>
                    <img src={ele.sprites.front_default}/>
                    <p>height {ele.height}</p>
                    <p>weight {ele.weight}</p>
                    {
                        ele.stats.map((item)=>{
                           <p>{item.stat.name}</p>
                        })

                    }
                    
                    

                    </>
                )
            }):"loading....."
        }
    </div>
  )
}

export default Modal