import React from "react";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
// import "./DarkMode.css";

const DarkMode = (setDarkMode) => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setDarkMode(true);
    localStorage.setItem("seletedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setDarkMode(false);
    localStorage.setItem("seletedTheme", "light");
  };

  const seletedTheme = localStorage.getItem("selectedTheme");

  if (seletedTheme === "dark") {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkTheme();
    else setLightTheme();
  };
  return (
    <div className="dark_mode">
      <p
        className="dark_mode_input"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={seletedTheme === "dark"}
      >
        light
      </p>
    </div>
  );
};

export default DarkMode;
