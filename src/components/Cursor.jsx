import React, { useEffect, useRef } from "react";

// A small dot that sticks to the pointer and a ring that trails it. Everything
// happens on the DOM nodes directly (no React state), so moving the mouse never
// re-renders anything. The native cursor is only hidden once this has actually
// seen the mouse move, so if anything goes wrong the normal cursor stays.
//
// Hover targets: links, buttons and anything with `data-cursor`.
//   data-cursor="big"        grows the ring (used on the big headline)
//   data-cursor-label="text" shows a little label next to the ring
const TARGET = "a, button, [data-cursor]";

const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return undefined;

    const root = document.documentElement;
    let tx = 0;
    let ty = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let seen = false;

    const place = (el, x, y) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const tick = () => {
      rx += (tx - rx) * 0.22;
      ry += (ty - ry) * 0.22;
      place(ring.current, rx, ry);
      place(label.current, rx, ry);
      const settled = Math.abs(tx - rx) < 0.1 && Math.abs(ty - ry) < 0.1;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      tx = event.clientX;
      ty = event.clientY;
      if (!seen) {
        seen = true;
        rx = tx;
        ry = ty;
        root.classList.add("has-cursor");
      }
      root.classList.remove("cursor-out");
      place(dot.current, tx, ty);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onOver = (event) => {
      const el = event.target.closest ? event.target.closest(TARGET) : null;
      const kind = el ? el.getAttribute("data-cursor") : null;
      ring.current.classList.toggle("is-hover", !!el && kind !== "big");
      ring.current.classList.toggle("is-big", kind === "big");
      label.current.textContent = el ? el.getAttribute("data-cursor-label") || "" : "";
    };

    const onDown = () => ring.current.classList.add("is-down");
    const onUp = () => ring.current.classList.remove("is-down");
    const onOut = (event) => {
      if (!event.relatedTarget) root.classList.add("cursor-out");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor", "cursor-out");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div className="cursor-ring" ref={ring}>
        <div className="cursor-ring-inner" />
      </div>
      <div className="cursor-label" ref={label} />
      <div className="cursor-dot" ref={dot} />
    </div>
  );
};

export default Cursor;
