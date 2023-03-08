import React from "react";
import Section from "../section/Section";

import styles from "./Projects.module.css";
import utils from "../../styles/utils.module.css";

const Projects = () => {
    return (
        <Section>
            <div className={styles.wrapper}>
                <h2 className={`${utils.lg_heading}`}>Projects</h2>
                <div className={styles.projects}>
                    <article className={`${styles.project}`}>
                        <h2 className={`${utils.md_heading} ${styles.project_title}`}>Project Title</h2>
                        <h3 className={`${utils.sm_heading} ${styles.sub_heading}`}>About</h3>
                        <div className={styles.project_description_container}>
                            <p className={`${utils.body_text} ${styles.project_description}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed nec lorem eu ante dignissim porta vel sed
                                turpis. Proin interdum dolor eu felis volutpat, eget
                                pharetra ipsum aliquam.<br/>
                                Mauris eu metus in mauris dignissim sodales. Fusce vel elit a velit tincidunt
                                dictum. Sed quis massa eu nibh ullamcorper bibendum.
                            </p>
                        </div>
                        <div className={styles.divider} />
                        <h3 className={`${utils.sm_heading} ${styles.sub_heading}`}>
                            Stack
                        </h3>
                        <div className={styles.project_stack}>
                            <div className={styles.stack_item} />
                            <div className={styles.stack_item} />
                            <div className={styles.stack_item} />
                            <div className={styles.stack_item} />
                            <div className={styles.stack_item} />
                            <div className={styles.stack_item} />
                        </div>
                    </article>
                    
                </div>
            </div>
        </Section>
    );
};

export default Projects;
