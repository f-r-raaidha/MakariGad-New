"use client"
import ContactInfoBlock from "@/components/ContactInfoBlock";
import ContactAndMapBlock from "@/components/ContactAndMapBlock";
import SectionHero from "@/components/SectionHero";

const ContactPage = () => {
    return (

        <div className="">
            <SectionHero title="Contact Us" backgroundImage="/images/GalleryImages/p4_makariguard_15.jpg" />
            <div></div>

            <div className=" min-h-screen w-[90%] mx-auto pb-30 justify-center items-center">
                <ContactAndMapBlock/>
            <ContactInfoBlock/>


                </div>
            

            
            
            
        </div>
    )

}

export default ContactPage;

