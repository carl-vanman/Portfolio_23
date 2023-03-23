import React from "react";

import styles from "./Banner.module.css";
import utils from "../../styles/utils.module.css";

const Banner = () => (
    <h3 className={`${utils.tag_text} ${styles.text}`}>
        DEVELOPER * DEVELOPER * DEVELOPER
    </h3>
);

export default Banner;
