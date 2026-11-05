import React, { useEffect, useMemo, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks";

// A 3D board that replays Scholar's mate on a loop. Files a-h are x 0-7,
// ranks 8-1 are y 0-7 (white starts at the bottom).
const GLYPH = { k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟︎" };
const BACK = ["r", "n", "b", "q", "k", "b", "n", "r"];

const MOVES = [
  { san: "1. e4", from: [4, 6], to: [4, 4] },
  { san: "1... e5", from: [4, 1], to: [4, 3] },
  { san: "2. Bc4", from: [5, 7], to: [2, 4] },
  { san: "2... Nc6", from: [1, 0], to: [2, 2] },
  { san: "3. Qh5", from: [3, 7], to: [7, 3] },
  { san: "3... Nf6??", from: [6, 0], to: [5, 2] },
  { san: "4. Qxf7#", from: [7, 3], to: [5, 1] },
];

const startingPieces = () => {
  const list = [];
  BACK.forEach((type, x) => {
    list.push({ id: `b-${type}-${x}`, type, color: "b", x, y: 0 });
    list.push({ id: `b-p-${x}`, type: "p", color: "b", x, y: 1 });
    list.push({ id: `w-p-${x}`, type: "p", color: "w", x, y: 6 });
    list.push({ id: `w-${type}-${x}`, type, color: "w", x, y: 7 });
  });
  return list.map((p) => ({ ...p, dead: false }));
};

// Position after `step` moves.
const positionAt = (step) => {
  const pieces = startingPieces();
  let last = null;
  for (let i = 0; i < step; i += 1) {
    const move = MOVES[i];
    const mover = pieces.find((p) => !p.dead && p.x === move.from[0] && p.y === move.from[1]);
    const victim = pieces.find(
      (p) => !p.dead && p !== mover && p.x === move.to[0] && p.y === move.to[1]
    );
    if (victim) victim.dead = true;
    mover.x = move.to[0];
    mover.y = move.to[1];
    last = { id: mover.id, from: move.from, to: move.to };
  }
  return { pieces, last };
};

const SQUARES = Array.from({ length: 64 }, (_, i) => ({ x: i % 8, y: Math.floor(i / 8) }));
const LAYERS = Array.from({ length: 8 }, (_, i) => i);

const ChessBoard = () => {
  const reduce = useRef(prefersReducedMotion()).current;
  const [step, setStep] = useState(reduce ? MOVES.length : 0);
  const [phase, setPhase] = useState("play"); // play | fade | reset
  const board = useRef(null);

  const { pieces, last } = useMemo(() => positionAt(step), [step]);
  const done = step === MOVES.length;

  useEffect(() => {
    if (reduce) return undefined;
    let timer;
    if (phase === "play") {
      if (step < MOVES.length) {
        timer = setTimeout(() => setStep((s) => s + 1), step === 0 ? 1500 : 1350);
      } else {
        timer = setTimeout(() => setPhase("fade"), 3200);
      }
    } else if (phase === "fade") {
      timer = setTimeout(() => {
        setStep(0);
        setPhase("reset");
      }, 500);
    } else {
      timer = setTimeout(() => setPhase("play"), 80);
    }
    return () => clearTimeout(timer);
  }, [phase, step, reduce]);

  const tilt = (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    const el = board.current;
    if (!el) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rz", `${-38 + px * 34}deg`);
    el.style.setProperty("--rx", `${56 - py * 16}deg`);
  };

  const untilt = () => {
    const el = board.current;
    if (!el) return;
    el.style.setProperty("--rz", "-38deg");
    el.style.setProperty("--rx", "56deg");
  };

  const replay = () => {
    if (!reduce) setPhase("fade");
  };

  const caption = step === 0 ? "Scholar's mate" : MOVES[step - 1].san;

  return (
    <figure className="chess">
      <div
        className="stage"
        role="img"
        aria-label="A 3D chessboard replaying Scholar's mate"
        onPointerMove={tilt}
        onPointerLeave={untilt}
        onClick={replay}
        data-cursor
        data-cursor-label="replay"
      >
        <div
          ref={board}
          className={"board3d" + (phase === "fade" ? " is-fading" : "") + (phase === "reset" ? " is-reset" : "")}
        >
          <div className="board-shadow" />
          {LAYERS.map((i) => (
            <div className="board-layer" style={{ "--z": `${-i * 2.5 - 1}px` }} key={i} />
          ))}
          <div className="plane">
            {SQUARES.map(({ x, y }) => {
              const isFrom = last && last.from[0] === x && last.from[1] === y;
              const isTo = last && last.to[0] === x && last.to[1] === y;
              const isCheck = done && x === 4 && y === 0;
              return (
                <div
                  key={`${x}-${y}`}
                  className={
                    "sq " +
                    ((x + y) % 2 === 0 ? "sq--light" : "sq--dark") +
                    (isFrom ? " sq--from" : "") +
                    (isTo ? " sq--to" : "") +
                    (isCheck ? " sq--check" : "")
                  }
                />
              );
            })}
            {pieces.map((p) => (
              <div
                key={p.id}
                className={
                  "piece piece--" +
                  p.color +
                  (p.dead ? " is-dead" : "") +
                  (last && last.id === p.id ? " is-moving" : "")
                }
                style={{ "--x": p.x, "--y": p.y }}
              >
                <div className="hop">
                  <span className="glyph">{GLYPH[p.type]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="board-caption">
        <span className="board-move">{caption}</span>
        <span>{done ? "Checkmate. Again." : "On a loop. Click to replay."}</span>
      </figcaption>
    </figure>
  );
};

export default ChessBoard;
