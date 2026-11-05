export function scrollToTop(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

const FILLED = "rgba(245, 247, 248, 1)"; // --light
const EMPTY = "rgba(245, 247, 248, 0)";

const filled = (size) => ({
  height: size,
  width: size,
  backgroundColor: FILLED,
  mixBlendMode: "difference",
});

// Size and fill for each cursor state. Position is handled by <Cursor />.
export const cursorVariants = (type) => {
  const variants = {
    default: { height: 32, width: 32, backgroundColor: EMPTY },
    link: filled(60),
    navItem: filled(40),
    iconLink: filled(25),
    name: filled(150),
    scrollToTop: filled(40),
    skills: filled(150),
  };

  return variants[type] || variants.default;
};
