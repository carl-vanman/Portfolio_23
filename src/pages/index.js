import Navigation from "@/components/navigation/Navigation";
import Head from "next/head";

//import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

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
            <main>
                <Navigation />
            </main>
        </>
    );
}
