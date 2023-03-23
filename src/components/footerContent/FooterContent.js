import React from "react";

import Image from "next/image";

import styles from "./FooterContent.module.css";

import githubLight from "../../../public/images/icons/githubLight.png";
import linkedinLight from "../../../public/images/icons/linkedinLight.png";

const socialLinks = [
    { altText: "Linkedin", href: "#", icon: linkedinLight },
    { altText: "Github", href: "#", icon: githubLight },
];

const FooterContent = () => {
    return (
        <ul className={styles.socials}>
            {socialLinks.map((social) => (
                <li key={social.altText}>
                    <a href={social.href}>
                        <div className={`${styles.social} ${styles[social.altText.toLowerCase()]}`}>
                            <Image
                                className={styles.social_image}
                                alt={social.altText}
                                src={social.icon}
                                fill
                                sizes="100%"
                            />
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default FooterContent;
