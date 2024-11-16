import React, { useEffect, useRef } from "react";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import './styles.css';  // Import your CSS file

function BackToTop() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        if (buttonRef.current) {
          buttonRef.current.style.display = "flex";  // Show button
        }
      } else {
        if (buttonRef.current) {
          buttonRef.current.style.display = "none";  // Hide button
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
  };

  return (
    <div
      ref={buttonRef}
      className="back-to-top-btn"  // Use your CSS class
      style={{ display: "none" }}  // Hidden initially
      onClick={scrollToTop}
    >
      <ExpandLessRoundedIcon />
    </div>
  );
}

export default BackToTop;
