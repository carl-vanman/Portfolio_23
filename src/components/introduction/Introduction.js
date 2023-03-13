import React, { useState, useEffect } from "react";

import Section from "../section/Section";

import styles from "./Introduction.module.css";
import utils from "../../styles/utils.module.css";

const Introduction = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Section>
            <div className={styles.container}>
                <h2
                    className={`${utils.xxl_heading} ${styles.top_title}`}
                    style={{
                        transform: `translateX(-${scrollPosition * 0.1}px)`,
                        opacity: `${1 - scrollPosition * 0.0015}`,
                    }}
                >
                    Creative
                </h2>
                <article className={`${styles.about_container}`}>
                    <h3 className={`${utils.lg_heading}`}>
                        Innovative
                    </h3>
                    <div className={`${styles.marquee}`}>
                        <ul className={styles.marquee_content}>
                            <li>
                                <h4 className={`${utils.md_heading_light}`}>
                                    Blending Technical Knowledge and Creative Skills to
                                    Create Innovative Solutions{" "}
                                </h4>
                            </li>
                        </ul>
                        <ul className={styles.marquee_content} aria-hidden="true">
                            <li>
                                <h4 className={`${utils.md_heading_light}`}>
                                    Blending Technical Knowledge and Creative Skills to
                                    Create Innovative Solutions{" "}
                                </h4>
                            </li>
                        </ul>
                    </div>
                    <p className={`${utils.body_text}`}>
                        My name is Carl, a humble and kind person with a
                        passion for creativity and technology. I love blending my technical knowledge and
                        creative skills into my work.
                    </p>
                    <aside
                        className={`${utils.tag_text}`}
                    >{`[ Introduction ]`}</aside>
                </article>
                <div
                    className={`${styles.bottom_title}`}
                >
                    <h2 className={`${utils.xxl_heading}`}
                        style={{
                            transform: `translateX(${scrollPosition * 0.05}px)`,
                            opacity: `${1 - scrollPosition * 0.0015}`,
                        }}
                    >
                        Fro<span className={`${utils.xxl_heading} ${styles.text_outlined}`}>nt</span>
                    </h2>
                    <h2 className={`${utils.xxl_heading} ${styles.text_outlined}`}
                    style={{
                        transform: `translateX(${scrollPosition * 0.15}px)`,
                        opacity: `${1 - scrollPosition * 0.0015}`,
                    }}
                    >
                        <span
                            className={`${utils.xxl_heading} ${styles.text_outlined}`}
                        >
                            {"- "}
                        </span>
                        End
                    </h2>
                </div>   
            </div>
        </Section>
    );
};

export default Introduction;
