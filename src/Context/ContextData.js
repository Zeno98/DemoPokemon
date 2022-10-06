import React from 'react';

export const ContextAllData=React.createContext();

const ContextData = ({children}) => {

    const[search,setSearch]=React.useState("");
    const[apiData,setApiData]=React.useState([]);
    const[modalId,setModalId]=React.useState();
    const[modalInfo,setModalInfo]=React.useState([]);
    const[showPerPage,setShowPerPage]=React.useState(20)
    const[pageNumber,setPageNumber]=React.useState({
      start:0,
      end:showPerPage
    });

  const onPaginationChange=(start,end)=>{ // to set start and end page number
    setPageNumber({
      start:start,
      end:end
    })

  }

  const handleSearch=(searchValue)=>{  //to store text from search bar in search variable for finding particular pokemon
    setSearch(searchValue);
  }

  return (
   <ContextAllData.Provider value={{apiData,setApiData,modalId,setModalId,modalInfo,setModalInfo,pageNumber,setPageNumber,showPerPage,onPaginationChange,search,setSearch,handleSearch}}>
    {children}
   </ContextAllData.Provider>
  )
}

export default ContextData
