import React, {useState, useEffect} from 'react'

const useScrollPosition = (inView = true) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        inView
            ? window.addEventListener("scroll", handleScroll, { passive: true })
            : window.removeEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [inView]);

    return [ scrollPosition ]
}

export default useScrollPosition