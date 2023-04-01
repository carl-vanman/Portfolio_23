import React from "react";

import Image from "next/image";
import Section from "../section/Section";

import styles from "./Sliced.module.css";

import eyes from "../../../public/images/art/statueBnG.png";

const Sliced = () => {
    return (
        <Section>
            <div className={styles.art_container}>
                <Image
                    className={styles.art_image}
                    alt="Eyes close-up with text lucky printed on forhead"
                    src={eyes}
                    fill
                    sizes="100%"
                />
            </div>
        </Section>
    );
};

export default Sliced;
