import React from "react";

import Section from "../section/Section";

import useScrollPosition from "@/hooks/useScrollPosition";

import styles from "./Introduction.module.css";
import utils from "../../styles/utils.module.css";
import IntroductionHeaders from "./IntroductionHeaders";

const Introduction = () => {
    const [scrollPosition] = useScrollPosition();

    const exitTranslateDuration = 0.1
    const exitTranslate = scrollPosition * exitTranslateDuration

    const initOpacity = 1
    const exitOpacityDuration = 0.0015
    const exitOpacity = initOpacity - scrollPosition * exitOpacityDuration

    return (
        <Section>
            <div className={styles.introduction_wrapper}>
                <IntroductionHeaders>
                    <article
                        className={`${styles.about_container}`}
                        style={{
                            transform: `translateY(${exitTranslate}px)`,
                            opacity: `${exitOpacity}`,
                        }}
                    >
                        <h3 className={`${utils.lg_heading}`}>Innovative</h3>
                        <div className={styles.rotatingTextCarousel}>
                            <h4
                                className={`${utils.md_heading_light} ${styles.dummy}`}
                            >
                                Dummy
                            </h4>

                            <h4
                                className={`${utils.md_heading_light} ${styles.side_front}`}
                            >
                                Blending Technical
                            </h4>
                            <h4
                                className={`${utils.md_heading_light} ${styles.side_bottom}`}
                            >
                                Knowledge and Creativity
                            </h4>
                            <h4
                                className={`${utils.md_heading_light} ${styles.side_back}`}
                            >
                                to Formulate
                            </h4>
                            <h4
                                className={`${utils.md_heading_light} ${styles.side_top}`}
                            >
                                Beautiful Solutions.
                            </h4>
                        </div>
                        <p className={`${utils.body_text}`}>
                            My name is Carl, a humble and kind person with a
                            passion for creativity and technology. I love
                            blending my technical knowledge and creative skills
                            into my work.
                        </p>
                        <aside className={`${utils.tag_text}`}>
                            {`[ Introduction ]`}
                        </aside>
                    </article>
                </IntroductionHeaders>
            </div>
        </Section>
    );
};

export default Introduction;
