import React from "react";

import Image from "next/image";
import Section from "../section/Section";
import smile from "../../../public/images/art/smileyRefined.png";
import styles from "./Smile.module.css";
import utils from "../../styles/utils.module.css";

import { useInView } from "react-intersection-observer";

const Smile = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    return (
        <Section
            style={{
                display: "flex",
                placeItems: "center",
                paddingTop: "0px",
                paddingBottom: "0px",
            }}
        >
            <div ref={ref} className={styles.wrapper}>
                <div className={styles.text} style={{ display: "flex" }}>
                    <h2 className={`${utils.xl_heading} ${(!inView ? styles.pause_animation: "")}`}>S</h2>
                    <h2 className={`${utils.xl_heading} ${(!inView ? styles.pause_animation: "")}`}>M</h2>
                    <h2 className={`${utils.xl_heading} ${(!inView ? styles.pause_animation: "")}`}>i</h2>
                    <h2 className={`${utils.xl_heading} ${(!inView ? styles.pause_animation: "")}`}>L</h2>
                    <h2 className={`${utils.xl_heading} ${(!inView ? styles.pause_animation: "")}`}>E</h2>
                </div>
                <Image
                    className={styles.smile_image}
                    alt="Smiley smiling"
                    src={smile}
                    fill
                    sizes="100%"
                />
            </div>
        </Section>
    );
};

export default Smile;
