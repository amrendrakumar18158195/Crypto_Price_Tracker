
//  code is my code
import axios from "axios";

export const getCoinData= (id) =>{
    const myData= axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)

    .then((response) => {
 return response.data;           
      })
  
  .catch((error) => {
      console.log("ERROR>>>>>",error);
      
    });
    return myData;
}








// // chatgpt
// import axios from "axios";

// export const getCoinData = (id) => {
//   const myData = axios
//     .get(`/api/v3/coins/${id}`)  // Use relative path
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log("ERROR>>>>>", error);
//     });
//   return myData;
// };





