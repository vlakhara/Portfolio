import React from "react";

// A strip of film that scrolls sideways. Purely decorative.
const words = [
  "React",
  "Chess",
  "Spring Boot",
  "Movies",
  "Next.js",
  "Bikes",
  "Node",
  "Postgres",
  "Elasticsearch",
  "Checkmate",
];

const Marquee = () => {
  const row = words.map((word) => (
    <span className="film-item" key={word}>
      {word}
      <i aria-hidden="true">✦</i>
    </span>
  ));

  return (
    <div className="film-wrap" aria-hidden="true">
      <div className="film">
        <div className="film-track">
          <div className="film-row">{row}</div>
          <div className="film-row">{row}</div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
