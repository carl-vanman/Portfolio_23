import React from 'react'

import styles from "./Section.module.css"

const Section = ({children, props}) => {
  return (
    <section {...props} className={styles.container}>
    {children}
</section>
  )
}

export default Section