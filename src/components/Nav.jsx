import React, { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "route", label: "Experience" },
  { id: "play", label: "Off the clock" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Hide on the way down, show on the way up.
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        if (y > 160 && y > last + 4) setHidden(true);
        else if (y < last - 4 || y <= 160) setHidden(false);
        last = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section in view.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...links.map((l) => l.id), "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.classList.toggle("no-scroll", open);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={
        "nav" +
        (scrolled ? " is-scrolled" : "") +
        (hidden && !open ? " is-hidden" : "") +
        (open ? " is-open" : "")
      }
    >
      <div className="nav-bar wrap">
        <a className="logo" href="#top" onClick={close} aria-label="Vipul Lakhara, back to top">
          <span className="logo-mark" aria-hidden="true">
            ♞
          </span>
          <span className="logo-text">Vipul</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small nav-cta" href="#contact">
          Say hi
        </a>

        <button
          type="button"
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="nav-panel" className="nav-panel">
        {[...links, { id: "contact", label: "Say hi" }].map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={close}
            style={{ "--i": i }}
            tabIndex={open ? 0 : -1}
          >
            <span className="panel-no">0{i + 1}</span>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Nav;
