import { motion } from "framer-motion";
import React, { useContext } from "react";
import { CursorContext } from "../../Context";
import Styles from "./Home.module.css";

const Home = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);

  const name = "Vipul Lakhara".split("");
  const discription = "A Full Stack Developer.".split("");

  return (
    <div className={Styles.home} id="home">
      <div className={Styles.name}>
        <pre
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
                delay: i / 25 + 0.5,
                ease: "backInOut",
              }}
              style={{ display: "inline-block", fontFamily: "Titillium Web" }}
              key={i}
            >
              {el}
            </motion.pre>
          ))}
        </pre>
      </div>
      <div className={Styles.discription}>
        <pre
          className={Styles["disc-text"]}
          onMouseEnter={() => mouseEnter("name")}
          onMouseLeave={mouseLeave}
        >
          {discription.map((el, i) => (
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: i / 20 + 1,
                ease: "backInOut",
              }}
              style={{ display: "inline-block", fontFamily: "Titillium Web" }}
              key={i}
            >
              {el}
            </motion.pre>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default Home;
