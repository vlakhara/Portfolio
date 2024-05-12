import React from "react";

const Header = ({ id, children }) => {
  return (
    <div id={id} className="header">
      {children}
    </div>
  );
};

export default Header;
