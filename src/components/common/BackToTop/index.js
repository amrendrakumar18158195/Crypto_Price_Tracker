// 

import React, { useEffect } from "react";
import "./styles.css";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function BackToTop() {
  useEffect(() => {
    let mybutton = document.getElementById("myBtn");

    function scrollFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }

    window.onscroll = scrollFunction;

    // Cleanup the event listener on component unmount
    return () => {
      window.onscroll = null;
    };
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="back-to-top-btn" id="myBtn" onClick={topFunction}>
      <ArrowUpwardRoundedIcon style={{ color: "blue" }} />
    </div>
  );
}

export default BackToTop;
