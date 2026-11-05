import React from "react";

// A line-drawing of a Triumph Scrambler 400 X in khaki green: 19" front wheel,
// 17" rear, round headlight, high-level exhaust. Wheels rotate with the CSS
// variable --wheel (set from scroll) or the hover spin animation.
const CY = 58;

const Wheel = ({ cx, r }) => {
  const a = r - 1;
  const d = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return `M${(cx - Math.cos(rad) * a).toFixed(2)} ${(CY - Math.sin(rad) * a).toFixed(2)} L${(
      cx + Math.cos(rad) * a
    ).toFixed(2)} ${(CY + Math.sin(rad) * a).toFixed(2)}`;
  };
  return (
    <g className="wheel" style={{ transformOrigin: `${cx}px ${CY}px` }}>
      <circle cx={cx} cy={CY} r={r} className="tyre" />
      <circle cx={cx} cy={CY} r={r} className="knobs" />
      <circle cx={cx} cy={CY} r={r - 5} className="rim" />
      <path className="spokes" d={[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map(d).join(" ")} />
      <circle cx={cx} cy={CY} r="3" className="hub" />
    </g>
  );
};

const Bike = ({ className = "" }) => (
  <svg className={"bike " + className} viewBox="0 0 148 80" aria-hidden="true" focusable="false">
    <Wheel cx={30} r={16} />
    <Wheel cx={120} r={18} />

    {/* high front fender */}
    <path className="fender" d="M104 40 C112 33 126 33 134 41" />
    {/* high-level exhaust and silencer */}
    <path className="header" d="M72 62 C56 66 46 56 38 48" />
    <path className="silencer" d="M40 49 L16 40" />
    <path className="shield" d="M34 46 L22 42" />
    {/* swingarm, mono-shock, skid plate */}
    <path className="line" d="M30 58 L60 56" />
    <path className="line thin" d="M42 38 L52 54" />
    <path className="skid" d="M58 62 H84 L82 66 H62 Z" />
    {/* engine with cooling fins */}
    <rect className="engine" x="56" y="46" width="28" height="16" rx="3" />
    <rect className="barrel" x="62" y="36" width="15" height="12" rx="2" />
    <path className="fins" d="M62 39 H77 M62 42 H77 M62 45 H77" />
    <circle className="cover" cx="70" cy="56" r="4" />
    {/* seat and tail */}
    <path className="line thin" d="M16 28 C14 31 14 33 16 34 L24 31" />
    <path className="seat" d="M14 33 L52 32 L54 39 L22 40 C17 40 14 37 14 33 Z" />
    {/* tank with knee pads */}
    <path className="tank" d="M50 34 C57 22 80 22 90 32 L86 42 L54 42 Z" />
    <path className="panel" d="M72 24 C80 24 86 27 90 32 L86 42 L78 42 Z" />
    {/* USD forks, bars, mirror */}
    <path className="fork" d="M92 32 L118 58" />
    <path className="line thin" d="M96 29 L113 48" />
    <path className="line thin" d="M86 24 L98 22" />
    <path className="line thin" d="M89 24 L87 15" />
    {/* round headlight */}
    <circle className="lamp" cx="100" cy="34" r="6" />
    <circle className="led" cx="100" cy="34" r="2.2" />
  </svg>
);

export default Bike;
