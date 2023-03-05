import React from 'react'

import Image from 'next/image'
import Section from '../section/Section'

import styles from "./Sliced.module.css"

import sliced from "../../../public/images/art/sliced.png";

const Sliced = () => {
  return (
    <Section>
        <div className={styles.art_container}>
            <Image
                className={styles.art_image}
                alt="Eyes close-up with text lucky printed on forhead"
                src={sliced}
                fill
                sizes="100%"
            />
        </div>
    </Section>
  )
}

export default Sliced