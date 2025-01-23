import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

function ContextShare({ children }) { // Use "children" instead of "Children"
  const [color, setColor] = useState('#4f318f');

  return (
    <>
      <ColorContext.Provider value={{ color, setColor }}>
        {children} {/* Use children to render child components */}
      </ColorContext.Provider>
    </>
  );
}

export default ContextShare;