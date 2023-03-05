import React from 'react'

import Image from 'next/image'
import Section from '../section/Section'

import styles from "./Sliced.module.css"

import eyes from "../../../public/images/art/eyes.png";

const divs = [1,2,3,4,5,6,7,8,9,10,11]

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
            <div className={styles.lines_container}>
                {divs.map( div =>  <div key={div}/>)}
            </div>
        </div>
    </Section>
  )
}

export default Sliced