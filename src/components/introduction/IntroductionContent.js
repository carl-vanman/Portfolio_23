import React from "react";

import styles from "./Introduction.module.css";
import utils from "../../styles/utils.module.css";

const IntroductionContent = ({ exitTranslateSlow, exitOpacity }) => {
    return (
        <article
            className={`${styles.content_container}`}
            style={{
                transform: `translateY(${exitTranslateSlow}px)`,
                opacity: `${exitOpacity}`,
            }}
        >
            <h3 className={`${utils.lg_heading}`}>Innovative</h3>
            <div className={styles.content_rotatingTextCarousel}>
                <h4 className={`${utils.md_heading_light} ${styles.dummy}`}>
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
                <h4 className={`${utils.md_heading_light} ${styles.side_back}`}>
                    to Develop{/* Formulate */}
                </h4>
                <h4 className={`${utils.md_heading_light} ${styles.side_top}`}>
                    Beautiful Solutions.
                </h4>
            </div>
            <p className={`${utils.body_text}`}>
                My name is Carl, a humble and kind person with a passion for
                creativity and technology. I love blending my technical
                knowledge and creative skills into my work.
            </p>
            {/* <p className={`${utils.tag_text} ${styles.content_tag}`}>{"[ Introduction ]"}</p> */}
        </article>
    );
};

export default IntroductionContent;
