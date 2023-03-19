import React from "react";

import Section from "@/components/section/Section";

import utils from "../../styles/utils.module.css";
import styles from "./Experience.module.css";

const langueages = ["HTML", "CSS", "JavaScript", "Python", "Java"];
const frameworks = [
    "Next.js",
    "React Native",
    "Gatsby",
    "SAPui5",
    "React.js",
    "Vue.js",
    "Node.js",
];
const miscellaneous = ["GraphQL", "RESTful API", "GIT"];
const cloudServices = ["Microsoft Azure"];
const cms = ["Contentful", "WordPress"];
const designTools = ["Figma"];

const Experience = () => {
    return (
        <Section>
            <h2 className={`${utils.xl_heading} ${styles.heading}`}>Experience</h2>
            {<p className={`${utils.body_text} ${styles.intro}`}>
                I have had the opportunity to work with many well-known
                programming languages, frameworks, and techniques.
            </p>}
            <div className={styles.firstSection}>  
                <div className={`${styles.column} ${styles.firstColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>
                            From Past to Present
                        </h3>
                    </div>
                </div>

                <div className={`${styles.column} ${styles.secondColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>
                            Languages
                        </h3>
                        {langueages.map((langueage) => (
                            <p key={langueage} className={utils.body_text}>
                                {langueage}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={`${styles.column} ${styles.thirdColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>
                            Frameworks and Libraries
                        </h3>
                        {frameworks.map((framework) => (
                            <p key={framework} className={utils.body_text}>
                                {framework}
                            </p>
                        ))}
                    </div>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>
                            Miscellaneous
                        </h3>
                        {miscellaneous.map((miscellaneous) => (
                            <p key={miscellaneous} className={utils.body_text}>
                                {miscellaneous}
                            </p>
                        ))}
                    </div>
                </div>
                
                <div className={`${styles.column} ${styles.fourthColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>
                            Cloud Services
                        </h3>
                        {cloudServices.map((cloudService) => (
                            <p key={cloudService} className={utils.body_text}>
                                {cloudService}
                            </p>
                        ))}
                    </div>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>CMS</h3>
                        {cms.map((cms) => (
                            <p key={cms} className={utils.body_text}>
                                {cms}
                            </p>
                        ))}
                    </div>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>
                            Design Tools
                        </h3>
                        {designTools.map((designTool) => (
                            <p key={designTool} className={utils.body_text}>
                                {designTool}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
