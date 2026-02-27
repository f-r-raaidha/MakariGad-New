import "./globals.css";
import {Poppins, Montserrat, Inter} from "next/font/google";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-links",
});


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-heading",     // used in globals.css (body text)
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-body",  // used in globals.css (headings)
});


export const metadata = {
    title: "Makarigad Pvt",
    description: "Official Website For Makarigad Pvt",
};

// ${geistSans.variable} ${geistMono.variable}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={` ${poppins.variable} ${montserrat.variable} antialiased   w-full min-h-screen flex flex-col`}
        >

        <Header/>
        <main className={" flex-1 w-full"}>
            <h1>HEADING 1</h1>
            <h2>HEADING 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, vel?</p>
            {children}
        </main>
        <Footer/>

        </body>
        </html>
    );
}
