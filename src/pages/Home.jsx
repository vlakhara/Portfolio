import React, { useContext } from "react";
import { CursorContext } from "../Context";
import Styles from "./Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  const name = "Vipul Lakhara".split("");
  const discription = "A Full Stack Developer.";

  return (
    <div id="Introduction" className={Styles.home}>
      <div animate className={Styles.name}>
        <p
          className={Styles.text}
          onMouseEnter={() => mouseEnter("name")}
          onMouseLeave={mouseLeave}
        >
          {name.map((el, i) => (
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10 + 1,
                type: "spring",
              }}
              style={{ display: "inline-block", fontFamily: "Titillium Web" }}
              key={i}
            >
              {el}
            </motion.pre>
          ))}
        </p>
      </div>
      <motion.div
        className={Styles.discription}
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: -20 }}
        transition={{
          duration: 1,
          delay: 2,
          type: "spring",
        }}
      >
        <p
          className={Styles["disc-text"]}
          onMouseEnter={() => mouseEnter("link")}
          onMouseLeave={mouseLeave}
        >
          {discription}
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
