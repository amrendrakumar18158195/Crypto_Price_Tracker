

// this is my+ chatgpt/'/'
import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { color } from "framer-motion";
// import { SmakeStyles } from '@material-ui/core';
import "./styles.css"
function SelectCoins({crypto1,crypto2,handleCoinChange}){
  const [allCoins, setAllCoins]=useState([]);
// important  not working
   const styles={    
        height: "2.5rem",
        color: "var(--white) !important",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white) !important" ,
        } ,
        "& .MuiSvgIcon-root": {
          color: "var(--white) !important",
          color: "var(--green) important",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a8011 important ",           
          },
        },      
   };    

   useEffect ( () => {
    getData ();
   },[])

   async function  getData() {
    const myCoins=await get100Coins(); 
    setAllCoins(myCoins);  
   }

return (
  <div className="coins-flex"> 
      <p>Crypto 1</p>
      <Select
          sx={styles}
          value={crypto1}
          label="Crypto 1"
          onChange={(event) => handleCoinChange(event, false)}
      >
          {allCoins && allCoins.length > 0 ? (
              allCoins.filter((item)=> item.id!=crypto2).map((coin,i) => (
                  <MenuItem value={coin.id} key={i}>
                      {coin.name}
                  </MenuItem>
              ))
          ) : (
              <MenuItem disabled>Loading...</MenuItem>
          )}
      </Select>

      <p>Crypto 2</p>
      <Select
          sx={styles}
          value={crypto2}
          label="Crypto 2"
          onChange={(event) => handleCoinChange(event, true)}
      >
          {allCoins && allCoins.length > 0 ? (
              allCoins.filter((item)=> item.id!=crypto1).map((coin,i) => (   //yaha key nahi add kiye h
                  <MenuItem  value={coin.id} key={i}>
                      {coin.name}
                  </MenuItem>
              ))
          ) : (
              <MenuItem disabled>Loading...</MenuItem>
          )}
      </Select>
  </div>
);
}

export default SelectCoins;
















//  //  my code hai ye
// import React, { useEffect, useState } from "react";
// import { get100Coins } from "../../../functions/get100Coins";
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { color } from "framer-motion";
// // import { SmakeStyles } from '@material-ui/core';
// import "./styles.css"
// function SelectCoins(){
//   const [allCoins, setAllCoins]=useState([]);
//    const [crypto1, setCrypto1]=useState("bitcoin");
//    const [crypto2, setCrypto2]=useState("ethereum");

// // important  not working
//    const styles={    
//         height: "2.5rem",
//         color: "var(--white) !important",
//         "& .MuiOutlinedInput-notchedOutline": {
//           borderColor: "var(--white) !important" ,
//         } ,
//         "& .MuiSvgIcon-root": {
//           color: "var(--white) !important",
//           color: "var(--green) important",
//         },
//         "&:hover": {
//           "&& fieldset": {
//             borderColor: "#3a8011 important ",           
//           },
//         },      
//    };
//     const handleCoinChange =(event,isCoin2) => {
//     if(isCoin2){
//       setCrypto2(event.target.value);
//       console.log("crypto2 id",event.target.value);
//     }  else{
//       setCrypto1(event.target.value);
      
//       console.log("crypto1 id",event.target.value);
//     }
    
//    };
   

//    useEffect ( () => {
//     getData ();
//    },[])

//    async function  getData() {
//     const myCoins=await get100Coins(); 
//     setAllCoins(myCoins);  
//    }

//    return (
   
//    <div className="coins-flex"> 
//     <p>Crypto 1</p>
//      <Select
//          sx={styles} value={crypto1} label="Crypto 1"
//          onChange={(event)=>handleCoinChange(event,false)}
//         >
//          {allCoins.map((coin)=> <MenuItem value={coin.id}>{coin.name}</MenuItem>)}         
//         </Select>

//         <p>Crypto 2</p>
//      <Select
//          sx={styles} value={crypto2} label="Crypto 2"
//           onChange={(event)=>handleCoinChange(event,true)}
//         >
//          {allCoins.map((coin)=> <MenuItem value={coin.id}>{coin.name}</MenuItem>)}         
//         </Select>

//     </div>
//     );
// }
// export default SelectCoins;

