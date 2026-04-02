"use client";

import React from 'react';
import GoogleMapBlock from "@/components/GoogleMapBlock";
import ContactForm from "@/components/ContactForm";

const ContactAndMapBlock = () => {
    return (

    <section className={"max-w-7xl mx-auto px-6"}>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <ContactForm />
            {/*<LtlMap  latitude={27.7172} longitude={85.3240} />*/}
            <GoogleMapBlock/>
        </div>

    </section>
    );
}


export default ContactAndMapBlock;