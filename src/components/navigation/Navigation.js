import React, { useState } from 'react'
import Image from 'next/image'

import styles from "./Navigation.module.css"
import utils from "../../styles/utils.module.css"

import githubLight from "../../../public/images/icons/githubLight.png"
import githubDark from "../../../public/images/icons/githubDark.png"
import linkedinLight from "../../../public/images/icons/linkedinLight.png"
import linkedinDark from "../../../public/images/icons/linkedinDark.png"

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [ isBtnPositionRight, setBtnBtnPositionRight ] = useState(true)

    const handleOpenClose = () => setIsMenuOpen(prev => prev = !prev)

    const closeMenu = () => setIsMenuOpen(false)

    const closeMenuToLeft = () => setBtnBtnPositionRight(false)
    const closeMenuToRight = () => setBtnBtnPositionRight(true)
    
  return (
    <nav className={styles.nav}>
        { !isBtnPositionRight || isMenuOpen ?
            <button className={`${styles.menu_btn} ${styles.left}`} onClick={() => {handleOpenClose(); closeMenuToLeft() }}>
                <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
                <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
            </button> : <></>
        }
        { isBtnPositionRight || isMenuOpen ?
            <button className={`${styles.menu_btn} ${styles.right}`} onClick={() => {handleOpenClose(); closeMenuToRight()}}>
                <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
                <div className={`${isMenuOpen ? styles.close_state : styles.open_state}`} />
            </button> : <></>
        }
        <ul id={styles.menu_links} className={`${styles.menu_links} ${isBtnPositionRight ? styles.right : styles.left} ${isMenuOpen ? styles.open : styles.close}`}>
            <li onClick={() => closeMenu()} className={`${styles.menu_link_container} ${isMenuOpen ? styles.open_state : styles.close_state}`}>
                <a href='#' className={`${styles.menu_link} ${utils.link_text_light}`}>
                    Home
                </a>
            </li>
            <li onClick={() => closeMenu()} className={`${styles.menu_link_container} ${isMenuOpen ? styles.open_state : styles.close_state}`}>
                <a href='#' className={`${styles.menu_link} ${utils.link_text_light}`}>
                    Projects
                </a>
            </li>
            <li onClick={() => closeMenu()} className={`${styles.menu_link_container} ${isMenuOpen ? styles.open_state : styles.close_state}`}>
                <a href='#' className={`${styles.menu_link} ${utils.link_text_light}`}>
                    Experience
                </a>
            </li>
            <li onClick={() => closeMenu()} className={`${styles.menu_link_container} ${isMenuOpen ? styles.open_state : styles.close_state}`}>
                <a href='#' className={`${styles.menu_link} ${utils.link_text_light}`}>
                    Contact
                </a>
            </li>
            <li className={`${styles.menu_link_container}`}>
                <div className={styles.menu_link_divider} />
            </li>
            <li className={`${styles.menu_link_container} ${styles.socials} ${isMenuOpen ? styles.open_state : styles.close_state}`}>
                <a href='#' onClick={() => closeMenu()}>
                    <div className={styles.social}>
                        <Image
                            className={styles.social_image}
                            alt='Github'
                            src={linkedinLight}
                            fill
                            sizes="100%"
                        />
                    </div>
                </a>
                <a href='#' onClick={() => closeMenu()}>
                    <div className={styles.social}>
                        <Image
                            className={styles.social_image}
                            alt='Github'
                            src={githubLight}
                            fill
                            sizes="100%"
                        />
                    </div>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation