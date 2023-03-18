import React from "react";
import Section from "../section/Section";

import styles from "./Banner.module.css";
import utils from "../../styles/utils.module.css";
import useScrollPosition from "@/hooks/useScrollPosition";

const Banner = () => {
    const [scrollPosition] = useScrollPosition();

    const exitScaleDuration = 0.2;
    const exitScale = scrollPosition * exitScaleDuration * 2 * 0.7;

    const initOpacity = 4;
    const exitOpacityDuration = 0.0036;
    const exitOpacity = initOpacity - scrollPosition * exitOpacityDuration;

    return (
        <Section style={{ gridColumn: "1/-1" }}>
            <div 
                className={`${styles.bottom_banner}`} 
                style= {{
                    transform: `scale(${exitScale}%) translateY(${exitScale * 0.07}px)`,
                    opacity: `${exitOpacity}`,
                }}
            >
                <div className={styles.dummy_spacer} />
                <h3 
                    className={`${utils.xxl_heading}`}
                >
                    DEVELOPER * DEVELOPER * DEVELOPER
                </h3>
            </div>
        </Section>
    );
};

export default Banner;
