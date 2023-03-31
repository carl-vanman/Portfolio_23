import React from "react";

import styles from "./Banner.module.css";
import utils from "../../styles/utils.module.css";
import Section from "../section/Section";

const Banner = () => {
    return (
        <Section style={{paddingTop: "0px"}}>
            <h3 className={`${utils.tag_text} ${styles.text}`}>
                - Developer -
            </h3>
        </Section>
    );
};

export default Banner;
