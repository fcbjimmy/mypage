import React, { useEffect, useState } from "react";
import navbarcss from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useWindowSize } from "../hooks/useWindowSize";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // ${navbarcss.links}
  const width = useWindowSize();
  console.log(width);

  useEffect(() => {
    if (width < 570 && isMobile) {
      setIsMobile(true);
    }
    if (width >= 570) {
      setIsMobile(false);
    }
  }, [width]);
  console.log({ isMobile });

  return (
    <div className={navbarcss.navbar}>
      <div className={navbarcss.leftside}>
        <div className={`${isMobile ? navbarcss.hidden : navbarcss.links}`}>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div className={navbarcss.icon}>
          <AiOutlineMenu onClick={() => setIsMobile(!isMobile)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
