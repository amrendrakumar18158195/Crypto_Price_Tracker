
// me hai ye  jarue  type agin at neart 7.18
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Scale, scales } from "chart.js/auto"; // Don't get rid of this
import { convertNumber } from "../../../functions/convertNumber";

// Default options for the chart
const defaultOptions = (priceType, multiAxis) => ({
  plugins: {
    legend: {
      display: multiAxis ? true : false,
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: {
      ticks: {
        callback: function(value) {
          if (priceType === "prices") return "$" + value.toLocaleString();
          else return "$" + convertNumber(value);
        },
      },
    },
  },
});

function LineChart({ chartData, priceType, multiAxis }) {
  // Ensure chartData is defined and has the necessary structure
  if (!chartData || !chartData.labels || !chartData.datasets) {
    return <p>No data available</p>; // Render a fallback UI or return null
  }

  // Generate chart options based on props
  const options = defaultOptions(priceType, multiAxis);

  return <Line data={chartData} options={options} />;
}

export default LineChart;








    //  my code hai ye
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, Scale, scales } from "chart.js/auto"; //Dont get rid of this
// import { convertNumber } from "../../../functions/convertNumber";

// function LineChart({chartData,priceType, multiAxis }) {
 
//   const options = {
//     plugins: {
//       legend: {
//         display: multiAxis ? true : false,
//       },
//     },
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     scales: {
//       y: {
//         ticks:{
//         callback: function(value,index,ticks){
//           if(priceType=="prices")return "$" + value.toLocaleString();
//           else {
//             return "$" + convertNumber(value);

//           }
//         },
//       },
//     },
//   },
  
//   };


//     // scales: {
//     //   crypto1: {
//     //     position: "left",
//     //   },
//     //   crypto2: multiAxis && {
//     //     position: "right",
//     //   },
  

//   return <Line data={chartData} options={options} />;
// }

// export default LineChart;












// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, Scale, scales } from "chart.js/auto"; //Dont get rid of this
// import { convertNumber } from "../../../functions/convertNumber";

// function LineChart({ chartData, priceType, multiAxis }) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if chartData is valid before proceeding
//     if (chartData && chartData.labels && chartData.datasets) {
//       setIsLoading(false);
//     }
//   }, [chartData]);


//   const options = {
//     plugins: {
//       legend: {
//         display: multiAxis ? true : false,
//       },
//     },
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     scales: {
//       y: {
//         ticks:{
//         callback: function(value,index,ticks){
//           if(priceType=="prices")return "$" + value.toLocaleString();
//           else {
//             return "$" + convertNumber(value);

//           }
//         },
//       },
//     },
//   },
  
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading chart...</p>
//       ) : (
//         <Line data={chartData} options={options} />
//       )}
//     </div>
//   );
// }

// export default LineChart;

