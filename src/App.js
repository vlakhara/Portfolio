import React, { useContext } from "react";
import { CursorContext } from "./Context";
import Header from "./components/Header";
import Home from "./pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const App = () => {
  const { cursorVariant, mousePosition, mouseEnter, mouseLeave } =
    useContext(CursorContext);

  const variants = {
    default: { left: mousePosition.x - 16, top: mousePosition.y - 16 },
    link: {
      height: 60,
      width: 60,
      left: mousePosition.x - 30,
      top: mousePosition.y - 30,
      backgroundColor: "var(--light)",
      mixBlendMode: "difference",
    },
    iconLink: {
      height: 25,
      width: 25,
      left: mousePosition.x - 12.5,
      top: mousePosition.y - 12.5,
      backgroundColor: "var(--light)",
      mixBlendMode: "difference",
    },
    name: {
      height: 150,
      width: 150,
      left: mousePosition.x - 75,
      top: mousePosition.y - 75,
      backgroundColor: "var(--light)",
      mixBlendMode: "difference",
    },
  };

  const linkIcons = [
    { icon: faLinkedin, label: "Linkedin" },
    { icon: faGithub, label: "Github" },
    { icon: faFacebook, label: "Facebook" },
  ];

  const handleIconLinkClick = (type) => {
    let url;
    switch (type) {
      case "LinkedIn":
        url = "https://www.linkedin.com/in/vipullakhara/";
        break;
      case "Github":
        url = "https://github.com/vlakhara";
        break;
      case "Facebook":
        url = "https://www.facebook.com/vipullakhara.01/";
        break;
      default:
        break;
    }
    window.open(url);
  };

  return (
    <div className="app">
      <div className="cursor" style={{ ...variants[cursorVariant] }}></div>
      <div
        className="links"
        style={{
          position: "fixed",
          bottom: 5,
          right: 30,
          display: "flex",
          gap: "1.5rem",
        }}
      >
        {linkIcons.map(({ icon, label }, index) => (
          <motion.div
            key={`${label}_${index}`}
            initial={{ translateY: -20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: (index * 3) / 10 + 3.5,
              ease: "anticipate",
              staggerChildren: 1,
            }}
            onMouseEnter={() => mouseEnter("iconLink")}
            onMouseLeave={mouseLeave}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FontAwesomeIcon
              size="2x"
              icon={icon}
              style={{ color: "#ecf2ff", opacity: 0.7 }}
              onClick={() => handleIconLinkClick(label)}
            />
            <div
              style={{
                height: "20px",
                width: "2px",
                background: "var(--light)",
                opacity: 0.4,
              }}
            ></div>
          </motion.div>
        ))}
      </div>
      <Header />
      <Home />
      <div
        id="Introduction"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Introduction
      </div>
      <div
        id="Projects"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Projects
      </div>
      <div
        id="Experience"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        About
      </div>
      <div
        id="Connect"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Connect
      </div>
    </div>
  );
};

export default App;
