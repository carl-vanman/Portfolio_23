import Navigation from "@/components/navigation/Navigation";
import Head from "next/head";

import { Be_Vietnam_Pro } from "@next/font/google";
import { Noto_Sans } from "@next/font/google";

const vietnam = Be_Vietnam_Pro({
    variable: "--primary-font",
    weight: ["400"],
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
            <main className={`${vietnam.variable} ${noto.variable}`}>
                <Navigation />
            </main>
        </>
    );
}
