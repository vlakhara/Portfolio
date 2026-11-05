import { createContext, useCallback, useMemo, useState } from "react";

// Only the cursor *variant* lives in React state. The pointer position is
// tracked inside the Cursor component with motion values, so moving the mouse
// never re-renders the rest of the app.
export const CursorContext = createContext({
  cursorVariant: "default",
  mouseEnter: (type) => {},
  mouseLeave: () => {},
});

const Provider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseEnter = useCallback((type) => {
    setCursorVariant(type);
  }, []);
  const mouseLeave = useCallback(() => {
    setCursorVariant("default");
  }, []);

  const value = useMemo(
    () => ({ cursorVariant, mouseEnter, mouseLeave }),
    [cursorVariant, mouseEnter, mouseLeave]
  );

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};

export default Provider;
