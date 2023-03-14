import React from "react";

import styles from "./Introduction.module.css";
import utils from "../../styles/utils.module.css";

import useScrollPosition from "@/hooks/useScrollPosition";

const IntroductionHeaders = ({ children }) => {
    const [scrollPosition] = useScrollPosition();

    const exitTranslateDuration = 0.05
    const exitTranslateSlow = scrollPosition * (exitTranslateDuration * 2)
    const exitTranslateFast = scrollPosition * (exitTranslateDuration * 3)

    const initOpacity = 1
    const exitOpacityDuration = 0.0015
    const exitOpacity = initOpacity - scrollPosition * exitOpacityDuration

    return (
        <>
            <h2
                className={`${utils.xxl_heading} ${styles.top_header}`}
                style={{
                    transform: `translateX(-${exitTranslateSlow}px)`,
                    opacity: `${exitOpacity}`,
                }}
            >
                Creative
            </h2>

            {children}
            
            <div className={`${styles.bottom_header}`}>
                <h2
                    className={`${utils.xxl_heading}`}
                    style={{
                        transform: `translateX(${exitTranslateSlow}px)`,
                        opacity: `${exitOpacity}`,
                    }}
                >
                    Fro
                    <span
                        className={`${utils.xxl_heading} ${styles.header_outlined}`}
                    >
                        nt
                    </span>
                </h2>
                <h2
                    className={`${utils.xxl_heading} ${styles.header_outlined}`}
                    style={{
                        transform: `translateX(${exitTranslateFast}px)`,
                        opacity: `${exitOpacity}`,
                    }}
                >
                    <span
                        className={`${utils.xxl_heading} ${styles.header_outlined}`}
                    >
                        {"- "}
                    </span>
                    End
                </h2>
            </div>
        </>
    );
};

export default IntroductionHeaders;
