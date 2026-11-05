import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { CursorContext } from "../../Context";
import { scrollToTop } from "../../utils";
import "./navbar.css";

const classes = {
  normal: "navItem",
  active: "navItem active",
};

const Navbar = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const menuItems = [
    { label: "Introduction", class: classes.normal },
    { label: "Skills", class: classes.normal },
    { label: "Projects", class: classes.normal },
    { label: "Experience", class: classes.normal },
    { label: "Connect", class: classes.normal },
  ];

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(false);
      setOpen(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("scroll", controlNavbar);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      className="navbar"
      id="navbar"
      style={{ transform: show ? "translateY(0)" : "translateY(-100%)" }}
    >
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
      <button
        type="button"
        className={"burger" + (open ? " open" : "")}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((value) => !value)}
        onMouseEnter={() => mouseEnter("navItem")}
        onMouseLeave={mouseLeave}
      >
        <span />
        <span />
        <span />
      </button>
      <ul id="nav-links" className={"navLinks" + (open ? " open" : "")}>
        {menuItems.map((item, index) => {
          return (
            <motion.li
              key={item.label}
              className={item.class}
              onMouseEnter={() => mouseEnter("navItem")}
              onMouseLeave={mouseLeave}
              initial={{ translateY: -30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: (index * 3) / 25,
                ease: "anticipate",
              }}
            >
              <a
                href={"#" + item.label}
                onClick={() => {
                  scrollToTop(item.label);
                  setOpen(false);
                }}
              >
                <p className="nav-marker">0{index + 1}.</p> {item.label}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
