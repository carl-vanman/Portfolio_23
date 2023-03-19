import React from 'react'

import Image from 'next/image'
import Section from '../section/Section'
import smile from "../../../public/images/art/smileyRefined.png";
import styles from "./Smile.module.css"
import utils from "../../styles/utils.module.css";


const Smile = () => {
  return (
    <Section style={{display: "flex", placeItems: "center", paddingTop: "0px"}}>
        <div className={styles.wrapper}>
            <div className={styles.text} style={{display: "flex"}}>
                <h2 className={utils.xl_heading}>S</h2>
                <h2 className={utils.xl_heading}>M</h2>
                <h2 className={utils.xl_heading}>i</h2>
                <h2 className={utils.xl_heading}>L</h2>
                <h2 className={utils.xl_heading}>E</h2>
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
  )
}

export default Smile