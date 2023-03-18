import React from "react";

import Image from "next/image";
import Section from "../section/Section";

import styles from "./Sliced.module.css";

import eyes from "../../../public/images/art/eyes.png";
import useScrollPosition from "@/hooks/useScrollPosition";

const Lines = [9, 7, 5, 3, 1, 0.5, 1.1, 3.1, 5.1, 7.1, 9.1];

const Sliced = () => {
    const [scrollPosition] = useScrollPosition()

    return (
        <Section style={{padding: "0"}}>
            <div className={styles.art_container} style={{
                        transform: `translateY(${100-scrollPosition*0.1}px)`
                    }}>
                <Image
                    className={styles.art_image}
                    alt="Eyes close-up with text lucky printed on forhead"
                    src={eyes}
                    fill
                    sizes="100%"
                />
                <div className={styles.lines_container}>
                    {Lines.map((lineInitHeight) => (
                        <div key={lineInitHeight} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Sliced;
