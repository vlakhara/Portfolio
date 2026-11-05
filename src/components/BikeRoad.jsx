import React, { useEffect, useRef } from "react";
import Bike from "./Bike";

// A road along the bottom of the screen. The bike rides from left to right as
// you scroll down the page; click it to ride back to the top.
const BikeRoad = () => {
  const road = useRef(null);
  const bike = useRef(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = road.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const travel = Math.max(0, el.clientWidth - bike.current.offsetWidth - 8);
      el.style.setProperty("--bx", `${progress * travel}px`);
      el.style.setProperty("--wheel", `${window.scrollY * 0.6}deg`);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const rideHome = () => {
    const el = bike.current;
    el.classList.add("is-wheelie");
    window.setTimeout(() => el.classList.remove("is-wheelie"), 900);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="road" ref={road}>
      <span className="road-edge" />
      <span className="road-dashes" />
      <button
        type="button"
        className="road-bike"
        ref={bike}
        onClick={rideHome}
        aria-label="Ride back to the top"
        data-cursor-label="top"
      >
        <Bike />
      </button>
    </div>
  );
};

export default BikeRoad;
