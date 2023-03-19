import React from "react";
import Section from "../section/Section";

import ProjectsTable from "./ProjectsTable";
import utils from "../../styles/utils.module.css";

import nextjs from "../../../public/images/icons/next.png";
import contentful from "../../../public/images/icons/contentful.png";
import githubActions from "../../../public/images/icons/githubActions.png";
import azure from "../../../public/images/icons/azure.png";

const projectList = [
    {
        id: "1",
        heading: "Garrison",
        subHeading: "Utilizing Modern Technologies",
        about: "Garrison.se was developed by me and small team. The website was built using Next.js, Contentful, and automatic deployments to Azure via Github Actions. The project showcases the team's expertise and efficient use of modern technologies.",
        stackItems: [
            {altText:"Nextjs", icon: nextjs}, 
            {altText:"ContentFul", icon: contentful},
            {altText:"Github Actions", icon: githubActions},
            {altText:"Azure", icon: azure}
        ],
        links: [{url:"www.garrison.se"}],
    },
    {
        id: "2",
        heading: "Project Title2",
        subHeading: "Short Sub Heading",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lorem eu ante dignissim porta vel sed turpis. Proin interdum dolor e felis volutpat, eget pharetra ipsum aliquam. Mauris eu metus in mauris dignissim sodales. Fusce vel elit a.",
        stackItems: [],
        links: [],
    },

    {
        id: "3",
        heading: "Project Title3",
        subHeading: "Short Sub Heading",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lorem eu ante dignissim porta vel sed turpis. Proin interdum dolor e felis volutpat, eget pharetra ipsum aliquam. Mauris eu metus in mauris dignissim sodales. Fusce vel elit a.",
        stackItems: [],
        links: [],
    },
];

const Projects = () => {
    return (
        <Section>
            <h2 className={`${utils.xl_heading}`}>Projects</h2>
            <p className={`${utils.body_text}`}>
                Below you find a selection of projects I have enjoyed building.
            </p>
            <ProjectsTable projectList={projectList} />
        </Section>
    );
};

export default Projects;

{/* {scrollPosition > 1300 && (
    <style jsx global>{`
        :root {
            --primary-color-rgb: 250 250 250;
            --secondary-color-rgb: 24 23 24;
            transition: background-color 0.3s ease-out;
        }
    `}</style>
)} */}