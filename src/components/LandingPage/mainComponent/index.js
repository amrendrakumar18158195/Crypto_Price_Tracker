import React from "react";
import "./style.css"
import Button from "../../common/Button";
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"

import {motion} from "framer-motion"



function MainComponent(){
    return (
    <div className="flex-info">
        <div className="left-component">
            <motion.h1 className="track-crypto-heading"
            initial={{opacity:0,scale:0}}        
            animate={{opacity:1,scale:1}}        
            transition={{duration:1}}        
            >
             Track Crypto
             </motion.h1>
            <motion.h1 className="real-time-heading"
               initial={{opacity:0,scale:0,x:50}}        
               animate={{opacity:1,scale:1,x:0}}        
               transition={{duration:1,delay:0.5}} 
               >
                Real Time </motion.h1>
            <motion.p className="info-text"
               initial={{opacity:0,scale:0,x:50}}        
               animate={{opacity:1,scale:1,x:5}}        
               transition={{duration:1,delay:1}} 
               >
                Track crypto through a publick api in real time.Visite the dashboard to do so!</motion.p>

            <motion.div className="btn-flex"
             initial={{opacity:0,scale:0,x:50}}        
             animate={{opacity:1,scale:1,x:0}}        
             transition={{duration:1,delay:1.5}} 
             >
                <Button text={"Dashboard"}/>
                <Button text={"Share"} outlined={true}/>
            </motion.div>
        </div>


        <div className="phone-container"> 
            <motion.img src={iphone} className="iphone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
              />            
            <img src={gradient} className="gradient"/>        

        </div>


    </div>
    );
}

export default MainComponent;


