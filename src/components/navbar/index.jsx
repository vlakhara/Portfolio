import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { CursorContext } from "../../Context";
import "./navbar.css";
import { scrollToTop } from "../../utils";

const classes = {
  normal: "navItem",
  active: "navItem active",
};

const Navbar = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  const [show, setShow] = useState(true);
  const [burgerClass, setBurgerClass] = useState("burger");
  const [menuItems, setMenuItems] = useState([
    { label: "Introduction", class: classes.normal },
    { label: "Skills", class: classes.normal },
    { label: "Projects", class: classes.normal },
    { label: "Experience", class: classes.normal },
    { label: "Connect", class: classes.normal },
  ]);

  const handleBurgerClick = () => {
    if (burgerClass.includes("close")) {
      setBurgerClass("burger");
    } else {
      setBurgerClass("burger close");
    }
  };

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="navbar" id="navbar" style={{ top: show ? "0" : "-9vh" }}>
      <div
        className="title"
        onMouseEnter={() => mouseEnter("link")}
        onMouseLeave={mouseLeave}
      >
        <a href="#home">
          <p>V</p>
          <p>L</p>
        </a>
      </div>
      <ul className="navLinks">
        {menuItems.map((item, index) => {
          return (
            <motion.li
              key={item.label}
              className={item.class}
              onMouseEnter={() => mouseEnter("link")}
              onMouseLeave={mouseLeave}
              initial={{ translateY: -30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: (index * 3) / 10,
                ease: "anticipate",
              }}
            >
              <a
                href={"#" + item.label}
                onClick={() => {
                  scrollToTop(item.label);
                  setMenuItems((prev) =>
                    prev.map((newItem) => {
                      if (item.label === newItem.label) {
                        return { ...newItem, class: classes.active };
                      } else {
                        return { ...newItem, class: classes.normal };
                      }
                    })
                  );
                }}
              >
                <p className="nav-marker">0{index + 1}.</p> {item.label}
              </a>
            </motion.li>
          );
        })}
      </ul>
      {/* <div className={burgerClass} onClick={handleBurgerClick}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div> */}
    </div>
  );
};

export default Navbar;
