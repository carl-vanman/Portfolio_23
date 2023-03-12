import React, { useState, useEffect } from "react";
import Section from "../section/Section";

import styles from "./Projects.module.css";
import utils from "../../styles/utils.module.css";

/*  Project
    id: 1,
        title: "",
        subTitle: "",
        about: ""
        stackItems: [],
        links: [],
*/
const projectList = [
    {
        id: 1,
        title: "Project Title1",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lorem eu ante dignissim porta vel sed turpis. Proin interdum dolor e felis volutpat, eget pharetra ipsum aliquam. Mauris eu metus in mauris dignissim sodales. Fusce vel elit a.",
        stackItems: ["stackItem1", "stackItem2", "stackItem3"],
        links: ["link1", "link2"],
    },
    {
        id: 2,
        title: "Project Title2",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lorem eu ante dignissim porta vel sed turpis. Proin interdum dolor e felis volutpat, eget pharetra ipsum aliquam. Mauris eu metus in mauris dignissim sodales. Fusce vel elit a.",
        stackItems: ["stackItem1", "stackItem2", "stackItem3"],
        links: ["link1", "link2"],
    },
   
    {
        id: 3,
        title: "Project Title3",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lorem eu ante dignissim porta vel sed turpis. Proin interdum dolor e felis volutpat, eget pharetra ipsum aliquam. Mauris eu metus in mauris dignissim sodales. Fusce vel elit a.",
        stackItems: ["stackItem1", "stackItem2", "stackItem3"],
        links: ["link1", "link2"],
    },
    {
        id: 4,
        title: "Project Title4",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lorem eu ante dignissim porta vel sed turpis. Proin interdum dolor e felis volutpat, eget pharetra ipsum aliquam. Mauris eu metus in mauris dignissim sodales. Fusce vel elit a.",
        stackItems: ["stackItem1", "stackItem2", "stackItem3"],
        links: ["link1", "link2"],
    },
    {
        id: 5,
        title: "Project Title5",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lorem eu ante dignissim porta vel sed turpis. Proin interdum dolor e felis volutpat, eget pharetra ipsum aliquam. Mauris eu metus in mauris dignissim sodales. Fusce vel elit a.",
        stackItems: ["stackItem1", "stackItem2", "stackItem3"],
        links: ["link1", "link2"],
    },
];

const ProjectItem = ({ project, arrayIndex, initSteps, rightClick }) => {

    const [ imageIndex, setImageIndex ] = useState(arrayIndex);

    const [ stepsFromInView, setStepsFromInView ] = useState(initSteps);

    const [ dynamicZindex, setDynamicZindex ] = useState(0);

    const PROJECT_WIDTH = 100;

    useEffect(() => {
        //-3 måste räknas ut från array lenght
        if( stepsFromInView === -1 || stepsFromInView === 0 || stepsFromInView === 1){
            setDynamicZindex(1);
        }else{
            setDynamicZindex(0);
        }

        if(stepsFromInView === -3){
            setStepsFromInView(2);
        }


    }, [stepsFromInView])

    useEffect(() => {
        if( rightClick > 0 ){
            setStepsFromInView( prev => prev -1 )
        }

    },[rightClick])

    return (
        <article 
            className={`${styles.image__container}`}
            style={{
                transform: `translateX(${stepsFromInView * PROJECT_WIDTH}%)`,
                zIndex: `${dynamicZindex}`
            }}
        >
            <div className={`${styles.testBorder} ${stepsFromInView !== 0 ? styles.add__opacity : ""}`}>
                <h2 className={`${utils.md_heading}`}>{project.title}</h2>
                <h3 className={`${utils.sm_heading_light}`}>About</h3>
                <div className={styles.project_description_container}>
                    <p className={`${utils.body_text}`}>
                        {project.about}
                    </p>
                </div>
                <div className={utils.lg_spacer} />
                <div>
                    <h3 className={`${utils.sm_heading_light}`}>Stack</h3>
                    <ul className={styles.project_stack}>
                        <li className={styles.stack_item} />
                        <li className={styles.stack_item} />
                        <li className={styles.stack_item} />
                    </ul>
                    <div className={utils.lg_spacer} />

                    <h3 className={`${utils.sm_heading_light}`}>LINKS</h3>
                    <ul>
                        <li>
                            <a href="#">www.toSomeWebSite.se</a>
                        </li>
                    </ul>
            </div>
            
            </div>
        </article>
    );
};



const Projects = () => {
    const [loadingGallery, setLoadingGallery] = useState(true);
    const [projectGallery, setProjectGallery] = useState(null);

    const [galleryTranslateHorisontal] = useState();

    const [rightClick, setRightClick] = useState(0);

    function moveRight() {
        setRightClick((prev) => prev + 1);
    }

    useEffect(() => {
        setProjectGallery(projectList);
        setLoadingGallery(false);
    }, []);

    if (loadingGallery) {
        return <p>Loading...</p>;
    }

    return (
        <Section /* style={{ gridColumn: "2/-1" }} */>

            <div className={styles.projects_wrapper}>

                <h2 className={`${utils.lg_heading}`}>Projects</h2>

                <div 
                    className={styles.projects_window}
                    style={{
                        transform: `translate(${galleryTranslateHorisontal}%)`,
                    }}
                >
                    { projectGallery && (
                        projectGallery.map( (project, index) => (
                            <ProjectItem 
                                key={project.id}
                                project={project} 
                                arrayIndex={index} 
                                initSteps={
                                    index === projectGallery.length - 1 
                                    ? -1
                                    : index
                                }
                                rightClick={rightClick}
                            />
                        ))
                    )}
                </div>
            </div>
            <button className={styles.btn} onClick={moveRight}>
                right
            </button>
        </Section>
    );
};

export default Projects;
