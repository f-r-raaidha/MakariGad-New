"use client"
import ContactInfoBlock from "@/components/ContactInfoBlock";
import ContactAndMapBlock from "@/components/ContactAndMapBlock";
import SectionHero from "@/components/SectionHero";

const ContactPage = () => {
    return (

        <div className="">
            <SectionHero title="Contact Us" backgroundImage="/images/StockImage/pexels-sora-shimazaki-5668838.jpg" />
            <div></div>

            <div className=" min-h-screen w-[90%] mx-auto pb-30 justify-center items-center">
                <ContactAndMapBlock/>
            <ContactInfoBlock/>


                </div>
            

            
            
            
        </div>
    )

}

export default ContactPage;

