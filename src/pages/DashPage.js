import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/common/Header";
import TabsComponent from "../components/Dasboard/Tabs/index.js";
import Search from "../components/Dasboard/Search/index.js";

import PaginationComponent from "../components/Dasboard/PageComponent/index.js";
import Loader from "../components/common/Loader/index.js";
import BackToTop from "../components/common/BackToTop/index.js";
import { get100Coins } from "../functions/get100Coins.js";

function DashPage() {
const [coins,setCoins]=useState([]);
const [paginatedCoins,setpaginatedCoins]=useState([]);
const [search,setSearch]=useState("");
const [page, setPage] = useState(1);  //added by chatgpt
const [isLoading, setIsLoading] = useState(true);  



const handlePageChange=(event,value)=>{
    setPage(value);
    var previousIndex=(value-1)*10;
    setpaginatedCoins(coins.slice(previousIndex,previousIndex+10))
};

const onSearchChange=(e)=>{
    // console.log(e.target.value)
    setSearch(e.target.value);
};

 var filteredCoins=coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase() )||  item.symbol.toLowerCase().includes(search.toLowerCase())
 );

  useEffect(()=>{
    getData();
  }, []);
    
  const getData=async () => {
    const myCoins=await get100Coins();
    if(myCoins)   {
     setCoins(myCoins);
      setpaginatedCoins(myCoins.slice(0,10));
      setIsLoading(false);
       }
    };



return (
    <>
    <Header />
    <BackToTop/>
  {isLoading ?(
  <Loader/>
  ) :(
  <div>
        <Search Search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={search?filteredCoins:paginatedCoins}/> 
        {!search && (< PaginationComponent page={page} handlePageChange={handlePageChange}
        /> 
        )}           
    </div>
    )}
    </>
);
}


export default DashPage;

