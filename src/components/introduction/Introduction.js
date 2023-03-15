import React from "react";

import useScrollPosition from "@/hooks/useScrollPosition";

import Section from "../section/Section";
import IntroductionHeader from "./IntroductionHeader";
import IntroductionHeaderBottom from "./IntroductionHeaderBottom";

import styles from "./Introduction.module.css";
import IntroductionContent from "./IntroductionContent";


const Introduction = () => {
    const [scrollPosition] = useScrollPosition();

  const exitTranslateDuration = 0.05;
  const exitTranslateSlow = scrollPosition * exitTranslateDuration * 2;
  const exitTranslateFast = scrollPosition * exitTranslateDuration * 3;

  const initOpacity = 1;
  const exitOpacityDuration = 0.0015;
  const exitOpacity = initOpacity - scrollPosition * exitOpacityDuration;


    return (
        <Section>
            <div className={styles.wrapper}>
                <IntroductionHeader exitTranslateSlow={exitTranslateSlow} exitOpacity={exitOpacity} />
                    <IntroductionContent exitTranslateSlow={exitTranslateSlow} exitOpacity={exitOpacity} />
                <IntroductionHeaderBottom exitTranslateSlow={exitTranslateSlow} exitTranslateFast={exitTranslateFast} exitOpacity={exitOpacity} />
            </div>
        </Section>
    );
};

export default Introduction;
