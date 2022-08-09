import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarcss from "./Navbar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useWindowSize } from "../hooks/useWindowSize";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // ${navbarcss.links}
  const width = useWindowSize();
  console.log(width);

  useEffect(() => {
    if (width <= 570 && isMobile) {
      setIsMobile(true);
    }
    if (width > 570) {
      setIsMobile(false);
    }
  }, [width]);
  console.log(isMobile);

  return (
    <div className={navbarcss.navbar}>
      <div className={navbarcss.rightside}>
        <div className={`${isMobile ? navbarcss.hidden : navbarcss.links}`}>
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
