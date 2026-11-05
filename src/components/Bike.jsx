import React from "react";

// A little line-drawing of a bike. Wheels rotate with the CSS variable
// --wheel (set from scroll) or the .spin class (used on hover).
const Wheel = ({ cx }) => (
  <g className="wheel" style={{ transformOrigin: `${cx}px 48px` }}>
    <circle cx={cx} cy="48" r="16" className="tyre" />
    <circle cx={cx} cy="48" r="9" className="rim" />
    <path
      className="spokes"
      d={`M${cx} 33 V63 M${cx - 15} 48 H${cx + 15} M${cx - 10.6} 37.4 L${cx + 10.6} 58.6 M${cx + 10.6} 37.4 L${cx - 10.6} 58.6`}
    />
    <circle cx={cx} cy="48" r="3" className="hub" />
  </g>
);

const Bike = ({ className = "" }) => (
  <svg className={"bike " + className} viewBox="0 0 132 72" aria-hidden="true" focusable="false">
    <Wheel cx={24} />
    <Wheel cx={106} />
    {/* swingarm, engine, exhaust */}
    <path className="line" d="M24 48 L58 47" />
    <rect className="engine" x="50" y="38" width="22" height="14" rx="3" />
    <circle className="cover" cx="61" cy="45" r="4" />
    <path className="line" d="M57 53 L34 57 L20 58" />
    {/* seat and tank */}
    <path className="seat" d="M18 28 C27 22 39 24 49 29 L49 34 L22 35 Z" />
    <path className="tank" d="M46 30 C55 20 72 21 82 30 L77 38 L50 38 Z" />
    {/* fork, bars, lamp, fender */}
    <path className="line" d="M82 30 L106 48" />
    <path className="line" d="M78 23 L90 19" />
    <circle className="lamp" cx="92" cy="31" r="4.5" />
    <path className="line thin" d="M94 33 C 104 31, 116 38, 119 44" />
  </svg>
);

export default Bike;
