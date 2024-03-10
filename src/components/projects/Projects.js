import React from 'react';
import Section from '../section/Section';

import ProjectsTable from './ProjectsTable';
import styles from './Projects.module.css';
import utils from '../../styles/utils.module.css';

import nextjs from '../../../public/images/icons/next.png';
import contentful from '../../../public/images/icons/contentful.png';
import githubActions from '../../../public/images/icons/githubActions.png';
import azure from '../../../public/images/icons/azure.png';
import react from '../../../public/images/icons/react.png';
import expo from '../../../public/images/icons/expo.png';
import spotify from '../../../public/images/icons/spotify.png';
import tailwind from '../../../public/images/icons/tailwind.png';
import firebase from '../../../public/images/icons/firebase.png';
import vercel from '../../../public/images/icons/vercel.png';
import typescript from '../../../public/images/icons/typescript.png';

const projectList = [
  {
    id: '1',
    heading: 'Confirmation Journey',
    subHeading: 'Revolutionizing Tradition',
    about:
      'We digitalized the confirmation journey for our client, crafting a full-stack solution. Utilizing Next.js 13, Tailwind for styling, along with Firebase for a robust backend, we innovated the traditional confirmation process. Implementing multi-level role-based access control, cookie-based session management, and deploying via Vercel, we delivered an administration and confirmands web app. This marks a milestone in digital engagement for congregations.',
    stackItems: [
      { altText: 'Nextjs', icon: nextjs },
      { altText: 'Tailwind', icon: tailwind },
      { altText: 'Typescript', icon: typescript },
      { altText: 'Firebase', icon: firebase },
      { altText: 'Vercel', icon: vercel },
    ],
    links: [
      {
        text: 'www.konfaappen.vercel.app',
        url: 'https://www.konfaappen.vercel.app',
      },
    ],
  },
  {
    id: '2',
    heading: 'Garrison',
    subHeading: 'Utilizing Modern Technologies',
    about:
      "Garrison.se was developed by me and small team. The website was built using Next.js, Contentful, and automatic deployments to Azure via Github Actions. The project showcases the team's expertise and efficient use of modern technologies.",
    stackItems: [
      { altText: 'Nextjs', icon: nextjs },
      { altText: 'ContentFul', icon: contentful },
      { altText: 'Github Actions', icon: githubActions },
      { altText: 'Azure', icon: azure },
    ],
    links: [{ text: 'www.garrison.se', url: 'https://www.garrison.se' }],
  },
  {
    id: '3',
    heading: "Catch 'Em All",
    subHeading: "Let's Build an Mobile App",
    about:
      "As part of our examination project at IT-Högskolan last summer, my friend Christos Eteoglou and I developed a Pokédex app. Built with React Native and Expo, our app allows users to easily search and view information about various Pokémon species. Although it's not yet ready for deployment, we're happy with the result.",
    stackItems: [
      { altText: 'React Native', icon: react },
      { altText: 'Expo', icon: expo },
    ],
    links: [
      {
        text: 'www.github.com/pokedex',
        url: 'https://github.com/christoseteoglou/pokedex',
      },
      {
        text: 'www.christoseteoglou.com',
        url: 'https://www.christoseteoglou.com/',
      },
    ],
  },

  {
    id: '4',
    heading: 'The Old Way',
    subHeading: 'React Class Component',
    about:
      'During a Codecademy course, I built a website using the old way of Class Components. The website allows users to search the Spotify library, create a custom playlist, and save it to their Spotify account. My goal was to explore and learn more about how React was written before all major changes to the library.',
    stackItems: [
      { altText: 'React', icon: react },
      { altText: 'Spotify API', icon: spotify },
    ],
    links: [
      {
        text: 'www.github.com/jammming',
        url: 'https://github.com/carl-vanman/Jammming',
      },
    ],
  },
];

const Projects = () => {
  return (
    <Section id={'projects'}>
      <h2 className={`${utils.xl_heading}`}>Projects</h2>
      <p className={`${utils.body_text}`}>
        Below you find a selection of projects I have enjoyed building.
      </p>
      <ProjectsTable projectList={projectList} />

      {/* <button className={`${utils.body_text} ${styles.load_more_button}`}>Load More</button> */}
    </Section>
  );
};

export default Projects;
