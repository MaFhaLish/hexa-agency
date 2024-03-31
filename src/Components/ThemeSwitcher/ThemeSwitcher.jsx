"use client";
import { useContext } from "react";
import styles from "./ThemeSwitcher.module.css";
import { themeContext } from "@/context/themeContext";

function ThemeSwitcher() {
  const { mode, switchHandler } = useContext(themeContext);
  return (
    <div onClick={switchHandler} className={styles.switcher_container}>
      <div>🌙</div>
      <div>🌚</div>
      <div
        className={styles.theme_circle}
        style={mode === "dark" ? { right: "2px" } : { left: "2px" }}
      />
    </div>
  );
}

export default ThemeSwitcher;
