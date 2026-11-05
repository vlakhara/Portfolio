import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { CursorContext } from "../Context";
import { socialLinks } from "../data";

const Socials = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  const icons = { linkedin: faLinkedin, github: faGithub, x: faXTwitter };

  const linkIcons = socialLinks
    .filter(({ href }) => href)
    .map(({ key, label, href }) => ({ icon: icons[key], label, href }));

  const handleIconLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
      {linkIcons.map(({ icon, label, href }, index) => (
        <motion.div
          key={`${label}_${index}`}
          initial={{ translateY: -20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: (index * 2) / 10 + 1,
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
            onClick={() => handleIconLinkClick(href)}
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
