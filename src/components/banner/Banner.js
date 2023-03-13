import React from 'react'
import Section from '../section/Section'

import styles from "./Banner.module.css";
import utils from "../../styles/utils.module.css";

const Banner = () => {
  return (
    <Section style={{gridColumn: "1/-1", paddingTop:"0px"}}>
        <div className={`${styles.bottom_banner}`}>
            <div className={styles.dummy_spacer} />
            <h3 className={`${utils.xxl_heading}`}>DEVELOPER * DEVELOPER * DEVELOPER</h3>
        </div>
    </Section>
  )
}

export default Banner