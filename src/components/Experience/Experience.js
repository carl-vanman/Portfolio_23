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
const workExperiences = [
    {
        company: "Garrison",
        startedAtYear: "2022",
        endedAtYear: "Now",
        role: "Front End Developer",
    },
    {
        company: "Consid",
        startedAtYear: "2021",
        endedAtYear: "2022",
        role: "6 Months Internship",
    },
    {
        company: "Probike",
        startedAtYear: "2017",
        endedAtYear: "2020",
        role: "Motorcycle Technician",
    },
    {
        company: "Salvation Tattoo",
        startedAtYear: "2014",
        endedAtYear: "2017",
        role: "Tattoo Artist",
    },
];
const educations = [
    {
        school: "Jensen Konvux",
        startedAtYear: "100p",
        endedAtYear: "",
        program: "Programmering 1, Java",
    },
    {
        school: "It-Högskolan",
        startedAtYear: "2020",
        endedAtYear: "2022",
        program: "Frontend Development",
    },
    {
        school: "Yrkesplugget",
        startedAtYear: "2015",
        endedAtYear: "2016",
        program: "Motorcycle Technician",
    },
    {
        school: "Design Gymnasiet",
        startedAtYear: "2006",
        endedAtYear: "2009",
        program: "Textile Design",
    },
];
const courses = ["Python 3", "JavaScript", "Asynchronous JavaScript", "Vue.js"];
const onGoingCourses = ["Data Structures and Algorithms "];
const aspirations = [
    "Expand my knowledge and experience in Javascript and Python.",
    "Study math, data structures, algorithms, and design principles to improve my problem-solving skills.",
    "Create interesting and innovative UI designs.",
    "Explore WebGL and Creative Coding",
    /* "Increase my overall knowledge to make informed decisions in development.", */
    "Learn Japanese.",
];

const Experience = () => {
    return (
        <Section>
            <h2 className={`${utils.xl_heading} ${styles.heading}`}>
                Experience
            </h2>
            {
                <p className={`${utils.body_text} ${styles.intro}`}>
                    I have had the opportunity to work with many well-known
                    programming languages, frameworks, and techniques.
                </p>
            }
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
                        <h3 className={`${utils.tag_text}`}>Languages</h3>
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
                        <h3 className={`${utils.tag_text}`}>Miscellaneous</h3>
                        {miscellaneous.map((miscellaneous) => (
                            <p key={miscellaneous} className={utils.body_text}>
                                {miscellaneous}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={`${styles.column} ${styles.fourthColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>Cloud Services</h3>
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
                        <h3 className={`${utils.tag_text}`}>Design Tools</h3>
                        {designTools.map((designTool) => (
                            <p key={designTool} className={utils.body_text}>
                                {designTool}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.line_between_sections} />

            <div className={styles.secondSection}>
                <div className={`${styles.column} ${styles.firstColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>Work</h3>
                        {workExperiences.map((workExperience) => (
                            <div key={workExperience.company}>
                                <p className={utils.body_text}>
                                    {workExperience.company.toUpperCase()}
                                </p>
                                <p className={utils.body_text}>
                                    {`${workExperience.startedAtYear}-${workExperience.endedAtYear}`}
                                </p>
                                <p className={utils.body_text}>
                                    {workExperience.role}
                                </p>
                                <div className={styles.spacer} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${styles.column} ${styles.secondColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>Education</h3>
                        {educations.map((education) => (
                            <div key={education.school}>
                                <p className={utils.body_text}>
                                    {education.school.toUpperCase()}
                                </p>
                                <p className={utils.body_text}>
                                    {`${education.startedAtYear}-${education.endedAtYear}`}
                                </p>
                                <p className={utils.body_text}>
                                    {education.program}
                                </p>
                                <div className={styles.spacer} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${styles.column} ${styles.thirdColumn}`}>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>Online Courses</h3>
                        <p className={utils.body_text}>CODECADEMY</p>
                        {courses.map((course) => (
                            <p key={course} className={utils.body_text}>
                                {course}
                            </p>
                        ))}
                    </div>
                    <div className={`${styles.additionalRow}`}>
                        <h3 className={`${utils.tag_text}`}>Ongoing Courses</h3>
                        <p className={utils.body_text}>CODECADEMY</p>
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
                        {aspirations.map((aspiration) => (
                            <div key={aspiration}>
                                <p key={aspiration} className={utils.body_text}>
                                    {aspiration}
                                </p>
                                <div className={styles.spacer} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
