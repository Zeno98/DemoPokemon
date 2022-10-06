import React from 'react';

export const ContextAllData=React.createContext();

const ContextData = ({children}) => {

    const[apiData,setApiData]=React.useState([]);
    const[modalId,setModalId]=React.useState();
    const[modalInfo,setModalInfo]=React.useState([]);

  
    // console.log(modalData)

  return (
   <ContextAllData.Provider value={{apiData,setApiData,modalId,setModalId,modalInfo,setModalInfo}}>
    {children}
   </ContextAllData.Provider>
  )
}

export default ContextData
