import React from "react";

import Image from "next/image";

import styles from "./Navigation.module.css";
import utils from "../../styles/utils.module.css";

import githubLight from "../../../public/images/icons/githubLight.png";
import linkedinLight from "../../../public/images/icons/linkedinLight.png";

const links = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Experience", href: "#" },
    { label: "Contact", href: "#" },
];
const socialLinks = [
    { altText: "Linkedin", href: "#", icon: linkedinLight },
    { altText: "Github", href: "#", icon: githubLight },
];

const NavigationLinks = ({ isMenuOpen, position, closeMenu }) => {
    const menuState = isMenuOpen ? "open" : "close";

    return (
        <ul
            id={styles["menu_links"]}
            className={`${styles.menu_links} ${styles[position]} ${styles[menuState]}`}
        >
            {links.map((link) => (
                <li
                    key={link.label}
                    onClick={closeMenu}
                    className={`${styles.menu_link_container} ${styles[menuState]}`}
                >
                    <a
                        href={link.href}
                        className={`${styles.menu_link} ${utils.link_text_light}`}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
            <li className={`${styles.menu_link_container}`}>
                <div className={styles.menu_link_divider} />
            </li>
            <li
                className={`${styles.menu_link_container} ${styles.socials} ${styles[menuState]}`}
            >
                {socialLinks.map((social) => (
                    <a
                        key={social.altText}
                        href={social.href}
                        onClick={closeMenu}
                    >
                        <div className={styles.social}>
                            <Image
                                className={styles.social_image}
                                alt={social.altText}
                                src={social.icon}
                                fill
                                sizes="100%"
                            />
                        </div>
                    </a>
                ))}
            </li>
        </ul>
    );
};

export default NavigationLinks;
