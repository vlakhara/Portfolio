import React from "react";

// Section heading with a little film slate on the right ("Scene 02 / Take 1").
const SectionHead = ({ no, label, title, take = 1 }) => (
  <header className="sec-head reveal">
    <div>
      <p className="sec-no">
        {no} / {label}
      </p>
      <h2 className="sec-title">{title}</h2>
    </div>
    <div className="slate" aria-hidden="true">
      <span className="slate-stripes" />
      <span className="slate-text">
        SCENE {no}
        <br />
        TAKE {take}
      </span>
    </div>
  </header>
);

export default SectionHead;
