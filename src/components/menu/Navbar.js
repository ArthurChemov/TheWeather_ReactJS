import { useState } from "react";
import "./Navbar.scss"

function Navbar() {
  const[mode, isDark] = useState(true);
  const setLight = () => isDark(!mode);

  return(
    // style={` ${isLight ? 'background-color: theme-color("light");':'background-color: theme-color("dark");'}`}
    <div className="navbar bg-gradient">
      <header className="container text-white d-flex justify-content-between">
        <div className="title">
          <h2>Weather</h2>
          <h2>Weather</h2><i className="bi bi-thermometer-sun h2"></i>
        </div>
        <form className="d-flex align-items-center w-50" autoComplete="off">
          <input type="search" className="form-control ds-input w-75" id="search-input" placeholder="Search..." aria-label="Search..."/>
        </form>
        <h2 className="mode">
          <button type="button" className={`bi ${mode ? 'bi-brightness-high-fill':'bi-moon-stars-fill'}`} onClick={setLight}></button>
        </h2>
      </header>
    </div>
  );
}

export default Navbar;