import React from "react";

import Section from "@/components/section/Section";

import utils from "../../styles/utils.module.css";
import styles from "./Experience.module.css";
import ExperienceFirstTable from "./ExperienceFirstTable";
import ExperienceSecondTable from "./ExperienceSecondTable";

const langueages = ["HTML", "CSS", "JavaScript", "Python", "Java"];
const frameworks = ["Next.js", "React Native", "Gatsby", "SAPui5", "React.js", "Vue.js", "Node.js"];
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
    "Study math, data structures, algorithms and design principles.",
    "Create interesting and innovative UI designs.",
    "Explore Three.js",
    "Learn Japanese",
];

const Experience = () => {
    
    return (
        <Section id={"experience"}>
            <h2 className={`${utils.xl_heading} ${styles.heading}`}>
                Experience
            </h2>
            <p className={`${utils.body_text} ${styles.intro}`}>
                I have had the opportunity to work with many well-known
                programming languages, frameworks, and techniques.
            </p>
            <ExperienceFirstTable data={{langueages, frameworks, miscellaneous, cloudServices, cms, designTools}}/>

            <div className={styles.line_between_sections} />

            <ExperienceSecondTable data={{workExperiences, educations, courses, onGoingCourses, aspirations}}/>
        </Section>
    );
};

export default Experience;
