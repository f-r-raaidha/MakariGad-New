"use client"


import HomeHeroSlider from "@/components/HomeHeroSlider";
import ContactInfoBlock from "@/components/ContactInfoBlock";
import ContactAndMapBlock from "@/components/ContactAndMapBlock";

const ContactPage = () => {
    return (

        <div className="container w-full mx-auto ">

            <HomeHeroSlider/>
            <ContactInfoBlock/>
            <ContactAndMapBlock/>

        </div>
    )

}

export default ContactPage;

