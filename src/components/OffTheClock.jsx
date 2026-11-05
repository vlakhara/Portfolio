import React from "react";
import { favouriteMovies } from "../data";
import { useTilt } from "../hooks";
import Bike from "./Bike";
import SectionHead from "./SectionHead";

const Tile = ({ kind, delay, children }) => {
  const tilt = useTilt(6);
  return (
    <div className="fun-wrap reveal" style={{ "--d": `${delay}s` }}>
      <article
        className={"fun fun--" + kind}
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        {children}
      </article>
    </div>
  );
};

const OffTheClock = () => (
  <section className="section" id="play">
    <div className="wrap">
      <SectionHead
        no="04"
        label="Off the clock"
        take={3}
        title={
          <>
            Off the <em>clock</em>
          </>
        }
      />
      <div className="fun-grid">
        <Tile kind="chess" delay={0}>
          <div className="fun-art" aria-hidden="true">
            <div className="knight-board">
              <span className="knight">
                <i>♞</i>
              </span>
            </div>
          </div>
          <h3 className="fun-title">Chess</h3>
          <p className="fun-text">I play it, and I wrote my own multiplayer version from scratch.</p>
        </Tile>

        <Tile kind="movies" delay={0.12}>
          <div className="fun-art" aria-hidden="true">
            <div className="clapper">
              <span className="clap-arm" />
              <span className="clap-body">
                <b>SCENE 12</b>
                <b>TAKE 3</b>
                <small>ROLL 1</small>
              </span>
            </div>
          </div>
          <h3 className="fun-title">Movies</h3>
          <p className="fun-text">Always up for a recommendation, especially a good one.</p>
          {favouriteMovies.length > 0 && (
            <ul className="stubs">
              {favouriteMovies.map((title) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          )}
        </Tile>

        <Tile kind="bike" delay={0.24}>
          <div className="fun-art" aria-hidden="true">
            <Bike className="bike--big" />
            <span className="fun-road" />
          </div>
          <h3 className="fun-title">Riding</h3>
          <p className="fun-text">On two wheels whenever I can. The bike at the bottom of this page is a tiny tribute.</p>
        </Tile>
      </div>
    </div>
  </section>
);

export default OffTheClock;
