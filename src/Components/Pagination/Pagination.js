import React from 'react'
import { ContextAllData } from '../../Context/ContextData'

const Pagination = () => {

    const {showPerPage,onPaginationChange}=React.useContext(ContextAllData);
    const [counter,setCounter]=React.useState(1);
    let totalItemCount=327;
    let rem=Math.ceil(totalItemCount/showPerPage)
    console.log("rem",rem);

    const buttonClick=(type)=>{
        if(type==="prev"){
            if(counter===1){
                setCounter(1)
            }
        else{
            setCounter(counter-1)
        }
    }
    else if(type==="next"){
        if(counter<rem){
            setCounter(counter+1)
        }
        else{
            setCounter(rem)
        }
        
    }
    }
    React.useEffect(()=>{
        const value=showPerPage * counter;
        console.log("start", value-showPerPage);
        console.log("end", value )

        onPaginationChange(value-showPerPage,value)

    },[counter])

  return (
    <div>
        <button className='btn btn-primary' onClick={()=>buttonClick("prev")}>Previous</button>
        <button className='btn btn-primary' onClick={()=>buttonClick("next")}>Next</button>
    </div>
  )
}

export default Pagination