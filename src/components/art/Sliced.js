import React, {useState, useEffect} from "react";

import Image from "next/image";
import Section from "../section/Section";

import styles from "./Sliced.module.css";

import eyes from "../../../public/images/art/eyesInColor2.png";

const divs = [9, 7, 5, 3, 1, 0, 1.1, 3.1, 5.1, 7.1, 9.1];

const Sliced = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


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
                <div className={styles.lines_container}>
                    {divs.map((div) => (
                        <div key={div} style={{height:`${div+scrollPosition*0.013}px`}} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Sliced;
