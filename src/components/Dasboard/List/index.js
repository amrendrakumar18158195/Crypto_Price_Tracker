import React from "react";
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";

function List({coin})
{
    return (
        <Link to={`/coin/${coin.id}`}>
    <tr className="list-row">       
<Tooltip title="Coin logo">  
        <td className="info-flex td-image" >
            <img src={coin.image} className="coin-logo"/>
            </td>
 </Tooltip>

 <Tooltip title="Coin Info"  placement="bottom-start">
            <td>
            <div className="name-col" >
                <p className="coin-symbol"> {coin.symbol}</p>
                <p className="coin-name"> {coin.name}</p>
            </div>
        </td> 
</Tooltip>   

 <Tooltip title="Price Change in 24 hours" placement="bottom-start" >
        {coin.price_change_percentage_24h > 0 ?( 
        <td className="chip-flex">
            <div className="price-chip-green">
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon"> <TrendingUpRoundedIcon/></div>
        </td>        
    ):( 
            <td className="chip-flex">
            {/* <div className="price-chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div> */}

<div className="price-chip-red">
    {coin && typeof coin.price_change_percentage_24h === 'number'
        ? coin.price_change_percentage_24h.toFixed(2) + "%"
        : "N/A"}
</div>           
            <div className="icon-chip chip-red td-icon"> <TrendingDownRoundedIcon/>  </div>
        </td>
    )}
</Tooltip>

<Tooltip title="Current Price">
    <td>
        <h3
         className="coin-price td-center-align"
        style={{
            color:
            coin.price_change_percentage_24h<0
            ? "var(--red)"
            : "var(--green)"
        } }
        >
            {/* ${coin.current_price.toLocaleString()}</h3> */}
          
  {coin && typeof coin.current_price === 'number'
    ? `${coin.current_price.toLocaleString()}`
    : "N/A"}
</h3>


        </td>
</Tooltip>

<Tooltip title="Total Valume" >
        <td>
        {/* <p className="total-volume">{coin.total_volume.toLocaleString()} </p> */}
        <p className="total-volume">
    {coin && typeof coin.total_volume === 'number'
      ? coin.total_volume.toLocaleString()
      : "N/A"}
  </p>
        </td>
 
</Tooltip >       

<Tooltip title="Market Cap" placement="bottom-end" >
        <td className="desktop-td-mkt">
        {/* <p  className="total-marketcap"> ${coin.market_cap.toLocaleString()} </p> */}
        <p className="total-marketcap">
    {coin && typeof coin.market_cap === 'number'
      ? `$${coin.market_cap.toLocaleString()}`
      : "N/A"}
  </p>
        </td>
</Tooltip >


<Tooltip title="Market Cap" placement="bottom-end" >
        <td className="mobile-td-mkt">
        <p  className="total-marketcap" placement="bottom-end"> ${convertNumber(coin.market_cap)} </p>
        </td>
</Tooltip >
       
    </tr>
    </Link>
    );
}
export default List;


