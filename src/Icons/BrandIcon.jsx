import React from "react";

// Wraps a react-icons glyph so it takes the same props as the hand-made icons
// in this folder. Colour comes from CSS (currentColor).
const BrandIcon = ({ icon: Icon, height = 50, width = 50 }) => (
  <Icon size={Math.max(height, width)} aria-hidden />
);

export default BrandIcon;
