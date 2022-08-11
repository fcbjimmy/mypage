import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarcss from "./Navbar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useWindowSize } from "../hooks/useWindowSize";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowSize();
  const { projectClass } = useContext(ThemeContext);

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
    <div className={projectClass ? navbarcss.transparent : navbarcss.navbar}>
      <div className={navbarcss.rightside}>
        <div
          className={`${
            isMobile
              ? projectClass
                ? navbarcss.trans
                : navbarcss.hidden
              : navbarcss.links
          }`}
        >
          <Link onClick={() => setIsMobile(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setIsMobile(false)} to="/projects">
            Projects
          </Link>
          <Link onClick={() => setIsMobile(false)} to="/contact">
            Contact
          </Link>
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
