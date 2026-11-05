import React from "react";
import { profile, socialLinks } from "../data";
import ChessBoard from "./ChessBoard";

const letters = (text) =>
  [...text].map((char, i) => (
    <span className="letter" style={{ "--i": i }} key={i}>
      {char}
    </span>
  ));

const Hero = () => {
  const github = socialLinks.find((link) => link.key === "github");

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse" aria-hidden="true" />
            {profile.role} at {profile.company}, {profile.city}
          </p>

          <h1 className="hero-name" aria-label={profile.name}>
            <span className="word" aria-hidden="true" data-cursor="big">
              {letters("Vipul")}
            </span>
            <span className="word" aria-hidden="true" data-cursor="big">
              {letters("Lakhara")}
            </span>
          </h1>

          <p className="hero-lede reveal" style={{ "--d": "0.5s" }}>
            I build web apps{" "}
            <span className="scribble">
              front to back
              <svg viewBox="0 0 160 14" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9 C 22 2, 40 14, 62 7 S 108 3, 128 9 S 150 6, 158 4" />
              </svg>
            </span>
            : the interface, the API behind it and the database under that.
          </p>
          <p className="hero-sub reveal" style={{ "--d": "0.65s" }}>
            Away from the keyboard I&apos;m usually playing chess, watching a movie or out on the bike.
          </p>

          <div className="hero-cta reveal" style={{ "--d": "0.8s" }}>
            <a className="btn" href="#work">
              See my work
            </a>
            {github && github.href && (
              <a className="btn btn--ghost" href={github.href} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="hero-stage reveal" style={{ "--d": "0.3s" }}>
          <ChessBoard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
