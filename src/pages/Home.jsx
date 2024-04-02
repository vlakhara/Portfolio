import React from "react";

const Home = ({ mouseEnter, mouseLeave }) => {
  return (
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
      <p
        style={{
          fontSize: "100px",
          fontWeight: "bolder",
          letterSpacing: "5px",
        }}
        onMouseEnter={() => mouseEnter("name")}
        onMouseLeave={mouseLeave}
      >
        Vipul Lakhara
      </p>
    </div>
  );
};

export default Home;
