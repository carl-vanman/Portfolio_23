import React, {useState, useEffect} from 'react'

import styles from "./ScrollProgressBar.module.css"

const ScrollProgressBar = () => {
    const [scrolled, setScrolled] = useState()

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrolled(() => (winScroll / height) * 100)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<div style={{width: `${scrolled}%`}} className={styles.progressScrollBar}/>)

}

export default ScrollProgressBar