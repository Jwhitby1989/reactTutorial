import "../style/Sidebar.css";
import { useState } from "react";

function Sidebar() {
  const [links, setlinks] = useState([
    "Home",
    "About",
    "Projects",
    "Contact Me",
  ]);

  return (
    <div className="sidebar">
      {links.map((links) => (
        <li className="link">{links}</li>
      ))}
    </div>
  );
}

export default Sidebar;
