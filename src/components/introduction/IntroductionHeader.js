import React from "react";

import styles from "./Introduction.module.css";
import utils from "../../styles/utils.module.css";

const IntroductionHeader = ({
    exitTranslateSlow,
    exitOpacity,
}) => {
    return (
        <h2
            className={`${utils.xxl_heading} ${styles.top_header}`}
            style={{
                transform: `translateX(-${exitTranslateSlow}px)`,
                opacity: `${exitOpacity}`,
            }}
        >
            Creative
        </h2>
    );
};

export default IntroductionHeader;
