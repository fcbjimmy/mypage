import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarcss from "./Navbar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useWindowSize } from "../hooks/useWindowSize";
import ThemeContext from "../context/ThemeContext";
import logo from "../assets/Jc.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowSize();
  const { contactClass } = useContext(ThemeContext);

  useEffect(() => {
    if (width <= 570 && isMobile) {
      setIsMobile(true);
    }
    if (width > 570) {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className={contactClass ? navbarcss.transparent : navbarcss.navbar}>
      <Link to="/">
        <img src={logo} alt="logo" className={navbarcss.logo} />
      </Link>
      <div className={navbarcss.rightside}>
        <div
          className={`${
            isMobile
              ? contactClass
                ? navbarcss.trans
                : navbarcss.hidden
              : navbarcss.links
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={navbarcss.icon}>
        {isMobile ? (
          <AiOutlineClose
            className={navbarcss.burgermenu}
            size="1.6rem"
            onClick={() => setIsMobile(!isMobile)}
          />
        ) : (
          <AiOutlineMenu
            className={navbarcss.burgermenu}
            size="1.6rem"
            onClick={() => setIsMobile(!isMobile)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
