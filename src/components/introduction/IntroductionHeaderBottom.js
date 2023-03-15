import React from "react";

import styles from "./Introduction.module.css";
import utils from "../../styles/utils.module.css";

const IntroductionHeaderBottom = ({
    exitTranslateSlow,
    exitTranslateFast,
    exitOpacity,
}) => {
    return (
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
    );
};

export default IntroductionHeaderBottom;
