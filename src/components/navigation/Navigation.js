import React, { useState } from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleOpenClose = () => setIsMenuOpen(prev => prev = !prev)

  return (
    <nav>
        <button className={styles.menu_btn} onClick={() => handleOpenClose()}>
            <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
            <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
        </button>
    </nav>
  )
}

export default Navigation