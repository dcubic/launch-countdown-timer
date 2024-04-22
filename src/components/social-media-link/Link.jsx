import { useState } from "react";

const idleColour = "#8385A9";
const hoverColour = "#F76083";

export default function Link({ Icon, url }) {
  const [activeColour, setActiveColour] = useState("#8385A9");
  return (
    <a
      href={url}
      onMouseEnter={() => setActiveColour(hoverColour)}
      onMouseLeave={() => setActiveColour(idleColour)}
    >
      <Icon fill={activeColour} />
    </a>
  );
}
