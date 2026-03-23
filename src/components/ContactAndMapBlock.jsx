"use client";

import React from 'react';
import ContactForm from "@/components/ContactForm";
import LtlMap from "@/components/LTLMap";

const ContactAndMapBlock = () => {
    return (

    <section className={"max-w-7xl mx-auto px-6"}>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <ContactForm />
            <LtlMap />
        </div>

    </section>
    );
}


export default ContactAndMapBlock;