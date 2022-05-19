import "../style/Funbox.css";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

function Funboxflip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        onClick={handleClick}
        className="funbox"
        style={{ backgroundColor: "rgb( 245, 240, 248)" }}
      >
        This is the Funbox... Click Me!
      </div>
      <div
        className="funbox"
        onClick={handleClick}
        style={{ backgroundColor: "paleturquoise" }}
      >
        Clickable panel test
      </div>
    </ReactCardFlip>
  );
}

export default Funboxflip;
