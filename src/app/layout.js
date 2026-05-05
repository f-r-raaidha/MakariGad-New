import "./globals.css";
import {Poppins, Montserrat, Inter} from "next/font/google";


// Components
import Header from "@/components/Header";
//import Footer from "@/components/Footer";//
import { FooterWithSocialLinks } from "@/components/footer-2";


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
    title: "Makari Gad Hydro Power",
    description: "Official Website For Makari Gad  Hydro Power Pvt",
};

// ${geistSans.variable} ${geistMono.variable}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={` ${poppins.variable} ${montserrat.variable}antialiased w-full min-h-screen flex flex-col`}
        >

        
        <Header/>
        <main className={" flex-1 w-full"}>
            
            {children}
        </main>
        
        <FooterWithSocialLinks/>
        

        </body>
        </html>
    );
}
