import React from 'react'

import { Be_Vietnam_Pro } from "@next/font/google";
import { Noto_Sans } from "@next/font/google";

import Head from "next/head";
import Navigation from "@/components/navigation/Navigation";
import Introduction from "@/components/introduction/Introduction";

import styles from "../styles/Home.module.css"
import Sliced from '@/components/art/Sliced';

const vietnam = Be_Vietnam_Pro({
    variable: "--primary-font",
    weight: ["300"],
    subsets:["latin"],
});

const noto = Noto_Sans({
    variable: "--secondary-font",
    weight: ["700"],
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
            <main className={`${styles.main_layout} ${vietnam.variable} ${noto.variable}`}>
                <Navigation />
                <Introduction />
                <Sliced />
            </main>
        </>
    );
}
