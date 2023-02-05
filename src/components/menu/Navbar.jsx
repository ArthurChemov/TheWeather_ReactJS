import React from "react";
import "./Navbar.scss"

const Navbar = ({mode, isDark}) => {
  const setLight = () => isDark(!mode);

  return(
    <div className="navbar bg-gradient" style={mode ? { backgroundColor: '#212529'  } : {backgroundColor: '#6c757d'}}>
      <header className="container text-white d-flex justify-content-between">
        <div className="title">
          <h2>Weather</h2>
          <h2>Weather</h2><i className="bi bi-thermometer-sun h2"></i>
        </div>
        <h2 className="mode">
          <button type="button" className={`bi ${mode ? 'bi-brightness-high-fill':'bi-moon-stars-fill'}`} onClick={setLight}></button>
        </h2>
      </header>
    </div>
  );
}

export default Navbar;
