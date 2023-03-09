import React from "react";
import Section from "../section/Section";

import styles from "./Projects.module.css";
import utils from "../../styles/utils.module.css";

//import Image from "next/image";
//import newWindowLight from "../../../public/images/icons/newWindowLight.png";

const Projects = () => {
    return (
        <Section>
            <div className={styles.wrapper}>
                <h2 className={`${utils.lg_heading}`}>Projects</h2>
                <div className={styles.projects}>
                    <article className={`${styles.project}`}>
                        {/* <ul className={styles.links}>
                            <li>
                                <div className={styles.link}>
                                    <Image
                                        className={styles.link_icon}
                                        alt="Open in new window"
                                        src={newWindowLight}
                                        fill
                                        sizes="100%"
                                    />
                                </div>
                            </li>
                        </ul> */}
                        <h2
                            className={`${utils.md_heading} ${styles.project_title}`}
                        >
                            garrison.se
                        </h2>
                        <h3
                            className={`${utils.sm_heading} ${styles.sub_heading}`}
                        >
                            About
                        </h3>
                        <div className={styles.project_description_container}>
                            <p
                                className={`${utils.body_text} ${styles.project_description}`}
                            >
                                Garrison.se is a website developed by a small
                                team, including yourself. The website was build
                                using Next.js, Contentful, and automatic
                                deployments to Azure via Github Actions. The
                                project showcases the team's expertise and
                                efficient use of modern technologies.
                            </p>
                        </div>
                        <div className={styles.divider} />
                        <h3
                            className={`${utils.sm_heading} ${styles.sub_heading}`}
                        >
                            Stack
                        </h3>
                        <ul className={styles.project_stack}>
                            <li className={styles.stack_item} />
                            <li className={styles.stack_item} />
                            <li className={styles.stack_item} />
                            <li className={styles.stack_item} />
                        </ul>
                    </article>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
