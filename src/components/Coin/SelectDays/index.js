
// this code is taken from  code file  google
import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className="select-days" style={{ marginBottom: noPTag && "0" }}>
      {!noPTag && <p>Price change in </p>}
      <Select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
















// import * as React from 'react';
// import { useState } from 'react';
// // import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import "./styles.css";

// export default function SelectDays({days: initialDays,handleDaysChange}) 
// // initialDays  delete
// {
//   const [days, setDays] =useState(initialDays);

//   const handleChange = (event) => {
//     setDays(event.target.value );
//   };

//   return (
//     <div className='select-days'>
//         <p>Price Change in</p>
     
//         <InputLabel id="demo-simple-select-label"></InputLabel>
//         <Select
//          sx={{
//             height: "2.5rem",
//             color: "var(--white)",
//             "& .MuiOutlinedInput-notchedOutline": {
//               borderColor: "var(--white)",
//             },
//             "& .MuiSvgIcon-root": {
//               color: "var(--white)",
//             },
//             "&:hover": {
//               "&& fieldset": {
//                 borderColor: "#3a80e9",
//               },
//             },
//           }}

//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={days}
//           label="Days"
//           onChange={handleDaysChange}
//         >
//           <MenuItem value={1}>1 Day</MenuItem>
//           <MenuItem value={7}>7 Days</MenuItem>
//           <MenuItem value={30}>1 Month</MenuItem>
//           <MenuItem value={60}>2 Month</MenuItem>
//           <MenuItem value={120}>4 Months</MenuItem>
//           <MenuItem value={365}>1 year</MenuItem>
         
//         </Select>
    
//     </div>
//   );
// }
