import React, { useState } from "react";
import { BsMoon, BsFillMoonFill } from "react-icons/bs";
const NavBar = () => {
  // Defines the state "darkmode" to manage dark mode,initializing from localstorage or defaulting to false incase of errors

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  // Aplying appriopriate class to the body based on darkmode state

  if (darkMode) {
    document.body.classList.remove("lightmode");
    // remove lightmode class if the darkmode is enabled
  } else {
    // add lightmode class if darkmode is disabled
    document.body.classList.add("lightmode");
  }

  const icon = darkMode ? <BsFillMoonFill /> : <BsMoon />;

  return (
    <nav className="d-flex justify-content-between align-items-center p-5 shadow bg-element custom-text-color">
      <h3 className="mb-0 navbr">Where in the world?</h3>
      <div
        onClick={() => {
          // toggle the lightmode class on the body
          document.body.classList.toggle("lightmode");
          // update the darkmode state with the opposite of what was in the darkmode previously
          setDarkMode(!darkMode);

          // update thelocalestorage with current mode either light or dark
          if (document.body.classList.contains("lightmode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center gap-2"
      >
        {icon}
        <p className="mb-0">{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </nav>
  );
};

export default NavBar;
