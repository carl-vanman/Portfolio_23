import React from 'react'

import { Noto_Sans } from "@next/font/google";
import { Open_Sans } from "@next/font/google";

import Head from "next/head";
import Navigation from "@/components/navigation/Navigation";
import Introduction from "@/components/introduction/Introduction";

import styles from "../styles/Home.module.css"
import Sliced from '@/components/art/Sliced';
import Projects from '@/components/projects/Projects';
import Banner from '@/components/banner/Banner';
import Smile from '@/components/art/Smile';
import Experience from '@/components/Experience/Experience';

const open_sans = Open_Sans({
    variable: "--primary-font",
    weight: ["400", "600", "700"],
    subsets:["latin"],
});

const noto = Noto_Sans({
    variable: "--secondary-font",
    weight: ["500", "700"],
    subsets:["latin"],
});

export default function Home() {
    return (
        <>
            <Head>
                <title>TrAShy</title>
                <meta name="description" content="Portfolio site" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main_layout} ${open_sans.variable} ${noto.variable}`}>
                <Navigation />
                <Introduction />
                <Banner />
                <Sliced />
                <Projects />
                <Smile />
                <Experience />
            </main>
        </>
    );
}
