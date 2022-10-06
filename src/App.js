import React from "react";
import './App.css';
import axios from 'axios';
import {ContextAllData} from './Context/ContextData';
import SinglePage from "./Components/SinglePage/SinglePage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Modal from "./Components/Modal/Modal";
import Header from "./Components/Header/Header";
import Pagination from "./Components/Pagination/Pagination";
function App() {

  const{apiData,setApiData,modalId,showPerPage}=React.useContext(ContextAllData);

  const apiCall=async ()=>{
   
    const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=327&offset=0`) //api call
  

   ImageUrl(data.results); // passing the initial data fetch from th api
   
  }

  const ImageUrl=(res)=>{
    res.map(async(ele)=>{
      const {data}=await axios.get(ele.url);

      setApiData(resData=>{   // storing url of particular pokemon
       return [...resData,data]
      
      })
    })
  }



  React.useEffect(()=>{
    apiCall();  // calling the apiCall method
  },[])
  return (
    <div className="App">
      <Header/>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<SinglePage data={apiData}/>}/>  
        {/* to display all pokemons */}
       <Route path="/pokemon-info" element={<Modal id={modalId}/>}/>
       {/* to display details of particular pokemon */}
       </Routes>
       
    </BrowserRouter>
    <Pagination/>
    </div>
  );
}

export default App;
