import React, { useState } from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleOpenClose = () => setIsMenuOpen(prev => prev = !prev)

  return (
    <nav className={styles.nav}>
        <button className={styles.menu_btn} onClick={() => handleOpenClose()}>
            <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
            <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : styles.close}`}>
           
        </ul>
    </nav>
  )
}

export default Navigation