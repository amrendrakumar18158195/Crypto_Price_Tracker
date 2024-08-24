import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import { color } from "framer-motion";
import SelectDays from "../components/Coin/SelectDays";
import { coinObject } from "../functions/convertObject";
import { settingChartData } from "../functions/settingChartData";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../components/common/Loader";
import List from "../components/Dasboard/List";
import CoinInfo from "../components/Coin/Coininfo";
import LineChart from "../components/Coin/LineChart";

function ComparePage(){
    const [crypto1, setCrypto1]=useState("bitcoin");
    const [crypto2, setCrypto2]=useState("ethereum");
    const [crypto1Data, setcrypto1Data]=useState({});
    const [crypto2Data, setcrypto2Data]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [days, setDays]=useState(30);
    const [priceType, setPriceType]=useState("prices");
    const [chartData, setChartData]=useState({});

    function handleDaysChange(event){
        setDays(event.target.value);
    }
    useEffect(()=>{
        getData();
    },[]);
    async function getData(){
        setIsLoading(true);
        const data1 = await getCoinData(crypto1);
        if (data1) {
          const data2 = await getCoinData(crypto2);
            coinObject(setcrypto1Data, data1);       
          if (data2) {
        coinObject(setcrypto2Data, data2);//1hai 
            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);
            settingChartData(setChartData, prices1,prices2);
           
            console.log("BOTH PRICES FETCH",prices1,prices2)
              setIsLoading(false);
            }
          }
    }
// "prices" ko priceType kiya usne
   const handleCoinChange =async(event,isCoin2) => {
       setIsLoading(true);
        if(isCoin2){
          setCrypto2(event.target.value);
        //   console.log("crypto2 id",event.target.value);
          const data = await getCoinData(event.target.value);     
            coinObject(setcrypto2Data, data);
            const prices1 = await getCoinPrices(crypto1, days,priceType);
           const prices2 = await getCoinPrices(crypto2, days,priceType);  
            if (prices1>0 && prices2>0) {  //prices.length>0  hai yaha
              //   settingChartData(setChartData, prices);
              console.log("BOTH PRICES FETCH",prices1,prices2)
                setIsLoading(false);
              }       
        }     
        else{
          setCrypto1(event.target.value);
          const data = await getCoinData(event.target.value);     
            coinObject(setcrypto1Data, data);
        } 
                
       };


    return (
        <div>
          <Header/>
        <p>hi AMRENDRA KUMAR kaise h </p>
        {/* {isLoading ? (   //ye blunder kr rha hai
        <Loader />
      ) : (
        <> */}

   <div className="coins-days-flex">        
        <SelectCoins
        crypto1={crypto1}
        crypto2={crypto2} 
        handleCoinChange={handleCoinChange}
        
        //  setCrypto1={setCrypto1} 
        //  setCrypto2={setCrypto2} 
        />
        <SelectDays days={days} handleDaysChange={handleDaysChange}
         noPTag={true}/>
        </div>   
        <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>

          <div className="grey-wrapper">      
            <LineChart chartData={chartData} priceType={"prices"} />
          </div>

          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        {/* </>
       )} */}
        </div>
        
    );
}
export default ComparePage;


