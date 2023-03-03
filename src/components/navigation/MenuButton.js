import React from "react";
import styles from "./Navigation.module.css";

const MenuButton = ({ isMenuOpen, position, toggleMenu }) => {
    const buttonState = isMenuOpen ? "close" : "open";
    return (
        <button
            className={`${styles.menu_btn} ${styles[position]}`}
            onClick={() => {
                toggleMenu(position);
            }}
        >
            <div className={`${styles[buttonState]}`} />
            <div className={`${styles[buttonState]}`} />
        </button>
    );
};

export default MenuButton;
