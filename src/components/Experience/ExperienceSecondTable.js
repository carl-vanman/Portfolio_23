import React from "react";

import utils from "../../styles/utils.module.css";
import styles from "./Experience.module.css";

const ExperienceSecondTable = ({ data }) => {
    const {
        workExperiences,
        educations,
        courses,
        onGoingCourses,
        aspirations,
    } = data;
    return (
        <div className={styles.secondTable_wrapper}>
            <div className={`${styles.column} ${styles.firstColumn}`}>
                <div className={`${styles.additionalRow}`}>
                    <h3 className={`${utils.tag_text}`}>Work</h3>
                    {workExperiences.map((workExperience, index) => (
                        <div key={workExperience.company}>
                            <p className={`${utils.body_text} ${styles.noMarginBottom}`}>
                                {workExperience.company.toUpperCase()}
                            </p>
                            <p className={`${utils.body_text} ${styles.noMarginBottom}`}>
                                {`${workExperience.startedAtYear}-${workExperience.endedAtYear}`}
                            </p>
                            <p className={utils.body_text}>
                                {workExperience.role}
                            </p>
                            {index < workExperiences.length -1 && <div className={styles.spacer} />}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.column} ${styles.secondColumn}`}>
                <div className={`${styles.additionalRow}`}>
                    <h3 className={`${utils.tag_text}`}>Education</h3>
                    {educations.map((education, index) => (
                        <div key={education.school}>
                            <p className={`${utils.body_text} ${styles.noMarginBottom}`}>
                                {education.school.toUpperCase()}
                            </p>
                            <p className={`${utils.body_text} ${styles.noMarginBottom}`}>
                                {`${education.startedAtYear}-${education.endedAtYear}`}
                            </p>
                            <p className={utils.body_text}>
                                {education.program}
                            </p>
                            {index < educations.length -1 && <div className={styles.spacer} />}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.column} ${styles.thirdColumn}`}>
                <div className={`${styles.additionalRow}`}>
                    <h3 className={`${utils.tag_text}`}>Online Courses</h3>
                    <p className={`${utils.body_text} ${styles.noMarginBottom}`}>CODECADEMY</p>
                    {courses.map((course) => (
                        <p key={course} className={utils.body_text}>
                            {course}
                        </p>
                    ))}
                </div>
                <div className={`${styles.additionalRow}`}>
                    <h3 className={`${utils.tag_text}`}>Ongoing Courses</h3>
                    <p className={`${utils.body_text} ${styles.noMarginBottom}`}>CODECADEMY</p>
                    {onGoingCourses.map((course) => (
                        <p key={course} className={utils.body_text}>
                            {course}
                        </p>
                    ))}
                </div>
            </div>

            <div className={`${styles.column} ${styles.fourthColumn}`}>
                <div className={`${styles.additionalRow}`}>
                    <h3 className={`${utils.tag_text}`}>My aspirations</h3>
                    {aspirations.map((aspiration, index) => (
                        <div key={aspiration}>
                            <p key={aspiration} className={utils.body_text}>
                                {aspiration}
                            </p>
                            {index < aspirations.length -1 && <div className={styles.spacer} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSecondTable;
