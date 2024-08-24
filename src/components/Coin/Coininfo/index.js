
// CHATGPT CODE
import React, { useState } from "react";
import "./styles.css";

function CoinInfo({ heading, desc }) {
  // Safe handling of desc
  const shortDesc = (typeof desc === 'string' && desc.length > 0)
    ? desc.slice(0, 350) + "<p style='color: var(--grey)'> Read More... </p>"
    : "Description not available";

  const longDesc = (typeof desc === 'string' && desc.length > 0)
    ? desc + "<p style='color: var(--grey)'> Read Less... </p>"
    : "Description not available";

  const [flag, setFlag] = useState(false);

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">
        {typeof heading === 'string' && heading.length > 0 ? heading : "Default Heading"}
      </h2>

      <p
        onClick={() => setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{
          __html: (typeof desc === 'string' && desc.length > 200)
            ? (flag ? longDesc : shortDesc)
            : (typeof desc === 'string' ? desc : "Description not available")
        }}
      />
    </div>
  );
}

export default CoinInfo;









// ljnljnlnkmkm


// MY CODE
// import React, { useState } from "react";
// import "./styles.css"
// function CoinInfo({heading,desc}){
// //     const shortDesc=desc.slice(0,350)+ "<p style=' color:var(--grey)'> Read More... </p>"
// const shortDesc = (typeof desc === 'string' && desc)
//   ? desc.slice(0, 350) + "<p style='color: var(--grey)'> Read More... </p>"
//   : "Description not available";

//     const longDesc=desc+ "<p style=' color:var(--grey)'>  Read Less... </p>"

//     const [flag,setFlag]=useState(false);

//     return (
  //       <div className="grey-wrapper">
 //  <h2 className="coin-info-heading">{heading} <h2>  
  

        
//    {desc.length>200  ? <p 
//     onClick={()=> setFlag(!flag)}
//     className="coin-info-desc" dangerouslySetInnerHTML={{__html:!flag ?shortDesc : longDesc}}/> : <p   dangerouslySetInnerHTML={{__html:desc}}/> }

//      </div>);
// }

// export default CoinInfo;

