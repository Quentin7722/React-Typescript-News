import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="button" style={{ display: visible ? "inline" : "none" }}>
      <FaArrowCircleUp onClick={scrollToTop} className="icon-arrow" />
    </div>
  );
};

export default ScrollButton;
