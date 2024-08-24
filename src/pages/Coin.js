// UPPER WAALA CHATGPT KA HAI
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dasboard/List";
import CoinInfo from "../components/Coin/Coininfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../components/Coin/PriceType";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    if (newType !== null) {
      setIsLoading(true);
      setPriceType(newType);
      const prices = await getCoinPrices(id, days, newType);
      if (prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
            <LineChart chartData={chartData} priceType={priceType} />
            {/* <LineChart chartData={chartData} priceType={priceType} multiAxis={multiAxis}/> */}
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;


// llpp








// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../components/common/Header";
// import Loader from "../components/common/Loader";
// // import axios from "axios";
// import { coinObject } from "../functions/convertObject";
// import List from "../components/Dasboard/List";
// import CoinInfo from "../components/Coin/Coininfo";
// import { getCoinData } from "../functions/getCoinData";
// import { getCoinPrices } from "../functions/getCoinPrices";
// import LineChart from "../components/Coin/LineChart";
// import { convertDate } from "../functions/convertDate";
// import SelectDays from "../components/Coin/SelectDays";
// import { settingChartData } from "../functions/settingChartData";
// import PriceType from "../components/Coin/PriceType";
// // import params
// function CoinPage(){
//     const {id}=useParams();
//     // console.log(id);
// const [isLoading,setIsLoading]=useState(true);
// const [coinData,setCoinData]=useState();
// const [days,setDays]=useState(30);
// const [chartData,setCharData]=useState({});
// const [priceType, setPriceType] =useState('prices');
//    useEffect(() =>{
//     if(id){ 
//           getData();        
//     }
//    }, [id]);
//    async function getData(){ 
//     const data=await getCoinData(id);
//     if(data){
//         coinObject(setCoinData,data);
//         const prices =await getCoinPrices(id,days,priceType);
//         if(prices){
//             // console.log("WOHOOOO");

//             // setCharData({
//             //     labels: prices.map((price) =>convertDate(price[0])),
//             //     datasets: [
//             //       {
//             //         data: prices.map((price) =>(price[1])),
//             //         borderColor:"#3a80e9",
//                 //     // backgroundColor:"tranparent", 
//                 //     borderWidth: 2,
//                 //     fill:true,
//                 //     tension:0.5,
//                 //     backgroundColor:"rgba(58,128,233,0.1)",
//                 //     borderColor:"#3a80e9",
//                 //     poinRadius:0,

//                 //   },
//                 // ],
//                 // })     
//             settingChartData(setCharData,prices)           
//             setIsLoading(false);
//         }
//     }    
//    }

//    const handleDaysChange = async (event) => { 
//     setIsLoading(true);
//     setDays(event.target.value );
//     const prices =await getCoinPrices(id,event.target.value,priceType);
//     if(prices){
//         //  console.log("WOHOOOO");
//         settingChartData(setCharData,prices)      
//         setIsLoading(false);
//      }
//    };

//    const handlePriceTypeChange = async(event,newType) => {
//     setIsLoading(true); 
//     setPriceType(newType);
//     const prices =await getCoinPrices(id,days,newType);
//     if(prices){
//         settingChartData(setCharData,prices)      
//         setIsLoading(false);
//      }
//    };

//     return (
//         <div>
//             <Header/>
//             {isLoading ? (
//              <Loader/>  
//             ):(
//                 <>
//                 <div className="grey-wrapper">
//                 <List coin={coinData} />
//                 </div>
//                 <div className="grey-wrapper">
//                 <SelectDays Days={days} handleDaysChange={handleDaysChange}/>
//                 <PriceType
//               priceType={priceType}
//             handlePriceTypeChange={handlePriceTypeChange}
//             /> 
//                 <LineChart chartData={chartData} priceType={priceType}/>
//                 </div>

//                 <CoinInfo heading={coinData.name} desc={coinData.desc} />
                
//                  </>
//             )}
//         </div>
//     );
// }

// export default CoinPage;

// // ,l,ll





