import React from "react";

import Image from "next/image";

import styles from "./Projects.module.css";
import utils from "../../styles/utils.module.css";

const TableItem = ({ project }) => {
    const { id, heading, subHeading, about, stackItems, links } = project;

    const iconStack = stackItems.map(item => (
        <li key={item.altText}>
            <div className={styles.icon_wrapper}>
                <Image
                    className={styles.icon_image}
                    alt={item.altText}
                    src={item.icon}
                    fill
                    sizes="100%"
                />
            </div>
        </li>
    ))

    const linkList = links.map( link => (
        <li key={link.url}>
            <a className={styles.link} href={link.url}>{link.url}</a>
        </li>
    ))

    return (
        <>
            <div className={styles.project_count}>
                <h2 className={utils.tag_text}>No. {id}</h2>
            </div>
            <article className={`${styles.project_card}`}>
                <h2 className={`${utils.lg_heading}`}>{heading}</h2>
                <h3 className={`${utils.md_heading_light}`}>{subHeading}</h3>

                <p className={`${utils.body_text}`}>{about}</p>

                <div className={utils.lg_spacer} />

                <div className={styles.project_card_footer}>
                    <div>
                        <h3 className={`${utils.tag_text}`}>Stack</h3>
                        <ul className={styles.project_card_stack}>
                            {iconStack}
                        </ul>
                    </div>

                    <div>
                        <h3 className={`${utils.tag_text}`}>LINKS</h3>
                        <ul className={styles.link_container}>
                            {linkList}
                        </ul>
                    </div>
                </div>
            </article>
        </>
    );
};

export default TableItem;