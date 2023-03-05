import React from "react";

import Section from "../section/Section";

import styles from "./Introduction.module.css"
import utils from "../../styles/utils.module.css"

const Introduction = () => {
    return (
        <Section>
            <div className={styles.container}>
                <h2 className={`${utils.xl_heading} ${styles.top_title}`} >Carl</h2>
                <article className={`${styles.about_container}`}>
                    <h3 className={`${utils.sm_heading_light}`}>Front-end Developer</h3>
                    <p className={`${utils.body_text}`}>
                        I am a humble and kind person with a passion for
                        creativity and technology who loves blending my
                        technical expertise and creative skills into my work.
                    </p>
                    <aside className={`${utils.tag_text}`}>{`[ About ]`}</aside>
                </article>
                <div className={`${styles.bottom_title}`}>
                    <h2 className={`${utils.xl_heading}`}>Friend</h2>
                    <h2 className={`${utils.xl_heading}`}>
                        <span className={`${utils.xl_heading} ${styles.hyphen}`}>
                            {"- "}
                        </span>
                        man
                    </h2>
                </div>
            </div>
        </Section>
    );
};

export default Introduction;
