import React, { useState } from "react";

import styles from "./Navigation.module.css";

import MenuButton from "./MenuButton";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [buttonPosition, setButtonPosition] = useState("right");

    const toggleMenu = (clickedButtonPosition) => {
        if (buttonPosition !== clickedButtonPosition) {
            setButtonPosition(clickedButtonPosition);
        }
        setIsMenuOpen((prev) => (prev = !prev));
    };
    
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={styles.nav}>
            {(buttonPosition === "left" || isMenuOpen) && (
                <MenuButton
                    isMenuOpen={isMenuOpen}
                    position={"left"}
                    toggleMenu={toggleMenu}
                />
            )}
            {(buttonPosition === "right" || isMenuOpen) && (
                <MenuButton
                    isMenuOpen={isMenuOpen}
                    position={"right"}
                    toggleMenu={toggleMenu}
                />
            )}
            <NavigationLinks
                isMenuOpen={isMenuOpen}
                position={buttonPosition}
                closeMenu={closeMenu}
            />
        </nav>
    );
};

export default Navigation;
