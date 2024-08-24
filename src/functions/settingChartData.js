// import { convertDate } from "./convertDate";

// export const settingChartData = (setCharData, prices1, prices2) => {
//   // Check if prices1 is an array and is not undefined
//   if (!Array.isArray(prices1)) {
//     console.error('prices1 is not an array or is undefined:', prices1);
//     return;
//   }

//   // Log prices1 and prices2 for debugging purposes
//   console.log('prices1:', prices1);
//   console.log('prices2:', prices2);

//   const labels = prices1.map((price) => convertDate(price[0]));

//   if (Array.isArray(prices2)) {
//     setCharData({
//       labels: labels,
//       datasets: [
//         {
//           data: prices1.map((price) => price[1]),
//           borderColor: "#3a80e9",
//           borderWidth: 2,
//           fill: false,
//           tension: 0.5,
//           pointRadius: 0,
//         },
//         {
//           data: prices2.map((price) => price[1]),
//           borderColor: "#61c96f",
//           borderWidth: 2,
//           fill: false,
//           tension: 0.5,
//           pointRadius: 0,
//         },
//       ],
//     });
//   } else {
//     setCharData({
//       labels: labels,
//       datasets: [
//         {
//           data: prices1.map((price) => price[1]),
//           borderColor: "#3a80e9",
//           borderWidth: 2,
//           fill: true,
//           tension: 0.5,
//           backgroundColor: "rgba(58,128,233,0.1)",
//           pointRadius: 0,
//         },
//       ],
//     });
//   }
// };






// import { convertDate } from "./convertDate";
// export const  = (setCharData, prices) => {
//   if (prices && Array.isArray(prices)) {
//     setCharData({
//       labels: prices.map((price) => convertDate(price[0])),
//       datasets: [
//         {
//           data: prices.map((price) => price[1]),
//           borderColor: "#3a80e9",
//           borderWidth: 2,
//           fill: true,
//           tension: 0.5,
//           backgroundColor: "rgba(58,128,233,0.1)",
//           pointRadius: 0,
//         },
//       ],
//     });
//   } else {
//     console.error('Prices is not an array or is undefined');
//   }
// };












import { convertDate } from "./convertDate";

export const settingChartData = (setCharData, prices1, prices2) => {
  // Ensure prices1 is defined and is an array
  if (!Array.isArray(prices1) || prices1.length === 0) {
    console.error("Invalid data for prices1:", prices1);
    return;
  }

  // If prices2 is provided, ensure it's also an array
  if (prices2 && (!Array.isArray(prices2) || prices2.length === 0)) {
    console.error("Invalid data for prices2:", prices2);
    return;
  }

  // Set chart data based on whether prices2 is provided
  if (prices2) {
    setCharData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: false,
          tension: 0.5,
          pointRadius: 0,
        },
        {
          data: prices2.map((price) => price[1]),
          borderColor: "#61c96f",
          borderWidth: 2,
          fill: false,
          tension: 0.5,
          pointRadius: 0,
        },
      ],
    });
  } else {
    setCharData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.5,
          backgroundColor: "rgba(58,128,233,0.1)",
          pointRadius: 0,
        },
      ],
    });
  }
};
