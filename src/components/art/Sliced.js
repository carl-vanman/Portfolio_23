import React from "react";

import Image from "next/image";
import Section from "../section/Section";

import styles from "./Sliced.module.css";

import eyes from "../../../public/images/art/agedEyesFrame.png";

const Lines = [9, 7, 5, 3, 1, 0.5, 1.1, 3.1, 5.1, 7.1, 9.1];

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
                {/* <div className={styles.lines_container}>
                    {Lines.map((lineInitHeight) => (
                        <div key={lineInitHeight} />
                    ))}
                </div> */}
            </div>
        </Section>
    );
};

export default Sliced;
