import React from "react";

// Same look as the hand-made icons in this folder: a light, single-colour
// glyph with its label underneath. `icon` is a react-icons component.
const BrandIcon = ({ icon: Icon, label, height = 50, width = 50 }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.7rem",
      }}
      className="svgIcon"
    >
      <Icon size={Math.max(height, width)} color="var(--light)" aria-hidden />
      <p
        style={{ color: "var(--light)", letterSpacing: "2px", fontWeight: 600 }}
      >
        {label}
      </p>
    </div>
  );
};

export default BrandIcon;
