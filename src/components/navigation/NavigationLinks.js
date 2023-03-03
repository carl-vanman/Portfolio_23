import React from "react";

import Image from "next/image";

import styles from "./Navigation.module.css";
import utils from "../../styles/utils.module.css";

import githubLight from "../../../public/images/icons/githubLight.png";
import linkedinLight from "../../../public/images/icons/linkedinLight.png";

const NavigationLinks = ({isMenuOpen, position, closeMenu}) => {

    const menuState = isMenuOpen ? "open" : "close"

    return (
        <ul
            id={styles.menu_links}
            className={`${styles.menu_links} ${styles[position]} ${styles[menuState]}`}
        >
            <li
                onClick={closeMenu}
                className={`${styles.menu_link_container} ${styles[menuState]}`}
            >
                <a
                    href="#"
                    className={`${styles.menu_link} ${utils.link_text_light}`}
                >
                    Home
                </a>
            </li>
            <li
                onClick={closeMenu}
                className={`${styles.menu_link_container} ${styles[menuState]}`}
            >
                <a
                    href="#"
                    className={`${styles.menu_link} ${utils.link_text_light}`}
                >
                    Projects
                </a>
            </li>
            <li
                onClick={closeMenu}
                className={`${styles.menu_link_container} ${styles[menuState]}`}
            >
                <a
                    href="#"
                    className={`${styles.menu_link} ${utils.link_text_light}`}
                >
                    Experience
                </a>
            </li>
            <li
                onClick={closeMenu}
                className={`${styles.menu_link_container} ${styles[menuState]}`}
            >
                <a
                    href="#"
                    className={`${styles.menu_link} ${utils.link_text_light}`}
                >
                    Contact
                </a>
            </li>
            <li className={`${styles.menu_link_container}`}>
                <div className={styles.menu_link_divider} />
            </li>
            <li
                className={`${styles.menu_link_container} ${styles.socials} ${styles[menuState]}`}
            >
                <a href="#" onClick={closeMenu}>
                    <div className={styles.social}>
                        <Image
                            className={styles.social_image}
                            alt="Github"
                            src={linkedinLight}
                            fill
                            sizes="100%"
                        />
                    </div>
                </a>
                <a href="#" onClick={closeMenu}>
                    <div className={styles.social}>
                        <Image
                            className={styles.social_image}
                            alt="Github"
                            src={githubLight}
                            fill
                            sizes="100%"
                        />
                    </div>
                </a>
            </li>
        </ul>
    );
};

export default NavigationLinks;
