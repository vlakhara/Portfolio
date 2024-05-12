import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { CursorContext } from "../Context";

const Socials = () => {
  const { mouseEnter, mouseLeave, mousePosition } = useContext(CursorContext);

  const linkIcons = [
    { icon: faLinkedin, label: "LinkedIn" },
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
            delay: (index * 2) / 10 + 2.5,
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
            icon={icon}
            style={{ color: "#ecf2ff", opacity: 0.7, fontSize: "25px" }}
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
  );
};

export default Socials;
