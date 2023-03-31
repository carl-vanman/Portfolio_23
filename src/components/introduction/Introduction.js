import React, {useState, useEffect} from "react";

import useScrollPosition from "@/hooks/useScrollPosition";

import Section from "../section/Section";
import IntroductionHeader from "./IntroductionHeader";
import IntroductionHeaderBottom from "./IntroductionHeaderBottom";

import styles from "./Introduction.module.css";
import IntroductionContent from "./IntroductionContent";

import { useInView } from 'react-intersection-observer';


const Introduction = () => {
    const { ref, inView } = useInView({
        threshold: 0,
      });
    const [scrollPosition] = useScrollPosition(inView);

    const exitTranslateDuration = 0.05;
    const exitTranslateSlow = scrollPosition * exitTranslateDuration * 2;
    const exitTranslateFast = scrollPosition * exitTranslateDuration * 3;

    const initOpacity = 1;
    const exitOpacityDuration = 0.0015;
    const exitOpacity = initOpacity - scrollPosition * exitOpacityDuration;

    return (
        <Section id={"home"}>
            <div ref={ref} className={styles.wrapper}>
                <IntroductionHeader exitTranslateSlow={exitTranslateSlow} exitOpacity={exitOpacity} />
                <IntroductionContent exitTranslateSlow={exitTranslateSlow} exitOpacity={exitOpacity} inView={inView} />
                <IntroductionHeaderBottom exitTranslateSlow={exitTranslateSlow} exitTranslateFast={exitTranslateFast} exitOpacity={exitOpacity} />
            </div>
        </Section>
    );
};

export default Introduction;
